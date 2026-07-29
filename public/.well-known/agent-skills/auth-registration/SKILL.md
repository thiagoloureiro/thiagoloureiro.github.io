---
name: auth-registration
description: Register AI agents for anonymous read-only access to portfolio resources.
---

# Auth Registration Skill

Guides agents through registration for read-only portfolio API access.

## Registration

- **Register URI:** `/agent/register`
- **Supported identity:** anonymous
- **Credential type:** bearer token
- **Claim URI:** `/agent/claim`

## Discovery Endpoints

- OAuth Authorization Server: `/.well-known/oauth-authorization-server`
- OAuth Protected Resource: `/.well-known/oauth-protected-resource`
- OpenID Configuration: `/.well-known/openid-configuration`
- Auth documentation: `/auth.md`

## Scopes

- `profile:read` — Read professional profile summary
- `portfolio:read` — Read projects and articles metadata

## Notes

This portfolio site exposes read-only public content. Registration is optional for enhanced agent metadata access.
