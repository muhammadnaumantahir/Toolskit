# Toolskit Production Readiness Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make Toolskit production-ready by fixing CI/dependency reproducibility, hardening browser file tools, removing legacy ToolNest behavior, improving maintainability, and strengthening SEO/tool validation.

**Architecture:** Keep Toolskit client-side and privacy-first. Extract reusable processing/validation concerns without unnecessary dependencies, preserve stable `/tools/:id` routes, and keep heavy PDF dependencies dynamically loaded.

**Tech Stack:** React 19, TypeScript, Vite, Vitest, pdf-lib, PDF.js, JSZip.

**Spec:** Current Toolskit code-review findings and approved all-in-one production-readiness scope.

## Global Constraints

- Preserve Toolskit branding; remove obsolete ToolNest runtime migration behavior.
- Preserve client-side processing for core tools.
- Keep stable `/tools/<slug>` URLs.
- Do not introduce paid APIs or backend processing.
- Maintain strict TypeScript.
- Add tests before production behavior changes.
- CI must validate the repository's actual default branch and use the lockfile deterministically.

---

## Tasks

- [ ] Fix CI branch/installation reproducibility (`master`, `npm ci`).
- [ ] Add failing regression tests for PDF page validation and WebP image-to-PDF handling.
- [ ] Implement PDF page validation and safe image embedding.
- [ ] Remove obsolete ToolNest SEO/session migration code.
- [ ] Refactor tool execution into focused modules without changing user-visible behavior.
- [ ] Harden password generation against modulo bias.
- [ ] Add file-processing limits/progress-safe error handling where practical.
- [ ] Improve route/SEO consistency and sitemap registry coverage tests.
- [ ] Run tests, typecheck, build, and inspect the resulting diff before completion.
