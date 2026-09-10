# Toolskit

**Toolskit** is a free, fast, privacy-first collection of practical browser-based tools for everyday work, development, documents, images, calculations, and security utilities.

Most processing happens directly in your browser, keeping files and text on your device and avoiding the need for an AI API, database, login, or upload backend for the core tools.

## ✨ Tool categories

### 📝 Text tools

- Word counter
- Character counter
- Sentence counter
- Case converter
- Remove duplicate lines
- Whitespace cleaner
- Line sorter
- Text reverser
- Text diff
- Remove line breaks

### 💻 Developer tools

- JSON formatter, validator, and minifier
- JSON to CSV / YAML
- Base64 encoder and decoder
- URL encoder and decoder
- JWT decoder
- Regex tester
- SQL formatter
- HTML formatter
- CSS formatter
- JavaScript formatter
- XML formatter
- Markdown preview
- Cron presets

### 📄 PDF tools

- Merge PDFs
- Split / extract PDF pages
- Delete PDF pages
- Reorder PDF pages
- Rotate PDF pages
- PDF to JPG
- JPG to PDF
- Local PDF compression

### 🖼️ Image tools

- Image compression
- Image resize
- Image crop and conversion
- JPG / PNG / WebP conversion
- Local image metadata inspection

### 🧮 Calculator tools

- Percentage calculator
- Discount calculator
- Age calculator
- Date calculator
- Time calculator
- BMI calculator
- Loan / EMI calculator
- Compound interest calculator
- Tax calculator
- Unit conversions

### 🔐 Security tools

- Password generator
- UUID generator
- SHA-256 hash
- SHA-512 hash
- MD5 hash
- HTML encode / decode

## 🔒 Privacy first

Toolskit is designed around local browser processing wherever practical.

- Text, images, and PDFs can be processed locally in the browser.
- No account is required for the core tools.
- No Firebase or application database is required for the core tools.
- No AI provider or API key is required for the core tools.
- Files are not uploaded to a Toolskit processing server for these local workflows.

A few important technical notes:

- JWT decoding only reads the token payload/header; it does **not** verify the token signature.
- Hash functions such as MD5, SHA-256, and SHA-512 are one-way digests, not encryption.
- PDF compression is rasterization-based and can remove selectable text, forms, and some PDF metadata.
- Original user files are not overwritten by the local processing workflows.

## 🛠️ Tech stack

- **React**
- **TypeScript**
- **Vite**
- **Vitest**
- **PDF-Lib / PDF.js** for PDF workflows
- **JSZip** for ZIP-related browser workflows

The application is designed as a static-friendly web project, making it suitable for deployment on modern static hosting platforms.

## 🚀 Development

### Requirements

- Node.js
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Run tests

```bash
npm test
```

### Run TypeScript checks

```bash
npm run typecheck
```

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## 📁 Project principles

Toolskit follows a few core principles:

1. **Useful over bloated** — each tool should solve a clear, practical problem.
2. **Privacy by default** — prefer browser-side processing whenever possible.
3. **Fast UX** — avoid unnecessary network requests and heavy backend dependencies.
4. **No unnecessary accounts** — core utilities should work without registration.
5. **Production-focused** — tools should have predictable behavior, validation, and useful error handling.
6. **SEO-friendly structure** — tools use stable routes and meaningful metadata rather than generating large numbers of thin pages.

## 🌐 SEO and deployment

Toolskit uses stable tool URLs such as:

```text
/tools/<slug>
```

The project includes sitemap and robots configuration and is structured so individual tools can be indexed as useful standalone pages.

For production deployment, configure the hosting platform to serve the application entry point for client-side routes when required by the chosen hosting provider.

## 🧪 Quality checks

Before submitting changes, run:

```bash
npm test
npm run typecheck
npm run build
```

GitHub Actions also provides automated test, typecheck, and production-build checks for the configured branch workflow.

## 🗺️ Roadmap

Potential future improvements include:

- More developer formatting and conversion tools
- Additional image metadata and EXIF fields
- Web Worker-based image processing for smoother large-file workflows
- PDF thumbnails and richer PDF utilities
- PWA and offline caching support
- More advanced accessibility improvements
- Additional calculators and productivity tools
- Deployment-specific optimizations for static hosting

## 🤝 Contributing

Contributions, bug reports, and improvement ideas are welcome.

When adding a new tool, keep it focused, validate user input, handle errors clearly, and prefer local browser processing when practical.

## 📄 License

See the repository for the project's current licensing information.

---

Built with ❤️ as **Toolskit** — a practical toolbox for the web.
