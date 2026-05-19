# CONTENT.md — treści strony lukasznowak.dev

> **Zasady współpracy z tym plikiem**
>
> - Ten plik jest **mostem między marketingiem a kodem**.
> - Marketingowiec edytuje treści tutaj.
> - Developer (Claude / Łukasz) na polecenie synchronizuje plik z komponentami.
> - **Nie edytuj bezpośrednio plików `.jsx`** — zmiany treści zawsze przez ten plik.
> - Sekcja **Projekty** ma osobne źródło prawdy: `~/Documents/nowy-kontekst/projekty/*.md`
>   (patrz `AGENTS.md`). Tutaj jest tylko odwołanie.

---

## Kolejność sekcji na stronie

1. Hero
2. O mnie
3. Usługi
4. Projekty *(zarządzane przez projekty/*.md)*
5. Proces
6. Dla kogo
7. Cennik
8. FAQ
9. Kontakt
10. Footer

---

## 1. SEO / Meta

> Plik: `app/layout.jsx` i `app/page.jsx`

```
title:       Łukasz Nowak — Strony WWW, Sklepy, Aplikacje | Częstochowa
description: Łukasz Nowak — tworzenie stron internetowych, sklepów e-commerce,
             automatyzacji i projektów webowych. Częstochowa i cała Polska.
             lukasznowak.dev

OG / Twitter title:       Łukasz Nowak — Web Development
OG / Twitter description: Tworzenie stron internetowych, sklepów e-commerce
                          i automatyzacji. Częstochowa i cała Polska.
```

---

## 2. Hero

> Plik: `components/HeroSection.jsx`

```
Nagłówek H1:    ŁUKASZ NOWAK

Opis główny:    Projektuję i koduję strony internetowe, sklepy i narzędzia webowe.

Tagi (pasek):   Strony WWW  •  E-commerce  •  Aplikacje webowe

Przycisk CTA:   POROZMAWIAJMY →
                (przewija do sekcji Kontakt)

Autorskie marki (prawa kolumna):
  Label:  Autorskie marki
  Marka:  WHEN → /projekt/when
  (kolejne marki można dodawać w tablicy `brands`)
```

---

## 3. O mnie

> Plik: `components/AboutSection.jsx`

```
Label / nagłówek sekcji:  Kilka słów o mnie

Akapit 1:
Jestem Łukasz — projektuję i koduję strony, sklepy internetowe i aplikacje webowe.
Pracuję samodzielnie, więc od początku do końca rozmawiasz z osobą, która realnie
buduje projekt. Bez pośredników.

Akapit 2:
Poza pracą dla klientów buduję też własne narzędzia internetowe. Zauważam problemy,
upraszczam procesy i tworzę rzeczy, które rozwiązują konkretne potrzeby. Dzięki temu
patrzę na projekty nie tylko jak developer, ale też jak ktoś, kto pyta — po co ta
funkcja istnieje i czy naprawdę ma sens.

Akapit 3:
Lubię proste rozwiązania, jasny proces i rzeczy, które mają konkretny cel. Bez
nadmiaru funkcji, bez przekombinowania — z naciskiem na czytelność, szybkość
i możliwość dalszego rozwoju.

Akapit 4 (meta):
Mieszkam w Częstochowie, pracuję dla klientów z całej Polski.
```

---

## 4. Usługi

> Plik: `components/ServicesSection.jsx`

```
Label / nagłówek sekcji:  Co robię
```

### Usługa 01 — Strony WWW

```
Tytuł:       STRONY WWW

Opis:
Tworzę strony, które przyciągają klientów, budują zaufanie i zamieniają
odwiedzających w kontakt lub sprzedaż. Szybkie, czytelne, z charakterem Twojej
marki. Wizytówka firmy, landing page, portfolio — bez szablonów, bez page builderów,
od zera.

Przykład (kursywa/mniejszy tekst):
Prowadzisz gabinet, studio albo firmę usługową i klienci Cię nie znajdują?
Potrzebujesz strony, która pokaże czym się zajmujesz i przekona do kontaktu.
Od tego zaczynam.

Addon WHEN:
  Przed logo: Prowadzisz salon, gabinet albo studio? Mogę dopiąć
  Po logo:    — mój autorski system rezerwacji online. Klient rezerwuje sam,
              Ty otwierasz panel. Bez miesięcznych opłat za zewnętrzny SaaS.
```

### Usługa 02 — E-commerce

```
Tytuł:       E-COMMERCE

Opis:
Sklepy internetowe, które nie tylko wyglądają — sprzedają. Buduję na Shopify
z własnym frontendem i dbam o to, żeby ścieżka klienta była prosta: od produktu
do koszyka, od koszyka do płatności. Bez zgubienia się po drodze.

Przykład:
Masz produkt i chcesz go sprzedawać online — kawę, książkę, rękodzieło?
Postawię Ci sklep, w którym Twój klient kupi w 3 kliknięcia, a Ty będziesz
zarządzać zamówieniami bez bólu głowy.
```

### Usługa 03 — Aplikacje webowe

```
Tytuł:       APLIKACJE WEBOWE

Opis:
Buduję aplikacje webowe, które porządkują procesy, automatyzują pracę i oszczędzają
czas — Tobie albo Twoim klientom. Od prostych narzędzi po rozbudowane panele z bazą
danych, logowaniem i integracjami z AI. Działają w przeglądarce i na telefonie.

Przykład:
Masz pomysł na narzędzie, które ułatwi Ci pracę albo da wartość Twoim klientom?
Tracker, dashboard, system do zarządzania — powiedz co chcesz osiągnąć, a ja
zbuduję to od zera.
```

---

## 5. Projekty

> Plik: `components/ProjectsSection.jsx`
> **Źródło prawdy: `~/Documents/nowy-kontekst/projekty/*.md`** — patrz AGENTS.md.
> Przy zmianach w projektach edytuj tamte pliki, nie ten.

```
Label / nagłówek sekcji:  Wybrane projekty
```

Aktualna kolejność kart (zgodna z `order:` w plikach .md):

| # | Projekt | Typ |
|---|---------|-----|
| 01 | Strzykawa — headless Shopify dla lokalnej palarni kawy | klient, featured |
| 02 | WHEN — system rezerwacji bez prowizji dla mikrofirm | własny, featured |
| 03 | Peria — voice-first PWA inspirowana filozofią perypatetyków | własny |
| 04 | Job Odyssey — tracker aplikacji rekrutacyjnych z CV trackowaniem | własny |
| 05 | Uknuta Magia — e-commerce MVP dla autora książki dziecięcej | klient |

---

## 6. Proces

> Plik: `components/ProcessSection.jsx`

```
Label:          Jak pracuję
Nagłówek H2:    Od rozmowy
                do wdrożenia.
Intro:          Żadnych niespodzianek, żadnych niejasności. Zawsze wiesz co i kiedy
                się dzieje.
```

### Kroki

```
01  Rozmowa
    Na początku rozmawiamy o tym, czego potrzebujesz i co chcesz osiągnąć.
    Sprawdzamy, czy dobrze się rozumiemy i czy to projekt, który warto realizować razem.

02  Brief i wycena
    Na podstawie rozmowy przygotowuję brief z zakresem, propozycją techniczną
    i wyceną. Dostajesz to na piśmie zanim cokolwiek podpiszesz.

03  Umowa i zaliczka
    Krótka umowa — zakres, terminy, prawa autorskie, gwarancja. Zaliczka 30-50%
    na start. Wszystko jasne zanim zaczynam pisać pierwszy wiersz kodu.

04  Projektowanie i kod
    Pracuję i na bieżąco pokazuję postępy — przez live demo, staging albo
    repozytorium. Żadnych niespodzianek na końcu.

05  Demo i korekty
    Udostępniam gotową wersję do oceny. Masz rundę korekt w cenie — zmiany
    mieszczące się w ustalonym zakresie projektu.

06  Wdrożenie
    Wgrywam na serwer, konfiguruję domenę, SSL, monitoring. Sprawdzam na
    urządzeniach mobilnych, tabletach i desktopie. Dopiero potem faktura końcowa.
```

---

## 7. Dla kogo

> Plik: `components/ForWhomSection.jsx`

```
Label:        Klient
Nagłówek H2:  Dla kogo pracuję.
```

### Lista

```
01  Małe firmy i freelancerzy szukający pierwszej porządnej strony
02  Firmy, które wiedzą, że ich strona zatrzymała się kilka lat temu
03  Twórcy i autorzy z produktem do sprzedaży online
04  Startupy potrzebujące MVP bez przepłacania agencji
05  Firmy, którym nie podoba się własna strona, ale nie wiedzą dlaczego
```

---

## 8. Cennik

> Plik: `components/PricingSection.jsx`

```
Label:        Cennik
Nagłówek H2:  Punkt wyjścia.

Intro akapit 1:
W przypadku bardziej złożonych projektów odpowiedź na pytanie „ile to kosztuje?"
najczęściej brzmi: „to zależy". Zakres funkcji, termin realizacji, integracje czy
specyfika branży potrafią mocno wpłynąć na końcową wycenę.

Intro akapit 2:
Dlatego poniżej podaję orientacyjne ceny startowe, które pomagają określić punkt
wejścia. Dopiero po krótkiej rozmowie i dobraniu odpowiednich rozwiązań mogę
przygotować realną, indywidualną wycenę dopasowaną do konkretnego projektu.
```

### Pakiet 1 — Strona WWW

```
Typ:          Strona WWW
Tagline:      Prezentacja firmy
Dla kogo:     Dla małych firm, freelancerów i lokalnych biznesów
Cena od:      od 2 500 zł
Widełki:      Najczęściej: 3 000 – 4 500 zł
Opis:         Wizytówka, strona firmowa, landing page lub portfolio.

Zawiera:
  + Projekt i kod od zera
  + Responsywna na każdym urządzeniu
  + SEO techniczne i meta tagi
  + Formularz kontaktowy
  + Wdrożenie i konfiguracja domeny

Addon WHEN:   Opcjonalnie: integracja z autorskim systemem rezerwacji

CTA:          Zapytaj o wycenę
```

### Pakiet 2 — Sklep internetowy

```
Typ:          Sklep internetowy
Tagline:      Sprzedaż online
Dla kogo:     Dla marek, twórców i biznesów sprzedających produkty
Cena od:      od 5 500 zł
Widełki:      Najczęściej: 6 500 – 9 000 zł
Opis:         Shopify lub własny sklep w Next.js z pełną obsługą zamówień.

Zawiera:
  + Koszyk, checkout, płatności online
  + Panel zarządzania produktami
  + Integracja z bramką płatniczą
  + E-mail po zamówieniu
  + SEO e-commerce

CTA:          Zapytaj o wycenę
```

### Pakiet 3 — Aplikacja webowa

```
Typ:          Aplikacja webowa
Tagline:      Automatyzacja i system biznesowy
Dla kogo:     Dla startupów, SaaS i firm potrzebujących narzędzia
Cena od:      od 8 000 zł
Widełki:      Najczęściej: 10 000 – 18 000 zł
Opis:         Dashboard, SaaS, narzędzie wewnętrzne lub MVP z backendem.

Zawiera:
  + React / Next.js + baza danych
  + Logowanie i konta użytkowników
  + API i integracje zewnętrzne
  + Panel administracyjny
  + Deploy i hosting

CTA:          Zapytaj o wycenę
```

### W każdym pakiecie

```
✓  3 miesiące wsparcia po wdrożeniu
✓  Kod w Twoim repozytorium
✓  Bez vendor lock-in — strona zostaje Twoja
```

### Nota końcowa

```
Nie wiesz który pakiet pasuje? Napisz — razem to ustalimy.
```

---

## 9. FAQ

> Plik: `components/FaqSection.jsx`

```
Label:        Pytania
Nagłówek H2:  Co klienci pytają
              najczęściej.
```

### Pytania i odpowiedzi

```
Q01: Ile trwa realizacja?
A:   Strona firmowa zwykle 2–4 tygodnie, sklep 4–8 tygodni, aplikacja 6–12 tygodni —
     zależnie od zakresu. Konkretny termin podaję po pierwszej rozmowie i briefie.
     Nie biorę kilku projektów naraz, więc Twój ma pełną uwagę.

Q02: Jak wygląda płatność?
A:   30–50% zaliczki na start, reszta po wdrożeniu. Większe projekty mogę dzielić
     na transze rozliczane po milestone'ach. Faktura VAT.

Q03: Co jeśli w trakcie chcę coś zmienić?
A:   To naturalne — projekty żyją. Drobne korekty mieszczą się w ustalonym zakresie.
     Większe zmiany kierunku (np. „dodajmy panel klienta, którego nie było w briefie")
     wyceniam osobno przed startem, żebyś nie miał niespodzianek na fakturze.

Q04: Czy mogę sam edytować treści?
A:   To zależy od projektu. Jeśli planujesz częste zmiany treści, mogę dodać prosty
     panel do edycji. Jeśli strona ma być raczej stała, często lepiej sprawdza się
     lżejsze rozwiązanie bez CMS-a — szybsze i tańsze w utrzymaniu.

Q05: Czy możesz przerobić istniejącą stronę?
A:   Przeważnie wolę zaczynać od zera, bo to wychodzi szybciej i czyściej niż łatanie
     cudzego kodu. Wyjątki: jeśli strona jest świeża i dobrze napisana, mogę
     kontynuować. Powiedz co masz, ocenimy razem.

Q06: Co dostaję po zakończeniu projektu?
A:   Wszystko: kod, dostęp do repozytorium, dokumentację, dane logowania do hostingu
     i domen. Bez vendor lock-in, bez „prywatnych frameworków". Jutro możesz przekazać
     projekt komukolwiek innemu i będzie się czuł jak w domu.

Q07: Czy tworzysz strony od zera czy na gotowych rozwiązaniach?
A:   Buduję od zera, bo wtedy projekt jest szybszy, lżejszy i dopasowany do
     konkretnego celu. Nie zaczynam od gotowego motywu — buduję rozwiązanie pod Twój
     biznes i zakres funkcji.

Q08: Czy podpiszesz NDA?
A:   Tak, bez problemu — szczególnie przy projektach przed launchem. Możesz przesłać
     swój wzór albo skorzystać z mojego.

Q09: Czy możesz pomóc też z treściami, SEO albo zdjęciami?
A:   Mam sprawdzone osoby, z którymi współpracuję — copywriterzy, fotografowie,
     specjaliści od SEO. Mogę podpiąć ich do projektu i koordynować, żebyś nie
     musiał zarządzać kilkoma freelancerami naraz.

Q10: Mam salon / gabinet — możesz dodać rezerwacje online?
A:   Tak — mam autorski system rezerwacji, który mogę wpiąć w Twoją stronę widgetem
     (jedna linijka HTML) albo wdrożyć jako osobną stronę rezerwacji. Klient rezerwuje
     sam, Ty otwierasz panel. Bez miesięcznych opłat za zewnętrzny SaaS, bez
     vendor lock-inu.
     [link do WHEN]
```

---

## 10. Kontakt

> Plik: `components/ContactSection.jsx`

```
Label / nagłówek sekcji:  Kontakt

Email:        kontakt@lukasznowak.dev

Opis obok formularza:
Masz pomysł na projekt? Napisz do mnie — chętnie porozmawiam o Twoich potrzebach
i zaproponuję rozwiązanie.

Formularz — placeholdery:
  Imię:        Twoje imię
  Email:       twoj@email.pl
  Wiadomość:   Opisz krótko czego potrzebujesz — stronę, sklep, aplikację?
               Im więcej napiszesz, tym lepiej będę mógł pomóc.
  Przycisk:    WYŚLIJ WIADOMOŚĆ

Komunikaty formularza:
  Sukces:  Wiadomość wysłana. / Postaram się odpowiedzieć jak najszybciej.
  Błąd:    Coś poszło nie tak. Napisz bezpośrednio na kontakt@lukasznowak.dev
```

---

## 11. Footer

> Plik: `components/Footer.jsx`

```
Logo:         LN
Imię:         Łukasz Nowak
Lokalizacja:  Częstochowa · Polska
Email:        kontakt@lukasznowak.dev

Nawigacja:
  Usługi    → /#uslugi
  Projekty  → /#projekty
  Cennik    → /#cennik
  Kontakt   → /#kontakt

Social:
  GitHub    → https://github.com/enowuigrek
  LinkedIn  → https://linkedin.com/in/lukasznowak-dev
  Useme     → https://useme.com/pl/roles/contractor/lukasz-nowak,631474/

Copyright:    © [rok] Łukasz Nowak
Stack icons:  Next.js · React · Netlify
```

---

## Jak aktualizować treści

### Schemat pracy

```
[Co-work / marketing] edytuje CONTENT.md
         ↓
[Łukasz lub Claude] synchronizuje komponenty z CONTENT.md
```

### Co można zmieniać bez ryzyka

- Wszystkie teksty, nagłówki, opisy, placeholdery
- Ceny i widełki w sekcji Cennik
- Pytania i odpowiedzi w FAQ (dodawać, usuwać, edytować)
- Lista "Dla kogo"
- Kroki procesu
- Linki social media
- Dane kontaktowe

### Co wymaga ostrożności

- **Projekty** — edytuj w `projekty/*.md`, nie tutaj
- **Addon WHEN** — pojawia się w Usługach i Cenniku. Zmiana tekstu wymaga
  aktualizacji w obu miejscach
- **SEO meta** — zmiany w `app/layout.jsx` i `app/page.jsx`
