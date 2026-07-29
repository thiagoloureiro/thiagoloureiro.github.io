import { siteUrl } from '@/lib/site'

const authorizationServerMetadata = {
  issuer: siteUrl,
  authorization_endpoint: `${siteUrl}/oauth/authorize`,
  token_endpoint: `${siteUrl}/oauth/token`,
  jwks_uri: `${siteUrl}/.well-known/jwks.json`,
  registration_endpoint: `${siteUrl}/agent/register`,
  grant_types_supported: ['authorization_code', 'client_credentials'],
  response_types_supported: ['code'],
  token_endpoint_auth_methods_supported: ['client_secret_basic', 'none'],
  scopes_supported: ['profile:read', 'portfolio:read'],
  agent_auth: {
    skill: `${siteUrl}/.well-known/agent-skills/auth-registration/SKILL.md`,
    register_uri: `${siteUrl}/agent/register`,
    identity_types_supported: ['anonymous'],
    anonymous: {
      credential_types_supported: ['bearer'],
      claim_uri: `${siteUrl}/agent/claim`,
    },
  },
}

export async function GET() {
  return Response.json(authorizationServerMetadata, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
