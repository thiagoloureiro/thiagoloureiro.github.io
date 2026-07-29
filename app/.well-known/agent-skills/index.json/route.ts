import { createHash } from 'crypto'
import { readFileSync } from 'fs'
import path from 'path'
import { siteUrl } from '@/lib/site'

const skills = [
  {
    name: 'portfolio-profile',
    description:
      'Retrieve Thiago Loureiro professional profile, skills, projects, and articles from the portfolio site.',
  },
  {
    name: 'auth-registration',
    description:
      'Register AI agents for anonymous read-only access to portfolio resources.',
  },
]

function skillDigest(name: string): string {
  const filePath = path.join(
    process.cwd(),
    'public',
    '.well-known',
    'agent-skills',
    name,
    'SKILL.md',
  )
  const content = readFileSync(filePath, 'utf-8')
  return `sha256:${createHash('sha256').update(content).digest('hex')}`
}

export async function GET() {
  return Response.json(
    {
      $schema: 'https://schemas.agentskills.io/discovery/0.2.0/schema.json',
      skills: skills.map((skill) => ({
        name: skill.name,
        type: 'skill-md',
        description: skill.description,
        url: `${siteUrl}/.well-known/agent-skills/${skill.name}/SKILL.md`,
        digest: skillDigest(skill.name),
      })),
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
}
