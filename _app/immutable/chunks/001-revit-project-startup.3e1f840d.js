import{s as Za,n as Ht}from"./scheduler.a117fe6f.js";import{S as qa,i as Ba,g as i,s,H as Fa,h as o,A as p,c as l,j as Na,E as Ja,f as a,k as Ka,a as n}from"./index.5faa0350.js";function Qa(Aa){let c,St="Wprowadzenie",je,r,Dt="W tym poście postaram się wam przybliżyć dane z jakimi możecie mieć styczność, możliwości ich przetwarzania i wykorzystania w projektowaniu budynków, budowli oraz ich analiz. Na koniec pokażę zarys jak można to zautomatyzować w Revicie i Blenderze.",be,z,Et=`Ostatnimi czasy dane publiczne stają się coraz bardziej dostępne. Instytucje rządowe jak i amatorskie gromadzenie i analiza danych daje nam dostęp do niesamowitych zasobów.
Wystarczy je przetworzyć by móc stworzyć warunki do projektowania niespotykane dotychczas w naszej branży, bez większych nakładów pracy.`,ve,u,Gt="Pamiętam czasy gdy analizę słońca była robiona za pomocą specjalnej linijki nakładanej na rzut. Unormowana praktyka posiadająca niesamowitą ilość uproszczeń. Potem przeszliśmy na analizy słońca 3D, tworząc nasz projekt w trzecim wymiarze i modelując proste bryły sąsiadów. Niekoniecznie sprawdzaliśmy czy program w którym pracujemy bierze pod uwagę odchylenia względem przesunięć UTC, czy bierze pod uwagę wysokość nad poziomem morza, czy liczy uproszczenie płaszczyznowe, czy krzywizny ziemi… ale na to może będzie inny post.",fe,y,Wt="Powyższy przykład miał pokazać, jakie możliwości stoją przed nami i jak szczegółowo możemy wchodzić w analizy. Oczywiście, bardziej skomplikowane analizy wiążą się z czasem na wprowadzenie/wymodelowanie potrzebnych danych.",he,k,It="NMT, czyli Numeryczny Model Terenu, ale czy na pewno?",xe,w,Ot='<img src="/images/blog/001-dem-switzerland.webp" alt="DEM Switzerland"/>',Ce,m,Rt=`Jesteśmy na etapie,/kiedy większość danych geograficznych jest publicznie dostępna w internecie. Zaczęło się od DEM’ów (Digital Elevation Model). Zdjęć satelitarnych odzwierciedlających wysokości terenu. Kiedy zaczynałem się tym interesować były to skale dosyć trudne, ponieważ jeden pixel informacji pokrywał ok 30m2 terenu. Potem zeszło to do 10m2. Z takich informacji można było już wyciągać całkiem ciekawe uproszczenie terenu, bez dodatkowych opłat.
Tutaj można dać przykład:`,ge,d,At=`<li>ALOS World 3D - 30m</li> <li>NASADEM Global Digital Elevation Model</li> <li>USGS 1/3 arc-second Digital Elevation Model - 10m szczegółowości
W pewnym momencie zaczęły powstawać bazy danych, gdzie za pomocą zapytań można było pobierać wysokość nad poziomem morza. Takie strony jak:</li> <li><a href="https://www.opentopography.org/" rel="nofollow">https://www.opentopography.org/</a></li> <li><a href="https://open-elevation.com/" rel="nofollow">https://open-elevation.com/</a></li> <li>czy nawet api google maps z informacjami o wysokości terenu npm.</li>`,Pe,j,Ut="Obecnie DEM’y można spotkać nawet w szczegółowości co 1m. Pozytywnym przykładem może być udostępnione przez Polskę paczki wysokościowe pokrywające całe terytorium Polski z punktami rozstawionymi co 1m. DEM’y można podzielić na parę rodzajów:",_e,b,Zt="<li>raster</li> <li>grid</li>",Te,v,qt=`Pierwszy to np. obrazy .tiff gdzie odcień szarości definiuje wysokość. Ograniczeniem jest tu wymiar jednego pixela (np. 30m, 10m, 1m). Przetwarzanie takich danych wymaga np. darmowego oprogramowania jak <strong>QGIS</strong>. QGIS pozwala załadować takiego tiffa w odpowiednich koordynatach, przyciąć go do potrzebnych nam zakresów, a potem wygenerować z danych rastrowych np. poziomice, siatkę punktów. Grid to oczywiście plik np. plik tekstowy z listą liczb, które są definiują wysokość nad poziomem terenu na siatce co 1m.
Żeby użyć tego np, w Revicie trzeba przekonwertować takie dane na plik csv z kolumnami X, Y, Z. To pozwoli nam zaimportować je jako toposurface.`,Le,f,Bt="Ale czy to na pewno jest już granica szczegółowości? Oczywiście, że nie. 😉",Me,h,Ft="Chmura punktów",He,x,Nt=`Kolejnym poziomem szczegółowości w moim przekonaniu są surowe dane pomiarowe. Wcześniej były to rzesze geodetów i zaawansowane technologie triangulacji. Teraz też opiera się to o triangulację. Tylko ilość danych wzrosła wykładniczo. Mowa o chmurach punktów.
Tutaj możemy sprawdzać dokładność z marginesem błędu do paru centymetrów, lub jak kto woli przy danych lidar z drona lotniczego to na przykładzie geoportalu, który mówi o szczegółowości od 4 punktów/m2 do aż 20 punktów /m2 w przypadku większych miast, przy średnim błędzie wysokości np. do 10cm.`,Se,C,Jt=`Tutaj znów podam przykład polskiego ministerstwa, które udostępnia dane pomiarowe (lidar) w formacie las.
Chmura punktów to coś na kształt obrazka w 3 wymiarach. Zamiast pixeli mamy punkty w 3D. Każdy z punktów może mieć dodatkowe parametry jak:`,De,g,Kt="<li>kolor</li> <li>klasyfikację - czy jest to budynek, zieleń niska, wysoka, teren, samochód, lampa uliczna…</li> <li>dokładność - jak precyzyjny był pomiar tego punktu</li> <li>intensywność - intensywność odbicia wiązki lidar</li> <li>oraz wiele innych danych bezpośrednich</li> <li>dodatkowo dane pośrednie wynikające z analizy punktów i ich relacji względem siebie np.:<ul><li>czy punkty są na jednej płaszczyźnie - może być to ściana?</li> <li>czy punkty nie mają żadnej płaszczyzny a są w grupie - może to drzewo?</li></ul></li>",Ee,P,Qt=`To już jest olbrzymia ilość danych z której możemy korzystać. W geoportalu nazywa się to Dane Pomiarowe, ja będę używał uogólnienia, czyli chmura punktów.
Chmury możemy podzielić, na przeróżny sposób i w różne grupy, ja skupię się na praktycznym podziale:`,Ge,_,Xt="<li>chmury punktów lidar</li> <li>chmury punktów fotogrametrii</li>",We,T,Yt="oraz innym:",Ie,L,Vt="<li>chmury punktów sklasyfikowane</li> <li>chmury punktów niesklasyfikowane</li>",Oe,M,$t="Na koniec można dodać, że chmury mogą też być:",Re,H,ea="<li>zarejestrowane,</li> <li>niezarejestrowane.</li>",Ae,S,ta="Jeżeli słyszycie to pojęcie to głównie chodzi o ustawienie takiej chmury w konkretnych układach współrzędnych pionowych i poziomych, oraz wyczyszczenie i poprawienie ich z niedociągnięć i błędnych pomiarów. Czyli w uproszczeniu geolokalizacja.",Ue,D,aa="Polski geoportal najczęściej dostarcza nam w pełni scalone dane pomiarowe zawierające podstawowe potrzebne informacje:",Ze,E,na="<li>geolokalizację</li> <li>kolor</li> <li>klasyfikację</li>",qe,G,ia="Dzięki temu możemy łatwo i szybko dopracować taką chmurę do potrzeb projektowych.",Be,W,oa="<li>Wyfiltrować wszystkie budynki i wrzucić je na osobną warstwę, do pomiarów sąsiadów</li> <li>Wyfiltrować teren i wygenerować z niego teren 3D (np. revitową toposurface)</li> <li>Wyfiltrować zieleń wysoką, przetworzyć dane i sprawdzić gdzie są wierzchołki drzew(co za tym idzie ich lokalizacja)</li> <li>Za pomocą darmowych narzędzi możemy wyfiltrować wszystkie punkty leżące w granicach naszej działki i usunąć z niej wszystko poza punktami terenu, resztę chmury zostawiając w spokoju.</li>",Fe,I,sa="Do tych zadań idealnie nadaje się narzędzie <strong>CloudCompare</strong>. Potrafi otwierać chmury punktów z zachowaniem układu odniesienia, czyścić, analizować i przetwarzać dane. Dodatkowo ma podstawowe możliwości klasyfikacji punktów. Z zalet tego programu, które przydają się w procesie projektowym wymieniłbym głównie:",Ne,O,la="<li>możliwość klasyfikacji punktów terenu (jeżeli nie ma klasyfikacji)</li> <li>możliwość nakładania kolorów z zdjęć satelitarnych na chmurę punktów (jeżeli brakuje kolorów)</li> <li>rejestrację chmur punktów względem siebie</li>",Je,R,pa="Takie ruchy pozwolą nam podzielić chmurę punktów na lekkie paczki, które można potem podlinkować w pliku Revitowym i mieć kontrolę nad widocznością wszystkiego. Tutaj niestety nie obejdzie się bez płatnego programu Autodesk Recap, który otwiera pliki <code>.las</code> i zapisuje je do formatu <code>.rcp</code>, który można podczytać w Revicie.",Ke,A,ca="Z tak załadowaną chmurą, możemy ją podczytać w odpowiednich koordynatach do naszego projektu i możemy być pewni, że punkty siedzą idealnie w terenie. Z praktyki mogę powiedzieć, że taka chmura świetnie się sprawdza na etapie koncepcji i projektowaniu w kontekście terenu z <strong>rzeczywistymi (!!!)</strong> obiektami terenu jak zieleń, cieki, budynki, drogi, wzniesienia, rzeźby (nie ma co wymieniać, bo to jest dosłownie wszystko). Przydaje się do uszczegóławiania i modelowania dachów budynków sąsiednich, lub sprawdzania rzeczywistej wysokości attyk i wysokości. Świetnie się sprawdza również w przypadku wizualizacji. Generowania rzeczywistego terenu i analizy wykopów mas ziemnych.",Qe,U,ra="Granice działek",Xe,Z,za="Różne kraje mają różne bazy dostępnych publicznie danych. Jako przykład można podać usługi",Ye,q,ua="<li>WMS (Web Map Service) WMTS (Web Map Tile Service),</li> <li>WFS (Web Feature Service),</li> <li>ATOM,</li> <li>INSPIRE (Infrastructure for Spatial Information in Europe).</li>",Ve,B,ya="Są to ujednolicone usługi udostępniania danych geograficznych jak ortofotomapy, granice, plany miejscowe i wiele innych.",$e,F,ka="Polski Geoportal pozwala na pobranie bazy BDOT10k (Baza Danych Obiektów Topograficznych), z których za pomocą znanego nam QGIS możemy wyciągnąć np. granice działek, lub obrysy istniejących budynków, osie dróg oraz wiele innych informacji, jak punkty lokalizacji przystanków, rodzaje terenów etc. Takie dane możemy potem zaimportować do programów projektowych 2D lub 3D.",et,N,wa=`QGIS pozwala nam to wizualnie wyfiltrować oraz ustawić w odpowiednich koordynatach.
Tzw. Reprojection z ogólnopolskiego układu współrzędnych na układ, w którym projekt jest opracowywany. A o tym w następnym podpunkcie.
Pod <a href="https://www.geoportal.gov.pl/uslugi/usluga-przegladania-wms" rel="nofollow">tym linkiem</a> widać jakie usługi są dostępne w ramach WMS geoportalu.pl`,tt,J,ma="Geolokalizacja i numery EPSG",at,K,da=`<img src="/images/blog/001-poland-epsg.gif" alt="Map of Poland EPSG 3857" title="EPSG 3857"/>
Od tego tematu powinniśmy zacząć, ale zawsze lepiej zacząć od czegoś bardziej efektownego. EPSG natomiast to element układanki, który połączy wszystko w całość. Znajomość tego pojęcia ułatwi nam pracę, wyeliminuje podstawowe błędy i przy prawie zerowym nakładzie pracy wprowadzi pierwszą automatyzację procesów.`,nt,Q,ja=`Kody EPSG powstały w celu standaryzacji nazewnictwa układów współrzędnych. W te kody wchodzą układy współrzędnych prostokątnych płaskich (rzutowania) jak i geograficznych.
W polsce mamy dwa systemy układów odniesienia PL-ETRF2000 oraz aktualny <code>PL-ETRF89</code>.`,it,X,ba="Układ współrzędnych płaskich prostokątnych PL-200 razem z numerami EPSG to:",ot,Y,va="<thead><tr><th>EPSG</th> <th>PL2000</th> <th>Południk</th></tr></thead> <tbody><tr><td>EPSG:2180</td> <td>PL2000</td> <td>cała polska</td></tr> <tr><td>EPSG:2176</td> <td>PL2000/5</td> <td>15</td></tr> <tr><td>EPSG:2177</td> <td>PL2000/6</td> <td>18</td></tr> <tr><td>EPSG:2178</td> <td>PL2000/7</td> <td>21</td></tr> <tr><td>EPSG:2179</td> <td>PL2000/8</td> <td>24</td></tr></tbody>",st,V,fa="Wiedza o tym w jakim układzie znajduje się działka, lub w jakim układzie mamy dane pozwoli nam w bezproblemowy sposób scalić takie dane. Do analizy i przetwarzania takich danych też najlepiej sprawdzi się <strong>QGIS</strong>. Często zdarzy się, że chmura punktów dostarczana jest w układzie ogólnopolskim, a projekt ustawiony jest w koordynatach szczegółowych np. strefy 6.",lt,$,ha="Modele Budynków",pt,ee,xa=`W temacie budynków będziemy mieli parę opcji generowania modeli 3D.
Pierwsza, łatwiejsza i czasochłonna opcja, to znalezienie istniejących modeli i ustawianie ich w 3D do granic budynków pozyskanych z usług WFS. Oczywiście jest to oczywista opcja, ale warto ją zawrzeć, bo czasem, można natknąć się na bardzo dokładne modele obiektów.`,ct,te,Ca="Drugą opcją jest pozyskanie danych z geoportalu. Budynki można pobrać w formacie GML w szczegółowości LOD1. Aby móc je wykorzystać w revicie lub innym programie trzeba je przerobić na natywny format. Dla revita będzie to najlepiej <code>MASS FAMILY</code>. Dla blendera np. <code>OBJ</code>. Plik GML ma strukturę XML, więc możemy go odczytać w pythonie  za pomocą parser xml wyglądałoby to tak:",rt,ae,zt,Ua=`<code class="language-python"><span class="token comment"># python</span>
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">from</span> xml<span class="token punctuation">.</span>etree <span class="token keyword">import</span> ElementTree <span class="token keyword">as</span> et

FILEPATH <span class="token operator">=</span> <span class="token string">"file.gml"</span>


<span class="token keyword">def</span> <span class="token function">unflatten</span><span class="token punctuation">(</span>coords<span class="token punctuation">,</span> s<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""gets numbers list
    returns array of points (XYZ)"""</span>
    verts <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span>coords<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*</span> s<span class="token punctuation">,</span> coords<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">*</span> s<span class="token punctuation">,</span> coords<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">*</span> s<span class="token punctuation">)</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>coords<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> verts


tree <span class="token operator">=</span> et<span class="token punctuation">.</span>parse<span class="token punctuation">(</span>FILEPATH<span class="token punctuation">)</span>
polygons <span class="token operator">=</span> tree<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">".//&#123;http://www.opengis.net/gml&#125;Polygon"</span><span class="token punctuation">)</span>
verts <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
faces <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> i<span class="token punctuation">,</span> p <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>polygons<span class="token punctuation">)</span><span class="token punctuation">:</span>
    poslist <span class="token operator">=</span> p<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">".//&#123;http://www.opengis.net/gml&#125;posList"</span><span class="token punctuation">)</span>
    text <span class="token operator">=</span> poslist<span class="token punctuation">.</span>text
    coords <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">float</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> text<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    points <span class="token operator">=</span> unflatten<span class="token punctuation">(</span>coords<span class="token punctuation">)</span>
    start_idx <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>verts<span class="token punctuation">)</span>
    end_idx <span class="token operator">=</span> start_idx <span class="token operator">+</span> <span class="token builtin">len</span><span class="token punctuation">(</span>points<span class="token punctuation">)</span>

    verts<span class="token punctuation">.</span>extend<span class="token punctuation">(</span>points<span class="token punctuation">)</span>
    faces<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">[</span>i <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>start_idx<span class="token punctuation">,</span> end_idx<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code>`,ut,ne,ga="Co dałoby nam zbiór wierzchołków i poligonów (grupy wierzchołków które tworzą pojedyncze poligony). Z takiego formatu bardzo łatwo już wygenerować obiekt w Blenderze, zapisać jako OBJ i zaimportować do Revita. Lub za pomocą Revit API automatycznie wymodelować obiekty MASS za pomocą tych danych. Plusem tego rozwiązania jest to, że takie budynki są już zlokalizowane w układzie poziomym i pionowym.",yt,kt,wt,ie,Pa="<h3>Problem dalekich odległości<br/></h3> <p>Pojawia się jeden problem dosyć znany w środowiskach grafików 3D. Im dalej wierzchołek jest położony od punktu [0,0,0] jego wyświetlanie się zaczyna być coraz bardziej “przybliżone”. Jest to problem radzenia sobie komputerów z liczbami po przecinku. Komputer zawsze uogólnia liczby po przecinku do swojej interpretacji dlatego czasami może się zdarzyć, że np. porównując liczby 0,003 == 0,003 okaże się, że są różne, ponieważ dla komputera 0,003 = 0,003000000000000001. Rozwiązaniem tego problemu byłoby pobranie informacji o lokalizacji <code>internal origin</code> lub <code>project base point</code> i przesunięcie wszystkich wierzchołków o dany wektor, aby wstawiały się nie poprzez <strong>shared coordinates</strong>, a poprzez bliższy punkt wstawienia.</p>",mt,dt,jt,oe,_a="Ostatnim rozwiązaniem jakie mógłbym zaproponować wymaga trochę więcej wiedzy technicznej, ale jest najdokładniejsze. Geometrię budynków moglibyśmy wygenerować z chmury punktów. Na pomoc przychodzi tutaj sporo algorytmów do analiz przestrzennych, ale w skrócie myślowym możemy to rozdzielić na poniższe zadania:",bt,se,Ta="<li>wydzielamy z chmury punktów punkty klasyfikowane jako budynki.</li> <li>analizujemy które punkty należą do jakich płaszczyzn i dzielimy je na grupy na jakich się te płaszczyzny znajdują</li> <li>mając płaszczyzny i punkty należące do płaszczyzn wyszukujemy punkty graniczne ( leżące na krawędziach każdej z grup). Dzięki temu mamy przybliżone krawędzie danego obiektu i płaszczyzny.</li> <li>czyścimy punkty które leżą na jednej prostej lub w jakiejś małej odległości od niej. Zostają nam wtedy wierzchołki</li> <li>łączymy wierzchołki które leżą blisko siebie nadajemy im numer i przypisujemy do płaszczyzn.</li> <li>finalny wynik daje nam te same zbiory wierzchołków i poligonów jak we wcześniejszym skrypcie.</li>",vt,le,La="Ta  opcja daje nam dużo bardziej szczegółowe budynki. Jeżeli brakuje nam szczegółowości, wówczas możemy użyć lidar, drona lub aparatu lub smartfonu, aby wygenerować dodatkowe chmury punktów za pomocą np. darmowego oprogramowania do fotogrametrii Meshroom [1]. Mając chmurę punktów możemy ją połączyć z chmurą dostarczoną z geoportalu, zagęszczając dokładność i uzupełniając braki. Takie połączenie chmury bez koordynatów z chmurą z koordynatami nazywamy rejestracją chmury. Łączy się to też z wyczyszczeniem takiej chmury z błędnych pomiarów. Dzięki temu możemy",ft,pe,Ma="[1]: Meshroom - program do generowania chmury punktów ze zdjęć.",ht,ce,Ha="[1]: Fotogrametria - dziedzina zajmująca się przetwarzaniem zdjęć z aparatów i smartfonów na chmurę punktów.",xt,re,Sa="Zdjęcia satelitarne",Ct,ze,Da="Czy uwierzycie jeżeli wam powiem, że jest taki format zapisu obrazu, który pozwala na geolokalizację tego obrazu w koordynatach? Wyobraźcie sobie, że dostajecie mapę planu miejscowego / skan mapy do celów opiniodawczych od inwestora / zdjęcie satelitarne działki lub dowolną inną mapę. Wrzucacie ją do waszego programu i zawsze wkleja się idealnie we własciwe miejsce? Idealnie w skali? Bez żadnych zniekształceń?",gt,ue,Ea="Tak jest to możliwe, nie zawsze, nie dla wszystkich programów, ale jest możliwy zapis geolokalizacji dla obrazu. Możemy to zrobić np. dla plików PDF, lub TIFF. Takie pliki tiff nazywamy wtedy GeoTiff.",Pt,ye,Ga="Kiedy pobieracie najcześciej zdjęcie satelitarne z portalu rządowego, to ma ono już ustawione swoje koordynaty i system w jakim został zapisany. Wrzucając takiego tiff’a np. do programu QGIS wystarczy mu ustawić w jakim układzie został zapisany (np. EPSG:2180) i od razu wkleja się we właściwe miejsce. Bez żadnych zniekształceń, bez przesunięć. Idealnie.",_t,ke,Wa="Drugim atutem satelity są dane. Dla nas może być przydatny kolor. W przypadku chmury punktów, która nie ma zapisanych danych kolorystycznych możemy przełożyć kolory ze zdjęcia satelitarnego na daną chmurę punktów. Taką możliwość daje np. Cloud Compare.",Tt,we,Ia="Joining it together + Automation",Lt,me,Oa="Najciekawszym elementem tej układanki jest to, że większość tych zadań można skrócić do jednego przycisku np. w Revicie. Potrzebujemy wprowadzić tylko parę parametrów:",Mt,de,Ra="<li>lokalizację (koordynaty)</li> <li>promień widoczności (w jakim zasięgu pobierać dane)</li> <li>opcjonalnie poligon/region z granicami działki</li>";return{c(){c=i("h2"),c.textContent=St,je=s(),r=i("p"),r.textContent=Dt,be=s(),z=i("p"),z.textContent=Et,ve=s(),u=i("p"),u.textContent=Gt,fe=s(),y=i("p"),y.textContent=Wt,he=s(),k=i("h2"),k.textContent=It,xe=s(),w=i("p"),w.innerHTML=Ot,Ce=s(),m=i("p"),m.textContent=Rt,ge=s(),d=i("ul"),d.innerHTML=At,Pe=s(),j=i("p"),j.textContent=Ut,_e=s(),b=i("ul"),b.innerHTML=Zt,Te=s(),v=i("p"),v.innerHTML=qt,Le=s(),f=i("p"),f.textContent=Bt,Me=s(),h=i("h2"),h.textContent=Ft,He=s(),x=i("p"),x.textContent=Nt,Se=s(),C=i("p"),C.textContent=Jt,De=s(),g=i("ul"),g.innerHTML=Kt,Ee=s(),P=i("p"),P.textContent=Qt,Ge=s(),_=i("ul"),_.innerHTML=Xt,We=s(),T=i("p"),T.textContent=Yt,Ie=s(),L=i("ul"),L.innerHTML=Vt,Oe=s(),M=i("p"),M.textContent=$t,Re=s(),H=i("ul"),H.innerHTML=ea,Ae=s(),S=i("p"),S.textContent=ta,Ue=s(),D=i("p"),D.textContent=aa,Ze=s(),E=i("ul"),E.innerHTML=na,qe=s(),G=i("p"),G.textContent=ia,Be=s(),W=i("ul"),W.innerHTML=oa,Fe=s(),I=i("p"),I.innerHTML=sa,Ne=s(),O=i("ul"),O.innerHTML=la,Je=s(),R=i("p"),R.innerHTML=pa,Ke=s(),A=i("p"),A.innerHTML=ca,Qe=s(),U=i("h2"),U.textContent=ra,Xe=s(),Z=i("p"),Z.textContent=za,Ye=s(),q=i("ul"),q.innerHTML=ua,Ve=s(),B=i("p"),B.textContent=ya,$e=s(),F=i("p"),F.textContent=ka,et=s(),N=i("p"),N.innerHTML=wa,tt=s(),J=i("h2"),J.textContent=ma,at=s(),K=i("p"),K.innerHTML=da,nt=s(),Q=i("p"),Q.innerHTML=ja,it=s(),X=i("p"),X.textContent=ba,ot=s(),Y=i("table"),Y.innerHTML=va,st=s(),V=i("p"),V.innerHTML=fa,lt=s(),$=i("h2"),$.textContent=ha,pt=s(),ee=i("p"),ee.textContent=xa,ct=s(),te=i("p"),te.innerHTML=Ca,rt=s(),ae=i("pre"),zt=new Fa(!1),ut=s(),ne=i("p"),ne.textContent=ga,yt=s(),kt=i("hr"),wt=s(),ie=i("blockquote"),ie.innerHTML=Pa,mt=s(),dt=i("hr"),jt=s(),oe=i("p"),oe.textContent=_a,bt=s(),se=i("ul"),se.innerHTML=Ta,vt=s(),le=i("p"),le.textContent=La,ft=s(),pe=i("p"),pe.textContent=Ma,ht=s(),ce=i("p"),ce.textContent=Ha,xt=s(),re=i("h2"),re.textContent=Sa,Ct=s(),ze=i("p"),ze.textContent=Da,gt=s(),ue=i("p"),ue.textContent=Ea,Pt=s(),ye=i("p"),ye.textContent=Ga,_t=s(),ke=i("p"),ke.textContent=Wa,Tt=s(),we=i("h2"),we.textContent=Ia,Lt=s(),me=i("p"),me.textContent=Oa,Mt=s(),de=i("ul"),de.innerHTML=Ra,this.h()},l(e){c=o(e,"H2",{"data-svelte-h":!0}),p(c)!=="svelte-1uanqih"&&(c.textContent=St),je=l(e),r=o(e,"P",{"data-svelte-h":!0}),p(r)!=="svelte-k00viu"&&(r.textContent=Dt),be=l(e),z=o(e,"P",{"data-svelte-h":!0}),p(z)!=="svelte-1syx12"&&(z.textContent=Et),ve=l(e),u=o(e,"P",{"data-svelte-h":!0}),p(u)!=="svelte-10pma6d"&&(u.textContent=Gt),fe=l(e),y=o(e,"P",{"data-svelte-h":!0}),p(y)!=="svelte-4girbr"&&(y.textContent=Wt),he=l(e),k=o(e,"H2",{"data-svelte-h":!0}),p(k)!=="svelte-1h087tf"&&(k.textContent=It),xe=l(e),w=o(e,"P",{"data-svelte-h":!0}),p(w)!=="svelte-d5giey"&&(w.innerHTML=Ot),Ce=l(e),m=o(e,"P",{"data-svelte-h":!0}),p(m)!=="svelte-vqymdp"&&(m.textContent=Rt),ge=l(e),d=o(e,"UL",{"data-svelte-h":!0}),p(d)!=="svelte-1869x3d"&&(d.innerHTML=At),Pe=l(e),j=o(e,"P",{"data-svelte-h":!0}),p(j)!=="svelte-pq8d7m"&&(j.textContent=Ut),_e=l(e),b=o(e,"UL",{"data-svelte-h":!0}),p(b)!=="svelte-18mjn5v"&&(b.innerHTML=Zt),Te=l(e),v=o(e,"P",{"data-svelte-h":!0}),p(v)!=="svelte-gpn5up"&&(v.innerHTML=qt),Le=l(e),f=o(e,"P",{"data-svelte-h":!0}),p(f)!=="svelte-14sc2av"&&(f.textContent=Bt),Me=l(e),h=o(e,"H2",{"data-svelte-h":!0}),p(h)!=="svelte-1owj9b8"&&(h.textContent=Ft),He=l(e),x=o(e,"P",{"data-svelte-h":!0}),p(x)!=="svelte-1vmjukb"&&(x.textContent=Nt),Se=l(e),C=o(e,"P",{"data-svelte-h":!0}),p(C)!=="svelte-28968e"&&(C.textContent=Jt),De=l(e),g=o(e,"UL",{"data-svelte-h":!0}),p(g)!=="svelte-19vw7se"&&(g.innerHTML=Kt),Ee=l(e),P=o(e,"P",{"data-svelte-h":!0}),p(P)!=="svelte-1rrfx71"&&(P.textContent=Qt),Ge=l(e),_=o(e,"UL",{"data-svelte-h":!0}),p(_)!=="svelte-18aeg52"&&(_.innerHTML=Xt),We=l(e),T=o(e,"P",{"data-svelte-h":!0}),p(T)!=="svelte-1tdccb3"&&(T.textContent=Yt),Ie=l(e),L=o(e,"UL",{"data-svelte-h":!0}),p(L)!=="svelte-1vpvcvk"&&(L.innerHTML=Vt),Oe=l(e),M=o(e,"P",{"data-svelte-h":!0}),p(M)!=="svelte-1h677qo"&&(M.textContent=$t),Re=l(e),H=o(e,"UL",{"data-svelte-h":!0}),p(H)!=="svelte-10hpove"&&(H.innerHTML=ea),Ae=l(e),S=o(e,"P",{"data-svelte-h":!0}),p(S)!=="svelte-eogh6n"&&(S.textContent=ta),Ue=l(e),D=o(e,"P",{"data-svelte-h":!0}),p(D)!=="svelte-1n7rmy"&&(D.textContent=aa),Ze=l(e),E=o(e,"UL",{"data-svelte-h":!0}),p(E)!=="svelte-pb40kf"&&(E.innerHTML=na),qe=l(e),G=o(e,"P",{"data-svelte-h":!0}),p(G)!=="svelte-1qm3fzs"&&(G.textContent=ia),Be=l(e),W=o(e,"UL",{"data-svelte-h":!0}),p(W)!=="svelte-qkyivt"&&(W.innerHTML=oa),Fe=l(e),I=o(e,"P",{"data-svelte-h":!0}),p(I)!=="svelte-15n4el1"&&(I.innerHTML=sa),Ne=l(e),O=o(e,"UL",{"data-svelte-h":!0}),p(O)!=="svelte-1eajj49"&&(O.innerHTML=la),Je=l(e),R=o(e,"P",{"data-svelte-h":!0}),p(R)!=="svelte-1283etu"&&(R.innerHTML=pa),Ke=l(e),A=o(e,"P",{"data-svelte-h":!0}),p(A)!=="svelte-12bzntm"&&(A.innerHTML=ca),Qe=l(e),U=o(e,"H2",{"data-svelte-h":!0}),p(U)!=="svelte-1xjh9dj"&&(U.textContent=ra),Xe=l(e),Z=o(e,"P",{"data-svelte-h":!0}),p(Z)!=="svelte-sdefe"&&(Z.textContent=za),Ye=l(e),q=o(e,"UL",{"data-svelte-h":!0}),p(q)!=="svelte-1rmre3v"&&(q.innerHTML=ua),Ve=l(e),B=o(e,"P",{"data-svelte-h":!0}),p(B)!=="svelte-16wbh3f"&&(B.textContent=ya),$e=l(e),F=o(e,"P",{"data-svelte-h":!0}),p(F)!=="svelte-x18mth"&&(F.textContent=ka),et=l(e),N=o(e,"P",{"data-svelte-h":!0}),p(N)!=="svelte-2hwoc6"&&(N.innerHTML=wa),tt=l(e),J=o(e,"H2",{"data-svelte-h":!0}),p(J)!=="svelte-b6qn8m"&&(J.textContent=ma),at=l(e),K=o(e,"P",{"data-svelte-h":!0}),p(K)!=="svelte-13shizb"&&(K.innerHTML=da),nt=l(e),Q=o(e,"P",{"data-svelte-h":!0}),p(Q)!=="svelte-1900kvt"&&(Q.innerHTML=ja),it=l(e),X=o(e,"P",{"data-svelte-h":!0}),p(X)!=="svelte-1kguj37"&&(X.textContent=ba),ot=l(e),Y=o(e,"TABLE",{"data-svelte-h":!0}),p(Y)!=="svelte-1m1lspy"&&(Y.innerHTML=va),st=l(e),V=o(e,"P",{"data-svelte-h":!0}),p(V)!=="svelte-tc74tb"&&(V.innerHTML=fa),lt=l(e),$=o(e,"H2",{"data-svelte-h":!0}),p($)!=="svelte-val13r"&&($.textContent=ha),pt=l(e),ee=o(e,"P",{"data-svelte-h":!0}),p(ee)!=="svelte-yogy8b"&&(ee.textContent=xa),ct=l(e),te=o(e,"P",{"data-svelte-h":!0}),p(te)!=="svelte-1vl86vy"&&(te.innerHTML=Ca),rt=l(e),ae=o(e,"PRE",{class:!0});var t=Na(ae);zt=Ja(t,!1),t.forEach(a),ut=l(e),ne=o(e,"P",{"data-svelte-h":!0}),p(ne)!=="svelte-171rcfe"&&(ne.textContent=ga),yt=l(e),kt=o(e,"HR",{}),wt=l(e),ie=o(e,"BLOCKQUOTE",{"data-svelte-h":!0}),p(ie)!=="svelte-1cjmpaq"&&(ie.innerHTML=Pa),mt=l(e),dt=o(e,"HR",{}),jt=l(e),oe=o(e,"P",{"data-svelte-h":!0}),p(oe)!=="svelte-gy2ff1"&&(oe.textContent=_a),bt=l(e),se=o(e,"UL",{"data-svelte-h":!0}),p(se)!=="svelte-1np9vl"&&(se.innerHTML=Ta),vt=l(e),le=o(e,"P",{"data-svelte-h":!0}),p(le)!=="svelte-1e053s"&&(le.textContent=La),ft=l(e),pe=o(e,"P",{"data-svelte-h":!0}),p(pe)!=="svelte-1zby8m"&&(pe.textContent=Ma),ht=l(e),ce=o(e,"P",{"data-svelte-h":!0}),p(ce)!=="svelte-1f7m6wh"&&(ce.textContent=Ha),xt=l(e),re=o(e,"H2",{"data-svelte-h":!0}),p(re)!=="svelte-pqgi2i"&&(re.textContent=Sa),Ct=l(e),ze=o(e,"P",{"data-svelte-h":!0}),p(ze)!=="svelte-1fmd7ot"&&(ze.textContent=Da),gt=l(e),ue=o(e,"P",{"data-svelte-h":!0}),p(ue)!=="svelte-par8m7"&&(ue.textContent=Ea),Pt=l(e),ye=o(e,"P",{"data-svelte-h":!0}),p(ye)!=="svelte-1mc054g"&&(ye.textContent=Ga),_t=l(e),ke=o(e,"P",{"data-svelte-h":!0}),p(ke)!=="svelte-pwy230"&&(ke.textContent=Wa),Tt=l(e),we=o(e,"H2",{"data-svelte-h":!0}),p(we)!=="svelte-5wpe3p"&&(we.textContent=Ia),Lt=l(e),me=o(e,"P",{"data-svelte-h":!0}),p(me)!=="svelte-1ilb4mm"&&(me.textContent=Oa),Mt=l(e),de=o(e,"UL",{"data-svelte-h":!0}),p(de)!=="svelte-1l4vace"&&(de.innerHTML=Ra),this.h()},h(){zt.a=null,Ka(ae,"class","language-python")},m(e,t){n(e,c,t),n(e,je,t),n(e,r,t),n(e,be,t),n(e,z,t),n(e,ve,t),n(e,u,t),n(e,fe,t),n(e,y,t),n(e,he,t),n(e,k,t),n(e,xe,t),n(e,w,t),n(e,Ce,t),n(e,m,t),n(e,ge,t),n(e,d,t),n(e,Pe,t),n(e,j,t),n(e,_e,t),n(e,b,t),n(e,Te,t),n(e,v,t),n(e,Le,t),n(e,f,t),n(e,Me,t),n(e,h,t),n(e,He,t),n(e,x,t),n(e,Se,t),n(e,C,t),n(e,De,t),n(e,g,t),n(e,Ee,t),n(e,P,t),n(e,Ge,t),n(e,_,t),n(e,We,t),n(e,T,t),n(e,Ie,t),n(e,L,t),n(e,Oe,t),n(e,M,t),n(e,Re,t),n(e,H,t),n(e,Ae,t),n(e,S,t),n(e,Ue,t),n(e,D,t),n(e,Ze,t),n(e,E,t),n(e,qe,t),n(e,G,t),n(e,Be,t),n(e,W,t),n(e,Fe,t),n(e,I,t),n(e,Ne,t),n(e,O,t),n(e,Je,t),n(e,R,t),n(e,Ke,t),n(e,A,t),n(e,Qe,t),n(e,U,t),n(e,Xe,t),n(e,Z,t),n(e,Ye,t),n(e,q,t),n(e,Ve,t),n(e,B,t),n(e,$e,t),n(e,F,t),n(e,et,t),n(e,N,t),n(e,tt,t),n(e,J,t),n(e,at,t),n(e,K,t),n(e,nt,t),n(e,Q,t),n(e,it,t),n(e,X,t),n(e,ot,t),n(e,Y,t),n(e,st,t),n(e,V,t),n(e,lt,t),n(e,$,t),n(e,pt,t),n(e,ee,t),n(e,ct,t),n(e,te,t),n(e,rt,t),n(e,ae,t),zt.m(Ua,ae),n(e,ut,t),n(e,ne,t),n(e,yt,t),n(e,kt,t),n(e,wt,t),n(e,ie,t),n(e,mt,t),n(e,dt,t),n(e,jt,t),n(e,oe,t),n(e,bt,t),n(e,se,t),n(e,vt,t),n(e,le,t),n(e,ft,t),n(e,pe,t),n(e,ht,t),n(e,ce,t),n(e,xt,t),n(e,re,t),n(e,Ct,t),n(e,ze,t),n(e,gt,t),n(e,ue,t),n(e,Pt,t),n(e,ye,t),n(e,_t,t),n(e,ke,t),n(e,Tt,t),n(e,we,t),n(e,Lt,t),n(e,me,t),n(e,Mt,t),n(e,de,t)},p:Ht,i:Ht,o:Ht,d(e){e&&(a(c),a(je),a(r),a(be),a(z),a(ve),a(u),a(fe),a(y),a(he),a(k),a(xe),a(w),a(Ce),a(m),a(ge),a(d),a(Pe),a(j),a(_e),a(b),a(Te),a(v),a(Le),a(f),a(Me),a(h),a(He),a(x),a(Se),a(C),a(De),a(g),a(Ee),a(P),a(Ge),a(_),a(We),a(T),a(Ie),a(L),a(Oe),a(M),a(Re),a(H),a(Ae),a(S),a(Ue),a(D),a(Ze),a(E),a(qe),a(G),a(Be),a(W),a(Fe),a(I),a(Ne),a(O),a(Je),a(R),a(Ke),a(A),a(Qe),a(U),a(Xe),a(Z),a(Ye),a(q),a(Ve),a(B),a($e),a(F),a(et),a(N),a(tt),a(J),a(at),a(K),a(nt),a(Q),a(it),a(X),a(ot),a(Y),a(st),a(V),a(lt),a($),a(pt),a(ee),a(ct),a(te),a(rt),a(ae),a(ut),a(ne),a(yt),a(kt),a(wt),a(ie),a(mt),a(dt),a(jt),a(oe),a(bt),a(se),a(vt),a(le),a(ft),a(pe),a(ht),a(ce),a(xt),a(re),a(Ct),a(ze),a(gt),a(ue),a(Pt),a(ye),a(_t),a(ke),a(Tt),a(we),a(Lt),a(me),a(Mt),a(de))}}}const Xa={title:"Revit project geolocation and data scraping",date:"2022-12-27T00:00:00.000Z",summary:"Revit automation for project startup. Geolocalization, point cloud parsing, site data imports and more..",authors:"Dawid Huczyński",tags:["revit","architecture","point clouds","geoportal"],cover:"asdf"};class Ya extends qa{constructor(c){super(),Ba(this,c,null,Qa,Za,{})}}const en=Object.freeze(Object.defineProperty({__proto__:null,default:Ya,metadata:Xa},Symbol.toStringTag,{value:"Module"}));export{en as _};