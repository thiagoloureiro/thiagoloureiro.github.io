import { siteUrl } from '@/lib/site'

export async function GET() {
  return Response.json(
    {
      issuer: siteUrl,
      authorization_endpoint: `${siteUrl}/oauth/authorize`,
      token_endpoint: `${siteUrl}/oauth/token`,
      jwks_uri: `${siteUrl}/.well-known/jwks.json`,
      registration_endpoint: `${siteUrl}/agent/register`,
      grant_types_supported: ['authorization_code', 'client_credentials'],
      response_types_supported: ['code'],
      subject_types_supported: ['public'],
      id_token_signing_alg_values_supported: ['RS256'],
      scopes_supported: ['profile:read', 'portfolio:read', 'openid'],
      token_endpoint_auth_methods_supported: ['client_secret_basic', 'none'],
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
}
