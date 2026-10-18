'use client'

import { useEffect, useState } from 'react'

interface GitHubStats {
  totalContributions: number
  pullRequests: number
  commits: number
}

const GITHUB_USERNAME = 'thiagoloureiro'

async function searchCount(query: string, type: 'issues' | 'commits') {
  const endpoint =
    type === 'commits'
      ? `https://api.github.com/search/commits?q=${query}`
      : `https://api.github.com/search/issues?q=${query}`

  const response = await fetch(endpoint, {
    headers: {
      Accept: 'application/vnd.github+json',
    },
  })

  if (!response.ok) {
    throw new Error(`GitHub ${type} search failed (${response.status})`)
  }

  const data = await response.json()
  return typeof data.total_count === 'number' ? data.total_count : 0
}

export default function GitHubContribution() {
  const [stats, setStats] = useState<GitHubStats>({
    totalContributions: 0,
    pullRequests: 0,
    commits: 0,
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        setLoading(true)
        setError(false)

        const [pullRequests, commits] = await Promise.all([
          searchCount(
            `author:${GITHUB_USERNAME}+type:pr+is:merged`,
            'issues',
          ),
          searchCount(`author:${GITHUB_USERNAME}`, 'commits'),
        ])

        setStats({
          pullRequests,
          commits,
          totalContributions: commits + pullRequests,
        })
      } catch (err) {
        console.error('Error fetching GitHub stats:', err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubStats()
  }, [])

  const metrics = [
    { label: 'Commits', value: stats.commits },
    { label: 'Merged PRs', value: stats.pullRequests },
    { label: 'Contributions', value: stats.totalContributions },
  ]

  return (
    <section id="activity" className="border-b border-ink-line">
      <div className="section-rail">05 / Activity</div>

      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-14 max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-paper md:text-5xl">
            Open source <span className="text-accent">footprint</span>
          </h2>
          <p className="mt-4 text-fog">
            A snapshot of GitHub activity across repositories and contributions.
          </p>
        </div>

        <div className="mb-10 grid grid-cols-1 border-t border-ink-line sm:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="border-b border-ink-line p-6 sm:border-r sm:last:border-r-0"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-mute">
                {metric.label}
              </p>
              <p className="mt-3 font-display text-4xl font-bold text-paper">
                {loading || error ? '—' : metric.value.toLocaleString()}
              </p>
            </div>
          ))}
        </div>

        {error && (
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.14em] text-mute">
            Live stats temporarily unavailable · chart below still reflects
            activity
          </p>
        )}

        <div className="border border-ink-line bg-ink-raised p-4 md:p-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://ghchart.rshah.org/4d7cff/thiagoloureiro"
            alt="Thiago Loureiro's GitHub contribution chart"
            className="mx-auto w-full max-w-5xl opacity-90"
          />
        </div>
      </div>
    </section>
  )
}
