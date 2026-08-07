---
name: AnviVino Viticulture
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#544247'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#877277'
  outline-variant: '#dac0c6'
  surface-tint: '#9d3b62'
  primary: '#5c0430'
  on-primary: '#ffffff'
  primary-container: '#7a1f46'
  on-primary-container: '#ff8bb3'
  inverse-primary: '#ffb0c8'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#2d2d2a'
  on-tertiary: '#ffffff'
  tertiary-container: '#434340'
  on-tertiary-container: '#b1afac'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9e2'
  primary-fixed-dim: '#ffb0c8'
  on-primary-fixed: '#3e001e'
  on-primary-fixed-variant: '#7f234a'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#e5e2de'
  tertiary-fixed-dim: '#c8c6c2'
  on-tertiary-fixed: '#1c1c1a'
  on-tertiary-fixed-variant: '#474744'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-gap: 80px
---

## Brand & Style
The design system embodies a premium, editorial-inspired minimalism tailored for wine connoisseurs. It leverages the "Luxe-Digital" aesthetic: a blend of high-fashion editorial layouts and sleek, Apple-inspired interface precision. 

The emotional response is one of curated sophistication, tranquility, and authority. The UI disappears to prioritize high-resolution viticulture photography and the rich colors of the wine itself. Every interaction is designed to feel intentional and fluid, avoiding clutter in favor of generous whitespace and a strict hierarchy.

## Colors
The palette is rooted in the deep, oenological tones of Bordeaux and the prestigious shimmer of Gold. 

- **Primary (Bordeaux):** Used for primary actions, active navigation states, and brand-critical elements.
- **Secondary (Gold):** Reserved exclusively for accolades, expert ratings, medals, and premium "Club" features.
- **Backgrounds:** Pure white is the standard for the base canvas to ensure high-end photography pop. `gray-50` and `tertiary (F9F6F2)` are used for subtle section differentiation.
- **Typography:** `gray-900` is used for body text to maintain high legibility without the harshness of pure black, while `gray-500` is reserved for metadata and placeholder text.

## Typography
This design system utilizes a dual-font approach to balance character with utility.

- **Manrope (Headlines):** Chosen for its modern, geometric elegance. It provides a structured, high-end feel for wine names and section titles.
- **Inter (Body/Labels):** Chosen for its exceptional legibility and systematic "Apple-like" neutrality.

All labels and captions should utilize slightly increased letter spacing and uppercase styling when used for metadata (e.g., "REGION", "VINTAGE") to evoke luxury catalog aesthetics.

## Layout & Spacing
The layout philosophy is "Air over Information." We use a 12-column grid for desktop with wide margins to create a focused central column. 

- **Generous Padding:** Card elements and containers should never feel cramped. Minimum internal padding for any card is 24px.
- **Sectioning:** Large vertical gaps (80px+) are used between different content types (e.g., "Trending Now" vs "New Arrivals") to allow the eye to rest.
- **Mobile:** Transition to a single-column layout with 20px side margins, maintaining the 24px border radius on cards to keep the soft, premium feel.

## Elevation & Depth
Depth is achieved through "Atmospheric Elevation." Instead of harsh shadows, the design system uses extremely soft, diffused blurs that mimic a gentle light source from directly above.

- **Surface Levels:** 
  - Level 0: Pure White Background.
  - Level 1: Subtle Card (Shadow: 0px 4px 20px rgba(0,0,0,0.04)).
  - Level 2: Interactive/Hover (Shadow: 0px 12px 32px rgba(0,0,0,0.08)).
- **Glassmorphism:** Use backdrop-blur (20px) on navigation bars and floating filters to maintain a sense of context and depth without blocking the visual flow of photography.

## Shapes
The shape language is defined by ultra-smooth, organic corners. 

- **Cards & Primary Containers:** Use a 24px radius (`rounded-xl` in this system).
- **Buttons:** Fully pill-shaped to contrast against the rectangular grid.
- **Input Fields:** 12px radius to maintain a balance between structure and softness.
- **Icons:** Use thin strokes (1.5px) with rounded caps to match the typography's weight.

## Components
- **Buttons:** Primary buttons are Solid Bordeaux with White text. Secondary buttons are Ghost-style with a 1px `gray-200` border. High-impact "Vote" buttons use a subtle scale-up micro-animation on press.
- **Cards (Wine Items):** Large image area at the top, followed by generous padding. Ratings are displayed in Gold with a small star icon. Voting "Hearts" are positioned in the top-right corner of the image, using a semi-transparent glass background.
- **Chips:** Used for wine characteristics (e.g., "Tannic," "Oak"). These use `gray-100` backgrounds with `gray-900` text, pill-shaped.
- **Input Fields:** Minimalist design—only a bottom border (2px) that turns Bordeaux on focus, or a light gray filled style with 12px radius.
- **Voting Heart:** When inactive, a thin `gray-500` stroke. When active, it fills with `system-red` and triggers a subtle "pop" animation.
- **Medals:** Circular Gold elements with white text, utilizing a subtle metallic gradient (Gold Leaf to Gold Mist).