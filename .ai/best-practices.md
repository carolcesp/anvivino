# Angular v21+ Best Practices & AI Instructions

## 🚨 CRITICAL LANGUAGE RULE
- THE AI MUST always respond, explain code, and comment files strictly in **SPANISH**.

## 🌐 SEO & ARCHITECTURE REQUIREMENTS
- **Rendering Strategy:** Use Server-Side Rendering (SSR) or Static Site Generation (SSG) for public-facing views to guarantee fast Time to Interactive (TTI) and indexing.
- **Dynamic Metadata:** Utilize Angular's `Meta` and `Title` services inside route guards or resolvers to dynamically inject Open Graph, Twitter Cards, and canonical URLs.
- **Semantic HTML:** Always generate structured semantic tags (`<article>`, `<nav>`, `<header>`, `<main>`) to improve SEO crawler readability and WCAG AA accessibility standards.

## ⚡ PERFORMANCE & ZONELESS PARADIGM
- **Zoneless by Default:** Do NOT use `zone.js`. The application must rely entirely on Angular v21 zoneless change detection triggered by Signals, RxJS Async pipe, or manual state updates.
- **State Management:** Use modern reactive primitives (`signal()`, `computed()`, `model()`, and `linkedSignal()`) to achieve granular DOM updates without application-wide cycles.
- **Image Optimization:** Enforce the use of `NgOptimizedImage` (`img[ngSrc]`) for all non-base64 static assets, specifying proper `priority` for Above-the-Fold content.
- **Lazy Loading:** Implement deferred loading using native `@defer` blocks for heavy UI elements (e.g., charts, modals, comments) to minimize the main bundle size.
- **Data Flow:** Never execute complex logic or method calls inside templates (e.g., `{{ computeData() }}`). Use `computed()` signals to cache and derive state efficiently.

## 🧩 COMPONENT REUSABILITY & DESIGN PATTERNS
- **Standalone Architecture:** Every component, directive, and pipe MUST be defined with `standalone: true`. Never use legacy NgModules.
- **Smart vs. Dumb Pattern:** Separate business logic from presentational views. Presentational (Dumb) components must be pure, relying exclusively on functional inputs/outputs.
- **Functional API:** Declare component interfaces using `input()`, `output()`, and `model()` functions instead of legacy decorators (`@Input`, `@Output`).
- **Headless UI & Theming:** For custom highly-reusable UI elements (tabs, dropdowns, dialogs), prefer headless interaction models using the `Angular Aria` package over tight CSS coupling.
- **Host Binding:** Embed host properties directly inside the metadata `host: {}` block of the `@Component` or `@Directive` decorator. Do NOT use `@HostBinding` or `@HostListener`.

## 📝 FORMS & MODERN APIS
- **Signal Forms:** For new, signal-driven workflows, experiment with Angular v21 `form()` and `[formField]` directives from `@angular/forms/signals`. 
- **Reactive Forms:** Use strictly typed Reactive Forms (`FormGroup`, `FormControl`) if maximum ecosystem stability or backward compatibility is required.
- **Dependency Injection:** Consume services cleanly using the `inject()` function in the constructor phase.

## 🛠️ DEVELOPMENT WORKFLOW & TESTING
- **Compilation Integrity:** Every code modification, refactor, or generation MUST ensure that the project compiles successfully without any TypeScript or Angular CLI build errors. Never output incomplete code blocks that break the build.
- **Automated Unit Testing:** For every component, service, pipe, or directive created or modified, the AI MUST provide or update its corresponding unit test file (`.spec.ts`).
- **Testing Standards:** Write clean unit tests using modern Angular testing utilities (e.g., `ComponentFixture`, `provideExperimentalZonelessChangeDetection()` for testing zoneless apps, or modern integration tests), ensuring at least 80% logic coverage upon approval of changes.
