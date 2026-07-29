import { siteUrl } from '@/lib/site'

const aiAgents = [
  'GPTBot',
  'OAI-SearchBot',
  'Claude-Web',
  'Google-Extended',
  'Amazonbot',
  'anthropic-ai',
  'Bytespider',
  'CCBot',
  'Applebot-Extended',
]

export async function GET() {
  const lines = [
    '# https://www.robotstxt.org/robotstxt.html',
    '# Content Signals: https://contentsignals.org/',
    '',
    'User-agent: *',
    'Allow: /',
    'Disallow: /api/',
    '',
  ]

  for (const agent of aiAgents) {
    lines.push(`User-agent: ${agent}`, 'Allow: /', 'Content-Signal: ai-train=no, search=yes, ai-input=yes', '')
  }

  lines.push(`Sitemap: ${siteUrl}/sitemap.xml`)

  return new Response(lines.join('\n'), {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
