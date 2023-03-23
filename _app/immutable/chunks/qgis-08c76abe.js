const n=`# QGIS
## Czyli coś co powinno być początkiem każdego projektu.

## [dawid.huczynski.pl/lectures/qgis](https://dawid.huczynski.pl/lectures/qgis)
### [dawid.huczynski@gmail.com](mailto:dawid.huczynski@gmail.com)

---
# Układy wysokościowe
- PL-KRON86-NH – max do grudnia 2023
- PL-EVRF2007-NH 
---
# Projekcje map
<video class="media-element tErWI93xEKrI2OkozPs7J" loop="" style="margin:0 auto;max-height:700px" muted="" width="480" height="480" autoplay>
	<source src="https://external-preview.redd.it/aXDfu0MCpk3IlYhYoi6qwCkQJtkC8899g6NMLQSgtDM.gif?format=mp4&amp;s=1781c829ba794de3588c808a17cc7dfb213f84e6">
</video>

---
# Co nas zwodzi?

- [https://engaging-data.com/pages/scripts/d3projections/projectioncountry2.html](https://engaging-data.com/country-centered-map-projections/?p=0.000,0.000&cat=mercator&angle=0)
- https://www.thetruesize.com/

---
# Quiz
Jaki mamy układ wspórzędnych geograficznych w Polsce?

---
# Geodezyjne układy odniesienia w Polsce 
będące matematyczną i fizyczną realizacją<br>europejskiego ziemskiego systemu odniesienia ETRS89,<br>oznaczone symbolami:
- PL-ETRF2000
- **PL-ETRF89**
---
# Układy współrzędnych płaskich prostokątnych
- PL-LAEA 
- PL-LCC 
- PL-UTM 
- **PL-2000** – 15ºE, 18ºE, 21ºE i 24ºE, oznaczane numerami – 5, 6, 7 i 8.
- PL-1992

---
# QGIS
Słodki mezalians google maps i geoportalu.

---
# Układ wspólrzędnych
- EPSG:2180 - cała polska PL2000
- EPSG:2176 - PL2000/15
- EPSG:2177 - PL2000/18
- EPSG:2178 - PL2000/21
- EPSG:2179 - PL2000/24

---
# Layout
---
# Warstwy
- rastrowe
- wektorowe:
  - punkty
  - linie
  - poligony
- dane


---
# Usługi
- XYZ
- WMS / WMTS
- WFS

---
# Geoportal

---
# Analizy
Co możemy zrobić z tą wiedzą?
- sprawdzanie działki
- sprawdzanie wysokości
- sprawdzenie spadków

---
# GeoTIFF i GeoPDF

---
# Dane i rodzaje warstw
- https://www.geoportal.gov.pl/uslugi
- INSPIRE
- BDOO - Baza Danych Obiektów Ogólnogeograficznych
- BDOT10k - Baza Danych Obietów Topograficznych

---
# Dane
- Style
- Etykiety
- Parametryka

---
# Chmury punktów
Bonus
`;export{n as default};
