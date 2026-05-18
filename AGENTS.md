# Agents / AI context — lukasznowak.dev

Kontekst właściciela: `~/Documents/nowy-kontekst/profil/bio.md`
Kontekst strony: `~/Documents/nowy-kontekst/projekty/lukasznowak-dev.md`

---

## Portfolio — źródło prawdy

Opisy projektów żyją w `~/Documents/nowy-kontekst/projekty/*.md`.
Każdy plik ma sekcję `## Portfolio` z flagami:

```
show: true/false   — czy projekt jest widoczny na stronie
order: N           — kolejność na liście
type: klient|własny
featured: true/false
Karta — tytuł / Karta — opis / Link
```

**ZASADA:** nigdy nie edytuj opisów projektów bezpośrednio w kodzie
strony. Zawsze aktualizuj plik w `projekty/*.md`, a potem
synchronizuj stronę.

---

## Jak dodać projekt do portfolio

1. Otwórz `~/Documents/nowy-kontekst/projekty/<projekt>.md`
2. Ustaw `show: true` i `order: N`
3. Wypełnij `Karta — tytuł` i `Karta — opis` jeśli puste
4. W `components/ProjectsSection.jsx` dodaj wpis do tablicy `projects`:
   ```js
   {
     number: '0N',
     title: '<Karta — tytuł>',
     category: 'E-commerce|Aplikacja|Narzędzie|...',
     description: '<Karta — opis>',
     tags: ['Tag1', 'Tag2'],
     href: '/projekt/<slug>',
   }
   ```
5. Upewnij się że istnieje strona `/app/projekt/<slug>/page.jsx` (lub `.tsx`)

---

## Jak usunąć projekt z portfolio

1. W `~/Documents/nowy-kontekst/projekty/<projekt>.md` ustaw `show: false`
2. Usuń wpis z tablicy `projects` w `components/ProjectsSection.jsx`

---

## Aktualne projekty (show: true)

**Zawsze sprawdzaj pliki `projekty/*.md` przed edycją — to jest dynamiczne.**

Stan na 2026-05-18:

| Plik                | show  | order | type    | Na stronie? |
|---------------------|-------|-------|---------|-------------|
| strzykawa.md        | true  | 1     | klient  | ✓ #01       |
| when.md             | true  | 2     | własny  | ✓ #02       |
| job-odyssey.md      | true  | 3     | własny  | ✓ #03       |
| uknuta-magia.md     | true  | 4     | klient  | ✓ #04       |
| peria.md            | true  | 5     | własny  | ✓ #05       |
| dziennik.md         | false | 4     | własny  | ✗ (celowo)  |
| jakmyslisz.md       | false | 6     | własny  | ✗ (celowo)  |
| bractwo.md          | —     | —     | —       | nie jest projektem portfolio |

---

## Stack strony

| Technologia            | Wersja     | Rola                        |
|------------------------|------------|-----------------------------|
| Next.js                | ^15.3.1    | Framework (App Router)      |
| React                  | ^19.0.0    | UI                          |
| react-dom              | ^19.0.0    | Renderer                    |
| geist                  | ^1.7.0     | Font (Geist Sans/Mono)      |
| @netlify/plugin-nextjs | ^5.15.9    | Netlify deployment          |
| eslint                 | ^9.39.1    | Linting                     |
| eslint-config-next     | ^15.3.1    | Next.js ESLint rules        |

> Hosting: Netlify (nie Vercel). SEO: react-helmet-async wzmiankowane
> w `lukasznowak-dev.md`, ale nie widać go w package.json — sprawdź
> `app/layout.jsx` lub `<head>` meta tags.

---

## Konwencje — gdzie żyją dane i jak dodać projekt

### Dane projektów (homepage cards)

**Plik:** `components/ProjectsSection.jsx`, linie 4–37  
**Struktura:** hardcoded tablica `projects[]` — brak zewnętrznego pliku danych.

```js
// Każdy wpis w tablicy projects:
{
  number: '01',       // string z zerem wiodącym, kontroluje kolejność
  title: string,      // wyświetlany tytuł karty
  category: string,   // tag obok numeru (E-commerce | Aplikacja | ...)
  description: string,// krótki opis (1-2 zdania, polski)
  tags: string[],     // stack / technologie
  href: string,       // '/projekt/<slug>'
}
```

Tablica jest renderowana w `ProjectsSection` (linia 47) przez `.map()`.
Komponenty używają alternating animation: `slide-in-left` (parzyste) /
`slide-in-right` (nieparzyste).

### Powiązane projekty (sidebar na podstronach)

**Plik:** `components/RelatedProjects.jsx`, linie 3–9  
**Struktura:** osobna tablica z polami `{ slug, label, category }`.  
Zawiera WHEN (ukryte z homepage, ale dostępne jako related).

### Podstrony projektów

Każdy projekt ma własną stronę w `app/projekt/<slug>/`.  
Przykłady: `WhenPage.jsx`, `PeriePage.jsx`, etc.

### Sitemap

`app/sitemap.js` — ręcznie utrzymywana lista slugów. Przy dodaniu projektu
zaktualizuj też ten plik.

---

## Log zmian (najnowsze na górze)

```
2c4b06f feat: move hero brands to right column, align with CTA
9a72a42 feat: add WebGL FBM shader background
d7c062c Mention WHEN in Services, Pricing, and FAQ — with inline logo
bf2f150 Move WHEN brand to hero as clickable logo with glitch animation
8720a83 Add WHEN as authored tool: home section + project subpage
e6102b8 feat: improve SEO — twitter cards, keywords, sameAs on all pages
a1cb891 refactor: extract ProjectPageLayout, remove dead blog code, update footer
e70b28a fix: Job Odyssey — Stack na ciemnym, CTA na jasnym
56eb652 fix: tagi stacku — kremowe tło + czarny font jak karty na głównej
e5a6ceb fix: slide-in-left na labelach, ciemne przyciski CTA na jasnych sekcjach
2747fd4 feat: spójny wygląd stron projektów — naprzemienne sekcje + animacje
67523fb fix: popraw link do profilu Useme w footerze
d600151 Fix footer tech icons: uniform color, larger size, stack below copyright
ca4fca1 Remove custom chat button, use default Tawk.to widget
d054d89 Remove custom chat button, use default Tawk.to widget
```
