import { siteUrl } from '@/lib/site'

export async function POST() {
  const token = crypto.randomUUID()

  return Response.json(
    {
      access_token: token,
      token_type: 'Bearer',
      scope: 'profile:read portfolio:read',
    },
    { status: 201 },
  )
}

export async function GET() {
  return Response.json({
    register_uri: `${siteUrl}/agent/register`,
    methods: ['POST'],
    identity_types_supported: ['anonymous'],
  })
}
