# ToolNest

ToolNest is a free, fast and privacy-first toolbox. Core processing runs in the browser, so there is no AI API bill, login, database or upload backend required.

## Included tool families

- **Text:** word/character/sentence counters, case converter, duplicate remover, whitespace cleaner, sorter, reverser, diff, line-break remover.
- **Developer:** JSON formatter/validator/minifier, JSON→CSV/YAML, Base64, URL encoder/decoder, JWT decoder, regex tester, SQL/HTML/CSS/JS/XML formatting, Markdown preview, cron presets.
- **PDF:** merge, split/extract, delete, reorder, rotate, PDF→JPG, JPG→PDF and local rasterized compression.
- **Image:** compression, resize, crop/convert, JPG/PNG/WebP conversions and local metadata inspection.
- **Calculators:** percentage, discount, age, date, time, BMI, loan/EMI, compound interest, tax and unit conversions.
- **Security:** password generation, UUIDs, SHA-256, SHA-512, MD5, HTML encoding/decoding.

## Privacy and cost

Text, images and PDFs are processed locally in the browser. ToolNest does not require an AI provider, API key, Firebase, database or account for these tools. JWT decoding does **not** verify signatures; hashes are one-way digests, not encryption.

PDF compression is explicitly rasterization-based and may remove selectable text, forms and some PDF metadata. The original file is never overwritten.

## Development

```bash
npm install
npm run dev
npm test
npm run typecheck
npm run build
```

The project uses React + TypeScript + Vite. Vite's production build produces static assets suitable for static hosting. CI runs tests and a production build on pushes to `main`.

## SEO

Tool pages use stable `/tools/<slug>` URLs, deterministic metadata and a sitemap/robots setup. The project avoids mass-generated thin pages: every listed tool is backed by actual browser functionality or a clearly scoped local workflow.

## Roadmap

Future enhancements can add richer formatting engines, more EXIF fields, worker-based image processing, PDF thumbnails, PWA offline caching, and deployment-specific rewrite configuration without introducing a paid backend.
