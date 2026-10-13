var e=`# Kod

Większość mojego kodu powstaje po to, żeby ktoś (często ja sam) nie musiał czegoś robić ręcznie. Część jest publiczna, większość pracuje u klientów i w firmach, w których działam. Najważniejsze opisuję szerzej w [projektach](/projects).

<p class="repos"><a href="https://github.com/tibicen"><img src="/images/github.webp" alt="GitHub" width="96" height="96"></a> <a href="https://gitlab.com/tibicen"><img src="/images/gitlab.webp" alt="GitLab" width="96" height="96"></a></p>

## Energetyka i dane

- **Sterownik farm fotowoltaicznych** (od 2022) – serwis łączący dane rynku energii, pogody i nasłonecznienia. Zatrzymuje i wznawia produkcję przy ujemnych cenach, przewiduje skoki cen. Rozwijany dalej w [Leysie](https://leysa.pl).
- **Analizy przestrzenne pod OZE** (2023–2026) – parametryczna geometria dla farm wiatrowych, PV i inwestycji liniowych z prognozą miesięcznej rentowności.
- **Analiza danych budowlanych** (2024–2026) – modele 3D, rysunki i specyfikacje sprowadzone do jednej bazy; lokalne modele wizyjne do odczytu dokumentacji.

## BIM i Revit

- **Generator planów sytuacyjnych** (2022–2024) – trójwymiarowy plan sytuacyjny z publicznych danych GIS i chmur punktów, wczytywany prosto do Revita.
- **Dodatki do Revita** – narzędzia do startu projektu, raportowania i masowej weryfikacji modeli, rozwijane w biurach, w których pracowałem.
- **CI/CD w projektowaniu** – automatyczne sprawdzanie modeli przy każdej zmianie, na runnerach GitLaba.
- [Stare skrypty do AutoCADa](https://github.com/tibicen/cad).

![Dodatek do Revita w trakcie prac](/images/code/revit-addin.jpg)

## Blender

- [Simple Asset Manager](https://gitlab.com/tibicen/simple-asset-manager) – menedżer zasobów z automatycznymi miniaturami.
- **Solar Analysis** – analiza nasłonecznienia budynków i planów urbanistycznych według polskich przepisów, godzinowa lub dla dowolnego okresu.
- [meshroom2blender](https://github.com/tibicen/meshroom2blender) – import danych fotogrametrycznych z AliceVision Meshroom.
- [Importer IFC](https://github.com/IfcOpenShell/IfcOpenShell) dla Blendera 2.80 – porządki i optymalizacja, dziś zastąpiony przez Bonsai (dawniej BlenderBIM).
- **Web VR** – eksport przestrzeni z Blendera prosto do strony HTML.

## Inne

- **DogAlone** – aplikacja webowa, która rozpoznaje wycie psa zostawionego w domu i odtwarza nagrany, uspokajający głos właściciela.
- [Inkscape Master Page Export](https://gitlab.com/tibicen/inkscape-master-page-export) – eksport warstw z zawsze widoczną „stroną wzorcową”, jak w InDesignie.
- **CV na żywo** – Markdown zamieniany w CV czytelne na telefonie, w przeglądarce i na papierze.
- **PKU** – aplikacja na Androida dla osób z fenyloketonurią, które potrzebują bardzo ścisłych informacji o diecie.
- **Finanse** – statystyki i wykresy wydatków, offline.
- [Drobne skrypty](https://github.com/tibicen/random-scripts), np. rozmieszczanie pomieszczeń na podstawie wag powiązań.
- Zamknięte: [statystyki czatów Messengera](https://github.com/tibicen/messengerStats), [statystyki połączeń z bilingu](https://github.com/tibicen/call-stats), [Material Pass dla Blendera 2.79](https://github.com/tibicen/blender-scripts/blob/master/materialPass.py), [Scrabble Solver na Androida](https://github.com/tibicen/ScrabbleSolver).

## Strony WWW

Zaczęło się od drobiazgów w WordPressie, które nie pasowały do mojej wizji. Tak nauczyłem się CSS, potem Flaska, JavaScriptu, a w końcu Svelte. Ta strona to SvelteKit, statycznie generowany, w dwóch językach.

- [leysa.pl](https://leysa.pl)
- [tendra.is](https://www.tendra.is/)
- [r2.pl](https://r2.pl/)
`;export{e as default};