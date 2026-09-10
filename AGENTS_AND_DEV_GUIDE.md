# Vayunex Solution — Developer & AI Agent Master Guide (SOP)

> **Purpose**: This handbook serves as the definitive reference manual for human engineers and autonomous AI agents working on the Vayunex Solution website codebase. It outlines the architectural standards, workflows for publishing SEO/AEO/GEO-optimized blogs, managing team profiles, mobile image framing standards, and running production deployments.

---

## 1. System Architecture & Directory Layout

The website uses a hybrid Next.js 14 App Router setup configured for **Static Site Generation (SSG)** and static HTML export to run seamlessly on standard Linux/cPanel hosting environments.

```
vayunex-website/
├── next-app/                      # PRIMARY SOURCE OF TRUTH (Next.js 14 App Router)
│   ├── public/                    # Static assets, robots.txt, sitemaps, llms.txt
│   │   ├── images/
│   │   │   ├── people/            # Team portrait images (3:4 ratio)
│   │   │   ├── products/          # Product screenshots & banners (16:9 ratio)
│   │   │   └── logos/             # SVG brand vectors & icons
│   │   ├── llms.txt               # LLM indexing manifest (AEO / GEO layer)
│   │   ├── llms-full.txt          # Deep LLM context corpus
│   │   └── ai-facts.json          # Machine-readable knowledge graph
│   ├── src/
│   │   ├── app/                   # App Router dynamic pages & layouts
│   │   │   ├── about/             # /about route
│   │   │   ├── blog/              # /blog and /blog/[slug] dynamic routes
│   │   │   └── people/            # /people and /people/[slug] dynamic routes
│   │   ├── data/
│   │   │   └── people.js          # CENTRALIZED SINGLE SOURCE OF TRUTH for team
│   │   └── pages-source/          # React page implementations & styling
│   │       ├── AboutPage.js / .css
│   │       ├── blog/BlogDetailPage.js / .css
│   │       └── people/PersonDetailPage.js / .css
│   └── scripts/
│       └── sync-build.js          # Copies next-app/out to ../build + preserves .htaccess
├── build/                         # EXPORT TARGET directory deployed to cPanel public_html
└── public/                        # Legacy root public assets mirror
```

### Key Build Invariant
- **Never edit files inside `build/` directly.** Always edit in `next-app/src/`, test, build with `npm run build`, and deploy.

---

## 2. Blog Writing & Management (Editable, SEO, AEO & GEO Compliant)

Our blog architecture supports both **dynamic headless CMS editing** and **bulletproof static pre-rendering** with deep optimization for traditional search (Google) and Generative / Answer Engines (SearchGPT, Perplexity, ChatGPT, Claude).

### A. Dynamic API + Static Fallback Architecture
Blogs are fetched at build time (and client revalidation) from the headless API:
- **API Endpoint**: `https://api.web.vayunexsolution.com/api/blogs?status=published`
- **Static Fallback**: `fallbackLeadershipBlogs` array inside `next-app/src/pages-source/blog/` or `next-app/src/data/`.
- **Golden Rule**: Every blog must have a matching fallback entry so that static builds never fail even if the API server is unreachable.

### B. Traditional SEO Standards
1. **Title Tag**: Max 60 characters. Format: `Primary Keyword | Strategic Value — Vayunex Solution`.
2. **Meta Description**: 145–155 characters. Compelling hook + target keyword + actionable takeaway.
3. **URL Slug**: Kebab-case, clean, without stop words (e.g., `/blog/saas-ai-workflow-automation/`).
4. **Canonical URL**: Always self-referential with a trailing slash:
   `https://www.vayunexsolution.com/blog/<slug>/`
5. **Headings Hierarchy**:
   - Exactly **one `<h1>`** per article (the title).
   - Core chapters as `<h2>`.
   - Subsection deep-dives as `<h3>`.

### C. AEO (Answer Engine Optimization) Best Practices
Answer Engines (Perplexity, SearchGPT, Google AI Overviews) extract concise, authoritative chunks:
1. **The "Direct Answer" Lead Paragraph**:
   Directly under the `<h1>` or first `<h2>`, provide a 40–55 word direct definition or answer to the primary question.
2. **Structured Comparison Tables**:
   Include markdown/HTML tables comparing architectures, ROI, metrics, or technologies (LLMs prioritize table extraction).
3. **FAQ Section with Direct Answers**:
   Include 3–5 high-intent questions in an Accordion format backed by `FAQPage` Schema.
4. **Step-by-Step Lists**:
   Use numbered lists (`<ol>`) for processes or implementations.

### D. GEO (Generative Engine Optimization) & Entity Linking
To get cited in AI model knowledge bases:
1. **Author Entity Link**: Always attribute the article to a verified Vayunex team member and link to `/people/<author-slug>/`.
2. **Schema.org Structured Data**:
   Embed JSON-LD on every blog page:
   ```json
   {
     "@context": "https://schema.org",
     "@type": "BlogPosting",
     "headline": "Article Title",
     "image": "https://www.vayunexsolution.com/images/blog/featured.jpg",
     "author": {
       "@type": "Person",
       "name": "Author Name",
       "url": "https://www.vayunexsolution.com/people/author-slug/"
     },
     "publisher": {
       "@type": "Organization",
       "name": "Vayunex Solution",
       "url": "https://www.vayunexsolution.com",
       "logo": "https://www.vayunexsolution.com/assets/brand/vayunex-logo.png"
     },
     "datePublished": "2026-09-09",
     "description": "Article summary"
   }
   ```
3. **Sync to `llms.txt`**:
   Whenever a major pillar blog is published, add a summary and link under the respective category in `next-app/public/llms.txt`.

---

## 3. Team & Leadership Profiles (People System)

All team members are managed via a centralized, type-safe data model.

### A. Central Data Model (`next-app/src/data/people.js`)
To add or update a team member, configure their object in `people.js`:

```javascript
{
  id: 'rajesh-kumar',
  slug: 'rajesh-kumar',
  aliasSlugs: ['rajesh-ai'],          // Legacy redirect handling
  name: 'Rajesh Kumar',
  role: 'AI Integration Engineer',     // Specific technical title
  subRole: 'SaaS AI Integration | ERP & CRM Intelligent Workflows | Applied AI Systems',
  company: 'Vayunex Solution',
  companyUrl: 'https://www.vayunexsolution.com',
  experience: 5,
  experienceLabel: 'SaaS & ERP AI Specialist',
  education: 'B.Tech (Specialization in AI & ML)',
  university: 'Kurukshetra University (KUK)',
  origin: 'Haryana / Chandigarh Tricity, India',
  image: '/images/people/rajesh-kumar.jpg',
  imageAlt: 'Rajesh Kumar — AI Integration Engineer at Vayunex Solution',

  shortBio: 'Concise 2-sentence summary for previews and speakable metadata.',
  fullBio: [
    'Paragraph 1: Core role and engineering focus.',
    'Paragraph 2: Educational credentials and practical systems built.',
    'Paragraph 3: Platform impact (SocialNex, SchoolDost, PayNex, Jwelnex).'
  ],

  expertise: [
    'SaaS AI Integration',
    'ERP AI Workflows & Automation',
    'CRM Lead & Process AI Automation',
    'Intelligent Document & Invoice Parsing'
  ],

  highlights: [
    {
      title: 'ERP AI Automation',
      description: 'Embeds smart automation and anomaly detection directly into ERP.'
    }
  ],

  functionalMatrix: [
    {
      area: 'ERP AI Integration',
      details: 'Intelligent inventory telemetry, automated purchase order parsing, OCR.'
    }
  ],

  schema: {
    id: 'https://www.vayunexsolution.com/people/rajesh-kumar/#person',
    alumniOf: 'Kurukshetra University (KUK)',
    knowsAbout: ['SaaS AI Integration', 'ERP Automation', 'CRM Copilots']
  }
}
```

### B. Updating About Page & Hierarchy
In `next-app/src/pages-source/AboutPage.js`:
- The leadership hierarchy must be preserved in this order:
  1. **Founder & Product Lead**: Yash Kumar
  2. **Project Head**: Ved Prakash
  3. **Technical Head**: Sandeep Kumar
  4. **AI Integration Engineer**: Rajesh Kumar
- Ensure cards in `engineeringLeaders` map accurately to `people.js`.

### C. Knowledge Layer Synchronization
When any role, title, or education changes, synchronize these 4 files:
1. `next-app/public/llms.txt` & `public/llms.txt`
2. `next-app/public/llms-full.txt` & `public/llms-full.txt`
3. `next-app/public/ai-knowledge-layer.txt` & `public/ai-knowledge-layer.txt`
4. `next-app/public/ai-facts.json` & `public/ai-facts.json`

---

## 4. Visual & Image Standards (Responsive Guidelines)

### A. Critical Golden Rule: Portrait vs. Landscape
> **NEVER apply landscape aspect ratios (e.g. `4 / 3` or `16 / 9`) to vertical portraits of people on mobile views!**
> Standard human headshots are vertical (3:4 or 4:5). Applying landscape ratios on mobile causes `object-fit: cover` to zoom aggressively, chopping off hair, neck, collar, and shoulders.

### B. Standard People Portrait Specifications
- **Source Image File Dimensions**: `768×1024` or `864×1184` (approx. 3:4 ratio).
- **CSS Aspect Ratio**: Always use `aspect-ratio: 4 / 5;` or `aspect-ratio: 3 / 4;`.
- **Framing Property**:
  ```css
  .person-hero__portrait {
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    object-position: center 15%; /* Guarantees headroom and collar visibility */
    display: block;
  }
  ```
- **Mobile Container Widths**:
  - Tablet / Standard Mobile (`<=900px`): `max-width: 270px; margin: 0 auto;`
  - Small Mobile (`<=480px`): `max-width: 240px; margin: 0 auto; object-position: center 12%;`
- **About Page Leader Row Image Panel**:
  - Tablet/Mobile (`<=860px`): `height: 310px; min-height: 310px; object-position: center 15%;`
  - Small Mobile (`<=520px`): `height: 280px; min-height: 280px; object-position: center 12%;`

### C. Blog Featured Images & Banner Specifications
- **Aspect Ratio**: Always `aspect-ratio: 16 / 9;`.
- **CSS Rules**:
  ```css
  .blog-featured-image {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    object-position: center;
    max-height: 380px;
  }
  @media (max-width: 768px) {
    .blog-featured-image {
      max-height: 240px;
    }
  }
  ```

---

## 5. Build, Verification & Deployment SOP

Follow this exact sequence whenever committing code changes:

### Step 1: Run Static Generation Build
From the project root:
```bash
npm run build
```
This executes:
1. `next build --prefix next-app` (pre-renders all 86+ static pages into `next-app/out`).
2. `node scripts/sync-build.js` (recursively copies the clean build to `build/` and preserves `.htaccess`).

### Step 2: Verify Build Output
Confirm that the terminal outputs:
```
✓ Generating static pages (86/86)
Synchronized .htaccess to build and out directories.
Successfully synced Next.js build to ../build for cPanel deployment!
```

### Step 3: Git Commit & Push
```bash
git status -s
git add -A
git commit -m "feat(area): clear description of changes"
git push origin main
```

### Step 4: 1-Click Live Deployment (cPanel Terminal)
Paste and run this single command in the cPanel terminal:
```bash
REPO=$(find ~ -maxdepth 3 -name ".git" -type d -path "*vayu-web*" | head -n 1 | sed 's/\/.git$//') && cd "$REPO" && git fetch origin main && git reset --hard origin/main && cp -Rf build/. /home/vayunexs/public_html/ && echo "DEPLOYMENT COMPLETE SUCCESS!"
```

*(Direct path alternative)*:
```bash
cd /home/vayunexs/repositories/vayu-web && git fetch origin main && git reset --hard origin/main && cp -Rf build/. /home/vayunexs/public_html/ && echo "DEPLOYMENT COMPLETE SUCCESS!"
```

---

## 6. AI Agent Guidelines (Instructions for Autonomous Agents)

When an AI assistant (Antigravity, Claude, Cursor, GitHub Copilot) is tasked with modifications on this repo:

1. **Always edit within `next-app/src/`**; never edit files inside `build/`.
2. **Keep Leadership data synchronized** between `next-app/src/data/people.js` and `src/data/people.js`.
3. **Respect mobile viewport styling**: Always verify that portraits maintain vertical `4:5` aspect ratios with `object-position: center 15%`.
4. **Preserve SEO/AEO/GEO layers**: Whenever person or product data changes, update `llms.txt`, `llms-full.txt`, and `ai-facts.json`.
5. **Always build before deploying**: Run `npm run build` and ensure exit code 0 before pushing commits to `main`.
