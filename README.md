# Ascending Star — website

Static site (HTML/CSS/JS, no build step). Open `index.html` or serve the folder with any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages).

```
index.html          Home page (English + Portuguese toggle)
privacy.html        Privacy policy (EN + PT)
assets/css/styles.css
assets/js/main.js   ← SITE_CONFIG at the top: phone, WhatsApp, booking, video, Instagram, photo
assets/img/         logo-mark.svg, favicon.svg (add owner.jpg here)
robots.txt, sitemap.xml
DESIGN.md           Design tokens & rules
```

## Fill these in before launch

All of these live in `SITE_CONFIG` at the top of `assets/js/main.js`, unless noted.

| What | Where | Status |
|---|---|---|
| Phone number | `phoneDisplay` + `phoneHref` | **Needed.** Until set, "Call" buttons scroll to the booking section |
| WhatsApp | `whatsapp` (uses phone if empty) | Optional. Button stays hidden until a number exists |
| Booking calendar | `bookingUrl` (Calendly, Cal.com, or a Google Calendar appointment page) | **Needed.** Until set, a "booking almost ready, call us" card shows |
| Explainer video | `youtubeId` | Shows "coming soon" until set |
| Instagram | `instagram` | Hidden until the account exists |
| Owner photo | put the file in `assets/img/`, set `ownerPhoto` | Placeholder shows until set |
| Business name spelling | everywhere | Confirm "Ascending Star" |
| Owner name "Davi" | `index.html` owner section + `PT["owner.title"]` + JSON-LD | Confirm |
| "I do this for my dad's business" | owner section copy | Confirm wording / add the business name or a result if he wants |
| Domain | `robots.txt`, `sitemap.xml`, add `<link rel="canonical">` in `index.html` | After buying the domain |
| Real logo file | `assets/img/logo-mark.svg` | SVG recreated from the logo image; swap in the original if preferred |
| Privacy policy | `privacy.html` | Template, not legal advice. Have it reviewed |
| Prices | packages section | Intentionally "set on your free call" until pricing is decided |

## After launch
- Add Google Analytics 4 / Tag Manager and track: booking clicks, `tel:` clicks, WhatsApp clicks.
- Create the Google Business Profile for Ascending Star and link it.
- Add real client results and testimonials as they come in. There are none on the site yet, on purpose.
