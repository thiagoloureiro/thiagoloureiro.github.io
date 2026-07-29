import { siteUrl } from '@/lib/site'

export async function GET() {
  const linkset = {
    linkset: [
      {
        anchor: `${siteUrl}/`,
        'service-desc': [{ href: `${siteUrl}/openapi.json` }],
        'service-doc': [{ href: `${siteUrl}/auth.md` }],
        status: [{ href: `${siteUrl}/api/health` }],
      },
    ],
  }

  return Response.json(linkset, {
    headers: {
      'Content-Type': 'application/linkset+json',
    },
  })
}
