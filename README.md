# AI Commerce Autonomous - Day 1: Core Storefront

**Simple, production-ready landing page and catalog for Autonomous AI Commerce SaaS.**

## What This Is
- Easy-to-understand HTML landing page for the masses.
- Product grid with reasonable paywalls.
- Simple AI Agent chat demo (extend with real LLM).
- Ready for Vercel deployment.
- Human only adds variables (Stripe keys, links) and pushes.

## Quick Start / Deploy to Vercel
1. Fork or use this repo: https://github.com/CreigT/ai-commerce-autonomous-day1-core-storefront
2. Connect to Vercel (or use the linked project).
3. Add environment variables in Vercel:
   - `STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_SECRET_KEY` (for server if needed)
   - Or hardcode Stripe Checkout links in app.js for static.
4. Deploy. That's it.

## Features
- Responsive design
- Product catalog
- AI Support Agent (demo)
- Buy buttons ready for Stripe
- Zero human ops beyond setup

## Next Modules
Future days will add more agents: Pricing Agent, Inventory, etc. This is the public face.

## Tech
Pure HTML/CSS/JS. No build step needed for Vercel static deploy.

**Status: Production Ready for basic storefront.**
