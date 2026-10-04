# GlamKart — Free Product Catalog Website

A beautiful, mobile-friendly static product catalog for **GlamKart** (beauty & fashion store, Pakistan).
**100 products** with "Order Now" buttons that link to the Shopify store for checkout.

## What's Inside

| File | Purpose |
|------|---------|
| `index.html` | The complete website (HTML + CSS + JS, single file) |
| `products.json` | Product data (title, price, image, Shopify handle, category) |

## Features

- ✨ Luxury black/gold design, mobile-responsive
- 🔍 Live product search
- 🏷️ Category filter
- 🛒 "Order Now" button on every product → opens the matching product on the Shopify store (`ihw8jr-t1.myshopify.com/products/[handle]`)
- 💬 Floating WhatsApp chat button (number: +92 327 7518208)
- 📱 SEO basics: title tags, meta description, Open Graph tags, image alt text, semantic HTML

## Deploy to GitHub Pages (FREE)

### Option A — New repo (recommended)

1. Create a new public repo on GitHub, e.g. `glamkart-site`.
2. Upload `index.html` (and optionally `products.json`) to the repo root:
   ```bash
   cd ~/workspace/glamkart-site
   git init
   git add index.html products.json
   git commit -m "GlamKart catalog site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/glamkart-site.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main` → Folder: `/ (root)` → Save.
4. Your site goes live in ~1 minute at:
   `https://YOUR-USERNAME.github.io/glamkart-site/`

### Option B — Existing repo

Copy `index.html` into any repo's root (or `/docs` folder), then enable Pages as above.

## Custom Domain (optional)

In the repo: **Settings → Pages → Custom domain** → enter your domain (e.g. `glamkart.pk`) → add the DNS records GitHub shows.

## Important Notes

- **Shopify checkout required:** "Order Now" buttons link to the Shopify store. The store must have an **active plan** and **password protection removed** for customers to complete orders.
- **Product images** are hot-linked from Markaz CDN URLs. If images break later, re-export fresh image URLs from Markaz/Shopify.
- **Prices** are in PKR as imported from the Markaz CSV (25% markup applied).

## Updating Products

1. Export a fresh Shopify/Markaz product CSV.
2. Replace `products.json` (same format: array of `{handle, title, price, image, category, vendor}`).
3. Regenerate `index.html` or edit the embedded `PRODUCTS` array.
4. Push to GitHub — Pages redeploys automatically.
