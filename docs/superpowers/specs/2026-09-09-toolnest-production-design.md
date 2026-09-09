# ToolNest Production Design

## Goal
Turn ToolNest into a free, browser-first toolbox covering the requested Text, Developer, PDF, Image, Calculator, and Security utilities without AI APIs, accounts, or a required backend.

## Architecture
- React + TypeScript + Vite single-page shell with pathname-aware tool pages and a shared tool registry.
- Core text, developer, calculator, encoding, hashing, and image operations execute locally in the browser.
- PDF operations use open-source browser libraries (`pdf-lib`, `pdfjs-dist`, `jszip`) loaded as application dependencies; files are processed locally and are not uploaded.
- SEO is handled through deterministic tool metadata, canonical URLs, sitemap/robots assets, and useful per-tool explanatory content rather than mass-generated thin pages.

## Functional Scope
### Text
Word Counter, Character Counter, Sentence Counter, Case Converter, Remove Duplicate Lines, Remove Extra Spaces, Text Sorter, Text Reverser, Text Diff, Line Break Remover.

### Developer
JSON Formatter/Validator/Minifier, JSON→CSV, JSON→YAML, Base64 Encode/Decode, URL Encode/Decode, JWT Decoder, UUID Generator, Regex Tester, SQL/HTML/CSS/JavaScript/XML formatters, Markdown Previewer, Cron Expression Generator.

### PDF
Merge, Split, Compress, Rotate, PDF→JPG, JPG→PDF, Extract pages, Delete pages, Reorder pages.

### Image
Compressor, Resizer, Cropper, Converter, JPG↔PNG, WebP↔JPG, PNG→WebP, metadata viewer.

### Calculators
Percentage, Discount, Age, Date, Time, BMI, Loan, EMI, Compound Interest, GST/Tax, Unit Converter.

### Security / Encoding
Password Generator, SHA-256, SHA-512, MD5, Base64, URL Encoder, HTML Encoder/Decoder, UUID.

## UX
- Responsive dark interface with search, category navigation, tool cards, dedicated tool panel, copy/download actions, drag/drop file inputs where applicable, and clear local-processing/privacy messaging.
- Keyboard-accessible controls and visible focus states.
- Tool-specific options are shown only when relevant.
- Errors are actionable and never expose stack traces to users.

## Privacy / Cost
No AI model, AI API, analytics SDK, database, Firebase, or authentication is required for core functionality. User file/text data remains in the browser except where the browser itself must open/save a local file.

## Quality
- Pure utilities are unit tested.
- Build and tests run in GitHub Actions.
- Dependencies are kept minimal and license-compatible.
- PDF/image processing avoids network uploads.
- Security wording distinguishes hashing from encryption and JWT decoding from signature verification.

## SEO
- Tool pages use stable `/tools/<slug>` URLs where the hosting platform can rewrite to the SPA entry point; the app also renders meaningful page titles/descriptions from the registry.
- `public/robots.txt`, `public/sitemap.xml`, and `public/site.webmanifest` are included.
- The homepage contains category links and useful tool descriptions.
- No doorway pages or keyword-stuffed copies are generated.
