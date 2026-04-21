 ---                                                                                                            
  TASK: Build a production-grade Help Documentation system for Rayt                                              
                                                                                                                 
  You are implementing a full help/documentation portal inside an existing Vite + React + React Router +         
  styled-components app. Study the existing codebase carefully before writing a single line — reuse every pattern
   and primitive you find.                                                                                       
                                                                                                                 
  ---                                                                                                            
  Existing codebase to reuse (read these files first)                                                            
                                                                                                                 
  - src/styles/tokens.js — design tokens (colors, radii, etc.), use exclusively, no hardcoded values
  - src/components/ui/Button.jsx — polymorphic button/link primitive, supports to (router Link), href, variant   
  (ghostLink, secondary, primary, etc.)                                                                          
  - src/lib/posts.js — pattern for import.meta.glob markdown loading + frontmatter parser — replicate this       
  pattern for docs                                                                                               
  - src/pages/BlogPost/index.jsx — ReactMarkdown + remark-gfm + rehype-raw setup with custom heading renderers 
  and TOC extraction — reuse directly                                                                            
  - src/pages/BlogPost/style.jsx — Prose styled component for markdown rendering — import and reuse, do not
  duplicate                                                                                                      
  - src/lib/seo.js — useDocumentMeta hook — use on every page
  - src/lib/formatDate.js — date formatting utility                                                              
  - src/constants/routes.js — add all new doc routes here as a DOCS object                                       
  - src/components/Footer/ — reuse existing footer                                                               
                                                                                                                 
  ---                                                                                                            
  Information architecture                                                                                       
                                                                                                               
  Docs are organized in 3 levels:                                                                              

  Collection  (e.g. "Getting Started")                                                                           
    └── Group  (e.g. "Getting Set-Up", "Migrating from Another Vendor")
          └── Article  (e.g. "Creating a Rayt Account")                                                          
                                                            
  This is expressed entirely through markdown frontmatter — no separate config files:                            
                                                            
  ---                                                                                                            
  title: Creating a Rayt Account                            
  description: Step-by-step account creation guide.                                                              
  collection: getting-started
  collectionLabel: Getting Started                                                                               
  group: Getting Set-Up                                                                                          
  slug: creating-a-rayt-account                                                                                
  date: 2026-04-21                                                                                               
  ---                                                       
                                                                                                                 
  Store all doc markdown files in docs/[collection]/[article-slug].md. Load them with                            
  import.meta.glob('/docs/**/*.md', { eager: true, query: '?raw', import: 'default' }).                          
                                                                                                                 
  ---                                                                                                          
  URL structure                                                                                                
               
  ┌────────────┬────────────────────────────────────────┐
  │    Page    │                  URL                   │                                                        
  ├────────────┼────────────────────────────────────────┤
  │ Docs home  │ /docs                                  │                                                        
  ├────────────┼────────────────────────────────────────┤   
  │ Collection │ /docs/[collection-slug]                │                                                      
  ├────────────┼────────────────────────────────────────┤
  │ Article    │ /docs/[collection-slug]/[article-slug] │
  └────────────┴────────────────────────────────────────┘                                                        
   
  Add all three to src/constants/routes.js:                                                                      
  DOCS: '/docs',                                            
  DOCS_COLLECTION: (col) => `/docs/${col}`,                                                                      
  DOCS_ARTICLE: (col, slug) => `/docs/${col}/${slug}`,
                                                                                                                 
  Add the three routes to src/App.jsx using the existing router setup.                                           
                                                                                                                 
  ---                                                                                                            
  Page 1: Docs Home — /docs                                                                                      
                                                                                                               
  Header (sky/brand-colored full-width band):                                                                  
  - "Help, tutorials & documentation" headline (white, large)                                                    
  - Search bar below headline — full width, rounded, subtle translucent white fill, magnifier icon on left,      
  placeholder "Search for articles…"                                                                             
  - Search filters articles client-side across titles + descriptions of all docs using a controlled input +      
  useMemo                                                                                                      
                                                                                                                 
  Collections grid:                                         
  - 3-column responsive grid (1 col mobile, 2 col tablet, 3 col desktop)                                         
  - Each collection card:                                                                                        
    - Top area: light grey bg with centered SVG icon (use inline SVG from public/icons.svg sprite or simple React
   SVG components matching each collection topic)                                                                
    - Bottom area: white bg, bold collection title, description text, author avatar + article count (N articles) 
    - Border: 1px tokens.border, border-radius tokens.radius, subtle hover shadow                               
    - Entire card is a router link to /docs/[collection-slug]                                                    
                                                                                                                 
  Collections to seed (create real .md files for each):                                                          
  1. getting-started — Getting Started — "Everything you need to know to get Rayt up & running on your store"    
  2. gather-reviews — Gather Reviews — "Everything you need to gather reviews — requests, messages, forms &      
  incentives"                                                                                                    
  3. widgets — On-site Displays & Widgets — "How to add reviews to your website & managing those displays"       
  4. manage-reviews — Manage Reviews — "Tools to manage & reply to reviews"                                    
  5. integrations — Integrations — "Connecting Rayt with the other tools you use"                                
  6. settings — Settings — "Guidance on making changes to your account and team"                                 
                                                                                                                 
  ---                                                                                                            
  Page 2: Collection — /docs/[collection-slug]                                                                   
                                                                                                                 
  Breadcrumb: All Collections › [Collection Name] — "All Collections" links to /docs                           
                                                                                                                 
  Collection header: icon, large title, description, article count                                               
                                                                                                                 
  Article list — grouped by group frontmatter field:                                                             
  - Each group renders as a bordered card (border: 1px tokens.border, border-radius: tokens.radius)            
  - Group title as bold heading inside the card, followed by a <hr>                                              
  - Each article in the group: full-width row, title on left, › chevron on right
  - Row hover state: light brand-tint background + brand-color text (match the green highlight in the            
  screenshots)                                                                                                   
  - The currently-viewed article (if navigated from an article page) gets the highlighted style statically       
  - Groups are sorted by their natural order of appearance across articles; articles within a group sorted by    
  date ascending                                                                                                 
                                                                                                                 
  ---                                                                                                            
  Page 3: Article — /docs/[collection-slug]/[article-slug]                                                       
                                                                                                               
  Persistent search bar: Render a compact search bar in a colored band at the very top of the page (above        
  breadcrumb), same styling as the home page hero search. Navigates to /docs?q=[query] on submit.                
                                                                                                               
  Breadcrumb (4-level): All Collections › [Collection] › [Group] › [Article Title]                               
  - "All Collections" → /docs                               
  - Collection name → /docs/[collection-slug]                                                                    
  - Group name is display-only (no URL for sub-groups)      
  - Current article is non-linked, truncated at 280px                                                            
                                                     
  Article body: Reuse Prose from src/pages/BlogPost/style.jsx + ReactMarkdown with remark-gfm + rehype-raw +     
  existing headingComponents (with slugified id attributes for anchor links). Reuse the same TOC sidebar pattern 
  already built in BlogPost.                                                                                     
                                                                                                                 
  Related Articles (bottom of article):                                                                          
  - Heading: "Related Articles"                                                                                
  - Show up to 5 other articles from the same collection, prioritizing same group first, then other groups       
  - Same row style as the collection page article list (bordered card, chevron, hover highlight)          
                                                                                                                 
  Article feedback widget (bottom):                                                                              
  - Light grey card, centered text: "Did this answer your question?"                                             
  - Three emoji buttons: 😞 😐 😊 — clicking one marks it as selected (local state only, no backend required)    
                                                                                                               
  ---                                                                                                            
  SEO requirements                                          
                                                                                                                 
  Use useDocumentMeta (existing hook) on every page:        
                                                                                                                 
  ┌────────────┬───────────────────────────────┬───────────────────────────────────────────────────────┐
  │    Page    │             title             │                      description                      │         
  ├────────────┼───────────────────────────────┼───────────────────────────────────────────────────────┤         
  │ Docs home  │ Help & Documentation — Rayt   │ "Browse Rayt's help articles, tutorials, and guides." │       
  ├────────────┼───────────────────────────────┼───────────────────────────────────────────────────────┤         
  │ Collection │ [Collection Name] — Rayt Help │ collection description                                │         
  ├────────────┼───────────────────────────────┼───────────────────────────────────────────────────────┤       
  │ Article    │ [Article Title] — Rayt Help   │ article frontmatter description                       │         
  └────────────┴───────────────────────────────┴───────────────────────────────────────────────────────┘         
                                                                                                               
  Additionally add these to useDocumentMeta calls (extend the hook if needed):                                   
  - ogType: 'article' on article pages                      
  - Canonical URL: https://rayt.ca/docs/[collection]/[article]                                                   
  - A <meta name="keywords"> derived from collection name + group name + article title words
                                                                                                                 
  Ensure all <h1> through <h3> in article content get proper id anchors (already done in BlogPost — reuse        
  directly).                                                                                                     
                                                                                                                 
  ---                                                                                                            
  Data layer — src/lib/docs.js                                                                                 
                                                                                                               
  Create this file modeled exactly on src/lib/posts.js. Export:
                                                                                                                 
  getAllCollections()   // → [{ slug, label, description, articleCount }] sorted by a manual order field in 
  frontmatter                                                                                                    
  getCollection(slug)  // → { slug, label, description, groups: [{ name, articles: [{...}] }] }
  getArticle(collection, slug)  // → { title, description, collection, collectionLabel, group, slug, date, body }
   | null                                                                                                        
  getRelatedArticles(collection, slug, limit=5)  // same collection, same group first                            
  searchDocs(query)    // → articles[] filtered by title + description match, case-insensitive                   
                                                                                                                 
  ---                                                                                                            
  Seed content — create these markdown files                                                                     
                                                                                                                 
  Create at minimum 2 real articles per collection so every page has real content to display.                  
                                                                                                                 
  Example for getting-started:                              
  - docs/getting-started/creating-a-rayt-account.md (group: Getting Set-Up)                                      
  - docs/getting-started/selecting-a-plan.md (group: Getting Set-Up)                                             
  - docs/getting-started/migrating-from-yotpo.md (group: Migrating from Another Vendor)                        
  - docs/getting-started/migrating-from-judgeme.md (group: Migrating from Another Vendor)                        
                                                                                         
  Each article should be 200–400 words of realistic help content with at least 2–3 ## sections so the TOC sidebar
   renders.                                                                                                      
                                                                                                                 
  ---                                                                                                            
  File structure to create                                                                                     
                                                                                                               
  docs/
    getting-started/
      creating-a-rayt-account.md
      selecting-a-plan.md                                                                                        
      migrating-from-yotpo.md
      ...                                                                                                        
    gather-reviews/                                         
      ...                                                                                                      
    widgets/
      ...
    (one folder per collection)                                                                                  
   
  src/                                                                                                           
    lib/                                                    
      docs.js                  ← new, modeled on posts.js                                                      
    pages/                                                                                                       
      Docs/
        index.jsx              ← /docs home                                                                      
        style.jsx                                                                                                
      DocsCollection/                                                                                          
        index.jsx              ← /docs/[collection]                                                              
        style.jsx                                           
      DocsArticle/                                                                                             
        index.jsx              ← /docs/[collection]/[article]                                                    
        style.jsx              ← minimal; reuse Prose from BlogPost
    constants/                                                                                                   
      routes.js                ← add DOCS routes            
    App.jsx                    ← add 3 new <Route> entries                                                       
                                                                                                                 
  ---                                                                                                          
  Production-grade requirements                                                                                  
                                                            
  - No hardcoded colors — every value from tokens                                                              
  - No duplicate styled components — Prose, Breadcrumb, BreadcrumbSep, BreadcrumbCurrent, TocSidebar, TocList,   
  TocLink already exist in BlogPost/style.jsx — import from there, do not copy                                   
  - Keyboard accessible — all interactive rows must be <a> tags (not <div onClick>), focus visible               
  - Responsive — collection grid collapses to 1 col on mobile; TOC sidebar hides below 1024px (already handled by
   existing pattern)                                                                                             
  - Search is client-side only — no external dependency, pure useMemo filter over the full docs index            
  - No 404s — if collection or article slug not found, render a NotFound variant matching the existing BlogPost  
  404 style                                                                                                      
  - import.meta.glob is static — all doc paths resolved at build time, no dynamic fetching                       
                                                                                                                 
  ---                                                                                                          
  Implementation order                                                                                           
                                                            
  1. src/lib/docs.js — data layer first, test all exports in isolation                                         
  2. src/constants/routes.js — add DOCS routes                                                                   
  3. src/App.jsx — wire routes
  4. docs/ — seed markdown files (at least 2 per collection, 6 collections = 12+ files)                          
  5. Docs/ home page — search + collection grid                                                                  
  6. DocsCollection/ page — grouped article list                                                                 
  7. DocsArticle/ page — article + TOC + related + feedback widget                                               
  8. Verify breadcrumbs, related articles, and search all work end-to-end   