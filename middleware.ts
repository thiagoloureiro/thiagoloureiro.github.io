import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {
  estimateMarkdownTokens,
  getHomeMarkdown,
} from '@/lib/markdown'

export function middleware(request: NextRequest) {
  const accept = request.headers.get('accept') ?? ''

  if (accept.includes('text/markdown')) {
    const markdown = getHomeMarkdown()
    return new Response(markdown, {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'x-markdown-tokens': String(estimateMarkdownTokens(markdown)),
      },
    })
  }

  const response = NextResponse.next()
  response.headers.set(
    'Link',
    [
      '</.well-known/api-catalog>; rel="api-catalog"',
      '</.well-known/agent-skills/index.json>; rel="describedby"',
      '</auth.md>; rel="service-doc"',
      '</openapi.json>; rel="service-desc"',
    ].join(', '),
  )
  return response
}

export const config = {
  matcher: '/',
}
