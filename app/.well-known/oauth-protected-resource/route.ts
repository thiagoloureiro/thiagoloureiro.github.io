import { siteUrl } from '@/lib/site'

export async function GET() {
  return Response.json(
    {
      resource: siteUrl,
      authorization_servers: [siteUrl],
      bearer_methods_supported: ['header'],
      scopes_supported: ['profile:read', 'portfolio:read'],
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
}
