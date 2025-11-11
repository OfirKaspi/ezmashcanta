# Mortgage Landing Page

A modern, responsive mortgage consultation landing page built with Next.js 15, React 19, and TypeScript. This project features a Hebrew (RTL) interface with lead capture forms, CRM integration, and analytics tracking.

## Features

- **Hero Section** - Eye-catching hero with service selection buttons (New Mortgage, Refinance, Reverse Mortgage)
- **Service Sections** - Three detailed service sections with sticky images and alternating layouts
- **Trust Indicators** - Build credibility with trust badges and benefits
- **Customer Testimonials** - Social proof section
- **FAQ Section** - Accordion-style frequently asked questions
- **Lead Capture** - Multiple lead forms (inline section + fixed bottom banner)
- **CRM Integration** - Automatic sync with Zoho CRM via background jobs
- **Analytics** - Google Analytics integration with event tracking
- **Responsive Design** - Mobile-first design with RTL (Hebrew) support
- **Modern UI** - Built with shadcn/ui components, Tailwind CSS, and custom theme

## Tech Stack

- **Framework:** Next.js 15.3.1 (App Router)
- **React:** 19.0.0
- **TypeScript:** 5.x
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Database:** Supabase (PostgreSQL)
- **CRM:** Zoho CRM integration
- **Caching:** Upstash Redis
- **Analytics:** Google Analytics
- **Icons:** Lucide React

## Environment Setup

Before running the development server, you need to set up your environment variables.

### Development Environment

1. Copy the `.env.development.example` file to `.env.development`:
   ```bash
   cp .env.development.example .env.development
   ```

2. Fill in the **REQUIRED** variables in `.env.development`:
   - `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous key
   - `GOOGLE_ANALYTICS_ID` - Your Google Analytics tracking ID

   **Optional:**
   - `GOOGLE_MAPS_API_KEY` - Only if using maps

### Production Environment

Set these variables in your hosting platform (Vercel, etc.):

**REQUIRED - Core:**
- `NEXT_PUBLIC_SUPABASE_URL` - Production Supabase URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Production Supabase key
- `GOOGLE_ANALYTICS_ID` - Production Google Analytics ID

**REQUIRED - CRM Sync:**
- `UPSTASH_REDIS_REST_URL` - Upstash Redis REST API URL
- `UPSTASH_REDIS_REST_TOKEN` - Upstash Redis REST API token
- `ZOHO_CLIENT_ID` - Zoho CRM client ID
- `ZOHO_CLIENT_SECRET` - Zoho CRM client secret
- `ZOHO_REFRESH_TOKEN` - Zoho CRM refresh token
- `ZOHO_REDIRECT_URI` - Zoho CRM redirect URI
- `CRON_SECRET` - Secret for protecting cron job endpoints

**Optional:**
- `GOOGLE_MAPS_API_KEY` - Only if using maps

> **Note:** CRM sync variables are only needed in production. Development doesn't need them unless you're testing the CRM sync functionality.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables (see above)

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages and API routes
│   ├── api/               # API endpoints (leads, CRM sync)
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main landing page
├── components/
│   ├── mortgage/          # Mortgage-specific components
│   ├── layout/            # Layout components (Footer, etc.)
│   ├── forms/             # Form components
│   ├── ui/                # shadcn/ui components
│   └── ...
├── lib/                   # Utilities and helpers
├── hooks/                 # Custom React hooks
├── config/                # Configuration files
└── styles/                # Global styles
```

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Database Schema

The project uses Supabase for lead storage. See `supabase-schema.sql` for the database schema.

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add your environment variables
4. Deploy!

The project is optimized for Vercel's platform with automatic deployments on push to main.

## License

Private project - All rights reserved
