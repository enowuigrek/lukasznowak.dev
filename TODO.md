# Checklista — co musisz zrobić sam

Lista rzeczy, których nie da się (lub nie powinno) zautomatyzować z Claude Code.
Posortowane od najpilniejszych.

---

## 🔴 BLOCKERY przed deployem na produkcję

### 1. Logo / branding
- [ ] Zaprojektuj/zleć **prawdziwe logo** — teraz wszędzie jest placeholder `LN` w ramce
  - Pliki do podmiany:
    - `public/favicon.svg` (16×16, 32×32 — uproszczona wersja)
    - `public/og-image.svg` (1200×630, dla Open Graph na social media)
    - `components/Navbar.jsx` → `<button className="navbar-logo">LN</button>`
    - `components/Footer.jsx` → `<div className="footer-logo">LN</div>`
- [ ] Upewnij się że logo działa na ciemnym I jasnym tle (sekcje są mieszane)

### 2. Treści — sprawdź / przepisz
- [ ] **Hero opis**: aktualnie *"React, Next.js, Supabase. Frontend, backend, deploy. Sam."* — pasuje?
- [ ] **AboutSection** — sprawdź czy treść o Tobie jest aktualna
- [ ] **ServicesSection** — 3 kafelki (Strony / E-commerce / Aplikacje), opisy + sub-opisy
- [ ] **ProjectsSection** (`components/ProjectsSection.jsx`):
  - Sprawdź opisy każdego projektu
  - Dodaj brakujące **screenshoty** do `public/screenshots/`:
    - `strzykawa/strzykawa-hero.png` (teraz fallback do logo)
    - `job-odyssey/odyssey-dashboard.png` (teraz brak — pole `image: null`)
    - `uknuta-magia/sklep-hero.png` (teraz fallback do logo)
  - Po dodaniu — zaktualizuj `image:` w `components/ProjectsSection.jsx`
- [ ] **PricingSection** — kwoty (`od 2 500 zł / od 5 500 zł / od 8 000 zł`) — pasują do realiów rynkowych?
- [ ] **ProcessSection** — kroki procesu, czasy realizacji
- [ ] **ForWhomSection** — 5 punktów "dla kogo"
- [ ] **TestimonialsSection** — zastąp przykładowe cytaty **prawdziwymi** od klientów (z ich zgodą!)
- [ ] **FaqSection** (`components/FaqSection.jsx`) — uzupełnij tablicę `faqs = [{q, a}]` realnymi pytaniami
- [ ] **ContactSection** — sprawdź mail (`kontakt@lukasznowak.dev`), dane kontaktowe
- [ ] **Footer** — `Częstochowa · Polska`, social linki (GitHub / LinkedIn / Useme — czy aktualne?)

### 3. SEO i metadata
- [ ] `app/layout.jsx` — `metadata` (title, description) — sprawdź każdy element
- [ ] `app/page.jsx` — meta dla strony głównej
- [ ] Każda podstrona projektu (`app/projekt/*/page.jsx`) — własne `metadata.title` + `description` + `openGraph`
- [ ] **Sitemap** — `public/sitemap.xml` — zaktualizuj o nowe trasy (`/blog`, `/blog/[slug]`, `/cennik` jeśli jako osobna strona)
- [ ] **robots.txt** — `public/robots.txt` — upewnij się że wskazuje na sitemap
- [ ] **og-image.svg** — wygeneruj prawdziwy OG image 1200×630 (najlepiej PNG/JPG, wiele crawlerów ma problemy z SVG)
- [ ] **Structured data JSON-LD** (Person/ProfessionalService) — jest w `app/layout.jsx`, sprawdź czy dane są aktualne
- [ ] Sprawdź na [Google Rich Results Test](https://search.google.com/test/rich-results) po deployu

---

## 🟡 SETUP — usługi zewnętrzne

### 4. Sanity CMS (blog)
Aktualnie blog działa **z fallbackiem na statyczne posty z `data/posts.js`**.
Żeby włączyć Sanity:

- [ ] `npm create sanity@latest` w **osobnym katalogu** (np. `~/sanity-studios/lukasznowak-dev`)
  - Project name: `lukasznowak-dev`
  - Dataset: `production`
  - Template: `Clean project with no predefined schemas`
- [ ] Z tego repo skopiuj `sanity/schema/post.js` → `~/sanity-studios/lukasznowak-dev/schemaTypes/post.js`
- [ ] W `~/sanity-studios/lukasznowak-dev/sanity.config.ts` dodaj `schema: { types: [post] }`
- [ ] `npm run dev` w studio → otwórz `http://localhost:3333` → dodaj pierwszy post
- [ ] Skopiuj **Project ID** z `sanity.config.ts` (lub z https://www.sanity.io/manage)
- [ ] W repo lukasznowak.dev dodaj `.env.local`:
  ```
  NEXT_PUBLIC_SANITY_PROJECT_ID=twoj-project-id
  NEXT_PUBLIC_SANITY_DATASET=production
  ```
- [ ] Te same zmienne dodaj w **Netlify → Site settings → Environment variables**
- [ ] W Sanity Studio → **API → CORS Origins** dodaj `https://lukasznowak.dev` i `http://localhost:3000`
- [ ] Deploy studio: `npx sanity deploy` (dostaniesz `https://lukasznowak-dev.sanity.studio`)
- [ ] Po dodaniu pierwszego prawdziwego posta — usuń fallbackowe posty z `data/posts.js` (opcjonalne)

### 5. Netlify Forms — Chat widget i formularz kontaktowy
Formularze działają **tylko po deployu na Netlify** (na localhost zwracają błąd — to normalne).

- [ ] Po deployu sprawdź **Netlify → Forms** czy widzisz oba formularze:
  - `contact` (główny formularz w sekcji Kontakt)
  - `chat` (floating chat widget)
- [ ] **Włącz powiadomienia mailowe**: Netlify → Forms → Settings & usage → Form notifications → Add notification → Email
- [ ] **Spam protection**: włącz reCAPTCHA lub Akismet (obecnie jest tylko honeypot `bot-field`)
- [ ] Test: wyślij wiadomość przez chat widget i przez formularz kontaktowy — sprawdź czy przyszedł mail

### 6. Domena + Netlify
- [ ] Podłącz domenę `lukasznowak.dev` w Netlify → Domain settings
- [ ] Włącz HTTPS (Let's Encrypt — auto)
- [ ] Sprawdź DNS — A/CNAME records zgodne z Netlify
- [ ] Włącz **Asset optimization** w Netlify (CSS/JS minify, image compression)
- [ ] Włącz **Pretty URLs** (bez `.html`)

---

## 🟢 NICE TO HAVE — po deployu

### 7. Analytics
- [ ] Wybierz: Plausible / Umami / Vercel Analytics / GA4
- [ ] Aktualnie cookie banner zakłada że masz analytics — jeśli nie masz, możesz uprościć tekst w `components/CookieBanner.jsx`

### 8. Treści blogowe (przykładowe pomysły do napisania)
Te posty są obecnie jako fallback w `data/posts.js` — przenieś je do Sanity albo zastąp własnymi:

1. **"Shopify czy własny sklep — co wybrać"** (ok. 800 słów) — porównanie kosztów, prowizji, elastyczności
2. **"Landing page vs strona firmowa"** (ok. 600 słów) — kiedy która, na przykładach
3. **"Strona od zera czy szablon WordPress"** (ok. 700 słów) — jak liczyć ROI, długoterminowe koszty
4. **"Ile kosztuje strona internetowa w 2026"** — konkretne widełki, co wpływa na cenę
5. **"Dlaczego freelancer zamiast agencji"** — szczerze o plusach i minusach
6. **"Case study: jak zrobiłem [projekt] w X tygodni"** — głębsze rozbiory własnych projektów

### 9. Drobne poprawki UX
- [ ] Dodaj `loading="lazy"` do wszystkich `<img>` poniżej fold (część już ma)
- [ ] Sprawdź **Lighthouse** — Performance / Accessibility / Best Practices / SEO
- [ ] Dodaj `aria-label` do interaktywnych przycisków bez tekstu (chat, hamburger)
- [ ] Test na realnym mobile (iOS Safari + Android Chrome) — szczególnie chat widget i scroll guide
- [ ] `prefers-reduced-motion` — wyłącz scroll glitch i drift animations dla użytkowników z preferencją

### 10. Testowanie SEO
- [ ] **Google Search Console** — dodaj domenę, zweryfikuj, prześlij sitemap
- [ ] **Bing Webmaster Tools** — to samo
- [ ] Test `curl https://lukasznowak.dev` — sprawdź czy widzisz pełny HTML (nie tylko `<div id="__next"></div>`)
- [ ] Test `curl https://lukasznowak.dev/projekt/peria` — to samo
- [ ] Sprawdź `<title>` i `<meta description>` w View Source każdej strony

---

## 📦 Zmienne środowiskowe — zestawienie

`.env.local` (lokalnie) i Netlify env vars:

```
# Sanity (opcjonalne — bez tego blog działa na fallbacku)
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=        # tylko jeśli chcesz preview drafts

# Analytics (opcjonalne)
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=lukasznowak.dev
```

---

## 🚀 Deploy checklist (TL;DR przed pierwszym pushem)

1. [ ] Logo zrobione (favicon + og-image)
2. [ ] Wszystkie treści sprawdzone (Hero, About, Services, Projekty z screenshotami, Pricing, Process, ForWhom, FAQ uzupełnione, Testimonials prawdziwe)
3. [ ] Metadata SEO + sitemap.xml zaktualizowane
4. [ ] `npm run build` → bez błędów
5. [ ] `git push` → Netlify auto-deploy
6. [ ] Po deployu: test formularza, test chatu, test wszystkich linków, test mobile
7. [ ] Google Search Console — verify + sitemap
