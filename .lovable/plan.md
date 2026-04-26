## Plan — ECOM LOIAN landing v3 (mundoinversiones structure)

Refactor the existing landing to mirror the section rhythm of mundoinversiones.es/comenzar while keeping the white-themed brand (`#ffffff` / `#0a0a0a` / `#e31c1c`). Most components already exist — this is mostly copy, layout and one new component (FocusRail).

### 1. Global typography
- In `src/index.css`: import SF Pro Display via `@import url('https://fonts.cdnfonts.com/css/sf-pro-display')` and apply `font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif` on `*` (overrides the current Inter body rule).

### 2. Hero (replace orbiting-avatars hero with VSL hero)
Rewrite `src/components/landing/Hero.tsx` as a centered hero (no orbiting avatars):
- H1 (52px desktop / 36px mobile, extrabold): `"La comunidad privada de reventa online que no encontrarás en ningún sitio más."` — word **"privada"** in `#e31c1c`.
- Subheadline (18px, `#6b7280`, max-w 560px): `"Formación estructurada, proveedores verificados y un grupo de personas que ya están vendiendo. No es un curso. Es una sociedad."`
- Primary CTA button (red, rounded-lg, 14×32 padding): `"Quiero entrar → Aplicar ahora"` → `onApply()`.
- Helper text (12px, gray): `"Aplicar no te obliga a nada — en 2 minutos sabes si encajas"`.
- VSL embed: centered `aspect-video` iframe wrapper, max-w 720px, mt-10, rounded-xl with `border border-[#e5e7eb]`. Use a YouTube placeholder iframe (`https://www.youtube.com/embed/dQw4w9WgXcQ`) the user can swap. Caption below (13px gray): `"Mira el vídeo completo antes de continuar"`.

`OrbitingAvatarsCTA.tsx` stays in repo (unused) — we keep it for later reuse.

### 3. Benefits — enriched list (no cards)
Rewrite `src/components/landing/Benefits.tsx`:
- H2 centered (36px, bold): `"Todo lo que necesitas para ganar dinero revendiendo"`.
- Sub centered (gray, max-w 520px): `"Sin rodeos. Sin teoría vacía. Esto es lo que tienes desde el primer día."`.
- Grid `md:grid-cols-2 gap-x-12 gap-y-10` of 6 items. Each item: Lucide icon (Package, Handshake, MessageCircle, Phone, Trophy, Lock) in a 40×40 square with red `#e31c1c` color, no card background; title bold 16px, description 14px gray. Use the 6 copy blocks from the prompt.

### 4. New component — `FocusRail`
Create `src/components/landing/FocusRail.tsx`:
- Props: `items: { id; title; description; imageSrc; meta }[]`, `autoPlay?: boolean`, `interval?: number`.
- Layout: dark `bg-neutral-950` section, padding y-20. Two-column grid `lg:grid-cols-[1fr_1.2fr]` max-w 6xl mx-auto.
  - Left column: vertical list of items. Active item is white text + red left-border 2px + slightly larger; inactive items are `text-neutral-500`. Click changes active.
  - Right column: large image (`rounded-2xl`, aspect 4/3) showing active item's `imageSrc` with a meta chip overlay.
- Auto-advance with `setInterval` when `autoPlay`, paused on hover (use `useState` for `isHover`).
- Use `framer-motion` `AnimatePresence` for image cross-fade.
- On mobile (`<lg`): stack vertically, image first then list, simpler scroll behaviour.

### 5. Modules section in `Index.tsx`
Add a wrapper section with H2 `"Un paso a paso para vender desde la primera semana"` + sub `"Validado por los miembros del primer batch."` (centered, padding y-16 on white) and then render `<FocusRail items={moduloItems} autoPlay interval={5000} />` below it (the FocusRail itself is dark — only black block in the page).

### 6. FOMO block — strip the black background
Rewrite `src/components/landing/FomoBlock.tsx`:
- White background with `border-y border-[#e5e7eb]`, py-16.
- H2 black centered, sub red, list of 6 items centered max-w-520px each prefixed with `→` in red, italic gray closing line. Use the exact copy from the prompt.

### 7. Testimonials — 3 columns animated
Rewrite `src/components/landing/Testimonials.tsx`:
- H2 black centered: `"Lo que dicen los que ya están dentro"`. Sub gray: `"Sin editar."`.
- Replace the current 35-item dataset with the new 34-item array from the prompt.
- Use existing `TestimonialsColumn` in a `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[700px] overflow-hidden` with durations 25/20/30. Hide col2 below md, col3 below lg.

### 8. Pricing — refresh copy/structure
Edit `src/components/landing/Pricing.tsx`:
- Sub: `"El precio actual está garantizado mientras mantengas tu plaza activa."`
- Base card: bg `#f9f9f9`, remove top-4 black border, badge `ACCESO BASE`, drop the "Soporte entre miembros" item (use exact 5-item list from prompt).
- Anual card: drop "Acceso prioritario a novedades…" wording change to `"Acceso prioritario a nuevos proveedores"`. Keep red border + featured badge.
- Both buttons unchanged in behaviour.

### 9. FAQ — replace items
Edit `src/components/landing/Faq.tsx` items array with the 7 Q/A pairs from the prompt. Keep current accordion + AnimatePresence behaviour, ensure `+`/`−` icon is in red `#e31c1c`.

### 10. Announcement bar / Ticker / Footer
- `AnnouncementBar.tsx`: keep as-is (already matches copy).
- `Ticker.tsx`: keep dark band (only other dark accent), already infinite-marquee. Add 1 missing item `"Acceso inmediato"` to match prompt.
- `Footer.tsx`: keep as-is (matches spec).

### 11. Apply form — situation + budget copy tweaks
Edit `src/pages/Apply.tsx`:
- Step 2 options to the 4 strings from the prompt (current 4th already matches close enough — align exactly).
- Step 3 budget labels to: `"Menos de €100"`, `"€100–€300"`, `"€300–€1.000"`, `"Más de €1.000"` (drop the trailing descriptions). Tags unchanged.
- Spinner text to: `"Procesando tu aplicación…"`.

### 12. Thanks — already correct
`src/pages/Thanks.tsx` already routes by tag (`llamada`/`anual` → Calendly placeholder, `base` → access button, `downsell` → pack link). Quick pass to ensure copy matches the spec; minor edits only if needed.

### 13. Index.tsx wiring
Insert the new Modules section between `Steps` and `FomoBlock` (or replace `Steps` if redundant). Decision: keep `Steps` removed in favour of the new FocusRail modules block — order becomes:
`AnnouncementBar → StickyNav → Hero → Ticker → Benefits → ModulesSection (FocusRail) → FomoBlock → Testimonials → Pricing → Faq → Footer`.

### Files
- New: `src/components/landing/FocusRail.tsx`
- Edit: `src/index.css`, `src/components/landing/Hero.tsx`, `Benefits.tsx`, `FomoBlock.tsx`, `Testimonials.tsx`, `Pricing.tsx`, `Faq.tsx`, `Ticker.tsx`, `src/pages/Apply.tsx`, `src/pages/Thanks.tsx`, `src/pages/Index.tsx`

### Out of scope
- Real Calendly link, real VSL video URL, Stripe/checkout, backend persistence of form answers, analytics. All remain placeholders.
