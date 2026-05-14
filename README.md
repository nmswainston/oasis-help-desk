# Oasis Help Desk

A mobile-first knowledgebase for Control4 smart home clients.

## Problem

Control4 smart home clients frequently contact their integrator for help with basic issues — changing volume limits, adjusting lighting scenes, troubleshooting remotes — questions that don't require a technician visit but still consume support time.

## Solution

Oasis Help Desk is a self-service support portal built specifically for smart home users. Clients can search articles, troubleshoot common issues, and find answers independently, reducing support ticket volume and improving customer satisfaction.

## Screenshots

<!-- Add 2–4 screenshots of the app here -->

## Tech Stack

- JavaScript
- Vite
- Tailwind CSS

## Features

- Searchable article knowledgebase
- Mobile-first design for in-home use on phones and tablets
- Organized by Control4 system category
- Fast, fully client-side — no server required
- Clean reading experience optimized for non-technical users

## Installation

```bash
npm install
npm run dev
```

## Lessons Learned

- Designing for non-technical users means using plain language and avoiding jargon throughout
- Mobile-first isn't just a CSS breakpoint strategy — it changes navigation patterns, tap target sizes, and content density
- A knowledgebase is only as good as the structure of its content — IA decisions matter as much as the UI

## Future Improvements

- AI-powered search with natural language queries
- Integrator admin dashboard to manage articles per client
- Client-specific article sets based on their installed system

## Related

- [`oasis-saas`](https://github.com/nmswainston/oasis-saas) — the multi-tenant SaaS version of this product

---

*Built by [nmswainston](https://github.com/nmswainston)*
