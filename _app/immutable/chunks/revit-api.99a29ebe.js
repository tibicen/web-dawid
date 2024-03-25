const n=`# Wprowadzenie do API Revita
## [dawid.huczynski.pl/lectures/revit-api](https://dawid.huczynski.pl/lectures/revit-api)
### [dawid.huczynski@gmail.com](mailto:dawid.huczynski@gmail.com)

---

# Spotkanie 1.



---


## Narzędzia i ustawianie środowiska
- **Pyrevit** - addon do tworzenia własnych dodatków oraz mały kombajn z narzędziami: <br>
    https://github.com/eirannejad/pyRevit/releases <br>
- **RevitPythonShell** - interaktywna konsola Pythona w Revicie: <br>
    https://github.com/architecture-building-systems/revitpythonshell/releases
- **stubs** - narzędzie do autouzupełniania Revitowych komend w VS Code: <br>
    https://www.macro4bim.com/post/create-python-stubs <br>
    https://github.com/gtalarico/ironpython-stubs <br>
- **RevitLookup** - narzędzie do podglądania parametrów obiektów Revicie: <br>
    https://github.com/jeremytammik/RevitLookup
- **git** - program do wersjonowania kodu i pracy w zespole, kombajn: <br>
    https://git-scm.com/



---


## Miejsca do szukania wiedzy:
- https://www.revitapidocs.com/
- https://apidocs.co/apps/revit/2021/
- https://help.autodesk.com/view/RVT/2022/ENU/?guid=Revit_API_Revit_API_Developers_Guide_html
- https://thebuildingcoder.typepad.com/
- http://wiki.theprovingground.org/revit-api
- https://dynamopythonprimer.gitbook.io/
- https://www.youtube.com/channel/UC1Dx-jGyRbvvHzZ8ZyGWF5w/playlists
- https://github.com/gtalarico/python-revit-resources
- https://github.com/architecture-building-systems/revitpythonshell
- https://github.com/Amoursol/dynamoPython
- https://daren-thomas.gitbooks.io/scripting-autodesk-revit-with-revitpythonshell/content/




---


## Sposób czytania skryptów

- \`#! python3\` - definiuje jakiego języka używa skrypt
- \`# -*- coding: utf-8 -*-\` - definuje zakres znaków unicode UTF-8 (tu też są polskie znaki)

\`\`\`python
#! python3
# -*- coding: utf-8 -*-
import xyz
import abc
from foo import bar

CONSTANT_X = 1
CONSTANT_Y = False
CONSTANT_Z = None

def something(a,b,c):
    return a,b,c

def main():
    return something(a,b,c)

if __name__ == "__main__":
    main()
\`\`\`




---


## pipenv


\`\`\`bash
pip install --user pipenv
pipenv install requests
pipenv run python main.py
pipenv shell


\`\`\`


---


## Używanie bibliotek pythona


\`\`\`python
import sys
sys.path.append('sciezka/do/modulow')


\`\`\`





---


## API a wersje pythona
- API Dynamo - zależnie od wersji Dynamo IronPython 2.7 / python 3.8
- API RPSHELL (Python) - IronPython 2.7 / python 3.8
- API Macros - IronPython 2.7



---


## Język statyczny i dynamiczny
Types - typy (int, float, str, Object, Enum, Element, Id):
- static types
- dynamic types



---


## Podstawy API
Kod do skopiowania do skryptów Dynamo. NIE KOPIUJCIE TEGO, serio! :D<br>
słowo klucz: "Maintnance"


\`\`\`python
import clr # .NET's Common Language Runtime.

# Dodawanie modulow.
import sys
sys.path.append('C:\\Program Files (x86)\\IronPython 2.7\\Lib')

# Dodawanie standarowych typow
import System
from System import Array
from System.Collections.Generic import *

# Dodawanie standarowych typow Dynamo
clr.AddReference('ProtoGeometry')
from Autodesk.DesignScript.Geometry import *

# Dodawanie standardowych typow Dynamo-Revit
clr.AddReference("RevitNodes")
import Revit
clr.ImportExtensions(Revit.Elements)
clr.ImportExtensions(Revit.GeometryConversion)

# Dodanie TransactionManagera i DocumentManagera
clr.AddReference("RevitServices")
import RevitServices
from RevitServices.Persistence import DocumentManager 
from RevitServices.Transactions import TransactionManager 

# Dodawanie API Revita
clr.AddReference("RevitAPI")
clr.AddReference("RevitAPIUI")

import Autodesk 
from Autodesk.Revit.DB import *
from Autodesk.Revit.UI import *

doc = DocumentManager.Instance.CurrentDBDocument
uiapp = DocumentManager.Instance.CurrentUIApplication 
app = uiapp.Application 
uidoc = uiapp.ActiveUIDocument


\`\`\`


    

---


## Co ma skarpetka wspólnego z Revitem?
jednostki



\`\`\`python
def feet_to_meter(feet):
    return feet * 0.3048


def meter_to_feet(meter):
    return meter / 0.3048


def sqr_feet_to_meter(sqrfeet):
    return sqrfeet * 0.09290304


def sqr_meter_to_feet(sqrmeter):
    return sqrmeter / 0.09290304



\`\`\`




---


## Inny sposób na jednostki


\`\`\`python
detail_line = UnwrapElement(IN[0])
decimal_feet_length = detail_line.GeometryCurve.Length
metric_length = UnitUtils.Convert(
    decimal_feet_length, 
    DisplayUnitType.DUT_DECIMAL_FEET, 
    DisplayUnitType.DUT_MILLIMETERS)
OUT = metric_length


\`\`\`



---

## Struktura API i przeszukiwanie


\`\`\`python
import os
import types

def walker(lib, name, relations=None, limit=2):
    relations = [["", name, lib.__doc__]] if relations is None else relations
    IGNORE = [str, int, float, complex, list, tuple, range, dict, bool, bytes]
    if limit == 0:
        return relations
    else:
        limit -= 1
    for x in dir(lib):
        if not x.startswith("_"):
            try:
                a = getattr(lib, x)
                if type(a) not in IGNORE and name not in ["OSError", "Error"]:
                    el = [name, f"{name}.{x}", a.__doc__]
                    if el not in relations:
                        relations.append(el)
                        relations = walker(a, f"{name}.{x}", relations, limit=limit)
            except:
                pass
    return relations

##############################################################
import plotly.graph_objects as go
import plotly

relations = walker(plotly, "plotly")
parents, labels, helps = zip(*relations)

fig = go.Figure(
    go.Treemap(
        labels=labels,
        parents=parents,
        # values = helps,
    )
)

fig.update_layout(margin=dict(t=50, l=25, r=25, b=25))
plotly.offline.plot(fig, filename="./index.html")
fig.show()


\`\`\`


---


## Podstawowe klasy
## Element.*
<div class='trzy-kolumny'>
<p>
ArePhasesModifiable<br>
AssemblyInstanceId<br>
<strong>BoundingBox</strong><br>
CanBeHidden<br>
CanBeLocked<br>
CanDeleteSubelement<br>
CanHaveAnalyticalModel<br>
CanHaveTypeAssigned<br>
<strong>Category</strong><br>
<strong>ChangeTypeId</strong><br>
CreatedPhaseId<br>
DeleteEntity<br>
DeleteSubelement<br>
DeleteSubelements<br>
DemolishedPhaseId<br>
DesignOption<br>
Dispose<br>
Document<br>
Equals<br>
<strong>Geometry</strong><br>
GetAnalyticalModel<br>
GetAnalyticalModelId<br>
GetChangeTypeAny<br>
GetChangeTypeElementAddition<br>
GetChangeTypeElementDeletion<br>
GetChangeTypeGeometry<br>
GetChangeTypeParameter<br>
</p>
<p>
GetDependentElements<br>
GetEntity<br>
GetEntitySchemaGuids<br>
GetExternalFileReference<br>
GetExternalResourceReference<br>
GetExternalResourceReferences<br>
GetGeneratingElementIds<br>
GetGeometryObjectFromReference<br>
GetHashCode<br>
GetMaterialArea<br>
GetMaterialIds<br>
GetMaterialVolume<br>
GetMonitoredLinkElementIds<br>
GetMonitoredLocalElementIds<br>
GetOrderedParameters<br>
GetParameterFormatOptions<br>
GetParameters<br>
GetPhaseStatus<br>
GetSubelements<br>
GetType<br>
<strong>GetTypeId</strong><br>
GetValidTypes<br>
GroupId<br>
HasPhases<br>
<strong>Id</strong><br>
IsExternalFileReference<br>
IsHidden<br>
</p>
<p>
IsMonitoringLinkElement<br>
IsMonitoringLocalElement<br>
IsPhaseCreatedValid<br>
IsPhaseDemolishedValid<br>
IsTransient<br>
IsValidObject<br>
IsValidType<br>
<strong>LevelId</strong><br>
<strong>Location</strong><br>
<strong>LookupParameter</strong><br>
MemberwiseClone<br>
<strong>Name</strong><br>
OwnerViewId<br>
Parameter<br>
Parameters<br>
<strong>ParametersMap</strong><br>
Pinned<br>
ReferenceEquals<br>
RefersToExternalResourceReference<br>
RefersToExternalResourceReferences<br>
ReleaseUnmanagedResources<br>
SetEntity<br>
ToString<br>
UniqueId<br>
VersionGuid<br>
ViewSpecific<br>
WorksetId<br>
getBoundingBox<br>
setElementType<br>
</p>
</div>



---


## Podstawowe klasy
## Wall.*
<div class='trzy-kolumny'>
<p>
ArePhasesModifiable<br>
AssemblyInstanceId<br>
<strong>BoundingBox</strong><br>
CanBeHidden<br>
CanBeLocked<br>
CanDeleteSubelement<br>
CanHaveAnalyticalModel<br>
CanHaveTypeAssigned<br>
<strong>Category</strong><br>
<strong>ChangeTypeId</strong><br>
<strong>Create</strong><br>
CreatedPhaseId<br>
CurtainGrid<br>
DeleteEntity<br>
DeleteSubelement<br>
DeleteSubelements<br>
DemolishedPhaseId<br>
DesignOption<br>
Dispose<br>
Document<br>
Equals<br>
FindInserts<br>
Flip<br>
Flipped<br>
<strong>Geometry</strong><br>
GetAnalyticalModel<br>
GetAnalyticalModelId<br>
GetChangeTypeAny<br>
GetChangeTypeElementAddition<br>
GetChangeTypeElementDeletion<br>
GetChangeTypeGeometry<br>
GetChangeTypeParameter<br>
</p>
<p>
<strong>GetDependentElements</strong><br>
GetEntity<br>
GetEntitySchemaGuids<br>
GetExternalFileReference<br>
GetExternalResourceReference<br>
GetExternalResourceReferences<br>
<strong>GetGeneratingElementIds</strong><br>
GetGeometryObjectFromReference<br>
GetHashCode<br>
GetMaterialArea<br>
GetMaterialIds<br>
GetMaterialVolume<br>
GetMonitoredLinkElementIds<br>
GetMonitoredLocalElementIds<br>
GetOrderedParameters<br>
GetParameterFormatOptions<br>
GetParameters<br>
GetPhaseStatus<br>
GetStackedWallMemberIds<br>
GetSubelements<br>
GetType<br>
<strong>GetTypeId</strong><br>
GetValidTypes<br>
GroupId<br>
HasPhases<br>
<strong>Id</strong><br>
IsExternalFileReference<br>
IsHidden<br>
IsMonitoringLinkElement<br>
IsMonitoringLocalElement<br>
IsPhaseCreatedValid<br>
IsPhaseDemolishedValid<br>
</p>
<p>
IsStackedWall<br>
IsStackedWallMember<br>
IsTransient<br>
IsValidObject<br>
IsValidType<br>
<strong>LevelId</strong><br>
<strong>Location</strong><br>
<strong>LookupParameter</strong><br>
MemberwiseClone<br>
<strong>Name</strong><br>
<strong>Orientation</strong><br>
OwnerViewId<br>
Parameter<br>
Parameters<br>
<strong>ParametersMap</strong><br>
Pinned<br>
ReferenceEquals<br>
RefersToExternalResourceReference<br>
RefersToExternalResourceReferences<br>
ReleaseUnmanagedResources<br>
<strong>SetEntity</strong><br>
StackedWallOwnerId<br>
StructuralUsage<br>
ToString<br>
UniqueId<br>
VersionGuid<br>
ViewSpecific<br>
<strong>WallType</strong><br>
<strong>Width</strong><br>
WorksetId<br>
getBoundingBox<br>
setElementType<br>
</p>
</div>



---


## Pyrevit
- możliwości
- tworzenie interfejsu do skryptu
- ustawianie addinów pod firmę (pipeline developera)




---


## Pyrevit

![pyrevit-tab](/images/lectures/pyrevit-tab.png)

1. Tab coloring - koloruje wam zakładki wg otwartych projektów i rodzin. Minify revit UI - chowa wam górne zakładki których nie używacie np mi zostawia tylko Architecture, Annotate i Modify ( ustawia się to klikając na ikonkę s SHIFTEM)
2. Sync Views - synchronizuje widoki np jak zmieniasz często rzuty (np. sprawdzając szachty) to mając włączoną tą opcję zawsze widok ląduje w tym samym miejscu co na poprzednim rzucie (resetuje się np w momencie wejścia na widok 3d)
3. Zaawansowane zaznaczanie - działa jak Pamięć w kalkulatorze: zaznaczasz parę obiektów dodajesz do pamięci, zaznaczasz inne dodajesz do pamięci. potem jak klikniesz MRead to zaznaczone zostaną wszystkie poprzednio zaznaczone elementy
4. Make Pattern - szybko możesz tworzyć szrafurę np trawy, kostki, wzór płytek itp.
5. Sheets - dla mnie najwygodniejsze jest kopiowanie legend na inne rysunki (PB, PW - na jednym rysunku ustawiasz powtarzające się legendy a potem kopiujesz je na wszystkie inne rysunki i wklejają się w tym samym miejscu) Druga to Batch Sheet Maker - na szybko generuje dużo rysunków wpisujesz tylko nr rysunku [tab] nazewa rysunku i masz rysunek ( ja do PW mam w pliku tekstowym zestaw rysunków które przeklejam do tego narzędzia na etapie PW i od razu mam przygotowane puste rysunki z numerami i nazwami.
6. Duzo ułatwien w tym miejscu, najfajniejsze to chyba Kopiowanie view templates do innych otwartych plików.
7. Preflight Checks - moje ulubione narzędzie pokazuje w ładnej graficznej formie "kondycję" twojego revitowego pliku i co może być do poprawy.
8. Team - ważna rzecz do sprawdzania: Who did that? kto stworzył elementi kto ostatni go edytował.
9. Czyszczenie rzeczy które czasami jest zbyt dobre, ale przynajmniej potrafi wyczyścić elementy których nie czyści purge.




---


## Pyrevit

![pyrevit-sheets](/images/lectures/pyrevit-sheets.png)

5. Sheets - dla mnie najwygodniejsze jest kopiowanie legend na inne rysunki (PB, PW - na jednym rysunku ustawiasz powtarzające się legendy a potem kopiujesz je na wszystkie inne rysunki i wklejają się w tym samym miejscu) Druga to Batch Sheet Maker - na szybko generuje dużo rysunków wpisujesz tylko nr rysunku [tab] nazewa rysunku i masz rysunek ( ja do PW mam w pliku tekstowym zestaw rysunków które przeklejam do tego narzędzia na etapie PW i od razu mam przygotowane puste rysunki z numerami i nazwami.



---


## Pyrevit

![pyrevit-views](/images/lectures/pyrevit-views.png)

6. Duzo ułatwien w tym miejscu, najfajniejsze to chyba Kopiowanie view templates do innych otwartych plików.
    



---


## Pyrevit

![pyrevit-checks1](/images/lectures/pyrevit-checks1.png)

7. Preflight Checks - moje ulubione narzędzie pokazuje w ładnej graficznej formie "kondycję" twojego revitowego pliku i co może być do poprawy.



---


## Pyrevit

![pyrevit-checks2](/images/lectures/pyrevit-checks2.png)

7. Preflight Checks - moje ulubione narzędzie pokazuje w ładnej graficznej formie "kondycję" twojego revitowego pliku i co może być do poprawy.
    


---


## Pyrevit

![pyrevit-checks3](/images/lectures/pyrevit-checks3.png)

7. Preflight Checks - moje ulubione narzędzie pokazuje w ładnej graficznej formie "kondycję" twojego revitowego pliku i co może być do poprawy.
    


---


## Pyrevit

![pyrevit-checks4](/images/lectures/pyrevit-checks4.png)

7. Preflight Checks - moje ulubione narzędzie pokazuje w ładnej graficznej formie "kondycję" twojego revitowego pliku i co może być do poprawy.
    


---


## Pyrevit

![pyrevit-who](/images/lectures/pyrevit-who.png)

8. Team - ważna rzecz do sprawdzania: Who did that? kto stworzył elementi kto ostatni go edytował.


---

# Spotkanie 2.



---


## Klasy
Czym są klasy i ich dziedziczenie


\`\`\`python
class Osoba():
    def __init__(self, wiek, wysokosc):
        self.wiek = wiek
        self.wysoksc = wysokosc
        self.smierc = None
        self.martwy = False

    def umarl(self):
        self.smierc = self.wiek
        self.martwy = True


class Kobieta(Osoba):
    def __init__(self, wiek, wysokosc):
        super().__init__(wiek, wysokosc)
        self.dzieci = None
        self.ulubione_ksiazki = []


class Pilotka(Kobieta):
    def __init__(self, wiek, wysokosc, doswiadczenie):
        super().__init__(wiek, wysokosc)
        self.doswiadczenie = doswiadczenie
        self.w_powietrzu = False
    
    def startuje():
        self.w_powietrzu = True


\`\`\`



---


## Pomocne biblioteki Pythona
- math
- itertools
- collections.namedtuple
- pandas
- numpy
- bokeh / plotly
- pillow
- k3d



---


## Dynamo
- UnwrapElement
- Transaction a TransactionGroup a TransactionManager
- uidoc.Selection
- próba wyjaśnienia różnic (importowane biblioteki).



\`\`\`python
import clr

clr.AddReference("RevitAPI")
Autodesk.Revit.DB.Level

clr.AddReference("RevitNodes")
import Revit
clr.ImportExtensions(Revit.Elements)
clr.ImportExtensions(Revit.GeometryConversion)
Revit.Elements.Level


\`\`\`





---


## Dynamo IN-OUT



\`\`\`python
input_list_of_numbers = IN[0] #Here we take an input
output_list_of_numbers = [] #We create an empty list to output

for number in input_list_of_numbers: #Looping through input
    new_number = number + 1 #Adding 1 to each number
    output_list_of_numbers.append(new_number)

OUT = output_list_of_numbers #Here we output the new '+1' list


\`\`\`






---


## Revit Python Shell
Interaktywna zabawa




---


## FilteredElementCollector


\`\`\`python
collector = FilteredElementCollector(doc)

# Kategoria
meble_collector = collector.OfCategory(BuiltInCategory.OST_Furniture)

# Klasa
sciany_collector = collector.OfClass(Wall)

# typ czy rzeczywisty obiekt
typy_scian = sciany_collector.WhereElementIsNotElementType()
sciany_iterator = sciany_collector.WhereElementIsElementType()

# zamiana z zapytania na listę obiektów
sciany = sciany_iterator.ToElements()

# przykłądowy jednolinijkowiec
meble = (FilteredElementCollector(doc)
                 .OfCategory(BuiltInCategory.OST_Furniture)
                 .WhereElementIsNotElementType()
                 .ToElements()
                 )

OUT = meble


\`\`\`







---


## uidoc.Selection


\`\`\`python
import clr

clr.AddReference("RevitAPI")

from Autodesk.Revit.DB import (
    ElementId,
)

clr.AddReference("System")
from System.Collections.Generic import List

uidoc = __revit__.ActiveUIDocument  # type: ignore
doc = __revit__.ActiveUIDocument.Document  # type: ignore


def select(elements, by_id=False, uidoc=uidoc):
    """select elements in view"""
    elements_by_id = []
    if not by_id:
        for el in elements:
            elements_by_id.append(el.Id)
    else:
        elements_by_id = elements
    Icollection = List[ElementId](elements_by_id)
    uidoc.Selection.SetElementIds(Icollection)

\`\`\`




---


### Filtrowanie + zaznaczanie
Skrypt do wybierania elementów i zanzaczania ich w modelu


\`\`\`python
import clr

clr.AddReference("RevitAPI")

from Autodesk.Revit.DB import (
    ElementId,
    FilteredElementCollector,
    BuiltInCategory,
)

clr.AddReference("System")
from System.Collections.Generic import List

# Dodanie TransactionManagera i DocumentManagera
clr.AddReference("RevitServices")
import RevitServices
from RevitServices.Persistence import DocumentManager

doc = DocumentManager.Instance.CurrentDBDocument
uidoc = DocumentManager.Instance.CurrentUIApplication.ActiveUIDocument

def select(elements, by_id=False, uidoc=uidoc):
    """select elements in view"""
    elements_by_id = []
    if not by_id:
        for el in elements:
            elements_by_id.append(el.Id)
    else:
        elements_by_id = elements
    Icollection = List[ElementId](elements_by_id)
    uidoc.Selection.SetElementIds(Icollection)

# przykłądowy jednolinijkowiec
walls = ( FilteredElementCollector(doc)
            .OfCategory(BuiltInCategory.OST_Walls)
            .WhereElementIsNotElementType()
            .ToElements()
)

wybrane = []
for wall in walls:
    if "gk" in wall.Category.Name.lower():
        wybrane.append(wall)

select(wybrane)


\`\`\`


---

# Spotkanie 3.



---


## Transaction
Jak działa wprowadzanie zmian w modelu. Są trzy typy transakcji:
- Transaction 
- TransactionGroup
- TransactionManager - Dynamo



---


## TransactionManager - Dynamo


\`\`\`python
TransactionManager.Instance.EnsureInTransaction(doc)
zrob_cos()
TransactionManager.Instance.TransactionTaskDone()


\`\`\`







---

 
## Transaction 


\`\`\`python
t = Transaction(doc, 'Opis')
t.Start()
try:
	zrob_cos()
except:
    t.RollBack()
else:
    t.Commit()


\`\`\`




---

## TransactionGroup

\`\`\`python
tg = TransactionGroup(doc, "\\{\\} number assing".format(el_type))
tg.Start()

t = Transaction(doc, "Zmiana 1")
t.Start()
zrob_zmiana1()
t.Commit()

zrob_cos_inneg()

t2 = Transaction(doc, "Zmiana 2")
t2.Start()
zrob_zmiana2()
t2.Commit()

# Scalanie dwoch transakcji
tg.Assimilate()

\`\`\`
---

## Parametry

\`\`\`python
import clr
--
clr.AddReference("RevitServices")
from RevitServices.Persistence import DocumentManager

clr.AddReference("RevitAPI")
from Autodesk.Revit.DB import (
  Transaction,
  UnitUtils,
  DisplayUnitType
)

doc = DocumentManager.Instance.CurrentDBDocument


wall = s0 # type: ignore
# parametr ktory jest liczba
base_offset = wall.LookupParameter('Base Offset')
base_offset.asDouble()      # 0.16404199475065617
base_offset.AsInteger()     # 0
base_offset.AsValueString() # '5.00'
base_offset.DisplayUnitType # Autodesk.Revit.DB.DisplayUnitType.DUT_CENTIMETERS
base_offset_cm = UnitUtils.Convert(
  base_offset.AsDouble(), 
  DisplayUnitType.DUT_DECIMAL_FEET, 
  DisplayUnitType.DUT_CENTIMETERS)   # 5.0


# parametr jako inny obiekt
base = wall.LookupParameter('Base Constraint')
base.asDouble()      # 0.0
base.AsValueString() # '01-Pietro_Konstrukcja'
base.AsElementId()   # <Autodesk.Revit.DB.ElementId [221444]>
level = doc.GetElement(base.AsElementId()) # <[Autodesk.Revit.DB.Level]>
level.Name # '01-Pietro_Konstrukcja'
level.Elevation # 9.1371391076115476
level.LookupParameter('kolejny parametr') 
# i tak dalej i tak dalej 

\`\`\`



---


## Rodzaje parametrów
- String [str] \`Nazwa Budynku\`
- Double [float] \`3.14\`
- Integer [int]  \`2345\`
- Element - inny obiekt Revitowy (Level)
- BuiltInParameter



---


## ParameterMap
Jak wyciągnąć informacje o parametrach

\`\`\`python
import clr

clr.AddReference("RevitServices")
from RevitServices.Persistence import DocumentManager

clr.AddReference("RevitAPI")
from Autodesk.Revit.DB import (
  Transaction,
  UnitUtils,
  DisplayUnitType
)

doc = DocumentManager.Instance.CurrentDBDocument


wall = s0 # type: ignore

nazwy_parametrow = [x.Definition.Name for x in wall.ParametersMap]
nazwy_parametrow_rozszerzone = [x.Definition.Name for x in wall.Parameters]
# Różnice:
#   Type
#   Family
#   Type Name
#   Category
#   Design Option
#   Family and Type
#   Type Id
#   Family Name
#   Category

\`\`\`

--
    # Spotkanie 4.

---

## Własna zakładka w Revicie
![dh-tab](/images/lectures/dh-tab.jpg)

---

## Przykład od większego kolegi z branży
[Webinar BIG](https://youtu.be/5Pup98apob4)

![BIG-ribbon](/images/lectures/BIG-ribbon.jpg)

---

## Struktura folderów:
<img src="/images/lectures/folder.svg" alt="">

---
## Szybkie uruchamianie

---

# Spotkanie 5.

---

## Views
- View
- FloorView
- Viewport


---
    
## ViewTemplates

---

## Linked documents




\`\`\`python
lnks = FilteredElementCollector(doc).OfClass(RevitLinkInstance)
for i in lnks:
    name = i.Name.split(".rvt")[0]
    if name.endswith("IS"): # Filtrujemy linki zeby znalezc wlasciwy
        doclnk = i.GetLinkDocument()
        coll = (
            FilteredElementCollector(doclnk)
            .OfCategory(BuiltInCategory.OST_GenericModel)
            .WhereElementIsNotElementType()
            .ToElements()
        )
        for x in coll:
            if x.Symbol.FamilyName.startswith("Nazwa"):
                lvl = doclnk.GetElement(x.LevelId)
                lvl_name = lvl.Name
                elements.append((x, lvl_name))
    return elements


\`\`\`

---

## Wymiarowanie


\`\`\`python
import clr
clr.AddReference("RevitAPI")
from Autodesk.Revit.DB import (
    FilteredElementCollector,
    Transaction,
    XYZ,
    Line,
    Reference,
    ReferenceArray,
)


element, grid = selection 
p = el.GeometryCurve.GetEndPoint(0)
p_ref = el.GeometryCurve.GetEndPointReference(0)
proj = grid.Curve.Project(p)
gr_ref = Reference(grid)

# Tworzenie wymiaru
direction = grid.Curve.Direction
p1 = XYZ(p.X, p.Y, 0).Add(direction.Multiply(0.5))
p2 = proj.XYZPoint.Add(direction.Multiply(0.5))
dimline = Line.CreateBound(p1, p2) # stworzyliśmy prostopadłą
# dimline = dimline.CreateOffset(100, dimline.Direction)

refarr = ReferenceArray()
refarr.Append(p_ref)
refarr.Append(gr_ref)

t = Transaction(doc, 'DEV wymiar')
t.Start()
dim = doc.Create.NewDimension(doc.ActiveView, dimline, refarr)
t.Commit()

\`\`\`


---
# Spotkanie 6.
---

## Porównywanie
## x == y

Porównywanie elementów ze sobą jest proste w przypadku booleans i liczb całkowitych.
Problem zaczyna się przy zmiennoprzecinkowych \`float\`, czyli większości rzeczy w geometrii 3D i Revicie.
1. Działające porównania:
    - True == False
    - 1 == 2
2. Niedziałające np. 2.5 == 2.4 + 0.1

W praktyce najczęściej 2.5 == 2.5 będzie się zgadzać i będzie dawać wynik pozytywny.
Komputer floaty zawsze trzyma w zaokrągleniu, dlatego czasem przy działaniach okazuje się, że poprawne jest takie równanie:<br>
\`0.1 - 0.01 = 0.0900000000000000003\`

Dlatego najczęściej przy porównywaniu liczb zmiennoprzecinkowych lub wektorów lub punktów warto dodać tzw. epsilon.


\`\`\`python
e = 0.0001 # do jakiego zaokrąglenia ma uważać liczby za równe
x = 0.1 - 0.01
y = 0.09

if abs(x - y) < e: # abs - czyli liczba bezwzględna
    return True
else:
    return False
 

\`\`\`


---

# Praca wspólna:


---


## Narysuj ścianę



\`\`\`python
import clr

clr.AddReference("RevitServices")
import RevitServices
from RevitServices.Persistence import DocumentManager
from RevitServices.Transactions import TransactionManager

clr.AddReference("RevitAPI")
from Autodesk import Revit
from Autodesk.Revit import DB, UI
from Autodesk.Revit.DB import (
    Wall,
    Document,
    Transaction
)

# uidoc = DocumentManager.Instance.CurrentUIApplication.ActiveUIDocument
# doc = DocumentManager.Instance.CurrentDBDocument
uidoc = __revit__.ActiveUIDocument # type: ignore
doc = __revit__.ActiveUIDocument.Document # type: ignore

t = Transaction(doc, 'Create Wall')
t.Start()
try:
    Wall.Create(doc, curve, walltypeid, levelid, height, offset, flip, structural)
except:
    t.RollBack()
else:
    t.Commit()


\`\`\`



---
## Modyfikuj parametry ściany


-
\`\`\`python
import clr

clr.AddReference("RevitServices")
from RevitServices.Persistence import DocumentManager

clr.AddReference("RevitAPI")
from Autodesk.Revit.DB import (
    Transaction,
    UnitUtils,
    DisplayUnitType
)

doc = DocumentManager.Instance.CurrentDBDocument

wall = s0 # type: ignore
# parametr ktory jest liczba
base_offset = wall.LookupParameter('Base Offset')
new_offset = UnitUtils.Convert(
    15, 
    DisplayUnitType.DUT_CENTIMETERS,
    DisplayUnitType.DUT_DECIMAL_FEET)


t = Transaction(doc, 'Modify wall parameter')
t.Start()
try:
    # base_offset.SetValueString('15')
    base_offset.Set(new_offset)
except ValueError:
    t.RollBack()
else:
    t.Commit()


\`\`\`



---

## Zbierz dane ze ścian


\`\`\`python
import clr

clr.AddReference("RevitServices")
from RevitServices.Persistence import DocumentManager

clr.AddReference("RevitAPI")
from Autodesk.Revit.DB import (
    BuiltInCategory,
    FilteredElementCollector
)

doc = DocumentManager.Instance.CurrentDBDocument

# 1. jedna opcja to użyć zaznaczenia w shellu czyli "selection"
walls = selection # type: ignore

# 2. drugą opcją to wyfiltrowanie wszystkich ścian
walls = ( FilteredElementCollector(doc)
            .OfCategory(BuiltInCategory.OST_Walls)
            .WhereElementIsNotElementType()
            .ToElements()
)

# konterery do których zbieramy dane
powierzchnie = {}
suma = 0

# pętla przechodzaca przez każdą scianę
for wall in walls:
    typ = wall.LookupParameter("Family and Type").AsValueString()
    pow_feet = wall.LookupParameter("Area").AsDouble()
    pow_m = sq_feet_to_meter(pow_feet) 
    suma += pow_m
    if powierzchnie.get(typ):
        powierzchnie[typ] += pow_m
    else:
        powierzchnie[typ] = pow_m

# drukowanie wynikow
for typ, pow in powierzchnie.items():
    print('{}: {}m2'.format(typ,pow))

print('Powierzchnia całkowita: {}m2'.format(suma))


\`\`\`



---
## Wstaw rodzinę


-\`\`\`python
from Autodesk.Revit.DB import (
    FilteredElementCollector,
    FamilySymbol,
    BuiltInCategory,
    Structure,
    XYZ,
)

wszystkie_rodziny_drzwi = (FilteredElementCollector(doc)
.OfClass(typeof(FamilySymbol))
.OfCategory(BuiltInCategory.OST_Doors)
.ToElements())

family_symbol = wszystkie_rodziny_drzwi[0] # wybieramy pierwsza lepsza
active_view = doc.ActiveView
level = doc.GetElement(active_view.LevelId)

location = XYZ(0,0,0)
structural = Structure.StructuralType.NonStructural

# dla zwykłych rodzin
nowy_obiekt = doc.Create.NewFamilyInstance(
	location = location,
	symbol = family_symbol,
	level = level,
	structuralType = structural
)
# dla rodzin hostowych
# doc.Create.NewFamilyInstance(
# 	location,
# 	symbol,
# 	host, # opcjonalne dla rodzin z hostami
#	level,
#	structuralType
#)
# dla rodzin liniowych
#doc.Create.NewFamilyInstance(
#	location,
#	symbol,
#	host, # opcjonalne dla rodzin z hostami
#	level,
#	structuralType
#)


\`\`\`



---



## Wymiaruj osie



\`\`\`python
import clr

clr.AddReference("RevitAPI")
from Autodesk.Revit.DB import (
    FilteredElementCollector,
    Grid,
    Transaction,
    ReferenceArray,
    Reference,
    Line,
    XYZ,
)

uidoc = __revit__.ActiveUIDocument  # type: ignore
doc = __revit__.ActiveUIDocument.Document  # type: ignore

# tutaj jest przykład, gdzie dzielę jedno sformułowanie 
# na wiele linii poprzez zamknięcie je w nawiasy
osie = ( FilteredElementCollector(doc)
    .OfClass(Grid)
    .WhereElementIsNotElementType()
    .ToElements()
)

# chcemy podzielić osie na grupy w których są one równoległe do siebie 
grupy = {}
for os in osie:
    direction = os.Curve.Direction.ToString()  # "XYZ(-1,0,0)"
    negate =    os.Curve.Direction.Negate().ToString() # "XYZ(1,0,0)"

    # będziemy używać Direction jako klucza po którym sortujemy
    if grupy.get(direction):
        grupy[direction] += [os]
    elif grupy.get(negate):
        grupy[negate] += [os]
    else:
        grupy[direction] = [os]

t = Transaction(doc, 'wymiarowanie osi')
t.Start()
for k, osie in grupy.items():
    if len(osie) > 1:
        os1 = osie[0]
        os2 = osie[1]
        p1 = os1.Curve.GetEndPoint(0)
        p1 = XYZ(p1.X, p1.Y, 0)
        p2 = os2.Curve.Project(p1).XYZPoint

        dimline = Line.CreateBound(p1,p2)

        refarr = ReferenceArray()
        for os in osie:
            ref = Reference(os)
            refarr.Append(ref)

        dim = doc.Create.NewDimension(doc.ActiveView, dimline, refarr)
    
t.Commit()


\`\`\`
`;export{n as default};
