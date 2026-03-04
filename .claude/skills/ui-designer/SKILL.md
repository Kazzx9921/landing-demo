---
name: ui-designer
description: 在實作新的設計時需要
argument-hint: （不需要額外參數，直接執行即可）
---

以下是設計系統提示詞：

# Editorial Flux Utility Design System Master Specification

## 1. Design Philosophy
* **Core Concept**: "Structured fluidity"—rigid grid architectures housing soft, organic interactions and kinetic typography.
* **Tone of Voice**: Authoritative, Curated, Forward-Thinking, and Precision-Engineered.
* **Best For**: Creative Agencies, Architecture Firms, SaaS Landing Pages, High-End Portfolios.
* **Avoid For**: Gamified interfaces, E-commerce with heavy clutter, Whimsical/Child-friendly apps.

## 2. Foundational Tokens

### 2.1 Color System (Crucial)
* **Strategy**: Strict Monochrome + Single Electric Accent. High contrast is mandatory.
* **Primitive Palette**:
    * Brand Black: #0F0F0F (Not #000000 - preserves depth)
    * Brand Charcoal: #1F1F1F (Secondary surfaces)
    * Brand White: #FFFFFF
    * Brand Accent: #0099FF (Electric Blue - use sparingly for active states/links)
* **Semantic Roles**:
    * Surface/Canvas: Neutral-0 (White) or Brand Black (in Dark Mode).
    * Text/Ink: Brand Black (Primary), Neutral-500 (#999999 for metadata).
    * Borders: #000000 with 10% opacity (Light Mode) or #FFFFFF with 15% opacity (Dark Mode).
    * Interactive: Brand Black (Buttons), Electric Blue (Links/Focus).

### 2.2 Typography Scale (REM-based)
* **Primary Family**: 'Clash Grotesk' (Display/Headings).
* **Secondary Family**: 'Inter' (UI/Body).
* **Accent Family**: 'Instrument Serif' (Italicized emphasis only).
* **Fallback Recommendation**: 
    * Clash Grotesk -> **'Outfit'** or **'Plus Jakarta Sans'** (Google Fonts).
    * Instrument Serif -> **'Playfair Display'** or **'Noto Serif Display'** (Google Fonts).
* **Base Reference**: 16px = 1rem.
* **Scale**:
    * Display XL: 6.875rem (110px) / Medium / Tight Tracking (-0.02em).
    * H1: 3.625rem (58px) / Medium / Height 1.1.
    * H2: 2.625rem (42px) / Medium.
    * Body Large: 1.125rem (18px) / Regular / Height 1.5.
    * Body Base: 1rem (16px) / Regular / Height 1.5.
    * Button Text: 0.875rem (14px) / Medium / Uppercase optional.

### 2.3 Spacing & Layout
* **Layout Strategy**: "Bento Box" Grid System (CSS Grid preferred).
* **Base Unit**: 4px.
* **Spacing Scale**:
    * Gap-XS: 0.5rem (8px)
    * Gap-SM: 1.25rem (20px) - *Standard Card Gap*
    * Section-Pad: 5rem (80px) to 10rem (160px) - *Airy vertical rhythm*.
* **Container Logic**: Max-Width 1280px (Desktop), 1080px (Content). Side gutters: 24px.

### 2.4 Borders, Depth, Icons & Elevation
* **Border Weight**: Always 1px.
* **Radius Strategy**:
    * Buttons/Chips: 999px (Full Pill).
    * Cards/Panels: 24px (1.5rem) - *Smooth Super-ellipse feel*.
    * Images: Match Card Radius.
* **Shadow Physics**: Ultra-subtle or Non-existent. use `box-shadow: 0px 4px 24px rgba(0,0,0,0.04)` for hover lift only.
* **Iconography Analysis**:
    * **Visual DNA**: 1.5px stroke, rounded terminals. Minimalist.
    * **Library**: Phosphor Icons (Regular/Light weight) or Lucide (set to 1.5px stroke).

## 3. Interaction & Motion

### 3.1 The 7-State System
* **Idle**: 1px subtle border, transparent or solid background.
* **Hover**: 
    * Buttons: Background fills to Brand Black/White.
    * Cards: Image zoom (scale 1.05), Overlay opacity increase.
    * Links: Underline slides in or color shifts to Electric Blue.
* **Active/Pressed**: Scale down (0.98).
* **Focus**: 2px Offset Ring in Electric Blue (#0099FF).
* **Marquee**: Continuous linear scroll for client logos or tags.

### 3.2 Motion DNA
* **Physics**: Spring-based. High stiffness, medium damping.
* **Scroll**: Smooth scroll (Lenis style). Elements fade in + translate Y (20px -> 0px) on reveal.
* **Hover Timing**: 300ms cubic-bezier(0.25, 1, 0.5, 1).

## 4. Component Extrapolation Rules
* **Inputs**: Pill-shaped (Radius 999px) or large rounded rects (Radius 16px). Background transparent, Border 1px solid Neutral-200. Focus border: Brand Black.
* **Cards (Bento)**: 
    * Background: Neutral-50 (Light) / Neutral-900 (Dark).
    * Border: 1px solid Neutral-200 (Light) / Neutral-800 (Dark).
    * Content: aligned bottom-left or center.
* **Navigation**: Floating pill navbar with glassmorphism (Blur 10px, Opacity 80%).
* **Tags**: Pill shape, 1px border, transparent bg, uppercase text.

## 5. Anti-Patterns
* ❌ **Drop Shadows**: Do not use heavy drop shadows. Use borders for separation.
* ❌ **Sharp Corners**: Avoid 0px radius on primary containers (unless intended for brutalist sections).
* ❌ **Gradient Text**: Keep text solid. Use gradients only for "fade out" masks or subtle backgrounds.

## 6. Advanced Adaptability

### 6.1 Dark Mode Strategy ("Inverted Logic")
* **Canvas**: #0F0F0F (Deep Black).
* **Cards**: #1F1F1F (Dark Charcoal).
* **Text**: #FFFFFF (Primary), #999999 (Secondary).
* **Borders**: White at 10-15% opacity.

### 6.2 Responsive Logic
* **Desktop**: 12-col or Bento Grid.
* **Tablet**: Stacked Grid (2-col). Reduce padding by 30%.
* **Mobile**: Single column stack. Typography scales down by factor of 1.2.
* **Touch**: Buttons must be min-height 44px.

## 7. Implementation Guidelines

### 7.1 Modern CSS Variables
<css>
:root {
  /* Colors */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F5F5F5;
  --color-text-primary: #0F0F0F;
  --color-text-secondary: #999999;
  --color-accent: #0099FF;
  --color-border: rgba(0, 0, 0, 0.1);

  /* Geometry */
  --radius-pill: 999px;
  --radius-card: 24px;
  --space-unit: 4px;
  
  /* Type */
  --font-display: 'Clash Grotesk', 'Outfit', sans-serif;
  --font-body: 'Inter', sans-serif;
}

[data-theme="dark"] {
  --color-bg-primary: #0F0F0F;
  --color-bg-secondary: #1F1F1F;
  --color-text-primary: #FFFFFF;
  --color-border: rgba(255, 255, 255, 0.15);
}
</css>

### 7.2 Tailwind Config Snippet
<javascript>
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0F0F0F',
          charcoal: '#1F1F1F',
          blue: '#0099FF',
        }
      },
      borderRadius: {
        '2xl': '24px',
        'pill': '999px'
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    }
  }
}
</javascript>

## 8. Quality Assurance Checklist
* [ ] Do buttons use the pill shape (999px radius)?
* [ ] Is the primary font set to a Neo-Grotesque (Clash/Outfit)?
* [ ] Are borders thin (1px) and subtle?
* [ ] Is the "Electric Blue" accent used strictly for interactivity?
* [ ] Are section transitions spacious (80px+)?