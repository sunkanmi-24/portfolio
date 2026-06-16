# Qudus — Premium Portfolio Website

A modern, premium personal portfolio built with React 18, TypeScript, Tailwind CSS, and Framer Motion. Designed for African developers and creatives who want a world-class online presence.

---

## ✨ Features

- **Dark/Light mode** — system preference aware, persisted to localStorage
- **Smooth animations** — Framer Motion page transitions, scroll reveals, floating elements
- **Loading screen** — branded intro animation
- **Sticky navbar** — blur glass effect on scroll
- **Back-to-top button** — appears after scrolling 400px
- **Cookie consent** — lightweight, non-intrusive
- **Project search + filter** — live filtering by category and keyword
- **Skills filter** — filter by Frontend / Backend / Design / Tools
- **Testimonials carousel** — animated, keyboard accessible
- **Newsletter signup** — ready to connect to Supabase
- **Contact form** — with loading state and success message
- **Fully responsive** — mobile-first, tested at 320px–1920px
- **SEO ready** — meta tags, OG tags in index.html

---

## 🗂 Project Structure

```
portfolio/
├── public/
│   └── qudus-cv.pdf           # Replace with your actual CV
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx     # Sticky nav with dark mode toggle
│   │   │   └── Footer.tsx     # Footer with nav links
│   │   ├── sections/
│   │   │   ├── Hero.tsx       # Hero with floating badges + animated ring
│   │   │   ├── About.tsx      # Bio + experience timeline
│   │   │   ├── Skills.tsx     # Animated progress bars + tech cloud
│   │   │   ├── Projects.tsx   # Grid with search + category filter
│   │   │   ├── Services.tsx   # Service cards + CTA banner
│   │   │   ├── Testimonials.tsx  # Animated carousel
│   │   │   ├── Blog.tsx       # Blog cards + newsletter
│   │   │   └── Contact.tsx    # Form + social links
│   │   └── ui/
│   │       ├── AnimatedSection.tsx  # Scroll-triggered animation wrapper
│   │       ├── SectionLabel.tsx     # Consistent section headers
│   │       └── Extras.tsx           # BackToTop, CookieConsent, LoadingScreen
│   ├── data/
│   │   └── portfolio.ts       # ← ALL your content lives here
│   ├── hooks/
│   │   ├── useDarkMode.ts     # Dark mode state + localStorage
│   │   └── useScrollAnimation.ts  # IntersectionObserver wrapper
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── supabase-schema.sql        # Full DB schema for CMS backend
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Customize your content

Open `src/data/portfolio.ts` and update:

```ts
export const personalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  tagline: 'Your tagline',
  email: 'you@domain.com',
  whatsapp: '+2348000000000',
  location: 'Lagos, Nigeria',
  // ...social links
}
```

Also update `projects`, `skills`, `services`, `testimonials`, and `blogPosts` arrays in the same file.

### 3. Add your CV

Place your CV PDF at `public/qudus-cv.pdf` (or update the path in `personalInfo.cvUrl`).

### 4. Run dev server

```bash
npm run dev
```

Visit `http://localhost:5173`

---

## 🌐 Deployment

### Option A — Vercel (Recommended, free)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) and it auto-deploys on every push.

### Option B — Cloudflare Pages

```bash
npm run build
```

Then upload the `dist/` folder to Cloudflare Pages, or connect your GitHub repo:

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → Pages
2. Connect GitHub → select your repo
3. Build command: `npm run build`
4. Output directory: `dist`

### Option C — Netlify

```bash
npm run build
```

Drag and drop the `dist/` folder at [netlify.com/drop](https://netlify.com/drop), or:

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Option D — GitHub Pages

```bash
npm install -D gh-pages
```

Add to `package.json`:
```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

```bash
npm run build && npm run deploy
```

---

## 🗄 Supabase Backend (Optional CMS)

To manage your portfolio content via a database instead of editing code:

### 1. Create a Supabase project

Go to [supabase.com](https://supabase.com) → New Project.

### 2. Run the schema

Copy `supabase-schema.sql` and run it in the Supabase SQL Editor.

### 3. Add environment variables

Create `.env.local`:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### 4. Install Supabase client

```bash
npm install @supabase/supabase-js
```

### 5. Create the client

```ts
// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)
```

### 6. Replace static data with Supabase queries

```ts
// Example: fetch projects from Supabase
const { data: projects } = await supabase
  .from('projects')
  .select('*')
  .order('sort_order')
```

---

## 📬 Contact Form — Backend Options

### Option A: Supabase (insert to contact_messages table)

```ts
const { error } = await supabase
  .from('contact_messages')
  .insert([{ name, email, subject, message }])
```

### Option B: Resend (email delivery)

```bash
npm install resend
```

Create an API route (if using Next.js or a serverless function):

```ts
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'portfolio@yourdomain.com',
  to: 'hello@yourdomain.com',
  subject: `New contact: ${subject}`,
  text: `From: ${name} (${email})\n\n${message}`,
})
```

### Option C: Formspree (zero backend)

Replace form action:
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

---

## 🎨 Customization

### Colors

The accent color (indigo) is defined in `tailwind.config.js`. Change the `accent` palette to any color:

```js
colors: {
  accent: {
    500: '#6366f1',  // Change this to your brand color
    600: '#4f46e5',
    // ...
  }
}
```

### Fonts

To change fonts, update the Google Fonts link in `index.html` and `tailwind.config.js`:

```js
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
}
```

### Sections

To hide a section, simply remove it from `src/App.tsx`.

To reorder sections, reorder the components in `App.tsx`.

---

## 📦 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| react-intersection-observer | Scroll animation triggers |
| Vite | Build tool |
| Supabase (optional) | Backend/CMS |

---

## 🔒 Security Best Practices

- Never commit `.env.local` — it's gitignored
- Use Supabase RLS (Row Level Security) — schema included
- Use `anon` key on frontend only; `service_role` key only in server-side admin routes
- Add `Content-Security-Policy` headers in your deployment platform

---

## 📄 License

MIT — use freely for personal and commercial projects.

---

Built with ❤️ in Lagos, Nigeria.
