# Metro Steel Next.js staging frontend

This project is a starting point for a staging frontend. It does not change the live WordPress site or DNS.

## Deploy with GitHub + Vercel (no local installation)

1. Download this ZIP and extract it on your computer (no terminal needed).
2. On GitHub, create a new repository named `metrosteel-frontend`.
3. Open the repository, choose **Add file → Upload files**, and upload the *contents* of the extracted folder (including `package.json` and `src/`), then commit.
4. In Vercel, choose **Add New → Project**, import `metrosteel-frontend`, and deploy.
5. In Vercel Project Settings → Environment Variables, add:
   - Name: `WORDPRESS_API_URL`
   - Value: `https://metrosteel.co.id/wp-json/metrosteel/v1`
   Then redeploy if needed.

## Routes in this starter

- `/` homepage
- `/harga-update-besi-dan-bahan-bangunan/` price page, reads the read-only WordPress API
- `/pasang-baja-ringan/`
- `/hotmix-aspal/`
- `/rental-alat-berat/`
- `/portofolio/`
- `/tentang-kami/`
- `/kontak-kami/`

**Important:** These are initial routes, not a confirmed inventory of every legacy URL. Before production migration, compare against the actual WordPress sitemap and preserve exact legacy slugs, metadata, images, and redirects. This starter does not replace DNS or change production routing.
