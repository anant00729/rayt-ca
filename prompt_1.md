You are a senior full-stack engineer helping build a blog feature for RayT 
(rayt.ca), a Shopify reviews app. Articles are written in Markdown files 
stored in the Git repo — no CMS, no database.

## Goal
Build a fully functional blog at rayt.ca/blog where I can publish help articles 
and feature guides for RayT merchants.

## Requirements

### File Structure
- Markdown articles live in a /posts folder at the project root
- Each .md file has frontmatter: title, date, description, slug
- Routes needed:
  - /blog → lists all articles (newest first)
  - /blog/:slug → renders a single article

### Styling Rules
- Inspect the project's existing styling libraries and use only those — 
  do not introduce any new styling dependencies
- Inspect the home/root page and reuse its existing components, layout 
  patterns, and design tokens (colors, spacing, typography, etc.)
- The blog must feel like a native part of rayt.ca — not a separate section
- Article body should be styled for rich typography (headings, lists, 
  code blocks, blockquotes) using whatever typography tooling is 
  already present in the project
- Article layout should be centered and readable (max ~700px wide)

### SEO
- Each article page must have proper meta tags:
  - title: "{article title} | RayT"
  - description: from frontmatter
  - og:title, og:description, og:type: article

### Error Handling
- If a slug doesn't exist, return a proper 404
- The blog index should gracefully handle an empty /posts folder

### Code Quality
- All data fetching must happen server-side — no client-side calls
- Keep the posts parsing utility clearly separated from route/page files
- TypeScript throughout with proper types

## Deliverables

Please produce the following in order:

1. PLAN
   - Inspect my project structure first before proposing anything
   - Identify the styling libraries in use and note which ones 
     will be used for the blog
   - Identify reusable components from the home/root page 
     (e.g. navbar, footer, buttons, layout wrappers) and list 
     which ones will be reused in the blog
   - List every file to be created or modified
   - Call out any assumptions you make
   - Flag any potential runtime or deployment issues with reading 
     the file system (e.g. serverless environments)

2. IMPLEMENTATION
   Produce complete, copy-paste ready code for:
   - posts/ (one sample article: "Getting Started with RayT")
   - The posts parsing utility
   - Blog index page
   - Single article page

3. DEPLOYMENT CAVEAT
   - Based on my deployment environment, explain whether reading 
     Markdown files at runtime is safe
   - If there's a risk, provide the fix

4. NEXT STEPS
   - Suggest 3 low-effort enhancements relevant to a Shopify 
     app's help blog (e.g. estimated read time, related articles, search)

Do not ask clarifying questions. Inspect the project first, make reasonable 
assumptions, and call them out inline. Write production-quality code throughout.