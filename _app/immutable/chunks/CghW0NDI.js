import{t as e}from"./C_grik4_.js";var t=`# Open Source in Architecture

## Tools that make work easier

[dawid.huczynski.pl/en/lectures/open-source-in-architecture](https://dawid.huczynski.pl/en/lectures/open-source-in-architecture)

---

# Topics

- Krita
- Gimp + BIMP
- Inkscape
- QGIS (Geoportal)
- Blender
- Photogrammetry
- A new way to do a concept

---

# Krita

Something to draw with

---

# Krita

- layout
- layers
- groups
- layer filters
- masks
- brushes
- transformations
- selection
- healing
- optimisation
- saving
- printing

---

# Gimp

Krita's companion

---

# Gimp

- layout
- layers
- selection, quick mask
- colours
- brushes
- transformations
- optimisation
- saving
- printing
- BIMP

---

# Inkscape

Something for presentations and diagrams

---

# Inkscape

- layout
- tools
- document
- layers
- fill and stroke
- colours
- raise and lower
- masks, clipping photos
- paths and combining
- trace bitmap
- grouping
- path effects editor
- text and typefaces
- align and distribute
- clones
- hatching
- saving

---

# QGIS

What every project<br>should start with

---

# QGIS

- layout
- layers
- services
- XYZ
- geodetic coordinate system
- vector layers
- data
- Geoportal
- point clouds

---

# Blender

A bonus:<br>something for visualisation

---

# Blender

- interface
- objects
- mesh
- materials
- lighting
- camera
- rendering
- Collections
- boolean modelling
- parametric modelling
- Asset Browser
- sculpting
- post-processing

---

# Blender

Add-ons:

- Archimesh
- BlenderBIM
- BlenderGIS
- PointCloudVisualizer

---

# Photogrammetry

or: point clouds

---

# Photogrammetry

- interface

---

# Thank you

Questions?
`,n=`<p style="font-size:3em;margin:0">🚀</p>

# Automating project start-up

[dawid.huczynski.pl/en/lectures/project-startup](https://dawid.huczynski.pl/en/lectures/project-startup)

---

# 🔥 Goal

- Awareness
- Good practices
- Examples of use

---

# 🔥 Programme

1. Introduction to GIS
2. The problem
3. Good practices
4. Collecting data
5. Managing data
6. Helpful libraries

---

# 🌍 1. Introduction to GIS

---

## Map projections

<video loop muted autoplay playsinline width="480" height="480">
	<source src="https://external-preview.redd.it/aXDfu0MCpk3IlYhYoi6qwCkQJtkC8899g6NMLQSgtDM.gif?format=mp4&amp;s=1781c829ba794de3588c808a17cc7dfb213f84e6">
</video>

---

## What deceives us?

- [engaging-data.com: map projections](https://engaging-data.com/country-centered-map-projections/?p=0.000,0.000&cat=mercator&angle=0)
- [thetruesize.com](https://www.thetruesize.com/)

---

## Height systems

- PL-KRON86-NH – until December 2023 at the latest
- **PL-EVRF2007-NH**

---

## Geodetic reference frames in Poland

the mathematical and physical realisations<br>of the European Terrestrial Reference System ETRS89,<br>marked as:
- PL-ETRF2000
- **PL-ETRF89**

---

## Planar (projected) coordinate systems

- PL-LAEA
- PL-LCC
- PL-UTM
- **PL-2000** – 15ºE, 18ºE, 21ºE and 24ºE, numbered 5, 6, 7 and 8
- PL-1992

---

## Zones

- EPSG:2180 – whole of Poland, PL-1992
- EPSG:2176 – PL-2000/15
- EPSG:2177 – PL-2000/18
- EPSG:2178 – PL-2000/21
- EPSG:2179 – PL-2000/24

---

## Kinds of data

- raster
- vector:
  - points
  - lines
  - polygons
- databases (tables)

---

## Services

- XYZ
- WMS / WMTS
- WFS

---

# 🙈 🙉 🙊 2. Let's define the problem

---

## 🛫 Problems at the start

- Awareness of the information
- Repetitive data collection
- Repetitive data processing
- Lack of consistency
- Time
- Information overload
- Updates

---

# 💡 3. Good practices

---

## Units

CAD or BIM: always set the units in the file.

**Receiving a file:** check the units and fill them in if needed.

**Issuing a file:** check and fill in the units.

---

## TERYT (Polish land register ID)

<p style="font-size:2em"><strong style="color:#af3029">22</strong><strong style="color:#ad8301">61</strong><strong style="color:#66800b">01</strong>_<strong style="color:#24837b">1</strong>.<strong style="color:#205ea6">0303</strong>.<strong style="color:#5e409d">769/16</strong></p>
<p><span style="color:#af3029">voivodeship</span> · <span style="color:#ad8301">county</span> · <span style="color:#66800b">municipality</span> _ <span style="color:#24837b">type</span> . <span style="color:#205ea6">precinct</span> . <span style="color:#5e409d">plot no.</span></p>

---

## Coordination cube

<div class='dwie-kolumny'>
<img src="/images/lectures/project-startup/szescian.webp" alt="Coordination cube">
<ul>
<li>location – a base point (or even 8)</li>
<li>scale – differences visible in every direction</li>
<li>units – 1 m × 1 m × 1 m</li>
<li>every building in one place (vertical walls)</li>
<li>every discipline in the building (from the top)</li>
<li>snapping, aligning, scaling</li>
</ul>
</div>

---

## Optimising the start-up file

- split into smaller parts
- change control
- the minimum of necessary information
- updates

---

## What can I do?

When I can, I reduce the number of families and elements.

When complexity grows, it is better to split it into parts and update simple families quickly.

**Simple is better than complex.**<br>**Complex is better than complicated.**

---

## Zen of Python

<div style="text-align:left;font-size:0.8em;line-height:1.35">
Beautiful is better than ugly.<br>
Explicit is better than implicit.<br>
<strong>Simple is better than complex.</strong><br>
<strong>Complex is better than complicated.</strong><br>
Flat is better than nested.<br>
Sparse is better than dense.<br>
Readability counts.<br>
Special cases aren't special enough to break the rules.<br>
Although practicality beats purity.<br>
Errors should never pass silently.<br>
Unless explicitly silenced.<br>
In the face of ambiguity, refuse the temptation to guess.<br>
There should be one-- and preferably only one --obvious way to do it.<br>
Although that way may not be obvious at first unless you're Dutch.<br>
Now is better than never.<br>
Although never is often better than right now.<br>
If the implementation is hard to explain, it's a bad idea.<br>
If the implementation is easy to explain, it may be a good idea.<br>
Namespaces are one honking great idea – let's do more of those!
</div>

---

## Tracking changes

- git
- tracking users' changes
- IFC

---

## Tracking changes

![git](/images/lectures/project-startup/git.webp)

---

## Tracking changes

### IFC vs. plain text

---

# ⛏️ 4. Collecting data

---

## The plot

![Plots](/images/lectures/project-startup/dzialki.webp)

---

## The plot

\`\`\`
https://uldk.gugik.gov.pl/?request=GetParcelByXY&xy={x},{y},{epsg}
https://uldk.gugik.gov.pl/?request=GetParcelById&id={teryt}
https://uldk.gugik.gov.pl/?request=GetAggregateArea&id={teryt},{teryt},{teryt}
\`\`\`

---

## The plot

\`\`\`python
def get_plot(project_id, dzialki=None, x=None, y=None, epsg=None, target_epsg=None):
    # https://uldk.gugik.gov.pl/opis.html#
    if epsg and x and y:  # by a point
        req = requests.get(
            f"https://uldk.gugik.gov.pl/?request=GetParcelByXY&xy={x},{y},{epsg}")
    elif isinstance(dzialki, str):  # by a single plot, e.g. '141201_1.0001.1867/2'
        req = requests.get(
            f"https://uldk.gugik.gov.pl/?request=GetParcelById&id={dzialki}")
    elif isinstance(dzialki, list):  # by a list of plots
        req = requests.get(
            f'https://uldk.gugik.gov.pl/?request=GetAggregateArea&id={",".join(dzialki)}')
    else:
        raise ValueError("Invalid input.")

    wkb = req.text.split("\\n")[1]
    shape = shapely.from_wkb(wkb)
    if target_epsg:
        epsg = epsg if epsg else 2180
        project = pyproj.Transformer.from_crs(epsg, target_epsg, always_xy=True).transform
        shape = transform(project, shape)
    buffer = shape.buffer(200)
\`\`\`

---

## Point cloud

### Query: which clouds cover the area

\`\`\`python
URL = "https://mapy.geoportal.gov.pl/wss/service/PZGIK/DanePomiaroweNMT/WMS/"
x = point.x  # coordinates
y = point.y  # coordinates
url = URL + "SkorowidzeUkladEVRF2007?"
LAYERS = [
    # 'Układ wysokościowy PL-EVRF2007-NH',
    "SkorowidzeLIDAR2023",
    "SkorowidzeLIDAR2022",
    "SkorowidzeLIDAR2021",
    "SkorowidzeLIDAR2020iStarsze",
]
\`\`\`

---

## Point cloud

### Query: which clouds cover the area

\`\`\`python
PARAMS = {
    "SERVICE": "WMS",
    "request": "GetFeatureInfo",
    "version": "1.3.0",
    "layers": ",".join(LAYERS),
    "styles": "",
    "crs": f"EPSG:{epsg}",
    "bbox": "%f,%f,%f,%f"
    % (y - distance, x - distance, y + distance, x + distance),
    "width": "101",
    "height": "101",
    "format": "image/png",
    "transparent": "true",
    "query_layers": ",".join(LAYERS),
    "i": "50",
    "j": "50",
    "INFO_FORMAT": "text/html",
}
r = requests.get(url=url, params=PARAMS)
\`\`\`

---

## Terrain / toposurface

| x | y | z |
| --- | --- | --- |
| 6214234.55 | 3090904.23 | 110.12 |
| 6325432.32 | 3090904.23 | 110.12 |
| 6325432.32 | 3090904.23 | 110.12 |
| 6325432.32 | 3090904.23 | 110.12 |

---

## 3D buildings

\`\`\`python
url = "http://mapy.geoportal.gov.pl/wss/service/PZGIK/PRG/WFS/AdministrativeBoundaries?language=pol&"
distance = 50
PARAMS = {
    "SERVICE": "WFS",
    "request": "GetFeature",
    "version": "2.0.0",
    "typenames": "ms:A02_Granice_powiatow",
    "crs": f"EPSG:{epsg}",
    "bbox": "{:f},{:f},{:f},{:f}".format(y - distance, x - distance, y + distance, x + distance),
    "FORMAT": "application/gml+xml",
    "WIDTH": 101,
    "HEIGHT": 101,
    "i": 50,
    "j": 50,
}
r = requests.get(url=url, params=PARAMS)
\`\`\`

---

## 3D buildings

\`\`\`python
url = f"https://opendata.geoportal.gov.pl/InneDane/Budynki3D/LOD1/2022/{id_powiatu[:2]}/{id_powiatu}.zip"
\`\`\`

---

## WMS / WFS

- Orthophoto map
- Utility networks
- Local zoning plans – vector / image
- Roads – vector
- BDOT topographic database – vector

---

## WMS / WFS

Counties and the geoportal

[integracja.gugik.gov.pl/eziudp](https://integracja.gugik.gov.pl/eziudp/index.php)

---

## WMS / WFS

![Plots from WMS](/images/lectures/project-startup/wms-dzialki.webp)

---

## WMS / WFS

![Buildings from WMS](/images/lectures/project-startup/wms-budynki.webp)

---

## WMS / WFS

![Networks from WMS](/images/lectures/project-startup/wms-sieci.webp)

---

# 🧹 5. Managing data

---

## shapely

\`\`\`python
shape = get_plot(project_id, dzialki=dzialki)
buffer = shape.buffer(200)
center = shape.centroid
\`\`\`

---

## shapely

![A plot with a buffer](/images/lectures/project-startup/dzialki-bufor.webp)

---

## shapely

![Joined plots](/images/lectures/project-startup/dzialki-join.webp)

---

## shapely

- polygon.intersection(other_polygon)
- polygon.difference(other_polygon)
- polygon.union(other_polygon)
- polygon.buffer(distance)

---

## geopandas

managing data

<img src="/images/lectures/project-startup/dataframe.svg" alt="DataFrame" style="background:white">

---

## geopandas

![A DataFrame example](/images/lectures/project-startup/dataframe-example.webp)

---

## laspy / PDAL

- processing point clouds and las/laz files
- filtering
- geolocation
- transposition
- reprojection
- classification

---

## laspy / PDAL

\`\`\`python
def join_and_split_point_clouds(las_fp, shape, buffer, proj_id):
    points, header = merge_clouds(las_fp)
    las = laspy.LasData(header)
    las.points = points
    clouds = {}
    buffer_mask = get_site_mask(points, buffer)
    buffer_points = las.points[buffer_mask]
    clouds["buffer-teren"] = buffer_points[buffer_points.classification == 2]
    print("Filtered buffer-teren")
    site_mask = get_site_mask(points, shape)
    dzialka_points = las.points[site_mask]
    buffer_without_site_mask = np.array([buffer_mask, ~site_mask]).min(axis=0)
    clouds["buffer"] = las.points[buffer_without_site_mask]
    print("Filtered buffer")
    cl = dzialka_points.classification
    clouds["dzialka-teren"] = dzialka_points[cl == 2]
    print("Filtered dzialka teren")
    zielen_mask = np.array([cl == 3, cl == 4, cl == 5]).max(axis=0)
    clouds["dzialka-zielen"] = dzialka_points[zielen_mask]
    clouds["dzialka-budynki"] = dzialka_points[cl == 6]
    print("Filtered dzialka budynki dzialka zielen")
    fpaths = []
    for x in clouds:
        las.points = clouds[x]
        fp = os.path.join("output", f"{proj_id}-{x}.laz")
        las.write(fp)
        fpaths.append(fp)
    return fpaths, clouds, las
\`\`\`

---

## laspy / PDAL

![The buffer in GIS](/images/lectures/project-startup/pc-gis-bufor.webp)

---

## laspy / PDAL

![The plot in GIS](/images/lectures/project-startup/pc-gis-dzialka.webp)

---

## laspy / PDAL

![Buffer point cloud](/images/lectures/project-startup/pc-bufor.webp)

---

## laspy / PDAL

![Buffer terrain](/images/lectures/project-startup/pc-bufor-teren.webp)

---

## laspy / PDAL

![Plot point cloud](/images/lectures/project-startup/pc-dzialka.webp)

---

## laspy / PDAL

![Plot terrain](/images/lectures/project-startup/pc-dzialka-teren.webp)

---

# 📚 6. Helpful libraries

- shapely
- pandas
- geopandas
- pyproj
- laspy

---

## shapely

- 2D
- buffer / offset
- cutting / intersecting
- polygon operations
- import / export of various 2D formats

---

## pandas

- Excel on steroids
- DataFrame
- any data
- advanced and automatic filtering
- import / export to Excel, CSV etc.

---

# 🫂 Thanks for staying till the end

### Get in touch

[dawid.huczynski.pl](https://dawid.huczynski.pl/) · [dawid.huczynski@gmail.com](mailto:dawid.huczynski@gmail.com)
`,r=`# QGIS

## Or: what every project should start with

[dawid.huczynski.pl/en/lectures/qgis](https://dawid.huczynski.pl/en/lectures/qgis)

---

# Height systems

- PL-KRON86-NH – until December 2023 at the latest
- PL-EVRF2007-NH

---

# Map projections

<video class="media-element tErWI93xEKrI2OkozPs7J" loop="" style="margin:0 auto;max-height:700px" muted="" width="480" height="480" autoplay>
 <source src="https://external-preview.redd.it/aXDfu0MCpk3IlYhYoi6qwCkQJtkC8899g6NMLQSgtDM.gif?format=mp4&amp;s=1781c829ba794de3588c808a17cc7dfb213f84e6">
</video>

---

# What deceives us?

- [https://engaging-data.com/pages/scripts/d3projections/projectioncountry2.html](https://engaging-data.com/country-centered-map-projections/?p=0.000,0.000&cat=mercator&angle=0)
- <https://www.thetruesize.com/>

---

# Quiz

Which geographic coordinate system do we use in Poland?

---

# Geodetic reference frames in Poland

the mathematical and physical realisations<br>of the European Terrestrial Reference System ETRS89,<br>marked as:

- PL-ETRF2000
- **PL-ETRF89**

---

# Planar (projected) coordinate systems

- PL-LAEA
- PL-LCC
- PL-UTM
- **PL-2000** – 15ºE, 18ºE, 21ºE and 24ºE, numbered 5, 6, 7 and 8.
- PL-1992

---

# QGIS

A sweet misalliance of Google Maps and the geoportal.

---

# Coordinate system

- EPSG:2180 - whole of Poland, PL-1992
- EPSG:2176 - PL-2000/15
- EPSG:2177 - PL-2000/18
- EPSG:2178 - PL-2000/21
- EPSG:2179 - PL-2000/24

---

# Layout

![](https://lh3.googleusercontent.com/pw/AM-JKLUKCbDB2H4ht1zUhCE5qiDH6nSPGx2z4O2KjWZ_7D1LrcTifIj186xsnfseGeHKpXQi1Bym4PMYe7KMPMj78CWzgHrRyQg4HCp_qwv5kMHNrj_DlE-CDUf5pDDgliEY-kMBQQ0x3gRLkBQXrhSvAEpbAA=w1920-h898-no?authuser=0)
---

# Plugins

- **Pobieracz danych GUGiK** (GUGiK data downloader)
- Usługa Lokalizacji Działek Katastralnych (cadastral plot locator)
- Przechwyć wysokość GUGiK NMT (pick DTM height)
- Oblicz Wysokość GUGiK NMT (compute DTM height)
- Wtyczka APP (spatial planning acts downloader)

---

# Layers

- raster
- vector:
  - points
  - lines
  - polygons
- data

---

# Services

- XYZ
- WMS / WMTS
- WFS

A file that loads the geoportal raster layers:<br>
\`\`H:\\\\05_BIM STANDARD\\\\QGIS-GEOPORTAL.xml\`\`

---

# Geoportal

---

# Analysis

What can we do with this knowledge?

- check the plot
- check heights
- check slopes

---

# GeoTIFF and GeoPDF

---

# Data and layer types

- <https://www.geoportal.gov.pl/uslugi>
- INSPIRE
- BDOO - general geographic objects database
- BDOT10k - topographic objects database

---

# Data

- Styles
- Labels
- Parametrics

---

# Point clouds

Bonus
`,i=`# Introduction to the Revit API

[dawid.huczynski.pl/en/lectures/revit-api](https://dawid.huczynski.pl/en/lectures/revit-api)

---

# Session 1

---

## Tools and environment setup

- **Pyrevit** - an add-in for building your own add-ins, and a small toolbox in itself: <br>
    <https://github.com/eirannejad/pyRevit/releases> <br>
- **RevitPythonShell** - an interactive Python console in Revit: <br>
    <https://github.com/architecture-building-systems/revitpythonshell/releases>
- **stubs** - autocompletion of Revit commands in VS Code: <br>
    <https://www.macro4bim.com/post/create-python-stubs> <br>
    <https://github.com/gtalarico/ironpython-stubs> <br>
- **RevitLookup** - a tool to inspect the parameters of Revit objects: <br>
    <https://github.com/jeremytammik/RevitLookup>
- **git** - code versioning and teamwork, an all-in-one: <br>
    <https://git-scm.com/>

---

## Where to learn

- <https://www.revitapidocs.com/>
- <https://apidocs.co/apps/revit/2021/>
- <https://help.autodesk.com/view/RVT/2022/ENU/?guid=Revit_API_Revit_API_Developers_Guide_html>
- <https://thebuildingcoder.typepad.com/>
- <http://wiki.theprovingground.org/revit-api>
- <https://dynamopythonprimer.gitbook.io/>
- <https://www.youtube.com/channel/UC1Dx-jGyRbvvHzZ8ZyGWF5w/playlists>
- <https://github.com/gtalarico/python-revit-resources>
- <https://github.com/architecture-building-systems/revitpythonshell>
- <https://github.com/Amoursol/dynamoPython>
- <https://daren-thomas.gitbooks.io/scripting-autodesk-revit-with-revitpythonshell/content/>

---

## How to read scripts

- \`#! python3\` - defines which language the script uses
- \`# -*- coding: utf-8 -*-\` - defines the UTF-8 Unicode character range (Polish letters included)

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

## Using Python libraries

\`\`\`python
import sys
sys.path.append('path/to/modules')


\`\`\`

---

## The API and Python versions

- Dynamo API - IronPython 2.7 / Python 3.8, depending on the Dynamo version
- API RPSHELL (Python) - IronPython 2.7 / python 3.8
- API Macros - IronPython 2.7

---

## Static and dynamic languages

Types (int, float, str, Object, Enum, Element, Id):

- static types
- dynamic types

---

## API basics

Boilerplate for Dynamo scripts. DO NOT COPY THIS, seriously! :D<br>
keyword: "Maintenance"

\`\`\`python
import clr # .NET's Common Language Runtime.

# Adding modules.
import sys
sys.path.append(r'C:\\Program Files (x86)\\IronPython 2.7\\Lib')

# Adding standard types
import System
from System import Array
from System.Collections.Generic import *

# Adding standard Dynamo types
clr.AddReference('ProtoGeometry')
from Autodesk.DesignScript.Geometry import *

# Adding standard Dynamo-Revit types
clr.AddReference("RevitNodes")
import Revit
clr.ImportExtensions(Revit.Elements)
clr.ImportExtensions(Revit.GeometryConversion)

# Adding the TransactionManager and DocumentManager
clr.AddReference("RevitServices")
import RevitServices
from RevitServices.Persistence import DocumentManager 
from RevitServices.Transactions import TransactionManager 

# Adding the Revit API
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

## What does a foot have to do with Revit?

units

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

## Another way to handle units

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

## API structure and exploration

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

## Basic classes

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

## Basic classes

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

- what it can do
- building a UI for a script
- setting up add-ins for a company (a developer pipeline)

---

## Pyrevit

![pyrevit-tab](/images/lectures/pyrevit-tab.png)

1. Tab coloring - colours your tabs by open project and family. Minify Revit UI - hides the ribbon tabs you do not use, e.g. it leaves me only Architecture, Annotate and Modify (configured by SHIFT-clicking the icon).
2. Sync Views - synchronises views: when you switch plans often (e.g. checking shafts), with this on the view always lands in the same place as on the previous plan (it resets e.g. when you open a 3D view).
3. Advanced selection - works like a calculator's memory: select a few objects and add them to memory, select others and add them too; MRead then selects everything you stored.
4. Make Pattern - quickly create hatch patterns, e.g. grass, paving, tiles.
5. Sheets - my favourite is copying legends to other sheets (for permit or construction drawings: place the recurring legends on one sheet, then copy them to all the others and they land in the same spot). The other is Batch Sheet Maker: it quickly creates many sheets; you type the sheet number [tab] sheet name and the sheet is there (for construction drawings I keep the sheet list in a text file, paste it into this tool and get empty sheets with numbers and names right away).
6. Lots of helpers here; the best is probably copying view templates to other open files.
7. Preflight Checks - my favourite tool: it shows the "health" of your Revit file in a nice graphical form, and what could be improved.
8. Team - an important check: Who did that? Who created an element and who edited it last.
9. Cleanup that is sometimes too thorough, but at least it removes elements that Purge leaves behind.

---

## Pyrevit

![pyrevit-sheets](/images/lectures/pyrevit-sheets.png)

1. Sheets - my favourite is copying legends to other sheets (for permit or construction drawings: place the recurring legends on one sheet, then copy them to all the others and they land in the same spot). The other is Batch Sheet Maker: it quickly creates many sheets; you type the sheet number [tab] sheet name and the sheet is there (for construction drawings I keep the sheet list in a text file, paste it into this tool and get empty sheets with numbers and names right away).

---

## Pyrevit

![pyrevit-views](/images/lectures/pyrevit-views.png)

1. Lots of helpers here; the best is probably copying view templates to other open files.

---

## Pyrevit

![pyrevit-checks1](/images/lectures/pyrevit-checks1.png)

1. Preflight Checks - my favourite tool: it shows the "health" of your Revit file in a nice graphical form, and what could be improved.

---

## Pyrevit

![pyrevit-checks2](/images/lectures/pyrevit-checks2.png)

1. Preflight Checks - my favourite tool: it shows the "health" of your Revit file in a nice graphical form, and what could be improved.

---

## Pyrevit

![pyrevit-checks3](/images/lectures/pyrevit-checks3.png)

1. Preflight Checks - my favourite tool: it shows the "health" of your Revit file in a nice graphical form, and what could be improved.

---

## Pyrevit

![pyrevit-checks4](/images/lectures/pyrevit-checks4.png)

1. Preflight Checks - my favourite tool: it shows the "health" of your Revit file in a nice graphical form, and what could be improved.

---

## Pyrevit

![pyrevit-who](/images/lectures/pyrevit-who.png)

1. Team - an important check: Who did that? Who created an element and who edited it last.

---

# Session 2

---

## Classes

What classes and inheritance are

\`\`\`python
class Person():
    def __init__(self, age, height):
        self.age = age
        self.height = height
        self.death = None
        self.dead = False

    def died(self):
        self.death = self.age
        self.dead = True


class Woman(Person):
    def __init__(self, age, height):
        super().__init__(age, height)
        self.children = None
        self.favourite_books = []


class Pilot(Woman):
    def __init__(self, age, height, experience):
        super().__init__(age, height)
        self.experience = experience
        self.airborne = False
    
    def take_off(self):
        self.airborne = True


\`\`\`

---

## Helpful Python libraries

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
- Transaction vs. TransactionGroup vs. TransactionManager
- uidoc.Selection
- an attempt to explain the differences (imported libraries).

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

Interactive fun

---

## FilteredElementCollector

\`\`\`python
# Note: filters accumulate on a collector, so every query starts with a new one.

# Category
furniture_collector = FilteredElementCollector(doc).OfCategory(BuiltInCategory.OST_Furniture)

# Class
walls_collector = FilteredElementCollector(doc).OfClass(Wall)

# type or actual instance
wall_types = FilteredElementCollector(doc).OfCategory(BuiltInCategory.OST_Walls).WhereElementIsElementType()
walls_iterator = FilteredElementCollector(doc).OfCategory(BuiltInCategory.OST_Walls).WhereElementIsNotElementType()

# turning the query into a list of objects
walls = walls_iterator.ToElements()

# an example one-liner
furniture = (FilteredElementCollector(doc)
                 .OfCategory(BuiltInCategory.OST_Furniture)
                 .WhereElementIsNotElementType()
                 .ToElements()
                 )

OUT = furniture


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

### Filtering + selecting

A script that picks elements and selects them in the model

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

# Adding the TransactionManager and DocumentManager
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

# an example one-liner
walls = ( FilteredElementCollector(doc)
            .OfCategory(BuiltInCategory.OST_Walls)
            .WhereElementIsNotElementType()
            .ToElements()
)

chosen = []
for wall in walls:
    if "gk" in wall.Category.Name.lower():  # "gk" = plasterboard in Polish type names
        chosen.append(wall)

select(chosen)


\`\`\`

---

# Session 3

---

## Transaction

How changes are made to the model. There are three kinds of transactions:

- Transaction
- TransactionGroup
- TransactionManager - Dynamo

---

## TransactionManager - Dynamo

\`\`\`python
TransactionManager.Instance.EnsureInTransaction(doc)
do_something()
TransactionManager.Instance.TransactionTaskDone()


\`\`\`

---

## Transaction

\`\`\`python
t = Transaction(doc, 'Description')
t.Start()
try:
    do_something()
except:
    t.RollBack()
else:
    t.Commit()


\`\`\`

---

## TransactionGroup

\`\`\`python
tg = TransactionGroup(doc, "{} number assign".format(el_type))
tg.Start()

t = Transaction(doc, "Change 1")
t.Start()
make_change1()
t.Commit()

do_something_else()

t2 = Transaction(doc, "Change 2")
t2.Start()
make_change2()
t2.Commit()

# Merging the two transactions
tg.Assimilate()

\`\`\`

---

## Parameters

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
# a parameter that is a number
base_offset = wall.LookupParameter('Base Offset')
base_offset.AsDouble()      # 0.16404199475065617
base_offset.AsInteger()     # 0
base_offset.AsValueString() # '5.00'
base_offset.DisplayUnitType # Autodesk.Revit.DB.DisplayUnitType.DUT_CENTIMETERS
base_offset_cm = UnitUtils.Convert(
  base_offset.AsDouble(), 
  DisplayUnitType.DUT_DECIMAL_FEET, 
  DisplayUnitType.DUT_CENTIMETERS)   # 5.0


# a parameter pointing to another object
base = wall.LookupParameter('Base Constraint')
base.AsDouble()      # 0.0
base.AsValueString() # '01-Pietro_Konstrukcja'
base.AsElementId()   # <Autodesk.Revit.DB.ElementId [221444]>
level = doc.GetElement(base.AsElementId()) # <[Autodesk.Revit.DB.Level]>
level.Name # '01-Pietro_Konstrukcja'
level.Elevation # 9.1371391076115476
level.LookupParameter('another parameter')
# and so on, and so on

\`\`\`

---

## Parameter types

- String [str] \`Building Name\`
- Double [float] \`3.14\`
- Integer [int]  \`2345\`
- Element - another Revit object (Level)
- BuiltInParameter

---

## ParameterMap

How to get information about parameters

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

parameter_names = [x.Definition.Name for x in wall.ParametersMap]
parameter_names_extended = [x.Definition.Name for x in wall.Parameters]
# Differences:
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

---

# Session 4

---

## Your own tab in Revit

![dh-tab](/images/lectures/dh-tab.jpg)

---

## An example from a bigger player in the industry

[Webinar BIG](https://youtu.be/5Pup98apob4)

![BIG-ribbon](/images/lectures/BIG-ribbon.jpg)

---

## Folder structure

<img src="/images/lectures/folder.svg" alt="">

---

## Quick launch

---

# Session 5

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
def elements_from_link(doc):
    elements = []
    lnks = FilteredElementCollector(doc).OfClass(RevitLinkInstance)
    for i in lnks:
        name = i.Name.split(".rvt")[0]
        if name.endswith("IS"):  # filter the links to find the right one
            doclnk = i.GetLinkDocument()
            coll = (
                FilteredElementCollector(doclnk)
                .OfCategory(BuiltInCategory.OST_GenericModel)
                .WhereElementIsNotElementType()
                .ToElements()
            )
            for x in coll:
                if x.Symbol.FamilyName.startswith("Name"):
                    lvl = doclnk.GetElement(x.LevelId)
                    elements.append((x, lvl.Name))
    return elements


\`\`\`

---

## Dimensioning

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


el, grid = selection
p = el.GeometryCurve.GetEndPoint(0)
p_ref = el.GeometryCurve.GetEndPointReference(0)
proj = grid.Curve.Project(p)
gr_ref = Reference(grid)

# Creating the dimension
direction = grid.Curve.Direction
p1 = XYZ(p.X, p.Y, 0).Add(direction.Multiply(0.5))
p2 = proj.XYZPoint.Add(direction.Multiply(0.5))
dimline = Line.CreateBound(p1, p2) # we created a perpendicular line
# dimline = dimline.CreateOffset(100, dimline.Direction)

refarr = ReferenceArray()
refarr.Append(p_ref)
refarr.Append(gr_ref)

t = Transaction(doc, 'DEV dimension')
t.Start()
dim = doc.Create.NewDimension(doc.ActiveView, dimline, refarr)
t.Commit()

\`\`\`

---

# Session 6

---

## Comparing

## x == y

Comparing values is simple for booleans and integers.
The problem starts with floating-point numbers (\`float\`), i.e. most things in 3D geometry and Revit.

1. Comparisons that work:
    - True == False
    - 1 == 2
2. Ones that do not, e.g. 2.5 == 2.4 + 0.1

In practice 2.5 == 2.5 will usually hold and come out true.
A computer always stores floats rounded, so sometimes calculations show that this equation is correct:<br>
\`0.1 - 0.01 = 0.0900000000000000003\`

That is why, when comparing floats, vectors or points, it is worth adding a so-called epsilon.

\`\`\`python
e = 0.0001  # tolerance within which numbers count as equal
x = 0.1 - 0.01
y = 0.09

def equal(x, y, e=e):
    return abs(x - y) < e  # abs - the absolute value

equal(x, y)  # True
 

\`\`\`

---

# Hands-on together

---

## Draw a wall

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

## Modify wall parameters

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
# a parameter that is a number
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

## Collect data from walls

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

# 1. one option is to use the shell's selection, "selection"
walls = selection # type: ignore

# 2. the other option is to filter all walls
walls = ( FilteredElementCollector(doc)
            .OfCategory(BuiltInCategory.OST_Walls)
            .WhereElementIsNotElementType()
            .ToElements()
)

# containers for the collected data
areas = {}
total = 0

# a loop over every wall
for wall in walls:
    wall_type = wall.LookupParameter("Family and Type").AsValueString()
    area_feet = wall.LookupParameter("Area").AsDouble()
    area_m = sqr_feet_to_meter(area_feet)  # the function from the units slide
    total += area_m
    if areas.get(wall_type):
        areas[wall_type] += area_m
    else:
        areas[wall_type] = area_m

# printing the results
for wall_type, area in areas.items():
    print('{}: {}m2'.format(wall_type, area))

print('Total area: {}m2'.format(total))


\`\`\`

---

## Place a family

\`\`\`python
from Autodesk.Revit.DB import (
    FilteredElementCollector,
    FamilySymbol,
    BuiltInCategory,
    Structure,
    Transaction,
    XYZ,
)

all_door_families = (FilteredElementCollector(doc)
.OfClass(FamilySymbol)
.OfCategory(BuiltInCategory.OST_Doors)
.ToElements())

family_symbol = all_door_families[0]  # take the first one
active_view = doc.ActiveView
level = doc.GetElement(active_view.LevelId)

location = XYZ(0,0,0)
structural = Structure.StructuralType.NonStructural

t = Transaction(doc, 'Place family')
t.Start()
if not family_symbol.IsActive:
    family_symbol.Activate()  # an unused type has to be activated first
# regular families: point, type, level, structural type
new_instance = doc.Create.NewFamilyInstance(location, family_symbol, level, structural)
# hosted families (e.g. a door in a wall): point, type, host, level, structural type
# doc.Create.NewFamilyInstance(location, family_symbol, host, level, structural)
# line-based families: a curve instead of a point
# doc.Create.NewFamilyInstance(curve, family_symbol, level, structural)
t.Commit()


\`\`\`

---

## Dimension the grids

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

# here one expression is split
# over many lines by wrapping it in parentheses
grids = ( FilteredElementCollector(doc)
    .OfClass(Grid)
    .WhereElementIsNotElementType()
    .ToElements()
)

# we want to split the grids into groups of parallel ones
groups = {}
for g in grids:
    direction = g.Curve.Direction.ToString()  # "XYZ(-1,0,0)"
    negate =    g.Curve.Direction.Negate().ToString() # "XYZ(1,0,0)"

    # Direction is the key we group by
    if groups.get(direction):
        groups[direction] += [g]
    elif groups.get(negate):
        groups[negate] += [g]
    else:
        groups[direction] = [g]

t = Transaction(doc, 'dimension grids')
t.Start()
for k, parallel in groups.items():
    if len(parallel) > 1:
        g1 = parallel[0]
        g2 = parallel[1]
        p1 = g1.Curve.GetEndPoint(0)
        p1 = XYZ(p1.X, p1.Y, 0)
        p2 = g2.Curve.Project(p1).XYZPoint

        dimline = Line.CreateBound(p1,p2)

        refarr = ReferenceArray()
        for g in parallel:
            ref = Reference(g)
            refarr.Append(ref)

        dim = doc.Create.NewDimension(doc.ActiveView, dimline, refarr)
    
t.Commit()


\`\`\`
`,a=`# Blender

[dawid.huczynski.pl/en/lectures/szkolenie-blender](https://dawid.huczynski.pl/en/lectures/szkolenie-blender)

---

# Programme

1. What is Blender?
2. Open Source
3. Where to learn?
4. Behind the scenes
5. Workflow
6. Modularity
7. Preferences
8. Keyboard shortcuts
9. Workspaces
10. Interface
11. Objects
12. Meshes
13. Materials
14. Collections
15. Asset Browser
16. Modes
17. Properties
18. Outliner
19. 3D View
20. Rendering
21. Compositing
22. Geometry Nodes
23. Add-ons
24. A workflow for quick visualisations

---

## If you want good renders, you have to pay attention to details

-- _Henryk Sienkiewicz_

---

# What is Blender?

<iframe style="border-radius:2rem" width="1000" height="550" src="https://www.youtube.com/embed/F73jwtPeZ4A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

# Open Source

<iframe style="border-radius:2rem" width="1000" height="550" src="https://www.youtube.com/embed/QRqY_20ti9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
---
# Where to learn?
- **https://www.blender.org/**
- **https://www.blendernation.com/** - a daily dose of Blender news
- **[YouTube](https://youtube.com/playlist?list=PLa1F2ddGya_-UvuAqHAksYnB0qL9yWDO6)** - the official channel
- **https://blenderartists.org/** - a forum, the largest body of knowledge:
  - **Tutorials**: https://blenderartists.org/c/support/tutorials-tips-and-tricks/40
  - **Materials**: https://blenderartists.org/c/support/materials-and-textures/38
  - **Lighting**: https://blenderartists.org/c/support/lighting-and-rendering/48
- **[Blender Guru:](https://www.youtube.com/watch?v=TPrnSACiTJ4)**
- **https://www.creativeshrimp.com/tutorials** - a great guy who works wonders; he simply has talent.
---
# Behind the scenes

<div style="display:grid;width:90vw;height:70vh;grid-template-columns:1fr 1fr 1fr;grid-gap:1rem; grid-auto-rows:35vh;">
<a style="opacity:1" target="_blank" rel="noreferrer" href="https://www.blendernation.com/2021/01/27/behind-the-scenes-77-offices/"><img style="width:100%;height:100%;object-fit:cover;border-radius:1rem" src="https://www.blendernation.com/wp-content/uploads/2021/01/77-offices-header-image.jpg"/></a>
<a style="opacity:1" target="_blank" rel="noreferrer" href="https://www.blendernation.com/2021/09/08/behind-the-scenes-concrete-house/"><img src="https://www.blendernation.com/wp-content/uploads/2021/08/concrete-house-featured-image.jpg" style="width:100%;height:100%;object-fit:cover;border-radius:1rem" /></a>
<a style="opacity:1" target="_blank" rel="noreferrer" href="https://www.blendernation.com/2022/05/06/behind-the-scenes-memories-of-june/"><img src="https://www.blendernation.com/wp-content/uploads/2022/04/0001-3.png" style="width:100%;height:100%;object-fit:cover;border-radius:1rem" /></a>
<a style="opacity:1" target="_blank" rel="noreferrer" href="https://www.blendernation.com/2021/10/20/behind-the-scenes-cozy-gold/"><img src="https://www.blendernation.com/wp-content/uploads/2021/10/image1-2.jpg" style="width:100%;height:100%;object-fit:cover;border-radius:1rem" /></a>
<a style="opacity:1" target="_blank" rel="noreferrer" href="https://www.blendernation.com/2021/03/10/behind-the-scenes-bed-and-bathroom/"><img src="https://www.blendernation.com/wp-content/uploads/2021/03/image6-2.jpg" style="width:100%;height:100%;object-fit:cover;border-radius:1rem" /></a>
<a style="opacity:1" target="_blank" rel="noreferrer" href="https://www.blendernation.com/2022/07/04/wabi-sabi-gallery/"><img src="https://www.blendernation.com/wp-content/uploads/2022/07/Final-Render-1.jpg" style="width:100%;height:100%;object-fit:cover;border-radius:1rem" /></a>
</div>

---

# Modularity

![](/images/lectures/interfejs.png)

---

# Preferences

---

# Keyboard shortcuts

- T
- N
- Q
- SPACE
- RIGHT_MOUSE_BUTTON

---

# Workspaces

- **Layout**
- **Modeling**
- **Sculpting**
- UV Editing
- Texture Painting
- **Shading**
- Animation
- Rendering
- **Compositing**
- **Geometry Nodes**
- Scripting

---

# Interface

- Outliner
- properties
- 3d view
  - N Tab
  - T Tab

---

# Objects

  the origin vs. editing the mesh

---

# Meshes

---

# Materials

- Principled BSDF
- Node Editor

---

# Collections

---

# Asset Browser

---

# Modes

- Object
- Edit
- Sculpt
- Vertex Paint
- Weight Paint
- Texture Paint

---

# Properties

- **Render Properties**
- **Output Properties**
- View Layer Properties
- Scene Properties
- **World Properties**
- Object Properties (Viewport Display)
- **Modifiers**
- Particles
- Physics
- Constraints
- Object Data Properties (Mesh)
- **Material Properties**
- Texture Properties

---

# Outliner

- **View Layer**
- Blender File
- Orphan Data
- **Collections**
- Object relations

---

# 3D View

- Viewport Shading
- Viewport – which settings to use?

---

# Rendering

- Eevee
- Cycles

---

# Compositing

---

# Geometry Nodes

<iframe style="border-radius:2rem" width="1000" height="550" src="https://www.youtube.com/embed/kMDB7c0ZiKA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

# Add-ons bundled with Blender

- **Export Paper Model** - unfold a simple (even textured) model into 2D and print it to fold together
- **Import AutoCAD DXF Format**
- **Import Images as Planes** - easily add images in 3D, many at once.
- **Copy Attributes Menu**
- **Modifier Tools**
- **Sun Position** - the real sun angle and sun animation
- **Material Utilities** - SHIFT+Q - a great tool for swapping materials
- **Bsurfaces GPL Edition** - a modelling tool
- **F2** - a modelling tool
- **LoopTools** - a modelling tool
- **tinyCad Mesh tools** - great when you want to extend a line, join corners or find an intersection
- **Node Arrange** - helps when working with nodes
- **Node Presets** - helps when working with nodes
- **Node Wrangler** - helps when working with nodes
- **Align Tools** - align elements in 3D
- **Bool Tool** - cut objects with objects
- **Carver** - carve with a "knife"
- **Edit Linked Library** - easily open linked files
- **Freestyle SVG Exporter** - if you generate lines in your render, you can export them as vectors

---

# Add-ons worth installing

- [BlenderBIM](https://blenderbim.org/) - an all-in-one for BIM data, from 3D to schedules, cost estimates and 2D documentation.
- [BlenderGIS](https://github.com/domlysz/BlenderGIS) - an all-in-one for geolocation and data import.
- [Modular Tree](https://blenderartists.org/t/modular-tree/674043) - free generation of amazing trees!
- [PRJ](https://blenderartists.org/t/prj-add-on-for-generating-technical-drawings/1381786) - a simple generator of drawings from a 3D model (not tested)
- [CAD Transform](https://blender-archipack.gumroad.com/l/nQVcS) - move objects the way you do in Revit [Tutorial video](https://youtu.be/WRI_TdbaZps)
- [CAD Sketcher](https://makertales.gumroad.com/l/CADsketcher) - very CAD-like solid modelling with constraints.

---

# Paid add-ons

- <https://www.scatterforblender.com/>

---

# Assets

- **[Poly Haven](https://polyhaven.com/) + ADDON** my first choice, everything under CC0! It lives on donations; I recommend buying the add-on to support them
- **[BlendSwap](https://www.blendswap.com/categories)** - 3D models, around for a long time
- **[BlenderKit](https://www.blenderkit.com/) + ADDON** - models, textures, HDRIs
- **[Sketchfab](https://sketchfab.com/3d-models?date=week&features=downloadable&licenses=322a749bcfa841b29dff1e8a1bb74b0b&licenses=b9ddc40b93e34cdca1fc152f39b9f375&licenses=72360ff1740d419791934298b8b6d270&licenses=7c23a1ba438d4306920229c12afcb5f9&sort_by=-likeCount) + ADDON** - 3D models
- **[Quixel Megascans](https://quixel.com/megascans/)** - free only for Unreal Engine; high-quality scans and textures for $19/month. In one month you can download 45 materials or 22 3D models: decide what you need, test for free, then subscribe for one month.
- **[textures.com](https://www.textures.com/library)** - paid, but worth considering: high-quality textures and 3D scans
- **<https://ambientcg.com/>**

---

# A workflow for quick visualisations

Revit → IFC → BlenderBIM → BlenderGIS → Materials → Details

---

# Questions?
`,o=`# Open Source w Architekturze

## Narzędzia ułatwiające pracę

[dawid.huczynski.pl/lectures/open-source-in-architecture](https://dawid.huczynski.pl/lectures/open-source-in-architecture)

---

# Tematy do omówienia

- Krita
- Gimp + BIMP
- Inkscape
- QGIS (Geoportal)
- Blender
- Fotogrametria
- Nowy sposób na koncepcję

---

# Krita

Czyli coś do rysowania

---

# Krita

- layout
- warstwy
- grupy
- filtry warstw
- maski
- pędzle
- przekształcenia
- zaznaczanie
- healing
- optymalizacja
- zapisywanie
- drukowanie

---

# Gimp

Czyli uzupełnienie Krity

---

# Gimp

- layout
- warstwy
- zaznaczanie szybka maska
- kolory
- pędzle
- przekształcenia
- optymalizacja
- zapisywanie
- drukowanie
- BIMP

---

# Inkscape

Czyli coś do prezentacji i schematów

---

# Inkscape

- layout
- narzędzia
- dokument
- warstwy
- wypełnienie i kontur
- kolory
- na wierzch pod spód
- maski docinanie zdjęć
- ścieżki i łączenie
- wektoryzuj bitmapę
- grupuj
- edytor efektów ścieżki
- tekst i typy
- wyrównaj rozmieść
- klony
- szrafura
- zapisywanie

---

# QGIS

Czyli coś, co powinno być początkiem<br>każdego projektu

---

# QGIS

- layout
- warstwy
- usługi
- XYZ
- układ geodezyjny
- wektorowa
- dane
- Geoportal
- chmura punktów

---

# Blender

Czyli bonus<br>coś do wizualizacji

---

# Blender

- interfejs
- obiekty
- mesh
- materiały
- oświetlenie
- kamera
- renderowanie
- Collections
- modelowanie przez wycinanie
- parametryczne modelowanie
- AssetBrowser
- rzeźbienie
- post edycja

---

# Blender

Dodatki:

- Archimesh
- BlenderBIM
- BlenderGIS
- PointCloudVisualizer

---

# Fotogrametria

czyli chmura punktów

---

# Fotogrametria

- interfejs

---

# Dzięki

Pytania?
`,s=`<p style="font-size:3em;margin:0">🚀</p>

# Automatyzacja inicjalizacji projektu

[dawid.huczynski.pl/lectures/project-startup](https://dawid.huczynski.pl/lectures/project-startup)

---

# 🔥 Cel

- Świadomość
- Dobre praktyki
- Przykłady zastosowania

---

# 🔥 Program

1. Wprowadzenie do GIS
2. Problem
3. Dobre praktyki
4. Zbieranie danych
5. Zarządzanie danymi
6. Pomocne biblioteki

---

# 🌍 1. Wprowadzenie do GIS

---

## Projekcje map

<video loop muted autoplay playsinline width="480" height="480">
	<source src="https://external-preview.redd.it/aXDfu0MCpk3IlYhYoi6qwCkQJtkC8899g6NMLQSgtDM.gif?format=mp4&amp;s=1781c829ba794de3588c808a17cc7dfb213f84e6">
</video>

---

## Co nas zwodzi?

- [engaging-data.com: projekcje map](https://engaging-data.com/country-centered-map-projections/?p=0.000,0.000&cat=mercator&angle=0)
- [thetruesize.com](https://www.thetruesize.com/)

---

## Układy wysokościowe

- PL-KRON86-NH – najpóźniej do grudnia 2023
- **PL-EVRF2007-NH**

---

## Geodezyjne układy odniesienia w Polsce

będące matematyczną i fizyczną realizacją<br>europejskiego ziemskiego systemu odniesienia ETRS89,<br>oznaczone symbolami:
- PL-ETRF2000
- **PL-ETRF89**

---

## Układy współrzędnych płaskich prostokątnych

- PL-LAEA
- PL-LCC
- PL-UTM
- **PL-2000** – 15ºE, 18ºE, 21ºE i 24ºE, oznaczane numerami 5, 6, 7 i 8
- PL-1992

---

## Strefy

- EPSG:2180 – cała Polska, PL-1992
- EPSG:2176 – PL-2000/15
- EPSG:2177 – PL-2000/18
- EPSG:2178 – PL-2000/21
- EPSG:2179 – PL-2000/24

---

## Rodzaje danych

- rastrowe
- wektorowe:
  - punkty
  - linie
  - poligony
- bazy (tabele)

---

## Usługi

- XYZ
- WMS / WMTS
- WFS

---

# 🙈 🙉 🙊 2. Zdefiniujmy problem

---

## 🛫 Problemy przy starcie

- Świadomość informacji
- Powtarzalność zbierania danych
- Powtarzalność przetwarzania danych
- Brak spójności
- Czas
- Przerost informacji
- Aktualizacja

---

# 💡 3. Dobre praktyki

---

## Jednostki

CAD czy BIM: zawsze ustawmy jednostki w pliku.

**Dostajemy plik:** sprawdzamy i ewentualnie uzupełniamy jednostki.

**Wydajemy plik:** sprawdzamy i uzupełniamy jednostki.

---

## TERYT

<p style="font-size:2em"><strong style="color:#af3029">22</strong><strong style="color:#ad8301">61</strong><strong style="color:#66800b">01</strong>_<strong style="color:#24837b">1</strong>.<strong style="color:#205ea6">0303</strong>.<strong style="color:#5e409d">769/16</strong></p>
<p><span style="color:#af3029">województwo</span> · <span style="color:#ad8301">powiat</span> · <span style="color:#66800b">gmina</span> _ <span style="color:#24837b">rodzaj</span> . <span style="color:#205ea6">obręb</span> . <span style="color:#5e409d">nr działki</span></p>

---

## Sześcian koordynacyjny

<div class='dwie-kolumny'>
<img src="/images/lectures/project-startup/szescian.webp" alt="Sześcian koordynacyjny">
<ul>
<li>lokalizacja – punkt bazowy (a nawet 8)</li>
<li>skala – widać różnice w każdym kierunku</li>
<li>jednostki – 1 m × 1 m × 1 m</li>
<li>każdy budynek w jednym miejscu (ściany pionowe)</li>
<li>każda branża w budynku (od góry)</li>
<li>przyciąganie, wyrównywanie, skalowanie</li>
</ul>
</div>

---

## Optymalizacja pliku startowego

- podział na mniejsze części
- kontrola zmian
- minimum niezbędnych informacji
- aktualizacje

---

## Co mogę zrobić?

Jeżeli mogę, staram się zmniejszyć liczbę rodzin i elementów.

Jeżeli poziom skomplikowania rośnie, lepiej rozłożyć to na części i szybko aktualizować proste rodziny.

**Proste jest lepsze niż złożone.**<br>**Złożone jest lepsze niż skomplikowane.**

---

## Zen of Python

<div style="text-align:left;font-size:0.8em;line-height:1.35">
Beautiful is better than ugly.<br>
Explicit is better than implicit.<br>
<strong>Proste jest lepsze niż złożone.</strong><br>
<strong>Złożone jest lepsze niż skomplikowane.</strong><br>
Flat is better than nested.<br>
Sparse is better than dense.<br>
Readability counts.<br>
Special cases aren't special enough to break the rules.<br>
Although practicality beats purity.<br>
Errors should never pass silently.<br>
Unless explicitly silenced.<br>
In the face of ambiguity, refuse the temptation to guess.<br>
There should be one-- and preferably only one --obvious way to do it.<br>
Although that way may not be obvious at first unless you're Dutch.<br>
Now is better than never.<br>
Although never is often better than right now.<br>
If the implementation is hard to explain, it's a bad idea.<br>
If the implementation is easy to explain, it may be a good idea.<br>
Namespaces are one honking great idea – let's do more of those!
</div>

---

## Śledzenie zmian

- git
- śledzenie zmian użytkowników
- IFC

---

## Śledzenie zmian

![git](/images/lectures/project-startup/git.webp)

---

## Śledzenie zmian

### IFC a zwykły tekst

---

# ⛏️ 4. Zbieranie danych

---

## Działka

![Działki](/images/lectures/project-startup/dzialki.webp)

---

## Działka

\`\`\`
https://uldk.gugik.gov.pl/?request=GetParcelByXY&xy={x},{y},{epsg}
https://uldk.gugik.gov.pl/?request=GetParcelById&id={teryt}
https://uldk.gugik.gov.pl/?request=GetAggregateArea&id={teryt},{teryt},{teryt}
\`\`\`

---

## Działka

\`\`\`python
def get_plot(project_id, dzialki=None, x=None, y=None, epsg=None, target_epsg=None):
    # https://uldk.gugik.gov.pl/opis.html#
    if epsg and x and y:  # przez punkt
        req = requests.get(
            f"https://uldk.gugik.gov.pl/?request=GetParcelByXY&xy={x},{y},{epsg}")
    elif isinstance(dzialki, str):  # przez pojedynczą działkę, np. '141201_1.0001.1867/2'
        req = requests.get(
            f"https://uldk.gugik.gov.pl/?request=GetParcelById&id={dzialki}")
    elif isinstance(dzialki, list):  # przez listę działek
        req = requests.get(
            f'https://uldk.gugik.gov.pl/?request=GetAggregateArea&id={",".join(dzialki)}')
    else:
        raise ValueError("Źle wprowadzone dane.")

    wkb = req.text.split("\\n")[1]
    shape = shapely.from_wkb(wkb)
    if target_epsg:
        epsg = epsg if epsg else 2180
        project = pyproj.Transformer.from_crs(epsg, target_epsg, always_xy=True).transform
        shape = transform(project, shape)
    buffer = shape.buffer(200)
\`\`\`

---

## Chmura punktów

### Zapytanie: jakie chmury są w danej okolicy

\`\`\`python
URL = "https://mapy.geoportal.gov.pl/wss/service/PZGIK/DanePomiaroweNMT/WMS/"
x = point.x  # koordynaty
y = point.y  # koordynaty
url = URL + "SkorowidzeUkladEVRF2007?"
LAYERS = [
    # 'Układ wysokościowy PL-EVRF2007-NH',
    "SkorowidzeLIDAR2023",
    "SkorowidzeLIDAR2022",
    "SkorowidzeLIDAR2021",
    "SkorowidzeLIDAR2020iStarsze",
]
\`\`\`

---

## Chmura punktów

### Zapytanie: jakie chmury są w danej okolicy

\`\`\`python
PARAMS = {
    "SERVICE": "WMS",
    "request": "GetFeatureInfo",
    "version": "1.3.0",
    "layers": ",".join(LAYERS),
    "styles": "",
    "crs": f"EPSG:{epsg}",
    "bbox": "%f,%f,%f,%f"
    % (y - distance, x - distance, y + distance, x + distance),
    "width": "101",
    "height": "101",
    "format": "image/png",
    "transparent": "true",
    "query_layers": ",".join(LAYERS),
    "i": "50",
    "j": "50",
    "INFO_FORMAT": "text/html",
}
r = requests.get(url=url, params=PARAMS)
\`\`\`

---

## Teren / toposurface

| x | y | z |
| --- | --- | --- |
| 6214234.55 | 3090904.23 | 110.12 |
| 6325432.32 | 3090904.23 | 110.12 |
| 6325432.32 | 3090904.23 | 110.12 |
| 6325432.32 | 3090904.23 | 110.12 |

---

## Budynki 3D

\`\`\`python
url = "http://mapy.geoportal.gov.pl/wss/service/PZGIK/PRG/WFS/AdministrativeBoundaries?language=pol&"
distance = 50
PARAMS = {
    "SERVICE": "WFS",
    "request": "GetFeature",
    "version": "2.0.0",
    "typenames": "ms:A02_Granice_powiatow",
    "crs": f"EPSG:{epsg}",
    "bbox": "{:f},{:f},{:f},{:f}".format(y - distance, x - distance, y + distance, x + distance),
    "FORMAT": "application/gml+xml",
    "WIDTH": 101,
    "HEIGHT": 101,
    "i": 50,
    "j": 50,
}
r = requests.get(url=url, params=PARAMS)
\`\`\`

---

## Budynki 3D

\`\`\`python
url = f"https://opendata.geoportal.gov.pl/InneDane/Budynki3D/LOD1/2022/{id_powiatu[:2]}/{id_powiatu}.zip"
\`\`\`

---

## WMS / WFS

- Ortofotomapa
- Sieci
- MPZP – wektor / obraz
- Drogi – wektor
- BDOT – wektor

---

## WMS / WFS

Powiaty a geoportal

[integracja.gugik.gov.pl/eziudp](https://integracja.gugik.gov.pl/eziudp/index.php)

---

## WMS / WFS

![Działki z WMS](/images/lectures/project-startup/wms-dzialki.webp)

---

## WMS / WFS

![Budynki z WMS](/images/lectures/project-startup/wms-budynki.webp)

---

## WMS / WFS

![Sieci z WMS](/images/lectures/project-startup/wms-sieci.webp)

---

# 🧹 5. Zarządzanie danymi

---

## shapely

\`\`\`python
shape = get_plot(project_id, dzialki=dzialki)
buffer = shape.buffer(200)
center = shape.centroid
\`\`\`

---

## shapely

![Działka z buforem](/images/lectures/project-startup/dzialki-bufor.webp)

---

## shapely

![Połączone działki](/images/lectures/project-startup/dzialki-join.webp)

---

## shapely

- polygon.intersection(other_polygon)
- polygon.difference(other_polygon)
- polygon.union(other_polygon)
- polygon.buffer(distance)

---

## geopandas

zarządzanie danymi

<img src="/images/lectures/project-startup/dataframe.svg" alt="DataFrame" style="background:white">

---

## geopandas

![Przykład DataFrame](/images/lectures/project-startup/dataframe-example.webp)

---

## laspy / PDAL

- przetwarzanie chmur punktów i plików las/laz
- filtrowanie
- geolokalizacja
- transpozycja
- reprojekcja – przekształcenie
- klasyfikacja

---

## laspy / PDAL

\`\`\`python
def join_and_split_point_clouds(las_fp, shape, buffer, proj_id):
    points, header = merge_clouds(las_fp)
    las = laspy.LasData(header)
    las.points = points
    clouds = {}
    buffer_mask = get_site_mask(points, buffer)
    buffer_points = las.points[buffer_mask]
    clouds["buffer-teren"] = buffer_points[buffer_points.classification == 2]
    print("Filtered buffer-teren")
    site_mask = get_site_mask(points, shape)
    dzialka_points = las.points[site_mask]
    buffer_without_site_mask = np.array([buffer_mask, ~site_mask]).min(axis=0)
    clouds["buffer"] = las.points[buffer_without_site_mask]
    print("Filtered buffer")
    cl = dzialka_points.classification
    clouds["dzialka-teren"] = dzialka_points[cl == 2]
    print("Filtered dzialka teren")
    zielen_mask = np.array([cl == 3, cl == 4, cl == 5]).max(axis=0)
    clouds["dzialka-zielen"] = dzialka_points[zielen_mask]
    clouds["dzialka-budynki"] = dzialka_points[cl == 6]
    print("Filtered dzialka budynki dzialka zielen")
    fpaths = []
    for x in clouds:
        las.points = clouds[x]
        fp = os.path.join("output", f"{proj_id}-{x}.laz")
        las.write(fp)
        fpaths.append(fp)
    return fpaths, clouds, las
\`\`\`

---

## laspy / PDAL

![Bufor w GIS](/images/lectures/project-startup/pc-gis-bufor.webp)

---

## laspy / PDAL

![Działka w GIS](/images/lectures/project-startup/pc-gis-dzialka.webp)

---

## laspy / PDAL

![Chmura punktów bufora](/images/lectures/project-startup/pc-bufor.webp)

---

## laspy / PDAL

![Teren bufora](/images/lectures/project-startup/pc-bufor-teren.webp)

---

## laspy / PDAL

![Chmura punktów działki](/images/lectures/project-startup/pc-dzialka.webp)

---

## laspy / PDAL

![Teren działki](/images/lectures/project-startup/pc-dzialka-teren.webp)

---

# 📚 6. Pomocne biblioteki

- shapely
- pandas
- geopandas
- pyproj
- laspy

---

## shapely

- 2D
- bufor / offset
- wycinanie / przenikanie
- operacje na poligonach
- import / eksport różnych formatów 2D

---

## pandas

- Excel na sterydach
- DataFrame
- dowolne dane
- zaawansowane i automatyczne filtrowanie
- import / eksport do Excela, CSV itd.

---

# 🫂 Dzięki za wytrwałość

### Zapraszam do kontaktu

[dawid.huczynski.pl](https://dawid.huczynski.pl/) · [dawid.huczynski@gmail.com](mailto:dawid.huczynski@gmail.com)
`,c=`# QGIS

## Czyli coś, co powinno być początkiem każdego projektu

[dawid.huczynski.pl/lectures/qgis](https://dawid.huczynski.pl/lectures/qgis)

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
- <https://www.thetruesize.com/>

---

# Quiz

Jaki mamy układ współrzędnych geograficznych w Polsce?

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

# Układ współrzędnych

- EPSG:2180 - cała Polska, PL-1992
- EPSG:2176 - PL-2000/15
- EPSG:2177 - PL-2000/18
- EPSG:2178 - PL-2000/21
- EPSG:2179 - PL-2000/24

---

# Layout

![](https://lh3.googleusercontent.com/pw/AM-JKLUKCbDB2H4ht1zUhCE5qiDH6nSPGx2z4O2KjWZ_7D1LrcTifIj186xsnfseGeHKpXQi1Bym4PMYe7KMPMj78CWzgHrRyQg4HCp_qwv5kMHNrj_DlE-CDUf5pDDgliEY-kMBQQ0x3gRLkBQXrhSvAEpbAA=w1920-h898-no?authuser=0)
---

# Dodatki

- **Pobieracz danych GUGiK**
- Usługa Lokalizacji Działek Katastralnych
- Przechwyć wysokość GUGiK NMT
- Oblicz Wysokość GUGiK NMT
- Wtyczka APP - Pobieranie aktów Planowania Przestrzennego

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

Plik do załadowania warstw rastrowych geoportalu:<br>
\`\`H:\\\\05_BIM STANDARD\\\\QGIS-GEOPORTAL.xml\`\`

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

- <https://www.geoportal.gov.pl/uslugi>
- INSPIRE
- BDOO - Baza Danych Obiektów Ogólnogeograficznych
- BDOT10k - Baza Danych Obiektów Topograficznych

---

# Dane

- Style
- Etykiety
- Parametryka

---

# Chmury punktów

Bonus
`,l=`# Wprowadzenie do API Revita

[dawid.huczynski.pl/lectures/revit-api](https://dawid.huczynski.pl/lectures/revit-api)

---

# Spotkanie 1

---

## Narzędzia i ustawianie środowiska

- **Pyrevit** - addon do tworzenia własnych dodatków oraz mały kombajn z narzędziami: <br>
    <https://github.com/eirannejad/pyRevit/releases> <br>
- **RevitPythonShell** - interaktywna konsola Pythona w Revicie: <br>
    <https://github.com/architecture-building-systems/revitpythonshell/releases>
- **stubs** - narzędzie do autouzupełniania Revitowych komend w VS Code: <br>
    <https://www.macro4bim.com/post/create-python-stubs> <br>
    <https://github.com/gtalarico/ironpython-stubs> <br>
- **RevitLookup** - narzędzie do podglądania parametrów obiektów Revicie: <br>
    <https://github.com/jeremytammik/RevitLookup>
- **git** - program do wersjonowania kodu i pracy w zespole, kombajn: <br>
    <https://git-scm.com/>

---

## Miejsca do szukania wiedzy

- <https://www.revitapidocs.com/>
- <https://apidocs.co/apps/revit/2021/>
- <https://help.autodesk.com/view/RVT/2022/ENU/?guid=Revit_API_Revit_API_Developers_Guide_html>
- <https://thebuildingcoder.typepad.com/>
- <http://wiki.theprovingground.org/revit-api>
- <https://dynamopythonprimer.gitbook.io/>
- <https://www.youtube.com/channel/UC1Dx-jGyRbvvHzZ8ZyGWF5w/playlists>
- <https://github.com/gtalarico/python-revit-resources>
- <https://github.com/architecture-building-systems/revitpythonshell>
- <https://github.com/Amoursol/dynamoPython>
- <https://daren-thomas.gitbooks.io/scripting-autodesk-revit-with-revitpythonshell/content/>

---

## Sposób czytania skryptów

- \`#! python3\` - definiuje jakiego języka używa skrypt
- \`# -*- coding: utf-8 -*-\` - definiuje zakres znaków Unicode UTF-8 (tu też są polskie znaki)

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
słowo klucz: "Maintenance"

\`\`\`python
import clr # .NET's Common Language Runtime.

# Dodawanie modułów.
import sys
sys.path.append(r'C:\\Program Files (x86)\\IronPython 2.7\\Lib')

# Dodawanie standardowych typów
import System
from System import Array
from System.Collections.Generic import *

# Dodawanie standardowych typów Dynamo
clr.AddReference('ProtoGeometry')
from Autodesk.DesignScript.Geometry import *

# Dodawanie standardowych typów Dynamo-Revit
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

1. Tab coloring - koloruje wam zakładki wg otwartych projektów i rodzin. Minify revit UI - chowa wam górne zakładki których nie używacie np mi zostawia tylko Architecture, Annotate i Modify ( ustawia się to, klikając na ikonkę z SHIFTEM)
2. Sync Views - synchronizuje widoki np jak zmieniasz często rzuty (np. sprawdzając szachty) to mając włączoną tą opcję zawsze widok ląduje w tym samym miejscu co na poprzednim rzucie (resetuje się np w momencie wejścia na widok 3d)
3. Zaawansowane zaznaczanie - działa jak Pamięć w kalkulatorze: zaznaczasz parę obiektów dodajesz do pamięci, zaznaczasz inne dodajesz do pamięci. potem jak klikniesz MRead to zaznaczone zostaną wszystkie poprzednio zaznaczone elementy
4. Make Pattern - szybko możesz tworzyć szrafurę np trawy, kostki, wzór płytek itp.
5. Sheets - dla mnie najwygodniejsze jest kopiowanie legend na inne rysunki (PB, PW - na jednym rysunku ustawiasz powtarzające się legendy a potem kopiujesz je na wszystkie inne rysunki i wklejają się w tym samym miejscu) Druga to Batch Sheet Maker - na szybko generuje dużo rysunków wpisujesz tylko nr rysunku [tab] nazwa rysunku i masz rysunek ( ja do PW mam w pliku tekstowym zestaw rysunków które przeklejam do tego narzędzia na etapie PW i od razu mam przygotowane puste rysunki z numerami i nazwami.
6. Dużo ułatwień w tym miejscu, najfajniejsze to chyba Kopiowanie view templates do innych otwartych plików.
7. Preflight Checks - moje ulubione narzędzie pokazuje w ładnej graficznej formie "kondycję" twojego revitowego pliku i co może być do poprawy.
8. Team - ważna rzecz do sprawdzania: Who did that? kto stworzył element i kto ostatni go edytował.
9. Czyszczenie rzeczy które czasami jest zbyt dobre, ale przynajmniej potrafi wyczyścić elementy których nie czyści purge.

---

## Pyrevit

![pyrevit-sheets](/images/lectures/pyrevit-sheets.png)

1. Sheets - dla mnie najwygodniejsze jest kopiowanie legend na inne rysunki (PB, PW - na jednym rysunku ustawiasz powtarzające się legendy a potem kopiujesz je na wszystkie inne rysunki i wklejają się w tym samym miejscu) Druga to Batch Sheet Maker - na szybko generuje dużo rysunków wpisujesz tylko nr rysunku [tab] nazwa rysunku i masz rysunek ( ja do PW mam w pliku tekstowym zestaw rysunków które przeklejam do tego narzędzia na etapie PW i od razu mam przygotowane puste rysunki z numerami i nazwami.

---

## Pyrevit

![pyrevit-views](/images/lectures/pyrevit-views.png)

1. Dużo ułatwień w tym miejscu, najfajniejsze to chyba Kopiowanie view templates do innych otwartych plików.

---

## Pyrevit

![pyrevit-checks1](/images/lectures/pyrevit-checks1.png)

1. Preflight Checks - moje ulubione narzędzie pokazuje w ładnej graficznej formie "kondycję" twojego revitowego pliku i co może być do poprawy.

---

## Pyrevit

![pyrevit-checks2](/images/lectures/pyrevit-checks2.png)

1. Preflight Checks - moje ulubione narzędzie pokazuje w ładnej graficznej formie "kondycję" twojego revitowego pliku i co może być do poprawy.

---

## Pyrevit

![pyrevit-checks3](/images/lectures/pyrevit-checks3.png)

1. Preflight Checks - moje ulubione narzędzie pokazuje w ładnej graficznej formie "kondycję" twojego revitowego pliku i co może być do poprawy.

---

## Pyrevit

![pyrevit-checks4](/images/lectures/pyrevit-checks4.png)

1. Preflight Checks - moje ulubione narzędzie pokazuje w ładnej graficznej formie "kondycję" twojego revitowego pliku i co może być do poprawy.

---

## Pyrevit

![pyrevit-who](/images/lectures/pyrevit-who.png)

1. Team - ważna rzecz do sprawdzania: Who did that? kto stworzył element i kto ostatni go edytował.

---

# Spotkanie 2

---

## Klasy

Czym są klasy i ich dziedziczenie

\`\`\`python
class Osoba():
    def __init__(self, wiek, wysokosc):
        self.wiek = wiek
        self.wysokosc = wysokosc
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
    
    def startuje(self):
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
# Uwaga: filtry dopisują się do kolektora, więc każde zapytanie zaczyna od nowego.

# Kategoria
meble_collector = FilteredElementCollector(doc).OfCategory(BuiltInCategory.OST_Furniture)

# Klasa
sciany_collector = FilteredElementCollector(doc).OfClass(Wall)

# typ czy rzeczywisty obiekt
typy_scian = FilteredElementCollector(doc).OfCategory(BuiltInCategory.OST_Walls).WhereElementIsElementType()
sciany_iterator = FilteredElementCollector(doc).OfCategory(BuiltInCategory.OST_Walls).WhereElementIsNotElementType()

# zamiana z zapytania na listę obiektów
sciany = sciany_iterator.ToElements()

# przykładowy jednolinijkowiec
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

Skrypt do wybierania elementów i zaznaczania ich w modelu

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

# przykładowy jednolinijkowiec
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

# Spotkanie 3

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
tg = TransactionGroup(doc, "{} number assign".format(el_type))
tg.Start()

t = Transaction(doc, "Zmiana 1")
t.Start()
zrob_zmiana1()
t.Commit()

zrob_cos_innego()

t2 = Transaction(doc, "Zmiana 2")
t2.Start()
zrob_zmiana2()
t2.Commit()

# Scalanie dwóch transakcji
tg.Assimilate()

\`\`\`

---

## Parametry

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
# parametr, który jest liczbą
base_offset = wall.LookupParameter('Base Offset')
base_offset.AsDouble()      # 0.16404199475065617
base_offset.AsInteger()     # 0
base_offset.AsValueString() # '5.00'
base_offset.DisplayUnitType # Autodesk.Revit.DB.DisplayUnitType.DUT_CENTIMETERS
base_offset_cm = UnitUtils.Convert(
  base_offset.AsDouble(), 
  DisplayUnitType.DUT_DECIMAL_FEET, 
  DisplayUnitType.DUT_CENTIMETERS)   # 5.0


# parametr jako inny obiekt
base = wall.LookupParameter('Base Constraint')
base.AsDouble()      # 0.0
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

---

# Spotkanie 4

---

## Własna zakładka w Revicie

![dh-tab](/images/lectures/dh-tab.jpg)

---

## Przykład od większego kolegi z branży

[Webinar BIG](https://youtu.be/5Pup98apob4)

![BIG-ribbon](/images/lectures/BIG-ribbon.jpg)

---

## Struktura folderów

<img src="/images/lectures/folder.svg" alt="">

---

## Szybkie uruchamianie

---

# Spotkanie 5

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
def elementy_z_linku(doc):
    elements = []
    lnks = FilteredElementCollector(doc).OfClass(RevitLinkInstance)
    for i in lnks:
        name = i.Name.split(".rvt")[0]
        if name.endswith("IS"):  # filtrujemy linki, żeby znaleźć właściwy
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
                    elements.append((x, lvl.Name))
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


el, grid = selection
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

# Spotkanie 6

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

def rowne(x, y, e=e):
    return abs(x - y) < e  # abs - czyli wartość bezwzględna

rowne(x, y)  # True
 

\`\`\`

---

# Praca wspólna

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
# parametr, który jest liczbą
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

# 2. drugą opcją jest wyfiltrowanie wszystkich ścian
walls = ( FilteredElementCollector(doc)
            .OfCategory(BuiltInCategory.OST_Walls)
            .WhereElementIsNotElementType()
            .ToElements()
)

# kontenery, do których zbieramy dane
powierzchnie = {}
suma = 0

# pętla przechodząca przez każdą ścianę
for wall in walls:
    typ = wall.LookupParameter("Family and Type").AsValueString()
    pow_feet = wall.LookupParameter("Area").AsDouble()
    pow_m = sqr_feet_to_meter(pow_feet)  # funkcja ze slajdu o jednostkach
    suma += pow_m
    if powierzchnie.get(typ):
        powierzchnie[typ] += pow_m
    else:
        powierzchnie[typ] = pow_m

# drukowanie wyników
for typ, pow in powierzchnie.items():
    print('{}: {}m2'.format(typ,pow))

print('Powierzchnia całkowita: {}m2'.format(suma))


\`\`\`

---

## Wstaw rodzinę

\`\`\`python
from Autodesk.Revit.DB import (
    FilteredElementCollector,
    FamilySymbol,
    BuiltInCategory,
    Structure,
    Transaction,
    XYZ,
)

wszystkie_rodziny_drzwi = (FilteredElementCollector(doc)
.OfClass(FamilySymbol)
.OfCategory(BuiltInCategory.OST_Doors)
.ToElements())

family_symbol = wszystkie_rodziny_drzwi[0]  # wybieramy pierwszą lepszą
active_view = doc.ActiveView
level = doc.GetElement(active_view.LevelId)

location = XYZ(0,0,0)
structural = Structure.StructuralType.NonStructural

t = Transaction(doc, 'Wstaw rodzinę')
t.Start()
if not family_symbol.IsActive:
    family_symbol.Activate()  # nieużywany typ trzeba najpierw aktywować
# dla zwykłych rodzin: punkt, typ, poziom, rodzaj konstrukcji
nowy_obiekt = doc.Create.NewFamilyInstance(location, family_symbol, level, structural)
# dla rodzin hostowych (np. drzwi w ścianie): punkt, typ, host, poziom, rodzaj
# doc.Create.NewFamilyInstance(location, family_symbol, host, level, structural)
# dla rodzin liniowych: krzywa zamiast punktu
# doc.Create.NewFamilyInstance(curve, family_symbol, level, structural)
t.Commit()


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

# tutaj jest przykład, gdzie dzielę jedno wyrażenie
# na wiele linii, zamykając je w nawiasach
osie = ( FilteredElementCollector(doc)
    .OfClass(Grid)
    .WhereElementIsNotElementType()
    .ToElements()
)

# chcemy podzielić osie na grupy osi równoległych do siebie
grupy = {}
for os in osie:
    direction = os.Curve.Direction.ToString()  # "XYZ(-1,0,0)"
    negate =    os.Curve.Direction.Negate().ToString() # "XYZ(1,0,0)"

    # będziemy używać Direction jako klucza, po którym grupujemy
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
`,u=`# Blender

[dawid.huczynski.pl/lectures/szkolenie-blender](https://dawid.huczynski.pl/lectures/szkolenie-blender)

---

# Program

1. Czym jest Blender?
2. Open Source
3. Gdzie szukać wiedzy?
4. Behind the scenes
5. Workflow
6. Modułowość
7. Preferences
8. Skróty klawiszowe
9. Workspaces
10. Interfejs
11. Obiekty
12. Meshe
13. Materiały
14. Collections
15. Asset Browser
16. Modes
17. Properties
18. Outliner
19. 3D View
20. Renderowanie
21. Compositing
22. Geometry Nodes
23. Dodatki
24. Workflow do szybkich wizualizacji

---

## Jeżeli chcesz mieć dobre wizki, to musisz zwrócić uwagę na detale

-- _Henryk Sienkiewicz_

---

# Czym jest Blender?

<iframe style="border-radius:2rem" width="1000" height="550" src="https://www.youtube.com/embed/F73jwtPeZ4A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

# Open Source

<iframe style="border-radius:2rem" width="1000" height="550" src="https://www.youtube.com/embed/QRqY_20ti9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
---
# Gdzie szukać wiedzy?
- **https://www.blender.org/**
- **https://www.blendernation.com/** - Dzienna porcja informacji o Blenderze
- **[YouTube](https://youtube.com/playlist?list=PLa1F2ddGya_-UvuAqHAksYnB0qL9yWDO6)** - oficjalny kanał
- **https://blenderartists.org/** - forum, największy zbiór informacji:
  - **Tutoriale**: https://blenderartists.org/c/support/tutorials-tips-and-tricks/40
  - **Materiały**: https://blenderartists.org/c/support/materials-and-textures/38
  - **Oświetlenie**: https://blenderartists.org/c/support/lighting-and-rendering/48
- **[Blender Guru:](https://www.youtube.com/watch?v=TPrnSACiTJ4)**
- **https://www.creativeshrimp.com/tutorials** - mega koleś co robi cuda, ale ma po prostu talent.
---
# Behind the scenes

<div style="display:grid;width:90vw;height:70vh;grid-template-columns:1fr 1fr 1fr;grid-gap:1rem; grid-auto-rows:35vh;">
<a style="opacity:1" target="_blank" rel="noreferrer" href="https://www.blendernation.com/2021/01/27/behind-the-scenes-77-offices/"><img style="width:100%;height:100%;object-fit:cover;border-radius:1rem" src="https://www.blendernation.com/wp-content/uploads/2021/01/77-offices-header-image.jpg"/></a>
<a style="opacity:1" target="_blank" rel="noreferrer" href="https://www.blendernation.com/2021/09/08/behind-the-scenes-concrete-house/"><img src="https://www.blendernation.com/wp-content/uploads/2021/08/concrete-house-featured-image.jpg" style="width:100%;height:100%;object-fit:cover;border-radius:1rem" /></a>
<a style="opacity:1" target="_blank" rel="noreferrer" href="https://www.blendernation.com/2022/05/06/behind-the-scenes-memories-of-june/"><img src="https://www.blendernation.com/wp-content/uploads/2022/04/0001-3.png" style="width:100%;height:100%;object-fit:cover;border-radius:1rem" /></a>
<a style="opacity:1" target="_blank" rel="noreferrer" href="https://www.blendernation.com/2021/10/20/behind-the-scenes-cozy-gold/"><img src="https://www.blendernation.com/wp-content/uploads/2021/10/image1-2.jpg" style="width:100%;height:100%;object-fit:cover;border-radius:1rem" /></a>
<a style="opacity:1" target="_blank" rel="noreferrer" href="https://www.blendernation.com/2021/03/10/behind-the-scenes-bed-and-bathroom/"><img src="https://www.blendernation.com/wp-content/uploads/2021/03/image6-2.jpg" style="width:100%;height:100%;object-fit:cover;border-radius:1rem" /></a>
<a style="opacity:1" target="_blank" rel="noreferrer" href="https://www.blendernation.com/2022/07/04/wabi-sabi-gallery/"><img src="https://www.blendernation.com/wp-content/uploads/2022/07/Final-Render-1.jpg" style="width:100%;height:100%;object-fit:cover;border-radius:1rem" /></a>
</div>

---

# Modułowość

![](/images/lectures/interfejs.png)

---

# Preferences

---

# Skróty klawiszowe

- T
- N
- Q
- SPACJA
- DRUGI_PRZYCISK_MYSZY

---

# Workspaces

- **Layout**
- **Modeling**
- **Sculpting**
- UV Editing
- Texture Painting
- **Shading**
- Animation
- Rendering
- **Compositing**
- **Geometry Nodes**
- Scripting

---

# Interfejs

- Outliner
- properties
- 3d view
  - N Tab
  - T Tab

---

# Obiekty

  punkt wstawienia a edytowanie mesha

---

# Meshe

---

# Materiały

- Principled BSDF
- Node Editor

---

# Collections

---

# Asset Browser

---

# Modes

- Object
- Edit
- Sculpt
- Vertex Paint
- Weight Paint
- Texture Paint

---

# Properties

- **Render Properties**
- **Output Properties**
- View Layer Properties
- Scene Properties
- **World Properties**
- Object Properties (Viewport Display)
- **Modifiers**
- Particles
- Physics
- Constraints
- Object Data Properties (Mesh)
- **Material Properties**
- Texture Properties

---

# Outliner

- **View Layer**
- Blender File
- Orphan Data
- **Collections**
- Relacje obiektów

---

# 3D View

- Viewport Shading
- Viewport - ustawienia co robić?

---

# Renderowanie

- Eevee
- Cycles

---

# Compositing

---

# Geometry Nodes

<iframe style="border-radius:2rem" width="1000" height="550" src="https://www.youtube.com/embed/kMDB7c0ZiKA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

# Dodatki dostarczone z Blenderem

- **Export Paper Model** - prosty model (nawet oteksturowany) można rozłożyć na 2D i wydrukować na drukarce do złożenia
- **Import AutoCAD DXF Format**
- **Import Images as Planes** - proste dodawanie obrazków w 3d, wiele na raz.
- **Copy Attributes Menu**
- **Modifier Tools**
- **Sun Position** - rzeczywiste ustawienie kąta padania słońca i animacji słońca
- **Material Utilities** - SHIFT+Q - świetne narzędzie do podmieniania materiałów
- **Bsurfaces GPL Edition** - narzędzie do modelowania
- **F2** - narzędzie do modelowania
- **LoopTools** - narzędzie do modelowania
- **tinyCad Mesh tools** - super narzędzie, jak chcesz przedłużyć linię, bądź połączyć narożniki, bądź znaleźć punkt przecięcia
- **Node Arrange** - pomocne przy pracy z nodami
- **Node Presets** - pomocne przy pracy z nodami
- **Node Wrangler** - pomocne przy pracy z nodami
- **Align Tools** - wyrównywanie elementów w 3D
- **Bool Tool** - wycinanie obiektów obiektami
- **Carver** - rzeźbienie wycinaniem "nożem"
- **Edit Linked Library** - łatwe otwieranie plików zalinkowanych
- **Freestyle SVG Exporter** - Jak używasz generowania linii na rysunku to można je wyeksportować wektorowo

---

# Dodatki które warto zainstalować

- [BlenderBIM](https://blenderbim.org/) - kombajn do pracy z danymi BIM, od 3D do zestawień, kosztorysów, generowania dokumentacji 2D.
- [BlenderGIS](https://github.com/domlysz/BlenderGIS) - kombajn do geolokalizacji i importowania danych.
- [Modular Tree](https://blenderartists.org/t/modular-tree/674043) - darmowe Generowanie niesamowitych drzew!
- [PRJ](https://blenderartists.org/t/prj-add-on-for-generating-technical-drawings/1381786) - taki prosty generator rzutów z modelu 3D (nie testowałem)
- [CAD Transform](https://blender-archipack.gumroad.com/l/nQVcS) - przenoszenie obiektów tak jak w revicie [Wideo instruktażowe](https://youtu.be/WRI_TdbaZps)
- [CAD Sketcher](https://makertales.gumroad.com/l/CADsketcher) - bardzo cadowskie generowanie brył za pomocą constraintów.

---

# Dodatki płatne

- <https://www.scatterforblender.com/>

---

# Assety

- **[Poly Haven](https://polyhaven.com/) + ADDON** priorytetowa, wszystko na licencji CC0!, utrzymuje się z datków, polecam kupić addon aby ich wesprzeć
- **[BlendSwap](https://www.blendswap.com/categories)** - modele 3D funkcjonuje od dawna
- **[BlenderKit](https://www.blenderkit.com/) + ADDON** - modele, tekstury, HDRI
- **[Sketchfab](https://sketchfab.com/3d-models?date=week&features=downloadable&licenses=322a749bcfa841b29dff1e8a1bb74b0b&licenses=b9ddc40b93e34cdca1fc152f39b9f375&licenses=72360ff1740d419791934298b8b6d270&licenses=7c23a1ba438d4306920229c12afcb5f9&sort_by=-likeCount) + ADDON** - modele 3d
- **[Quixel Megascans](https://quixel.com/megascans/)** - darmowe tylko w przypadku Unreal Engine, wysokiej jakości skany i tekstury 19$/miesiąc, jednego miesiąca można ściągnąć 45 materiałów, lub 22 modele 3d, przemyśleć co się chce posprawdzać za darmo jak działa i potem zakupić przez 1 miesiąc.
- **[textures.com](https://www.textures.com/library)** - płatne, ale warto się zastanowić, wysokiej jakości tekstury i skany 3d
- **<https://ambientcg.com/>**

---

# Workflow do szybkich wizualizacji

Revit → IFC → BlenderBIM → BlenderGIS → Materiały → Detale

---

# Pytania?
`;function d(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var f=d();function p(e){f=e}var m={exec:()=>null};function h(e){let t=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),i=t[r];return i||(i=e(r),t[r]=i),i}}function g(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(_.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var ee=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),_={codeRemoveIndent:/^(?: {0,3}\t| {1,4})/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,leadingSpaceTab:/^[ \t]+/,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,numericCharacterReference:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));/,numericCharacterReferenceOrAmpersand:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:h(e=>RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:h(e=>RegExp(`^ {0,${e}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)),fencesBeginRegex:h(e=>RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:h(e=>RegExp(`^ {0,${e}}#`)),htmlBeginRegex:h(e=>RegExp(`^ {0,${e}}(?:</?(?:${C})(?: +|$|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`,`i`)),blockquoteBeginRegex:h(e=>RegExp(`^ {0,${e}}>`))},te=/^(?:[ \t]*(?:\n|$))+/,ne=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,re=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,v=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,ie=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,y=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,ae=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,b=g(ae).replace(/bull/g,y).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),oe=g(ae).replace(/bull/g,y).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),x=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,se=/^[^\n]+/,S=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,ce=g(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,S).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),le=g(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,y).getRegex(),C=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,w=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ue=g(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!(?:script|pre|style|textarea)(?![a-z0-9-]))([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,w).replace(`tag`,C).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),de=e=>g(x).replace(`hr`,v).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,e).replace(`html`,` {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`).replace(`tag`,C).getRegex(),fe=de(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),pe=de(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),T={blockquote:g(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,pe).getRegex(),code:ne,def:ce,fences:re,heading:ie,hr:v,html:ue,lheading:b,list:le,newline:te,paragraph:fe,table:m,text:se},me=g(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,v).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,` {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`).replace(`tag`,C).getRegex(),he={...T,lheading:oe,table:me,paragraph:g(x).replace(`hr`,v).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,me).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,` {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`).replace(`tag`,C).getRegex()},ge={...T,html:g(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,w).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:m,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:g(x).replace(`hr`,v).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,b).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},_e=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,ve=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,ye=/^( {2,}|\\)\n(?!\s*$)[ \t]*/,be=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,E=/[\p{P}\p{S}]/u,D=/[\s\p{P}\p{S}]/u,O=/[^\s\p{P}\p{S}]/u,xe=g(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,D).getRegex(),Se=/[\p{Pi}\p{Ps}"']/u,k=/(?!~)[\p{P}\p{S}]/u,Ce=/(?!~)[\s\p{P}\p{S}]/u,we=/(?:[^\s\p{P}\p{S}]|~)/u,Te=g(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,ee?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),A=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,Ee=g(A,`u`).replace(/punct/g,E).getRegex(),De=g(A,`u`).replace(/punct/g,k).getRegex(),Oe=g(/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,`u`).replace(/openQuote/g,Se).replace(/punct/g,E).getRegex(),j=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,ke=g(j,`gu`).replace(/notPunctSpace/g,O).replace(/punctSpace/g,D).replace(/punct/g,E).getRegex(),Ae=g(j,`gu`).replace(/notPunctSpace/g,we).replace(/punctSpace/g,Ce).replace(/punct/g,k).getRegex(),je=g(`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,O).replace(/punctSpace/g,D).replace(/punct/g,E).getRegex(),Me=g(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,O).replace(/punctSpace/g,D).replace(/punct/g,E).getRegex(),Ne=g(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,O).replace(/punctSpace/g,D).replace(/punct/g,E).getRegex(),Pe=g(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,E).getRegex(),Fe=g(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,O).replace(/punctSpace/g,D).replace(/punct/g,E).getRegex(),Ie=g(/\\(punct)/,`gu`).replace(/punct/g,E).getRegex(),Le=g(/(`+)(?:[^`]|[^`][\s\S]*?[^`])\1(?!`)|`+|\\(punct)/,`gu`).replace(/punct/g,E).getRegex(),Re=g(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),ze=g(w).replace(`(?:-->|$)`,`-->`).getRegex(),Be=g(`^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,ze).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),M=/\[(?:\\[\s\S]|[^\[\]\\])*\]/,N=g(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace(`brackets`,M).getRegex(),Ve=g(/^!?\[(label)\]\([ \t\n]*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?[ \t\n]*\)/).replace(`label`,N).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),He=g(/^!?\[(label)\]\[(ref)\]/).replace(`label`,N).replace(`ref`,S).getRegex(),Ue=g(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,S).getRegex(),P=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/,We=g(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace(`brackets`,M).getRegex(),Ge=g(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,g(/^!?\[(label)\]\[(ref)\]/).replace(`label`,We).replace(`ref`,P).getRegex()).replace(`nolink`,g(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,P).getRegex()).getRegex(),F=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Ke=g(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/).replace(/email/g,/[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),I={_backpedal:m,anyPunctuation:Ie,anyPunctuationOutsideCode:Le,autolink:Re,blockSkip:Te,br:ye,code:ve,del:m,delLDelim:m,delRDelim:m,emStrongLDelim:Ee,emStrongRDelimAst:ke,emStrongRDelimUnd:Me,escape:_e,link:Ve,nolink:Ue,punctuation:xe,reflink:He,reflinkSearch:Ge,tag:Be,text:be,url:m},qe={...I,emStrongLDelim:Oe,emStrongRDelimAst:je,emStrongRDelimUnd:Ne,link:g(/^!?\[(label)\]\((.*?)\)/).replace(`label`,N).getRegex(),reflink:g(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,N).getRegex()},L={...I,emStrongRDelimAst:Ae,emStrongLDelim:De,delLDelim:Pe,delRDelim:Fe,url:g(/^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`emailProtocol`,Ke).replace(`protocol`,F).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:g(/^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/).replace(`protocol`,F).replace(/emailProtocol/g,/(?:mailto|xmpp):/).getRegex()},Je={...L,br:g(ye).replace(`{2,}`,`*`).getRegex(),text:g(L.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},R={normal:T,gfm:he,pedantic:ge},z={normal:I,gfm:L,breaks:Je,pedantic:qe},Ye={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Xe=e=>Ye[e];function B(e,t){if(t){if(_.escapeTest.test(e))return e.replace(_.escapeReplace,Xe)}else if(_.escapeTestNoEncode.test(e))return e.replace(_.escapeReplaceNoEncode,Xe);return e}function Ze(e){return _.numericCharacterReference.test(e)?e.replace(_.numericCharacterReferenceOrAmpersand,(e,t,n)=>{if(t===void 0&&n===void 0)return`&amp;`;let r=t===void 0?Number.parseInt(n,16):Number.parseInt(t,10);return r===0||r>1114111||r>=55296&&r<=57343?`�`:r===38?`&amp;`:String.fromCodePoint(r)}):e}function Qe(e){try{e=encodeURI(e).replace(_.percentDecode,`%`)}catch{return null}return e}function $e(e,t){let n=e.replace(_.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(_.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t){if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``)}for(;r<n.length;r++)n[r]=n[r].trim().replace(_.slashPipe,`|`);return n}function V(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function et(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&_.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function H(e){return e.trim().toLowerCase().toUpperCase().toLowerCase()}function tt(e,t){if(e.indexOf(t[0])===-1&&e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function U(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function nt(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`),c=e[0].charAt(0)===`!`,l=r.state.inLink,u=r.state.linkEmitted,d=r.state.inRawBlock;r.state.inLink=!0,r.state.linkEmitted=!1;let f=r.inlineTokens(s),p=r.state.linkEmitted;if(r.state.linkEmitted=u,r.state.inLink=l,!c){if(p){r.state.inRawBlock=d;return}r.state.linkEmitted=!0}return{type:c?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:f}}function rt(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return e.slice(Math.min(r.length,i.length))}).join(`
`)}function W(e,t,n,r){if(!t.includes(`<`))return!1;for(let i=0;i<t.length;i++){if(t[i]===`\\`){i++;continue}if(t[i]==="`"){let e=r.inline.code.exec(t.slice(i));if(e){i+=e[0].length-1;continue}}if(t[i]!==`<`)continue;let a=e.slice(n+i),o=r.inline.tag.exec(a)||r.inline.autolink.exec(a);if(o){if(o[0].length>t.length-i)return!0;i+=o[0].length-1}}return!1}var G=class{options;rules;lexer;constructor(e){this.options=e||f}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:et(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=rt(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=V(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceTabChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:V(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:V(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=V(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o=0;for(;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`||u?.type===`heading`||u?.type===`hr`||u?.type===`html`)break;if(u?.type===`blockquote`){let t=u,a=e.join(`
`),o=t.raw+`
`+a.replace(this.rules.other.blockquoteSetextReplace2,``),s=this.blockquote(o);i[i.length-1]=s;let c=o.substring(s.raw.length).replace(/^\n/,``),l=c?c.split(`
`).length:0,d=l?e.slice(0,-l):e;d.length>0&&(n=`${n}
${d.join(`
`)}`),r=r.substring(0,r.length-t.text.length)+s.text;break}if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`)}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=e,r=()=>n.length-e.length,i=t[1].trim(),a=i.length>1,o={type:`list`,raw:``,ordered:a,start:a?+i.slice(0,-1):``,loose:!1,items:[]};i=a?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=a?i:`[*+-]`);let s=this.rules.other.listItemRegex(i),c=!1;for(;e;){let i=!1,a=``;if(!(t=s.exec(e))||this.rules.block.hr.test(e))break;let l=r();e=e.substring(t[0].length);let u=t[2].split(`
`,1)[0],d=t[1].length,f=this.options.pedantic?U(u,d):u.replace(this.rules.other.leadingSpaceTab,e=>U(e,d)),p=e.split(`
`,1)[0],m=!f.trim(),h=0;if(this.options.pedantic?(h=2,a=f.trimStart()):m?h=d+1:(h=f.search(this.rules.other.nonSpaceChar),h=h>4?1:h,a=f.slice(h),h+=d),m&&this.rules.other.blankLine.test(p)&&(e=e.substring(p.length+1),i=!0),!i){let t=this.rules.other.nextBulletRegex(h),n=this.rules.other.hrRegex(h),r=this.rules.other.fencesBeginRegex(h),i=this.rules.other.headingBeginRegex(h),o=this.rules.other.htmlBeginRegex(h),s=this.rules.other.blockquoteBeginRegex(h);for(;e;){let c=e.split(`
`,1)[0],l;if(p=c,this.options.pedantic?(p=p.replace(this.rules.other.listReplaceNesting,`  `),l=p):l=p.replace(this.rules.other.leadingSpaceTab,e=>U(e)),r.test(p)||i.test(p)||o.test(p)||s.test(p)||t.test(p)||n.test(p))break;if(l.search(this.rules.other.nonSpaceChar)>=h||!p.trim())a+=`
`+l.slice(h);else{if(m||f.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||r.test(f)||i.test(f)||n.test(f))break;a+=`
`+p}m=!p.trim(),e=e.substring(c.length+1),f=l.slice(h)}}let g=n.slice(l,r());o.loose||(c?o.loose=!0:this.rules.other.doubleBlankLine.test(g)&&(c=!0)),o.items.push({type:`list_item`,raw:g,task:!!this.options.gfm&&this.rules.other.listIsTask.test(a),loose:!1,text:a,tokens:[]})}let l=o.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;o.raw=n.slice(0,r()).trimEnd();for(let e of o.items)if(this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]),!o.loose){let t=e.tokens.filter(e=>e.type===`space`);o.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}for(let e of o.items){let t=e.tokens[0];if(e.task&&(t?.type===`text`||t?.type===`paragraph`)){e.text=e.text.replace(this.rules.other.listReplaceTask,``),t.raw=t.raw.replace(this.rules.other.listReplaceTask,``),t.text=t.text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}let n=this.rules.other.listTaskCheckbox.exec(e.raw);if(n){let t={type:`checkbox`,raw:n[0]+` `,checked:n[0]!==`[ ]`};e.checked=t.checked,o.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:`paragraph`,raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&=!1}if(o.loose)for(let e of o.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return o}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=et(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){if(!this.rules.other.startAngleBracket.test(t[2])&&tt(t[2],`()`)!==-1)return;let e=H(t[1]).replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:V(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=$e(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:V(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push($e(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:V(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){if(this.lexer.state.linkParenPossible===!1)return;let t=this.rules.inline.link.exec(e);if(t){let n=t[0].charAt(0)===`!`?2:1;if(!this.options.pedantic&&W(e,t[1],n,this.rules))return;let r=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let e=V(r.slice(0,-1),`\\`);if((r.length-e.length)%2==0)return}else{let e=tt(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let i=t[2],a=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(i);e&&(i=e[1],a=e[3])}else a=t[3]?t[3].slice(1,-1):``;return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(i=this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?i.slice(1):i.slice(1,-1)),nt(t,{href:i&&i.replace(this.rules.inline.anyPunctuation,`$1`),title:a&&a.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let r=n[0].charAt(0)===`!`?2:1;if(!this.options.pedantic&&W(e,n[1],r,this.rules))return;let i=t[H((n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `))];if(!i){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return nt(n,i,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let i=[...r[0]].length-1,a,o,s=i,c=0,l=r[0][0],u=n===l,d=l===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+i);(r=d.exec(t))!==null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a)continue;if(o=[...a].length,r[3]||r[4]){s+=o;continue}if(r[5]||r[6]){if(i%3&&!((i+o)%3)){c+=o;continue}if(u)break}if(s-=o,s>0)continue;o=Math.min(o,o+s+c);let t=[...r[0]][0].length,n=e.slice(0,i+r.index+t+o);if(Math.min(i,o)%2){let e=n.slice(1,-1);return{type:`em`,raw:n,text:e,tokens:this.lexer.inlineTokens(e)}}let l=n.slice(2,-2);return{type:`strong`,raw:n,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,autolink:!0,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,autolink:!0,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:e?t[0]:Ze(t[0]),escaped:e}}}},K=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||f,this.options.tokenizer=this.options.tokenizer||new G,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,linkParenPossible:!0,top:!0};let t={other:_,block:R.normal,inline:z.normal};this.options.pedantic?(t.block=R.pedantic,t.inline=z.pedantic):this.options.gfm&&(t.block=R.gfm,t.inline=this.options.breaks?z.breaks:z.gfm),this.tokenizer.rules=t}static get rules(){return{block:R,inline:z}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(_.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(_.tabCharGlobal,`    `).replace(_.spaceLine,``));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(n=>(i=n.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let n=t.at(-1);i.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if((i=this.tokenizer.fences(e))||(i=this.tokenizer.heading(e))||(i=this.tokenizer.hr(e))||(i=this.tokenizer.blockquote(e))||(i=this.tokenizer.list(e))||(i=this.tokenizer.html(e))){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if((i=this.tokenizer.table(e))||(i=this.tokenizer.lheading(e))){e=e.substring(i.raw.length),t.push(i);continue}let a=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(a=e.substring(0,t+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let r=t.at(-1);n&&r?.type===`paragraph`?(r.raw+=(r.raw.endsWith(`
`)?``:`
`)+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):t.push(i),n=a.length!==e.length,e=e.substring(i.raw.length)}else if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i)}else if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}linkInText(e){if(!e.includes(`[`))return!1;let t=this.tokenizer.rules.inline.link;for(let n of e.matchAll(this.tokenizer.rules.inline.blockSkip))if(t.test(n[0])&&e.charAt(n.index-1)!==`!`)return!0;for(let t of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let e=t[0],n=e.lastIndexOf(`[`);if(e.charAt(0)!==`!`&&Object.hasOwn(this.tokens.links,H(e.slice(n+1,-1)))&&!(n>1&&this.linkInText(e.slice(1,n-1))))return!0}return!1}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=this.state.linkParenPossible;this.state.linkParenPossible=n&&e.includes(`)`);try{return this.#e(e,t)}finally{this.state.linkParenPossible=n}}#e(e,t){let n=e;if(this.tokens.links&&e.includes(`[`)){let e=this.tokenizer.rules.inline.reflinkSearch,t=n=>{let r=n.lastIndexOf(`[`);if(!Object.hasOwn(this.tokens.links,H(n.slice(r+1,-1))))return n;if(r>1&&n.charAt(0)!==`!`){let i=n.slice(1,r-1);if(this.linkInText(i))return`[`+i.replace(e,t)+`][`+`a`.repeat(n.length-r-2)+`]`}return`[`+`a`.repeat(n.length-2)+`]`};n=n.replace(e,t)}n=n.replace(this.tokenizer.rules.inline.anyPunctuationOutsideCode,(e,t,n)=>n?`+`.repeat(e.length):t?t+e.slice(t.length,-t.length).replace(/`/g,`+`)+t:e),n=n.replace(this.tokenizer.rules.inline.blockSkip,(e,t,n)=>{let r=n?n.length:0;return e.slice(0,r)+`[`+`a`.repeat(e.length-r-2)+`]`}),n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let r=!1,i=``,a=1/0;for(;e;){if(e.length<a)a=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}r||(i=``),r=!1;let o;if(this.options.extensions?.inline?.some(n=>(o=n.call({lexer:this},e,t))?(e=e.substring(o.raw.length),t.push(o),!0):!1))continue;if((o=this.tokenizer.escape(e))||(o=this.tokenizer.tag(e))||(o=this.tokenizer.link(e))){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length);let n=t.at(-1);o.type===`text`&&n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if((o=this.tokenizer.emStrong(e,n,i))||(o=this.tokenizer.codespan(e))||(o=this.tokenizer.br(e))||(o=this.tokenizer.del(e,n,i))||(o=this.tokenizer.autolink(e))||!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),t.push(o);continue}let s=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(o=this.tokenizer.inlineText(s)){e=e.substring(o.raw.length),o.raw.slice(-1)!==`_`&&(i=o.raw.slice(-1)),r=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o)}else if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},q=class{options;parser;constructor(e){this.options=e||f}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(_.notSpaceStart)?.[0],i=e?e.replace(_.endingNewline,``)+`
`:``;return r?`<pre><code class="language-`+B(r)+`">`+(n?i:B(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:B(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${B(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,text:n,tokens:r,autolink:i}){let a=i?B(n,!0):this.parser.parseInline(r),o=Qe(e);if(o===null)return a;e=B(o,i);let s=`<a href="`+e+`"`;return t&&(s+=` title="`+B(t)+`"`),s+=`>`+a+`</a>`,s}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=Qe(e);if(i===null)return B(n);e=i;let a=`<img src="${B(e)}" alt="${B(n)}"`;return t&&(a+=` title="${B(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:B(e.text)}},J=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},Y=class e{options;renderer;textRenderer;constructor(e){this.options=e||f,this.options.renderer=this.options.renderer||new q,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new J}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`checkbox`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`checkbox`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},X=class{options;block;constructor(e){this.options=e||f}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?K.lex:K.lexInline}provideParser(e=this.block){return e?Y.parse:Y.parseInline}};function Z(e,t){if(Array.isArray(t))for(let n=0;n<t.length;n++)e.push(t[n]);else e.push(t)}var Q=new class{defaults=d();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Y;Renderer=q;TextRenderer=J;Lexer=K;Tokenizer=G;Hooks=X;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(Z(n,t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)Z(n,this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)Z(n,this.walkTokens(e.tokens,t));break}case`list`:{let e=r;Z(n,this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);Z(n,this.walkTokens(i,t))}):e.tokens&&Z(n,this.walkTokens(e.tokens,t))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new q(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new G(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new X;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];t[r]=X.passThroughHooks.has(n)?e=>{if(this.defaults.async&&X.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&Z(n,t.call(this,e)),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return K.lex(e,t??this.defaults)}parser(e,t){return Y.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?K.lex:K.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?Y.parse:Y.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?K.lex:K.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?Y.parse:Y.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+B(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function $(e,t){return Q.parse(e,t)}$.options=$.setOptions=function(e){return Q.setOptions(e),$.defaults=Q.defaults,p($.defaults),$},$.getDefaults=d,$.defaults=f;function it(...e){return Q.use(...e),$.defaults=Q.defaults,p($.defaults),$}$.use=it,$.walkTokens=function(e,t){return Q.walkTokens(e,t)},$.parseInline=Q.parseInline,$.Parser=Y,$.parser=Y.parse,$.Renderer=q,$.TextRenderer=J,$.Lexer=K,$.lexer=K.lex,$.Tokenizer=G,$.Hooks=X,$.parse=$,$.options,$.setOptions,$.walkTokens,$.parseInline,Y.parse,K.lex;var at=Object.assign({"/src/lib/lectures/en/open-source-in-architecture.md":t,"/src/lib/lectures/en/project-startup.md":n,"/src/lib/lectures/en/qgis.md":r,"/src/lib/lectures/en/revit-api.md":i,"/src/lib/lectures/en/szkolenie-blender.md":a,"/src/lib/lectures/pl/open-source-in-architecture.md":o,"/src/lib/lectures/pl/project-startup.md":s,"/src/lib/lectures/pl/qgis.md":c,"/src/lib/lectures/pl/revit-api.md":l,"/src/lib/lectures/pl/szkolenie-blender.md":u}),ot=e=>e.match(/^# (.+)$/m)?.[1]??``,st=e=>Object.entries(at).filter(([t])=>t.startsWith(`/src/lib/lectures/${e}/`)).map(([e,t])=>({slug:e.split(`/`).pop().slice(0,-3),title:ot(t)}));function ct(t,n){let r=at[`/src/lib/lectures/${t}/${n}.md`];r===void 0&&e(404);let i=r.split(/^---$/m).map(e=>$.parse(e).replace(/\n+(<\/code><\/pre>)/g,`
$1`));return{title:ot(r),slides:i}}export{st as n,ct as t};