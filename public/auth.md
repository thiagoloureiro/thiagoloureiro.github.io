# auth.md

Agent authentication and registration for the Thiago Loureiro portfolio site.

## Audience

This document is for AI agents that need to discover how to authenticate with portfolio resources.

## Resource Server

- **Resource:** https://thiagoloureiro.github.io
- **Protected Resource Metadata:** `/.well-known/oauth-protected-resource`
- **Bearer methods:** header

## Authorization Server

- **Issuer:** https://thiagoloureiro.github.io
- **Authorization Server Metadata:** `/.well-known/oauth-authorization-server`
- **OpenID Configuration:** `/.well-known/openid-configuration`
- **JWKS:** `/.well-known/jwks.json`

## Agent Registration

Agents may register anonymously for read-only access:

| Field | Value |
| --- | --- |
| Register URI | `/agent/register` |
| Identity type | anonymous |
| Credential type | bearer |
| Claim URI | `/agent/claim` |
| Skill | `/.well-known/agent-skills/auth-registration/SKILL.md` |

### Registration Flow

1. `POST /agent/register` with `{ "identity_type": "anonymous" }`
2. Receive a bearer token for `profile:read` and `portfolio:read` scopes
3. Include `Authorization: Bearer <token>` on API requests

## Supported Scopes

- `profile:read` — Professional profile summary
- `portfolio:read` — Projects and articles metadata

## Public Access

Most portfolio content is publicly available without authentication. Request `Accept: text/markdown` on `/` for a markdown representation suitable for agents.
