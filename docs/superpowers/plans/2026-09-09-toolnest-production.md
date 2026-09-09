# ToolNest Production Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a production-oriented, zero-AI-cost ToolNest browser toolbox with the requested text, developer, PDF, image, calculator, security, SEO, and CI foundations.

**Architecture:** A shared typed tool registry drives the responsive React UI and pathname-based tool pages. Pure browser utilities stay dependency-light; PDF operations use `pdf-lib`, `pdfjs-dist`, and `jszip`; image work uses Canvas/Web APIs. No application backend or AI API is required.

**Tech Stack:** React, TypeScript, Vite, Vitest, pdf-lib, pdfjs-dist, JSZip, Web Crypto, Canvas API.

**Spec:** `docs/superpowers/specs/2026-09-09-toolnest-production-design.md`

## Global Constraints
- Core processing is local to the browser.
- No AI API, Firebase, database, login, or paid service is required.
- Tool URLs use `/tools/<slug>` and metadata is derived from a reviewed registry.
- User-visible security claims must not imply encryption or verified JWT signatures where none exists.
- Every new utility has automated tests where deterministic testing is practical.
- Main branch remains the source of truth.

---

### Task 1: Harden project configuration
**Files:** `package.json`, `tsconfig.json`, `vite.config.ts`, `index.html`

- [ ] Move build/test tooling into `devDependencies` where appropriate and add PDF dependencies.
- [ ] Add lint-free typecheck/build/test scripts.
- [ ] Set Vite build configuration for modern static deployment and stable chunking.
- [ ] Improve document metadata and theme color.

### Task 2: Expand the browser utility library
**Files:** `src/tools.ts`, `tests/tools.test.ts`

- [ ] Add detailed text metrics and safe Base64/URL/HTML helpers.
- [ ] Add JSON CSV/YAML conversion, JWT payload decoding, regex testing, formatters, Markdown escaping/preview support, cron presets.
- [ ] Add calculators and unit conversions.
- [ ] Add SHA-256/SHA-512 Web Crypto hashing and MD5 implementation.
- [ ] Add image helpers and PDF helper functions where they are pure.
- [ ] Add tests for normal and edge cases.

### Task 3: Build the complete tool registry and UI
**Files:** `src/App.tsx`, `src/styles.css`, `src/toolRegistry.ts`, `src/components/*`

- [ ] Create a typed registry for every requested tool.
- [ ] Render category filters, search, tool cards, tool-specific controls, copy/download actions, and local processing notices.
- [ ] Support `/tools/<slug>` navigation using browser history and fallback to the homepage.
- [ ] Keep the UI responsive and keyboard accessible.

### Task 4: Implement file/image workflows
**Files:** `src/fileTools.ts`, `src/components/FileTool.tsx`

- [ ] Add local image resize/crop/convert/compress workflows using Canvas.
- [ ] Add image metadata viewer for common JPEG/PNG/WebP metadata available locally.
- [ ] Add JPG/PNG/WebP conversion routes through the shared workflow.

### Task 5: Implement PDF workflows
**Files:** `src/pdfTools.ts`, `src/components/PdfTool.tsx`

- [ ] Add merge, split/extract, delete, reorder, rotate, and JPG/PDF conversion.
- [ ] Add browser-local compression with an explicit quality tradeoff note.
- [ ] Add file validation and download naming.

### Task 6: SEO, PWA, and deployment assets
**Files:** `public/robots.txt`, `public/sitemap.xml`, `public/site.webmanifest`, `index.html`, `README.md`

- [ ] Add canonical/OG metadata and stable tool metadata.
- [ ] Add sitemap and robots assets.
- [ ] Add a minimal installable web manifest.
- [ ] Document static deployment and privacy model.

### Task 7: CI and verification
**Files:** `.github/workflows/ci.yml`, tests

- [ ] Run tests and typecheck in CI.
- [ ] Run production build in CI.
- [ ] Verify no secret/API requirement is introduced.
- [ ] Inspect final GitHub tree and commit SHA before reporting status.

### Task 8: Final production pass
**Files:** all touched files

- [ ] Check all requested tools appear in the registry.
- [ ] Check every interactive control has an accessible label/name.
- [ ] Check errors are user-safe and local-only claims are accurate.
- [ ] Update README with exact implemented scope and run commands.
- [ ] Commit all changes to `main`.
