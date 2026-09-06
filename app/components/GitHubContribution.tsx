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

        // Two search requests only — avoids the unauthenticated 60/hr core
        // rate limit that the old per-repo contributors loop exhausted.
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
    <section id="activity" className="section-pad border-b border-ink-line">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent-soft">
            Activity
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-paper md:text-4xl">
            Open source footprint
          </h2>
          <p className="mt-4 text-fog">
            A snapshot of GitHub activity across repositories and contributions.
          </p>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="border-t border-accent/50 pt-4">
              <p className="text-sm text-fog">{metric.label}</p>
              <p className="mt-1 font-display text-3xl font-semibold text-paper">
                {loading ? '—' : error ? '—' : metric.value.toLocaleString()}
              </p>
            </div>
          ))}
        </div>

        {error && (
          <p className="mb-6 text-sm text-fog">
            Live stats are temporarily unavailable (GitHub rate limit). The
            contribution chart below still reflects recent activity.
          </p>
        )}

        <div className="overflow-x-auto rounded-lg border border-ink-line bg-ink-raised/60 p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://ghchart.rshah.org/3d9a8b/thiagoloureiro"
            alt="Thiago Loureiro's GitHub contribution chart"
            className="mx-auto w-full max-w-5xl opacity-90"
          />
        </div>
      </div>
    </section>
  )
}
