# Taxomation – taxomation.at (v2)

Statische Website (Hugo 0.169 extended): Hauptseite + Landingpages je Berufsgruppe unter `taxomation.at/<slug>/`.
Neuaufbau vom 18.11.2026. **Nichts davon ist veröffentlicht** – nur lokale Vorschau.

## Bauen / Vorschau
    /home/box/tools/hugo/hugo server          # lokal, http://localhost:1313
    /home/box/tools/hugo/hugo --gc --minify   # Ausgabe in public/

## Wo was gepflegt wird
| Datei | Inhalt |
|---|---|
| `data/site.yaml` | Schalter (Preise, Service-Versprechen, Erfahrungs-Formulierung, Berufsgruppen), Kontakt, Betreiberin |
| `data/leistungen.yaml` | Pakete + Preise, Einzelleistungen, Kanzleiwechsel, individuelle Leistungen, Ablauf, Säulen, FAQ Hauptseite |
| `data/branchen.yaml` | Gruppen + alle Landingpages (Title, Meta, H1, Lead, 4 Themen, Paketempfehlung, FAQ) |
| `content/_content.gotmpl` | erzeugt aus `branchen.yaml` automatisch eine Seite je Eintrag (`/<slug>/`) |
| `content/impressum.md`, `content/datenschutz.md` | Rechtstexte |
| `assets/css/main.css`, `assets/js/main.js` | Design, Einblenden, Paketfinder |

Neue Berufsgruppe: Block in `data/branchen.yaml` kopieren, `slug` anpassen – Seite, Hauptseiten-Link, Sitemap und JSON-LD entstehen automatisch.
Neue Leistungsübersicht der Produktentwicklung: nur `data/leistungen.yaml` tauschen.

## Schalter (data/site.yaml)
| Schalter | Stand | Wirkung |
|---|---|---|
| showPrices | true | „ab“-Preise (von Andreas am 11.11. bestätigt); false = „auf Anfrage“ |
| showServicePromise / servicePromise | true / „Antwort binnen 1 Werktag“ | Hero, Trust-Leiste, Landingpages, FAQ |
| experienceClaim | neutral | neutral = „Langjährige Erfahrung…“, decades = „Jahrzehnte an Erfahrung…“, year = „…seit <foundingYear>“ (foundingYear ist leer) |
| switches.showBuakTrades | true | Landingpage Zimmerei/Holzbau (BUAK) erzeugen + verlinken |
| switches.showApotheker | true | Landingpage Apotheker:innen |

## Design
Königsblau `#22409A` (Kontrast 9,3:1 auf Weiß), Navy `#0F1E45` (Headlines/Footer), Text `#3D4556`, Nebentext `#5B6375` (6,0:1).
Schriften selbst gehostet (SIL OFL 1.1): Newsreader (Headlines, Variable 400–600 + Italic 500) und Inter (Fließtext).
Logo-Varianten in Blau: `../logo-final-blau/` (rote Originale unverändert in `../logo-final/`). OG-Bild-Vorlage: `../og/og-v2.html`.
Keine Cookies, keine Tracker, keine externen Fonts/CDNs, keine Stock- oder KI-Bilder.

Interne offene Punkte werden außerhalb dieses Repos geführt.

## Deployment
GitHub-Repo `taxomation-site`, GitHub Pages über Actions (`.github/workflows/hugo.yml`), Custom Domain `taxomation.at` (`static/CNAME`).
