'use client'
import { useEffect, useState } from 'react'
import { GitBranch, GitPullRequest, GitCommit } from 'lucide-react'

interface GitHubStats {
  totalContributions: number
  pullRequests: number
  commits: number
}

const GITHUB_USERNAME = 'thiagoloureiro'

export default function GitHubContribution() {
  const [stats, setStats] = useState<GitHubStats>({
    totalContributions: 0,
    pullRequests: 0,
    commits: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        setLoading(true)
        
        // Fetch pull requests count
        const prResponse = await fetch(
          `https://api.github.com/search/issues?q=author:${GITHUB_USERNAME}+type:pr+is:merged`
        )
        const prData = await prResponse.json()
        const pullRequests = prData.total_count || 0

        // Fetch all repositories (paginated)
        let allRepos: any[] = []
        let page = 1
        let hasMore = true

        while (hasMore) {
          const reposResponse = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&page=${page}&sort=updated`
          )
          
          if (!reposResponse.ok) break
          
          const repos = await reposResponse.json()
          if (repos.length === 0) {
            hasMore = false
          } else {
            allRepos = [...allRepos, ...repos]
            page++
            // Limit to first 3 pages to avoid rate limits (300 repos max)
            if (page > 3) hasMore = false
          }
        }

        // Calculate total commits from repositories
        // We'll fetch commit counts for each repo (limited to avoid rate limits)
        let totalCommits = 0
        const reposToCheck = allRepos.slice(0, 50) // Limit to 50 repos to avoid rate limits
        
        await Promise.all(
          reposToCheck.map(async (repo) => {
            try {
              // Get contributor stats for the repo
              // We need to paginate through contributors to find the user
              let foundUser = false
              let page = 1
              
              while (!foundUser && page <= 10) { // Limit to 10 pages per repo
                const contributorsResponse = await fetch(
                  `https://api.github.com/repos/${repo.full_name}/contributors?per_page=100&page=${page}&anon=false`
                )
                
                if (!contributorsResponse.ok) break
                
                const contributors = await contributorsResponse.json()
                if (contributors.length === 0) break
                
                const userContributions = contributors.find(
                  (contributor: any) => contributor.login === GITHUB_USERNAME
                )
                
                if (userContributions) {
                  totalCommits += userContributions.contributions
                  foundUser = true
                } else {
                  page++
                }
              }
            } catch (error) {
              // Silently fail for individual repos
              console.warn(`Failed to fetch commits for ${repo.name}:`, error)
            }
          })
        )

        // Scale up commits if we limited the repos checked
        if (allRepos.length > reposToCheck.length) {
          const scaleFactor = allRepos.length / reposToCheck.length
          totalCommits = Math.round(totalCommits * scaleFactor)
        }

        // Total contributions is a combination of commits, PRs, and issues
        // We'll use commits + PRs as a proxy
        const totalContributions = totalCommits + pullRequests

        setStats({
          totalContributions,
          pullRequests,
          commits: totalCommits
        })
      } catch (error) {
        console.error('Error fetching GitHub stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubStats()
  }, [])

  return (
    <section className="mb-16 relative">
      <div className="absolute top-0 right-0 w-32 h-32 text-blue-400 opacity-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </div>
      <h2 className="text-3xl font-bold mb-8 text-center">GitHub Contributions</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg flex items-center space-x-4">
          <GitCommit className="w-8 h-8 text-blue-400" />
          <div>
            <h3 className="text-lg font-semibold text-gray-300">Total Commits</h3>
            <p className="text-2xl font-bold text-blue-400">
              {loading ? '...' : stats.commits.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg flex items-center space-x-4">
          <GitPullRequest className="w-8 h-8 text-blue-400" />
          <div>
            <h3 className="text-lg font-semibold text-gray-300">Pull Requests</h3>
            <p className="text-2xl font-bold text-blue-400">
              {loading ? '...' : stats.pullRequests.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg flex items-center space-x-4">
          <GitBranch className="w-8 h-8 text-blue-400" />
          <div>
            <h3 className="text-lg font-semibold text-gray-300">Contributions</h3>
            <p className="text-2xl font-bold text-blue-400">
              {loading ? '...' : stats.totalContributions.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src="https://ghchart.rshah.org/800080/thiagoloureiro"
          alt="Thiago Loureiro's GitHub Contributions"
          className="w-full max-w-5xl rounded-lg shadow-lg"
        />
      </div>
    </section>
  )
} 