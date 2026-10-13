var e=`# Code

Most of my code exists so that someone (often me) does not have to do something by hand. Some of it is public; most of it runs for clients and in the companies I work with. The main ones are described in more detail among the [projects](/en/projects).

<p class="repos"><a href="https://github.com/tibicen"><img src="/images/github.webp" alt="GitHub" width="96" height="96"></a> <a href="https://gitlab.com/tibicen"><img src="/images/gitlab.webp" alt="GitLab" width="96" height="96"></a></p>

## Energy and data

- **Photovoltaic controller** (since 2022) – a service combining energy market, weather and solar radiation data. It stops and resumes production at negative prices and predicts price spikes. Developed further at [Leysa](https://leysa.pl).
- **Spatial analysis for renewables** (2023–2026) – parametric geometry for wind farms, PV and linear infrastructure, with a forecast of monthly profitability.
- **Construction data analysis** (2024–2026) – 3D models, drawings and specifications brought into a single database; local vision models read the documentation.

## BIM and Revit

- **Site plan generator** (2022–2024) – a 3D site plan built from public GIS data and point clouds, loaded straight into Revit.
- **Revit add-ins** – tools for project start-up, reporting and bulk model validation, developed in the offices I worked for.
- **CI/CD in design** – automatic model checks on every change, on GitLab runners.
- [Old AutoCAD snippets](https://github.com/tibicen/cad).

![Revit add-in, work in progress](/images/code/revit-addin.jpg)

## Blender

- [Simple Asset Manager](https://gitlab.com/tibicen/simple-asset-manager) – an asset manager with automatic thumbnails.
- **Solar Analysis** – daylight analysis of buildings and urban plans according to Polish regulations, hourly or for any period.
- [meshroom2blender](https://github.com/tibicen/meshroom2blender) – imports photogrammetry data from AliceVision Meshroom.
- [IFC importer](https://github.com/IfcOpenShell/IfcOpenShell) for Blender 2.80 – cleanup and optimisation, now superseded by Bonsai (formerly BlenderBIM).
- **Web VR** – exports spaces from Blender straight into an HTML page.

## Other

- **DogAlone** – a web app that recognises a dog howling at home alone and plays back the owner’s recorded, calming voice.
- [Inkscape Master Page Export](https://gitlab.com/tibicen/inkscape-master-page-export) – exports layers with an always-visible “master page” layer, as in InDesign.
- **Live CV** – Markdown turned into a CV that reads well on a phone, in a browser and on paper.
- **PKU** – an Android app for people with phenylketonuria who need very strict diet information.
- **Finance** – offline expense statistics and charts.
- [Random scripts](https://github.com/tibicen/random-scripts), e.g. arranging rooms by the weights of their connections.
- Closed: [Messenger chat statistics](https://github.com/tibicen/messengerStats), [phone call statistics from a bill](https://github.com/tibicen/call-stats), [Material Pass for Blender 2.79](https://github.com/tibicen/blender-scripts/blob/master/materialPass.py), [Scrabble solver for Android](https://github.com/tibicen/ScrabbleSolver).

## The web

It started with small things in WordPress that did not fit my idea. That is how I learned CSS, then Flask, JavaScript and finally Svelte. This site is SvelteKit, statically generated, in two languages.

- [leysa.pl](https://leysa.pl)
- [tendra.is](https://www.tendra.is/)
- [r2.pl](https://r2.pl/)
`;export{e as default};