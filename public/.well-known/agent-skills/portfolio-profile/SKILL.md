---
name: portfolio-profile
description: Retrieve Thiago Loureiro professional profile, skills, projects, and articles from the portfolio site.
---

# Portfolio Profile Skill

Use this skill to read structured professional information from https://thiagoloureiro.github.io.

## When to Use

- Summarizing Thiago Loureiro's background for recruiters or collaborators
- Finding links to published articles and open-source projects
- Listing technical skills and competencies

## How to Use

1. Request the homepage with `Accept: text/markdown` for a full markdown profile.
2. Or fetch `/.well-known/api-catalog` for machine-readable API discovery links.
3. Use the WebMCP tools on the homepage (`get_profile`, `list_projects`, `list_articles`) when available in-browser.

## Output

Returns profile summary, skills, competencies, projects, articles, and social links.
