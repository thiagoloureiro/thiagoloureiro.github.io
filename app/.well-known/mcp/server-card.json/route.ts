import { siteUrl } from '@/lib/site'

export async function GET() {
  return Response.json(
    {
      serverInfo: {
        name: 'thiagoloureiro-portfolio',
        version: '1.0.0',
      },
      transport: {
        type: 'streamable-http',
        endpoint: `${siteUrl}/mcp`,
      },
      capabilities: {
        tools: {},
        resources: {},
        prompts: {},
      },
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
}
