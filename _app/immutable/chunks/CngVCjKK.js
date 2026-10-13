import{n as e}from"./hePW80VL.js";import{K as t,L as n,l as r,q as i,x as a,y as o,z as s}from"./CnSGizgM.js";import{t as c}from"./C_grik4_.js";import{t as ee}from"./Ce8_Dco4.js";import"./BTt86IIY.js";var te=e({default:()=>ce,metadata:()=>l}),l={title:`Revit project geolocation and data scraping`,date:`2022-12-27T00:00:00.000Z`,summary:`Automating project start-up in Revit. Geolocation, point clouds, site data imports and more.`,authors:`Dawid Huczyński`,tags:[`revit`,`architecture`,`point clouds`,`geoportal`]},{title:ne,date:re,summary:ie,authors:ae,tags:oe}=l,se=a(`<h2 id="introduction">Introduction</h2> <p>In this post I want to show you the kinds of data you may come across, how they can be processed, and how they can be used in the design and analysis of buildings and structures. At the end I will outline how all of this can be automated in Revit and Blender.</p> <p>Public data has become more and more accessible lately. Government institutions, as well as amateur data collection and analysis, give us access to amazing resources.
All it takes is to process them, and we can create design conditions unprecedented in our industry, without much extra work.</p> <p>I remember when sun analysis was done with a special ruler laid over the floor plan: a standardised practice with an enormous number of simplifications. Then we moved on to 3D sun studies, building our design in three dimensions and modelling simple masses of the neighbouring buildings. We did not necessarily check whether our software took UTC offsets into account, whether it considered elevation above sea level, whether it assumed a flat plane or the curvature of the Earth… but that may be a topic for another post.</p> <p>The example above is meant to show the possibilities in front of us and how deep we can go with analysis. Of course, more complex analyses take time to enter or model the necessary data.</p> <h2 id="dtm-a-digital-terrain-model-but-is-it-really">DTM – a digital terrain model, but is it really?</h2> <p><img src="/images/blog/001-dem-switzerland.webp" alt="DEM Switzerland"/></p> <p>We have reached the point where most geographic data is publicly available on the internet. It started with DEMs (digital elevation models): satellite imagery describing terrain height. When I first became interested, the scales were rather coarse, since one pixel covered about 30 × 30 m of terrain. Later it went down to 10 × 10 m. From such data you could already extract quite an interesting simplification of the terrain, at no extra cost.</p> <p>Examples:</p> <ul><li>ALOS World 3D - 30 m</li> <li>NASADEM Global Digital Elevation Model</li> <li>USGS 1/3 arc-second Digital Elevation Model - 10 m resolution</li></ul> <p>At some point databases appeared where you could query the elevation above sea level, such as:</p> <ul><li><a href="https://www.opentopography.org/" rel="nofollow">https://www.opentopography.org/</a></li> <li><a href="https://open-elevation.com/" rel="nofollow">https://open-elevation.com/</a></li> <li>or even the Google Maps API with elevation data.</li></ul> <p>Today you can find DEMs with a resolution of 1 m. A good example are the elevation packages published by Poland, covering the whole country with points spaced every 1 m. DEMs come in a couple of kinds:</p> <ul><li>raster</li> <li>grid</li></ul> <p>The first is, for example, a .tiff image in which the shade of grey defines the height. The limit here is the size of one pixel (e.g. 30 m, 10 m, 1 m). Processing such data calls for free software such as <strong>QGIS</strong>. QGIS can load such a tiff in the right coordinates, clip it to the extent we need and then generate, for example, contour lines or a point grid from the raster. A grid is, for example, a text file with a list of numbers defining the height above sea level on a 1 m grid.
To use it in Revit, for example, you need to convert the data to a CSV file with X, Y and Z columns. That lets you import it as a toposurface.</p> <p>But is this really the limit of detail? Of course not. 😉</p> <h2 id="point-clouds">Point clouds</h2> <p>The next level of detail, in my view, is raw survey data. In the past this meant crowds of surveyors and advanced triangulation technology. Today it is still based on triangulation, only the amount of data has grown exponentially. I am talking about point clouds.
Here we can check accuracy with a margin of error of a few centimetres or, for airborne lidar, taking the Polish geoportal as an example, a density from 4 points/m² up to 20 points/m² in larger cities, with a mean height error of around 10 cm.</p> <p>Again I will use the example of the Polish ministry, which publishes survey data (lidar) in the LAS format.
A point cloud is something like an image in three dimensions. Instead of pixels we have points in 3D. Each point can carry additional attributes, such as:</p> <ul><li>colour</li> <li>classification – is it a building, low vegetation, high vegetation, ground, a car, a street lamp…</li> <li>accuracy – how precise the measurement of the point was</li> <li>intensity – the intensity of the reflected lidar beam</li> <li>and plenty of other direct data</li> <li>plus indirect data from analysing points and their relations, e.g.: <ul><li>are the points on one plane – could it be a wall?</li> <li>do the points form a group without any plane – could it be a tree?</li></ul></li></ul> <p>That is a huge amount of data to work with. The Polish geoportal calls it survey data; I will use the general term, point cloud.
Point clouds can be divided in all sorts of ways; I will focus on a practical split:</p> <ul><li>lidar point clouds</li> <li>photogrammetry point clouds</li></ul> <p>and another one:</p> <ul><li>classified point clouds</li> <li>unclassified point clouds</li></ul> <p>Finally, clouds can also be:</p> <ul><li>registered,</li> <li>unregistered.</li></ul> <p>If you hear the term, it mostly means placing the cloud in specific horizontal and vertical coordinate systems and cleaning it of gaps and erroneous measurements. In short: geolocation.</p> <p>The Polish geoportal usually provides fully merged survey data with the basic information we need:</p> <ul><li>geolocation</li> <li>colour</li> <li>classification</li></ul> <p>Thanks to this we can quickly and easily refine such a cloud for design purposes:</p> <ul><li>Filter all buildings onto a separate layer, to measure the neighbours.</li> <li>Filter the ground and generate 3D terrain from it (e.g. a Revit toposurface).</li> <li>Filter high vegetation, process the data and find the tree tops (and therefore the tree locations).</li> <li>With free tools, filter all points within our plot boundary and remove everything but the ground points, leaving the rest of the cloud untouched.</li></ul> <p>The perfect tool for these tasks is <strong>CloudCompare</strong>. It opens point clouds while keeping their reference system, and it can clean, analyse and process the data. It also has basic point classification. Of its strengths, the ones I find most useful in the design process are:</p> <ul><li>classifying ground points (if there is no classification)</li> <li>projecting colours from satellite images onto the point cloud (if colours are missing)</li> <li>registering point clouds against each other</li></ul> <p>These steps let us split the point cloud into light packages that can then be linked into a Revit file, with full control over visibility. Unfortunately you cannot avoid the paid Autodesk ReCap here: it opens <code>.las</code> files and saves them as <code>.rcp</code>, which Revit can load.</p> <p>With the cloud prepared this way we can load it into our project in the right coordinates and be sure the points sit exactly on the terrain. From experience I can say such a cloud works great at the concept stage and for designing in the context of <strong>real (!!!)</strong> site features: vegetation, watercourses, buildings, roads, slopes, sculptures (no point listing them, it is literally everything). It helps to detail and model the roofs of neighbouring buildings, or to check the actual heights of parapets and buildings. It also works great for visualisation, for generating the real terrain and for analysing earthworks.</p> <h2 id="plot-boundaries">Plot boundaries</h2> <p>Different countries have different public databases. Examples of such services:</p> <ul><li>WMS (Web Map Service), WMTS (Web Map Tile Service),</li> <li>WFS (Web Feature Service),</li> <li>ATOM,</li> <li>INSPIRE (Infrastructure for Spatial Information in Europe).</li></ul> <p>These are standardised services for sharing geographic data such as orthophoto maps, boundaries, local zoning plans and much more.</p> <p>The Polish geoportal lets you download the BDOT10k database (topographic objects database), from which, using our familiar QGIS, we can extract plot boundaries, outlines of existing buildings, road centrelines and much more, such as bus stop locations, land use types etc. Such data can then be imported into 2D or 3D design software.</p> <p>QGIS lets us filter it visually and place it in the right coordinates:
so-called reprojection from the national coordinate system to the one the project is drawn in. More on that in the next section. <a href="https://www.geoportal.gov.pl/uslugi/usluga-przegladania-wms" rel="nofollow">This link</a> shows which WMS services geoportal.gov.pl offers.</p> <h2 id="geolocation-and-epsg-codes">Geolocation and EPSG codes</h2> <p><img src="/images/blog/001-poland-epsg.gif" alt="Map of Poland EPSG 3857" title="EPSG 3857"/> This is where we should have started, but it is always better to start with something more spectacular. EPSG, however, is the piece of the puzzle that ties everything together. Knowing it makes the work easier, eliminates basic mistakes and, with almost no effort, introduces the first process automation.</p> <p>EPSG codes were created to standardise the names of coordinate systems. They cover both projected (planar) and geographic coordinate systems.
In Poland we have two reference frames: the older <code>PL-ETRF89</code> and the current <code>PL-ETRF2000</code>.</p> <p>The Polish planar coordinate systems with their EPSG codes are:</p> <table><thead><tr><th>EPSG</th><th>System</th><th>Central meridian</th></tr></thead><tbody><tr><td>EPSG:2180</td><td>PL-1992</td><td>19° (whole country)</td></tr><tr><td>EPSG:2176</td><td>PL-2000 zone 5</td><td>15°</td></tr><tr><td>EPSG:2177</td><td>PL-2000 zone 6</td><td>18°</td></tr><tr><td>EPSG:2178</td><td>PL-2000 zone 7</td><td>21°</td></tr><tr><td>EPSG:2179</td><td>PL-2000 zone 8</td><td>24°</td></tr></tbody></table> <p>Knowing which system the plot, or our data, is in lets us merge the data without trouble. <strong>QGIS</strong> is again the best tool for analysing and processing it. It often happens that the point cloud comes in the national system while the project is set up in local coordinates, e.g. zone 6.</p> <h2 id="building-models">Building models</h2> <p>For buildings we have a few options for generating 3D models.
The first, easier but time-consuming option is to find existing models and place them in 3D on the building footprints obtained from WFS services. It is an obvious option, but worth mentioning, because sometimes you come across very accurate models.</p> <p>The second option is to get the data from the geoportal. Buildings can be downloaded as GML at LOD1. To use them in Revit or another program, they have to be converted to a native format: for Revit preferably a <code>MASS FAMILY</code>, for Blender e.g. <code>OBJ</code>. A GML file has an XML structure, so we can read it in Python with an XML parser. It would look like this:</p> <pre class="language-python"></pre> <p>This gives us a set of vertices and polygons (groups of vertices forming single polygons). From this format it is very easy to generate an object in Blender, save it as OBJ and import it into Revit. Or, with the Revit API, to model MASS objects from this data automatically. The advantage of this solution is that the buildings are already located horizontally and vertically.</p> <hr/> <blockquote><h3>The large-distance problem</h3> <p>There is one problem well known among 3D artists. The further a vertex is from the point [0,0,0], the more “approximate” its display becomes. It comes from how computers handle decimal numbers. A computer always approximates decimals in its own representation, so it can happen that when comparing 0.003 == 0.003, the numbers turn out different, because to the computer 0.003 = 0.003000000000000001. The solution would be to read the location of the <code>internal origin</code> or <code>project base point</code> and move all vertices by that vector, so they are placed relative to a nearby insertion point rather than through <strong>shared coordinates</strong>.</p></blockquote> <hr/> <p>The last solution I would suggest requires a bit more technical knowledge, but it is the most accurate: generating the building geometry from the point cloud. Plenty of spatial analysis algorithms come to help here, but in short we can split it into the following tasks:</p> <ul><li>extract the points classified as buildings from the point cloud,</li> <li>analyse which points belong to which planes and group them by plane,</li> <li>with planes and their points, find the boundary points (lying on the edges of each group); this gives approximate edges of the object and its planes,</li> <li>remove points that lie on one straight line or within a small distance of it; what remains are the vertices,</li> <li>merge vertices that lie close to each other, number them and assign them to planes,</li> <li>the final result gives the same sets of vertices and polygons as the script above.</li></ul> <p>This option gives much more detailed buildings. If we need more detail, we can use lidar, a drone, a camera or a smartphone to generate additional point clouds, for example with the free Meshroom (photogrammetry turns photos from cameras and smartphones into point clouds). We can then merge our point cloud with the one from the geoportal, densifying it and filling the gaps. Aligning a cloud without coordinates with a cloud that has them is called registration. It also involves cleaning the cloud of erroneous measurements.</p> <h2 id="satellite-images">Satellite images</h2> <p>Would you believe me if I told you there is an image format that stores the image’s location in coordinates? Imagine you get a local zoning plan, a scanned map from the investor, a satellite image of the plot or any other map. You drop it into your software and it always lands exactly in the right place? Exactly to scale? Without any distortion?</p> <p>Yes, it is possible. Not always and not in every program, but geolocation can be stored for an image, for example in PDF or TIFF files. Such TIFF files are called GeoTIFF.</p> <p>When you download a satellite image from a government portal, it usually already has its coordinates and coordinate system set. Drop such a TIFF into QGIS, set the system it was saved in (e.g. EPSG:2180), and it lands right in place. No distortion, no shift. Perfect.</p> <p>The second strength of satellite images is the data. Colour may be useful to us: for a point cloud without colour data, we can project the colours of a satellite image onto it. CloudCompare can do that, for example.</p> <h2 id="joining-it-together-and-automating">Joining it together and automating</h2> <p>The most interesting part of the puzzle is that most of these tasks can be reduced to a single button, e.g. in Revit. We only need to enter a few parameters:</p> <ul><li>location (coordinates)</li> <li>radius (how far around to fetch data)</li> <li>optionally a polygon/region with the plot boundary</li></ul> <p>The script does the rest: it fetches the terrain, point cloud, plot boundaries, buildings and orthophoto map and places them in the right coordinate system. The designer gets a ready site context in minutes instead of days.</p>`,1);function ce(e){var a=se(),c=s(n(a),100);r(c,()=>`<code class="language-python"><span class="token comment"># python</span>
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
</code>`,!0),i(c),t(32),o(e,a)}var le=e({default:()=>_e,metadata:()=>ue}),ue={title:`Deterministic project environments`,date:`2026-10-15T00:00:00.000Z`,summary:`A proposal to bring good software engineering practices into the construction industry by creating project environments (so-called config packages) automatically and deterministically, based on geolocation and survey data of the site.`,authors:`Dawid Huczyński`,tags:[`AEC`,`BIM`,`CAD`,`geolocation`,`automation`,`interoperability`]},{title:de,date:fe,summary:pe,authors:me,tags:he}=ue,ge=a(`<p>I believe this is a very important part of the early stage of the design process, especially when setting up projects and the tools we use throughout it. Few people in the industry – apart from surveyors, perhaps – make use of the full location information of a building or project.</p> <p>I often come across projects that are set up in different environments – e.g. Revit, CAD, Tekla – followed by a struggle
to export and merge these different models into one coherent project. The models vary: sometimes flat, sometimes
three-dimensional. Setting up a project automatically has the advantage of creating the environment deterministically. Just like
programmers who build reproducible, deterministic environments for themselves, designers could create
such environments too, based on a minimal amount of data, for example information about the site.</p> <p>This approach makes it possible to set up the project automatically in any environment – be it a CAD program or something else. It
lets you define the plot boundaries and pull information about the surrounding utility networks. All of it should be coordinated both
in the planar coordinate system and in geolocation. As a result, all project participants share the same standard
starting project in a common space to work on.</p> <p>This used to be handled with a so-called coordination file – an empty file with a cube or a coordination cone
that defined the location of the projects, and everyone had to align with that one object.</p> <p>Today I think our industry should build its environments deterministically, by distributing configuration packages (<em>config packages</em>) that set up the whole design environment, just as it is done in the software world. Such a package could contain basic information about the plot, the location of the starting point, grids and levels. It does not need all of them, but such a file would allow, for example, recreating the initial settings for every participant in the process.</p> <p>Using the TERYT identifier alone, it is already possible to download:</p> <ul><li>plot boundaries,</li> <li>high-accuracy terrain levels,</li> <li>surroundings and greenery,</li> <li>neighbouring buildings,</li> <li>overhead power lines,</li> <li>applicable zoning plans,</li> <li>various zones (such as NATURA 2000 or flood risk areas),</li> <li>flat drawings of utility networks and installations.</li></ul> <p>And that is not all; it has been possible since 2022, when I was building such tools for Revit, Blender and CAD.
Today, as tools keep evolving, ideas like these are within arm’s reach. All it takes is knowledge and ideas.</p>`,1);function _e(e){var n=ge();t(14),o(e,n)}var ve=e({default:()=>Te,metadata:()=>u}),u={title:`TERYT – One number that revolutionises information exchange`,date:`2026-10-19T00:00:00.000Z`,summary:`How the unique TERYT identifier eliminates repetitive work and streamlines automation in the construction and design industry.`,authors:`Dawid Huczyński`,tags:[`bim`,`construction`,`teryt`,`automation`,`gis`]},{title:ye,date:be,summary:xe,authors:Se,tags:Ce}=u,we=a(`<h2 id="the-problem">The problem</h2> <p>Efficient information exchange remains a constant challenge in construction and design. The simplest, and at the same time extremely common, example of this problem is pinpointing a plot of land.</p> <p>The standard process usually looks the same: we browse the land and building registry maps, select the voivodeship, county, municipality, precinct and town, and finally type in the plot number by hand to find the exact spot. Mistakes are easy. A moment of inattention is enough to end up in a neighbouring precinct with a plot of the same number.</p> <p>Worse still, we do an enormous amount of repetitive work this way. Then another person joins the construction process – a discipline designer, the general contractor, a coordinator – and each of them repeats exactly the same task from scratch, searching for the location in their own systems and tools.</p> <p>There is, however, one simple solution that is widely available and can radically simplify the work of everyone involved: <strong>the TERYT number</strong>.</p> <h2 id="teryt">TERYT</h2> <p style="font-size:2em;text-align:center"><strong style="color:#af3029">22</strong><strong style="color:#ad8301">61</strong><strong style="color:#66800b">01</strong>_<strong style="color:#24837b">1</strong>.<strong style="color:#205ea6">0303</strong>.<strong style="color:#5e409d">769/16</strong></p> <p style="text-align:center;"><span style="color:#af3029">voivodeship</span> · <span style="color:#ad8301">county</span> · <span style="color:#66800b">municipality</span> _ <span style="color:#24837b">type</span> . <span style="color:#205ea6">precinct</span> . <span style="color:#5e409d">plot no.</span></p> <p>TERYT is a nationwide unique identifier used in Poland. A single string of digits holds complete, unambiguous location information: from the voivodeship and municipality, through the precinct, down to the specific plot.</p> <p>Using the TERYT number gives us a huge advantage and opens the door to automation:</p> <ul><li><strong>Instant search:</strong> Just paste the identifier into, for example, Geoportal to jump straight to the right location without clicking through administrative levels by hand.</li> <li><strong>API integration:</strong> Using the Geoportal API, we can automatically download plot outlines from the TERYT number alone (or a list of them).</li> <li><strong>Easy data conversion:</strong> The downloaded spatial data can easily be exported to any format – processed for CAD or loaded directly into Revit.</li></ul> <p>Suddenly a process that required repeated searching and clicking through maps comes down to handling a single identifier. If knowledge of how to use TERYT in practice were more widespread in the construction industry, everyone’s work would be much easier.</p>`,1);function Te(e){var n=we();t(22),o(e,n)}var Ee=e({default:()=>Ne,metadata:()=>d}),d={title:`Voice notes`,date:`2026-10-13T00:00:00.000Z`,summary:`How do you pour out the knowledge sitting inside you? On how LLMs help us write down our ideas.`,authors:`Dawid Huczyński`,tags:[`speech-to-text`,`LLM`,`local`,`AI`]},{title:De,date:Oe,summary:ke,authors:Ae,tags:je}=d,Me=a(`<h2 id="the-problem">The problem</h2> <p>Many of us probably struggle with a flood of ideas that we jot down on paper and then lose. Or we already have
a full sketch of an idea in our head, but no time to flesh it out or carry it through among all our duties.</p> <p>I had a few unfinished topics:</p> <ol><li>My website, which I knew how I wanted to change, but I had no time, because it was a purely creative project with no profit potential.</li> <li>Becoming more active in the industry and sharing with a wider audience the knowledge I share with friends and people around me. Because I love sharing knowledge, and I think “know-how” is worth sharing, since it is not a big competitive advantage. For me, the advantage is knowing how to use it.</li> <li>Growing my company’s marketing.</li></ol> <p>Today I want to tackle topic no. 2. In 2022 I started writing blog articles. Plenty of knowledge. I even had everything
prepared and uploaded to the site, but it was missing the final polish. Filling in the substance. Fixing mistakes.
Translating into two languages. And so the topic got stuck. Because there was always something more pressing.</p> <p>Today, on the day of writing this article, I have already managed to write three. And I am writing this one purely for the joy of writing. I used
AI for it, but not the way you think. Every sentence is still my own.</p> <h2 id="the-idea">The idea</h2> <p>The idea for this process came after I read a post by Ilya Sutskever saying he had started dictating tasks by voice to his
agents/LLMs/AI. He described using simple speech-to-text to turn speech into text. And the most important thing
about it was that he did not worry about formatting. He simply poured out all his thoughts, even broken
sentences. He poured out his whole process, knowing the LLM would sort it out and understand it anyway. That is when it clicked for me.</p> <h2 id="the-solution-is-tts-llm">The solution is TTS + LLM</h2> <p>Let me sketch my current process. While driving the kids or coming back from work, I start recording and make voice notes on
a specific topic. I drop the note into a speech-to-text tool such as <code>Orukeet</code> or <code>Parakeet</code>. They work great with
Polish. What’s more, I use the simplest models. They spit out a transcript – with errors, with jumbled
words. It is my thoughts poured out without any filter. Then I bring in the LLM. I have a prompt that tells it to stick to
my text, but to:</p> <ul><li>fix style and punctuation,</li> <li>fix unclear words that should be different (given the context),</li> <li>merge places where I covered the same point twice into one,</li> <li>split the text into coherent paragraphs and, if needed, regroup sentences that belong in another paragraph (it is my
stream of consciousness; sometimes I jump between topics or come back to an earlier one).</li></ul> <p>And that is how I get a nicely composed blog post. I embellish it with images and charts myself.</p> <p><strong>But that’s not all…</strong></p> <p>Google had just made skills available, so I created a skill that adds
metadata such as the title, tags and “summary” to the article, in the right format for my blog.</p> <p><strong>But that’s not all!!!</strong></p> <p>I already had a free app that used <code>Orukeet</code> to create notes, but I still had to move them over to Gemini…
So I asked an agent to build me a transcription app with <code>Orukeet</code> that formats the result straight away with a given prompt.
The agent delivered it in 5 minutes. A ready app in <code>Rust</code> and <code>Tauri</code>, using <code>Orukeet</code> and <code>gemma4:e4b</code>, a small model from
Google that runs entirely locally. It works perfectly.</p> <p>I won’t even share it here, because I think each of you can already build it on your own.
I use it every day now.</p>`,1);function Ne(e){var n=Me();t(32),o(e,n)}var Pe=e({default:()=>Ve,metadata:()=>f}),f={title:`Geolokalizacja projektu w Revicie i pozyskiwanie danych`,date:`2022-12-27T00:00:00.000Z`,summary:`Automatyzacja startu projektu w Revicie. Geolokalizacja, chmury punktów, import danych o terenie i więcej.`,authors:`Dawid Huczyński`,tags:[`revit`,`architecture`,`point clouds`,`geoportal`]},{title:Fe,date:Ie,summary:Le,authors:Re,tags:ze}=f,Be=a(`<h2 id="wprowadzenie">Wprowadzenie</h2> <p>W tym poście postaram się wam przybliżyć dane z jakimi możecie mieć styczność, możliwości ich przetwarzania i wykorzystania w projektowaniu budynków, budowli oraz ich analiz. Na koniec pokażę zarys jak można to zautomatyzować w Revicie i Blenderze.</p> <p>Ostatnimi czasy dane publiczne stają się coraz bardziej dostępne. Instytucje rządowe, jak i amatorskie gromadzenie i analiza danych daje nam dostęp do niesamowitych zasobów.
Wystarczy je przetworzyć by móc stworzyć warunki do projektowania niespotykane dotychczas w naszej branży, bez większych nakładów pracy.</p> <p>Pamiętam czasy, gdy analiza słońca była robiona za pomocą specjalnej linijki nakładanej na rzut. Unormowana praktyka posiadająca niesamowitą ilość uproszczeń. Potem przeszliśmy na analizy słońca 3D, tworząc nasz projekt w trzecim wymiarze i modelując proste bryły sąsiadów. Niekoniecznie sprawdzaliśmy czy program w którym pracujemy bierze pod uwagę odchylenia względem przesunięć UTC, czy bierze pod uwagę wysokość nad poziomem morza, czy liczy uproszczenie płaszczyznowe, czy krzywizny ziemi… ale na to może będzie inny post.</p> <p>Powyższy przykład miał pokazać, jakie możliwości stoją przed nami i jak szczegółowo możemy wchodzić w analizy. Oczywiście, bardziej skomplikowane analizy wiążą się z czasem na wprowadzenie/wymodelowanie potrzebnych danych.</p> <h2 id="nmt-czyli-numeryczny-model-terenu-ale-czy-na-pewno">NMT, czyli Numeryczny Model Terenu, ale czy na pewno?</h2> <p><img src="/images/blog/001-dem-switzerland.webp" alt="DEM Switzerland"/></p> <p>Jesteśmy na etapie, kiedy większość danych geograficznych jest publicznie dostępna w internecie. Zaczęło się od DEM-ów (Digital Elevation Model), czyli zobrazowań satelitarnych opisujących wysokość terenu. Kiedy zaczynałem się tym interesować były to skale dosyć trudne, ponieważ jeden piksel obejmował ok. 30 × 30 m terenu. Potem zeszło to do 10 × 10 m. Z takich informacji można było już wyciągać całkiem ciekawe uproszczenie terenu, bez dodatkowych opłat.
Przykłady:</p> <ul><li>ALOS World 3D - 30m</li> <li>NASADEM Global Digital Elevation Model</li> <li>USGS 1/3 arc-second Digital Elevation Model - 10m szczegółowości</li></ul> <p>W pewnym momencie zaczęły powstawać bazy danych, gdzie za pomocą zapytań można było pobierać wysokość nad poziomem morza. Takie strony jak:</p> <ul><li><a href="https://www.opentopography.org/" rel="nofollow">https://www.opentopography.org/</a></li> <li><a href="https://open-elevation.com/" rel="nofollow">https://open-elevation.com/</a></li> <li>czy nawet api google maps z informacjami o wysokości terenu npm.</li></ul> <p>Obecnie DEM-y można spotkać nawet w szczegółowości co 1m. Pozytywnym przykładem są udostępnione przez Polskę paczki wysokościowe pokrywające całe terytorium Polski z punktami rozstawionymi co 1m. DEM-y można podzielić na parę rodzajów:</p> <ul><li>raster</li> <li>grid</li></ul> <p>Pierwszy to np. obrazy .tiff gdzie odcień szarości definiuje wysokość. Ograniczeniem jest tu wymiar jednego pixela (np. 30m, 10m, 1m). Przetwarzanie takich danych wymaga np. darmowego oprogramowania jak <strong>QGIS</strong>. QGIS pozwala załadować takiego tiffa w odpowiednich koordynatach, przyciąć go do potrzebnych nam zakresów, a potem wygenerować z danych rastrowych np. poziomice, siatkę punktów. Grid to np. plik tekstowy z listą liczb, które definiują wysokość nad poziomem morza na siatce co 1m.
Żeby użyć tego np. w Revicie trzeba przekonwertować takie dane na plik csv z kolumnami X, Y, Z. To pozwoli nam zaimportować je jako toposurface.</p> <p>Ale czy to na pewno jest już granica szczegółowości? Oczywiście, że nie. 😉</p> <h2 id="chmura-punktow">Chmura punktów</h2> <p>Kolejnym poziomem szczegółowości w moim przekonaniu są surowe dane pomiarowe. Wcześniej były to rzesze geodetów i zaawansowane technologie triangulacji. Teraz też opiera się to o triangulację. Tylko ilość danych wzrosła wykładniczo. Mowa o chmurach punktów.
Tutaj możemy sprawdzać dokładność z marginesem błędu do paru centymetrów, lub jak kto woli przy danych lidar z drona lotniczego to na przykładzie geoportalu, który mówi o szczegółowości od 4 punktów/m2 do aż 20 punktów /m2 w przypadku większych miast, przy średnim błędzie wysokości np. do 10cm.</p> <p>Tutaj znów podam przykład polskiego ministerstwa, które udostępnia dane pomiarowe (lidar) w formacie las.
Chmura punktów to coś na kształt obrazka w 3 wymiarach. Zamiast pixeli mamy punkty w 3D. Każdy z punktów może mieć dodatkowe parametry, jak:</p> <ul><li>kolor</li> <li>klasyfikację - czy jest to budynek, zieleń niska, wysoka, teren, samochód, lampa uliczna…</li> <li>dokładność - jak precyzyjny był pomiar tego punktu</li> <li>intensywność - intensywność odbicia wiązki lidar</li> <li>oraz wiele innych danych bezpośrednich</li> <li>dodatkowo dane pośrednie wynikające z analizy punktów i ich relacji względem siebie np.: <ul><li>czy punkty są na jednej płaszczyźnie - może być to ściana?</li> <li>czy punkty nie mają żadnej płaszczyzny a są w grupie - może to drzewo?</li></ul></li></ul> <p>To już jest olbrzymia ilość danych z której możemy korzystać. W geoportalu nazywa się to Dane Pomiarowe, ja będę używał uogólnienia, czyli chmura punktów.
Chmury możemy podzielić, na przeróżny sposób i w różne grupy, ja skupię się na praktycznym podziale:</p> <ul><li>chmury punktów lidar</li> <li>chmury punktów fotogrametrii</li></ul> <p>oraz innym:</p> <ul><li>chmury punktów sklasyfikowane</li> <li>chmury punktów niesklasyfikowane</li></ul> <p>Na koniec można dodać, że chmury mogą też być:</p> <ul><li>zarejestrowane,</li> <li>niezarejestrowane.</li></ul> <p>Jeżeli słyszycie to pojęcie, to głównie chodzi o ustawienie takiej chmury w konkretnych układach współrzędnych pionowych i poziomych, oraz wyczyszczenie i poprawienie ich z niedociągnięć i błędnych pomiarów. Czyli w uproszczeniu geolokalizacja.</p> <p>Polski geoportal najczęściej dostarcza nam w pełni scalone dane pomiarowe zawierające podstawowe potrzebne informacje:</p> <ul><li>geolokalizację</li> <li>kolor</li> <li>klasyfikację</li></ul> <p>Dzięki temu możemy łatwo i szybko dopracować taką chmurę do potrzeb projektowych.</p> <ul><li>Wyfiltrować wszystkie budynki i wrzucić je na osobną warstwę, do pomiarów sąsiadów</li> <li>Wyfiltrować teren i wygenerować z niego teren 3D (np. revitową toposurface)</li> <li>Wyfiltrować zieleń wysoką, przetworzyć dane i sprawdzić, gdzie są wierzchołki drzew (a co za tym idzie, ich lokalizację)</li> <li>Za pomocą darmowych narzędzi możemy wyfiltrować wszystkie punkty leżące w granicach naszej działki i usunąć z niej wszystko poza punktami terenu, resztę chmury zostawiając w spokoju.</li></ul> <p>Do tych zadań idealnie nadaje się narzędzie <strong>CloudCompare</strong>. Potrafi otwierać chmury punktów z zachowaniem układu odniesienia, czyścić, analizować i przetwarzać dane. Dodatkowo ma podstawowe możliwości klasyfikacji punktów. Z zalet tego programu, które przydają się w procesie projektowym wymieniłbym głównie:</p> <ul><li>możliwość klasyfikacji punktów terenu (jeżeli nie ma klasyfikacji)</li> <li>możliwość nakładania kolorów ze zdjęć satelitarnych na chmurę punktów (jeżeli brakuje kolorów)</li> <li>rejestrację chmur punktów względem siebie</li></ul> <p>Takie ruchy pozwolą nam podzielić chmurę punktów na lekkie paczki, które można potem podlinkować w pliku Revitowym i mieć kontrolę nad widocznością wszystkiego. Tutaj niestety nie obejdzie się bez płatnego programu Autodesk Recap, który otwiera pliki <code>.las</code> i zapisuje je do formatu <code>.rcp</code>, który można podczytać w Revicie.</p> <p>Z tak załadowaną chmurą, możemy ją podczytać w odpowiednich koordynatach do naszego projektu i możemy być pewni, że punkty siedzą idealnie w terenie. Z praktyki mogę powiedzieć, że taka chmura świetnie się sprawdza na etapie koncepcji i projektowaniu w kontekście terenu z <strong>rzeczywistymi (!!!)</strong> obiektami terenu jak zieleń, cieki, budynki, drogi, wzniesienia, rzeźby (nie ma co wymieniać, bo to jest dosłownie wszystko). Przydaje się do uszczegóławiania i modelowania dachów budynków sąsiednich, lub sprawdzania rzeczywistej wysokości attyk i wysokości. Świetnie się sprawdza również w przypadku wizualizacji. Generowania rzeczywistego terenu i analizy wykopów mas ziemnych.</p> <h2 id="granice-dzialek">Granice działek</h2> <p>Różne kraje mają różne bazy dostępnych publicznie danych. Jako przykład można podać usługi:</p> <ul><li>WMS (Web Map Service) WMTS (Web Map Tile Service),</li> <li>WFS (Web Feature Service),</li> <li>ATOM,</li> <li>INSPIRE (Infrastructure for Spatial Information in Europe).</li></ul> <p>Są to ujednolicone usługi udostępniania danych geograficznych jak ortofotomapy, granice, plany miejscowe i wiele innych.</p> <p>Polski Geoportal pozwala na pobranie bazy BDOT10k (Baza Danych Obiektów Topograficznych), z których za pomocą znanego nam QGIS możemy wyciągnąć np. granice działek, lub obrysy istniejących budynków, osie dróg oraz wiele innych informacji, jak punkty lokalizacji przystanków, rodzaje terenów etc. Takie dane możemy potem zaimportować do programów projektowych 2D lub 3D.</p> <p>QGIS pozwala nam to wizualnie wyfiltrować oraz ustawić w odpowiednich koordynatach.
Tzw. reprojekcja z ogólnopolskiego układu współrzędnych na układ, w którym projekt jest opracowywany. A o tym w następnym podpunkcie.
Pod <a href="https://www.geoportal.gov.pl/uslugi/usluga-przegladania-wms" rel="nofollow">tym linkiem</a> widać jakie usługi są dostępne w ramach WMS geoportalu.pl</p> <h2 id="geolokalizacja-i-numery-epsg">Geolokalizacja i numery EPSG</h2> <p><img src="/images/blog/001-poland-epsg.gif" alt="Map of Poland EPSG 3857" title="EPSG 3857"/> Od tego tematu powinniśmy zacząć, ale zawsze lepiej zacząć od czegoś bardziej efektownego. EPSG natomiast to element układanki, który połączy wszystko w całość. Znajomość tego pojęcia ułatwi nam pracę, wyeliminuje podstawowe błędy i przy prawie zerowym nakładzie pracy wprowadzi pierwszą automatyzację procesów.</p> <p>Kody EPSG powstały w celu standaryzacji nazewnictwa układów współrzędnych. W te kody wchodzą układy współrzędnych prostokątnych płaskich (rzutowania) jak i geograficznych.
W Polsce mamy dwa układy odniesienia: starszy <code>PL-ETRF89</code> i obowiązujący dziś <code>PL-ETRF2000</code>.</p> <p>Układy współrzędnych płaskich prostokątnych razem z numerami EPSG to:</p> <table><thead><tr><th>EPSG</th><th>Układ</th><th>Południk osiowy</th></tr></thead><tbody><tr><td>EPSG:2180</td><td>PL-1992</td><td>19° (cała Polska)</td></tr><tr><td>EPSG:2176</td><td>PL-2000 strefa 5</td><td>15°</td></tr><tr><td>EPSG:2177</td><td>PL-2000 strefa 6</td><td>18°</td></tr><tr><td>EPSG:2178</td><td>PL-2000 strefa 7</td><td>21°</td></tr><tr><td>EPSG:2179</td><td>PL-2000 strefa 8</td><td>24°</td></tr></tbody></table> <p>Wiedza o tym, w jakim układzie znajduje się działka, lub w jakim układzie mamy dane pozwoli nam w bezproblemowy sposób scalić takie dane. Do analizy i przetwarzania takich danych też najlepiej sprawdzi się <strong>QGIS</strong>. Często zdarzy się, że chmura punktów dostarczana jest w układzie ogólnopolskim, a projekt ustawiony jest w koordynatach szczegółowych np. strefy 6.</p> <h2 id="modele-budynkow">Modele Budynków</h2> <p>W temacie budynków będziemy mieli parę opcji generowania modeli 3D.
Pierwsza, łatwiejsza, ale czasochłonna opcja, to znalezienie istniejących modeli i ustawianie ich w 3D do granic budynków pozyskanych z usług WFS. To oczywista opcja, ale warto ją wymienić, bo czasem można natknąć się na bardzo dokładne modele obiektów.</p> <p>Drugą opcją jest pozyskanie danych z geoportalu. Budynki można pobrać w formacie GML w szczegółowości LOD1. Aby móc je wykorzystać w Revicie lub innym programie trzeba je przerobić na natywny format. Dla Revita będzie to najlepiej <code>MASS FAMILY</code>. Dla Blendera np. <code>OBJ</code>. Plik GML ma strukturę XML, więc możemy go odczytać w Pythonie parserem XML. Wyglądałoby to tak:</p> <pre class="language-python"></pre> <p>Daje nam to zbiór wierzchołków i poligonów (grupy wierzchołków które tworzą pojedyncze poligony). Z takiego formatu bardzo łatwo już wygenerować obiekt w Blenderze, zapisać jako OBJ i zaimportować do Revita. Lub za pomocą Revit API automatycznie wymodelować obiekty MASS za pomocą tych danych. Plusem tego rozwiązania jest to, że takie budynki są już zlokalizowane w układzie poziomym i pionowym.</p> <hr/> <blockquote><h3>Problem dalekich odległości</h3> <p>Pojawia się jeden problem dosyć znany w środowiskach grafików 3D. Im dalej wierzchołek jest położony od punktu [0,0,0], tym jego wyświetlanie zaczyna być coraz bardziej “przybliżone”. Jest to problem radzenia sobie komputerów z liczbami po przecinku. Komputer zawsze uogólnia liczby po przecinku do swojej interpretacji dlatego czasami może się zdarzyć, że np. porównując liczby 0,003 == 0,003 okaże się, że są różne, ponieważ dla komputera 0,003 = 0,003000000000000001. Rozwiązaniem tego problemu byłoby pobranie informacji o lokalizacji <code>internal origin</code> lub <code>project base point</code> i przesunięcie wszystkich wierzchołków o dany wektor, aby wstawiały się nie poprzez <strong>shared coordinates</strong>, a poprzez bliższy punkt wstawienia.</p></blockquote> <hr/> <p>Ostatnie rozwiązanie, jakie mógłbym zaproponować wymaga trochę więcej wiedzy technicznej, ale jest najdokładniejsze. Geometrię budynków moglibyśmy wygenerować z chmury punktów. Na pomoc przychodzi tutaj sporo algorytmów do analiz przestrzennych, ale w skrócie myślowym możemy to rozdzielić na poniższe zadania:</p> <ul><li>wydzielamy z chmury punktów punkty klasyfikowane jako budynki.</li> <li>analizujemy, które punkty należą do jakich płaszczyzn, i dzielimy je na grupy według płaszczyzn,</li> <li>mając płaszczyzny i punkty należące do płaszczyzn wyszukujemy punkty graniczne (leżące na krawędziach każdej z grup). Dzięki temu mamy przybliżone krawędzie danego obiektu i płaszczyzny.</li> <li>czyścimy punkty, które leżą na jednej prostej lub w jakiejś małej odległości od niej. Zostają nam wtedy wierzchołki</li> <li>łączymy wierzchołki, które leżą blisko siebie, nadajemy im numer i przypisujemy do płaszczyzn.</li> <li>finalny wynik daje nam te same zbiory wierzchołków i poligonów jak we wcześniejszym skrypcie.</li></ul> <p>Ta opcja daje nam dużo bardziej szczegółowe budynki. Jeżeli brakuje nam szczegółowości, wówczas możemy użyć lidaru, drona, aparatu lub smartfonu, aby wygenerować dodatkowe chmury punktów za pomocą np. darmowego programu Meshroom (fotogrametria to przetwarzanie zdjęć z aparatów i smartfonów na chmurę punktów). Mając chmurę punktów możemy ją połączyć z chmurą dostarczoną z geoportalu, zagęszczając dokładność i uzupełniając braki. Takie połączenie chmury bez koordynatów z chmurą z koordynatami nazywamy rejestracją chmury. Łączy się to też z wyczyszczeniem takiej chmury z błędnych pomiarów.</p> <h2 id="zdjecia-satelitarne">Zdjęcia satelitarne</h2> <p>Czy uwierzycie, jeżeli wam powiem, że jest taki format zapisu obrazu, który pozwala na geolokalizację tego obrazu w koordynatach? Wyobraźcie sobie, że dostajecie mapę planu miejscowego / skan mapy do celów opiniodawczych od inwestora / zdjęcie satelitarne działki lub dowolną inną mapę. Wrzucacie ją do waszego programu i zawsze wkleja się idealnie we właściwe miejsce? Idealnie w skali? Bez żadnych zniekształceń?</p> <p>Tak jest to możliwe, nie zawsze, nie dla wszystkich programów, ale jest możliwy zapis geolokalizacji dla obrazu. Możemy to zrobić np. dla plików PDF, lub TIFF. Takie pliki tiff nazywamy wtedy GeoTiff.</p> <p>Kiedy pobieracie zdjęcie satelitarne z portalu rządowego, to najczęściej ma ono już ustawione swoje koordynaty i system w jakim został zapisany. Wrzucając takiego tiff’a np. do programu QGIS wystarczy mu ustawić w jakim układzie został zapisany (np. EPSG:2180) i od razu wkleja się we właściwe miejsce. Bez żadnych zniekształceń, bez przesunięć. Idealnie.</p> <p>Drugim atutem zdjęć satelitarnych są dane. Dla nas może być przydatny kolor. W przypadku chmury punktów, która nie ma zapisanych danych kolorystycznych możemy przełożyć kolory ze zdjęcia satelitarnego na daną chmurę punktów. Taką możliwość daje np. Cloud Compare.</p> <h2 id="laczymy-wszystko-i-automatyzujemy">Łączymy wszystko i automatyzujemy</h2> <p>Najciekawszym elementem tej układanki jest to, że większość tych zadań można skrócić do jednego przycisku np. w Revicie. Potrzebujemy wprowadzić tylko parę parametrów:</p> <ul><li>lokalizację (koordynaty)</li> <li>promień widoczności (w jakim zasięgu pobierać dane)</li> <li>opcjonalnie poligon/region z granicami działki</li></ul> <p>Resztę, czyli pobranie terenu, chmury punktów, granic działek, budynków i ortofotomapy oraz ustawienie ich we właściwym układzie współrzędnych, załatwia skrypt. Projektant dostaje gotowy kontekst w kilka minut zamiast kilku dni.</p>`,1);function Ve(e){var a=Be(),c=s(n(a),98);r(c,()=>`<code class="language-python"><span class="token comment"># python</span>
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
</code>`,!0),i(c),t(32),o(e,a)}var He=e({default:()=>Ye,metadata:()=>p}),p={title:`Deterministyczne środowiska projektowe`,date:`2026-10-15T00:00:00.000Z`,summary:`Propozycja przeniesienia dobrych praktyk programistycznych do branży budowlanej poprzez automatyczne i deterministyczne tworzenie środowisk projektowych (tzw. config packages) w oparciu o geolokalizację i geodezyjne dane terenu.`,authors:`Dawid Huczyński`,tags:[`AEC`,`BIM`,`CAD`,`geolocation`,`automation`,`interoperability`]},{title:Ue,date:We,summary:Ge,authors:Ke,tags:qe}=p,Je=a(`<p>Uważam, że jest to bardzo ważny element na etapie początkowym procesu projektowego, a zwłaszcza przy ustawianiu projektów i narzędzi, których używamy w całym procesie. Mało osób w branży – może poza geodetami – wykorzystuje pełne informacje o lokalizacji obiektu lub projektu.</p> <p>Często spotykam się z sytuacją, w której projekty są stawiane w różnych środowiskach – np. Revit, CAD, Tekla – a następnie powstaje
walka z eksportem i połączeniem tych różnych modeli w jeden spójny projekt. Modele mogą być różne: czasem płaskie, a czasem
trójwymiarowe. Automatyczne stawianie projektu ma tę przewagę, że pozwala deterministycznie stworzyć środowisko. Podobnie jak
programiści, którzy tworzą dla siebie odtwarzalne i deterministyczne środowiska, tak projektanci również mogliby sobie stwarzać
takie środowiska, bazując na minimalnej ilości danych, na przykład na informacji o terenie.</p> <p>Takie podejście daje możliwość automatycznego postawienia projektu w każdym środowisku – czy będzie to program CAD, czy inny. Można
w ten sposób zdefiniować granice działki i ściągnąć informacje o okolicznych sieciach. Wszystko to powinno być skoordynowane zarówno
w ładzie współrzędnych płaskich, jak i w geolokalizacji. Efektem jest to, że wszyscy uczestnicy projektu mają we wspólnej
przestrzeni taki sam, standardowy projekt startowy, na którym się pracuje.</p> <p>Wcześniej zastępowało się to tak zwanym plikiem koordynacyjnym – pustym plikiem, jakimś sześcianem lub stożkiem koordynacyjnym,
który definiował lokalizację projektów, a wszyscy musieli się do tego jednego obiektu dostosować.</p> <p>Obecnie uważam, że nasza branża powinna budować swoje środowiska w sposób deterministyczny, poprzez rozsyłanie pakietów konfiguracyjnych (ang. <em>config packages</em>), które ustawiają całe środowisko projektowe, podobnie jak ma miejsce w świecie programistycznym. W takim pakiecie mogłyby zawierać się podstawowe informacje o działce, lokalizacji punktu startowego, osiach, poziomach. Nie muszą być wszystkie, ale taki plik pozwalałby np. odtworzyć początkowe ustawienia dla każdego uczestnika procesu.</p> <p>Już teraz jest możliwe za pomocą samego terytu:</p> <ul><li>pobranie granic działki,</li> <li>poziomu terenu w wysokiej dokładności,</li> <li>otoczenia i zieleni,</li> <li>sąsiadujących budynków,</li> <li>linii napowietrznych,</li> <li>obowiązujących planów,</li> <li>różnych stref (jak NATURA 2000 lub podtopienia),</li> <li>rysunków płaskich sieci i instalacji.</li></ul> <p>To i tak nie wszystko, a możliwe to było już\xA0od 2022 roku, kiedy tworzyłem takie narzędzia dla Revita, Blendera i CAD-a.
Obecnie wraz z rozwojem narządzi takie pomysły są dostępne na wyciągnięcie ręki. Potrzebna jest tylko wiedza i pomysły.</p>`,1);function Ye(e){var n=Je();t(14),o(e,n)}var Xe=e({default:()=>rt,metadata:()=>m}),m={title:`TERYT – Jeden numer, który rewolucjonizuje wymianę informacji`,date:`2026-10-19T00:00:00.000Z`,summary:`Jak unikalny identyfikator TERYT eliminuje powtarzalną pracę i usprawnia automatyzację procesów w branży budowlanej oraz projektowej.`,authors:`Dawid Huczyński`,tags:[`bim`,`construction`,`teryt`,`automation`,`gis`]},{title:Ze,date:Qe,summary:$e,authors:et,tags:tt}=m,nt=a(`<h2 id="problem">Problem</h2> <p>W budownictwie i projektowaniu stałym wyzwaniem pozostaje sprawna wymiana informacji. Najprostszym, a zarazem wyjątkowo powszechnym przykładem tego problemu jest precyzyjne lokalizowanie działki.</p> <p>Standardowy proces najczęściej wygląda podobnie: poruszamy się po mapach ewidencji gruntów i budynków, wybieramy województwo, powiat, gminę, obręb oraz miasto, aby na końcu ręcznie wpisać numer działki i odszukać konkretne miejsce. Łatwo o pomyłkę. Wystarczy chwila nieuwagi, by trafić na sąsiedni obręb z działką o takim samym numerze.</p> <p>Co gorsza, wykonujemy w ten sposób ogrom powtarzalnej pracy. Następnie do projektu dołącza kolejna osoba w procesie budowlanym – projektant branżowy, generalny wykonawca, koordynator – i każda z nich powtarza dokładnie tę samą czynność od zera, szukając lokalizacji w swoich systemach i narzędziach.</p> <p>Istnieje jednak jedno proste rozwiązanie, które jest powszechnie dostępne i może radykalnie uprościć pracę wszystkim zaangażowanym stronom: <strong>numer TERYT</strong>.</p> <h2 id="teryt">TERYT</h2> <p style="font-size:2em;text-align:center"><strong style="color:#af3029">22</strong><strong style="color:#ad8301">61</strong><strong style="color:#66800b">01</strong>_<strong style="color:#24837b">1</strong>.<strong style="color:#205ea6">0303</strong>.<strong style="color:#5e409d">769/16</strong></p> <p style="text-align:center;"><span style="color:#af3029">województwo</span> · <span style="color:#ad8301">powiat</span> · <span style="color:#66800b">gmina</span> _ <span style="color:#24837b">rodzaj</span> . <span style="color:#205ea6">obręb</span> . <span style="color:#5e409d">nr działki</span></p> <p>TERYT to unikalny identyfikator w skali całego kraju. W jednym ciągu cyfr zawiera pełną i jednoznaczną informację o lokalizacji: od województwa i gminy, przez obręb, aż po konkretną działkę.</p> <p>Wykorzystanie numeru TERYT daje nam ogromną przewagę i otwiera drzwi do automatyzacji:</p> <ul><li><strong>Błyskawiczne wyszukiwanie:</strong> Wystarczy wkleić identyfikator np. do Geoportalu, aby od razu przejść do właściwej lokalizacji bez ręcznego przeklikiwania struktur administracyjnych.</li> <li><strong>Integracja przez API:</strong> Korzystając z API Geoportalu, możemy na podstawie samego numeru TERYT (lub ich listy) automatycznie pobierać obrysy działek.</li> <li><strong>Łatwa konwersja danych:</strong> Pobrane dane przestrzenne można w prosty sposób wyeksportować do dowolnego formatu – przetworzyć do CAD-a czy załadować bezpośrednio do programu Revit.</li></ul> <p>Nagle proces, który wymagał wielokrotnego wyszukiwania i przeklikiwania map, sprowadza się do prostego operowania jednym identyfikatorem. Gdyby wiedza o praktycznym wykorzystaniu TERYT była w branży budowlanej bardziej powszechna, wszystkim pracowałoby się znacznie lżej.</p>`,1);function rt(e){var n=nt();t(22),o(e,n)}var it=e({default:()=>dt,metadata:()=>h}),h={title:`Notatki głosowe`,date:`2026-10-13T00:00:00.000Z`,summary:`Jak wylać swoją\xA0wiedzę która w tobie siedzi? O tym jak LLM wspomaga nas w zapisywaniu pomysłów.`,authors:`Dawid Huczyński`,tags:[`speech-to-text`,`LLM`,`local`,`AI`]},{title:at,date:ot,summary:st,authors:ct,tags:lt}=h,ut=a(`<h2 id="problem">Problem</h2> <p>Pewnie wielu z nas boryka się z dużą ilością pomysłów, które zapisujemy na kartkę, a potem nam umykają. Lub mamy już
pełen szkic pomysłu w głowie, ale nie mamy czasu go uszczegółowić bądź zrealizować w natłoku obowiązków.</p> <p>Ja miałem parę niedokończonych tematów:</p> <ol><li>Moją stronę internetową, którą wiedziałem jak mam zmienić tylko nie miałem czasu bo był to temat czysto kreatywny, a nie miał potencjału do zysku.</li> <li>Stać się aktywniejszy w branży i podzielić się szerszej publiczności wiedzą jaką dzielę się ze znajomymi i otoczeniem. Bo uwielbiam dzielić się wiedzą i uważam że warto dzielić się “know how” bo to nie jest wielka przewaga konkurencyjna. Przewagą jest dla mnie wiedza jak to wykorzystać.</li> <li>Rozwinąć marketing mojej firmy.</li></ol> <p>Dziś na tapetę chcę wziąć temat nr 2. W 2022 zacząłem pisać artykuły na bloga. Sporo wiedzy. Już nawet miałem wszystko
przygotowane i wrzucone na stronę, ale brakowało mi ostatnich szlifów. Uzupełnienie merytoryki. Poprawienie błędów.
Przetłumaczenie na dwa języki. I tak temat utknął. Bo były tematy bieżące.</p> <p>Dziś w dniu pisania tego artykułu zdążyłem napisać już\xA0trzy. A ten piszę z czystej przyjemności pisania. Wykorzystałem
do tego AI, ale nie tak jak myślicie. Dalej każde zdanie jest moim zdaniem.</p> <h2 id="idea">Idea</h2> <p>Pomysł na ten proces pojawił się po tym jak przeczytałem post Ilya Sutskever o tym, że zaczął on dyktować głosem swoim
agentom/LLM/AI zadania. Opisał to w taki sposób, że używa prostego speech-to-text do przekładania mowy na tekst. I najważniejsze co
w tym było to to, że nie przejmował się formatowaniem tekstu. Wylewał po prostu wszystkie swoje myśli, nawet błędne
zdania. Wylewał\xA0cały swój proces z wiedzą, że LLM i tak to ogarnie i zrozumie. Tutaj mnie olśniło.</p> <h2 id="rozwiazanie-to-tts-llm">Rozwiązanie to TTS + LLM</h2> <p>Naszkicuję mam mój obecny proces. Odwożąc dzieci, bądź wracając z pracy. Włączam nagrywanie i tworzę notatki głosowe na
konkretny temat. Taką notatkę wrzucam do speech-to-text takiego jak <code>Orukeet</code> lub <code>Parakeet</code>. Świetnie się sprawdzają w
języku polskim. Dodatkowo używam najprostszych modeli. One wypluwają mi transkrypcję - z błędami, z przemieszanymi
słowami. Są to wylane moje myśli bez żadnego filtra. Wtedy włączam LLM. Mam ustawiony prompt który nakazuje trzymać się
mojego tekstu, ale:</p> <ul><li>poprawiać stylistykę interpunkcję,</li> <li>poprawiać niewyraźne wyrazy które powinny być inne (znając kontekst),</li> <li>Jeżeli w jakimś miejscu rozwinąłem temat podwójnie to scalić to w jedno,</li> <li>podzielić ten tekst na pasujące do siebie akapity i ew. pogrupować zdania jeżeli pasują do innego akapitu (to mój
słowotok, czasami skaczę po tematach, albo wracam do poprzedniego).</li></ul> <p>Tak oto dostaję pięknie skomponowaną notkę do bloga. Upiększam to obrazkami i wykresami już\xA0we własnym zakresie.</p> <p><strong>Ale to nie wszystko…</strong></p> <p>Akurat Google udostępnił tworzenie skilli więc stworzyłem mu skilla, który dodaje do artykułu
metadane jak tytuł, tagi, “summary” w odpowiednim formacie do mojego bloga.</p> <p><strong>Ale to nie wszystko!!!</strong></p> <p>Miałem już darmową aplikację korzystającą\xA0z <code>Orukeet</code> i tworzącą notatki, ale i tak musiałem to przerzucać do Gemini…
Dlatego poprosiłem agenta, żeby zrobił mi aplikację do transkrypcji z <code>Orukeet</code>, która potem od razu formatuje z zadanym promptem.
Agent wyrzucił mi to w 5 minut. Gotowa aplikacja w <code>Rust</code> i <code>Tauri</code>, korzystająca z <code>Orukeet</code> i <code>gemma4:e4b</code> małego modelu od
Google który uruchamia się całkowicie lokalnie. Sprawdza się idealnie.</p> <p>Nawet nie będę tego tu udostępniał bo myślę, że każdy z Was może już to zrobić całkiem sam.
Korzystam teraz z tego codziennie.</p>`,1);function dt(e){var n=ut();t(32),o(e,n)}var ft=e({default:()=>bt,metadata:()=>g}),g={title:`DWG importer to Revit`,date:`2023-01-10T00:00:00.000Z`,summary:`DWG floor plans data extraction to excel database and build model in revit file.`,authors:`Dawid Huczyński`,tags:[`revit`,`architecture`,`dwg`,`dxf`],sketch:!0},{title:pt,date:mt,summary:ht,authors:gt,tags:_t,sketch:vt}=g,yt=a(`<h2 id="introduction">Introduction</h2>`);function bt(e){var t=yt();o(e,t)}var xt=e({default:()=>kt,metadata:()=>_}),_={title:`IFC analysis with IFCOpenShell`,date:`2023-02-07T00:00:00.000Z`,summary:`DWG floor plans data extraction to excel database and build model in revit file.`,authors:`Dawid Huczyński`,tags:[`architecture`,`point cloud`,`cloud compare`,`photogrammetry`],sketch:!0},{title:St,date:Ct,summary:wt,authors:Tt,tags:Et,sketch:Dt}=_,Ot=a(`<h2 id="introduction">Introduction</h2>`);function kt(e){var t=Ot();o(e,t)}var At=e({default:()=>Rt,metadata:()=>v}),v={title:`Point Clouds in architecture`,date:`2023-01-24T00:00:00.000Z`,summary:`DWG floor plans data extraction to excel database and build model in revit file.`,authors:`Dawid Huczyński`,tags:[`architecture`,`point cloud`,`cloud compare`,`photogrammetry`],sketch:!0},{title:jt,date:Mt,summary:Nt,authors:Pt,tags:Ft,sketch:It}=v,Lt=a(`<h2 id="introduction">Introduction</h2>`);function Rt(e){var t=Lt();o(e,t)}var zt=e({default:()=>Zt,metadata:()=>y}),y={title:`Ark`,date:`2011-12-01T00:00:00.000Z`,summary:`Revitalisation of the Minorite church`,cover:`ark-000.webp`,category:`Public`,location:`Brzeg, Poland`,gps:`50.86265, 17.47273, 18`,phase:`Concept`,authors:`Dawid Huczyński`,images:`ark-000.webp, ark-001.webp, ark-002.webp, ark-003.webp, ark-004.webp, ark-005.webp, ark-006.webp`},{title:Bt,date:Vt,summary:Ht,cover:Ut,category:Wt,location:Gt,gps:Kt,phase:qt,authors:Jt,images:Yt}=y,Xt=a(`<p>Diploma project: the revitalisation of an old, decaying church. I worked closely with the historical documents and earlier projects. “The higher the church ceiling, the closer to God”: the idea was to bring the audience up to the upper level of the interior. The ground floor became an exhibition space and foyer.</p>`);function Zt(e){var t=Xt();o(e,t)}var Qt=e({default:()=>mn,metadata:()=>b}),b={title:`BF2`,date:`2018-12-01T00:00:00.000Z`,summary:`Part of a multi-family residential complex`,cover:`bf2-000.webp`,category:`Residential`,location:`Stavanger, Norway`,gps:`58.88253, 5.65382, 17`,phase:`Built`,office:`Tendra Arkitektur`,officeUrl:`http://www.tendra.is/`,authors:`Jóhann Sigurðsson, Lárus Guðmarsson, Þórarinn Malmquist, Anna Franczyk, Dawid Huczyński`,area:2818,images:`bf2-000.webp, bf2-001.webp, bf2-002.webp, bf2-003.webp`},{title:$t,date:en,summary:tn,cover:nn,category:rn,location:an,gps:on,phase:sn,office:cn,officeUrl:ln,authors:un,area:dn,images:fn}=b,pn=a(`<p>The fourth building of the 40Femti complex. It stands on a corner of the site, by a roundabout, which makes it a landmark for the whole area. Spacious apartments, roof gardens and a variety of layouts make it one of the most interesting and challenging projects I have worked on.</p>`);function mn(e){var t=pn();o(e,t)}var hn=e({default:()=>Tn,metadata:()=>x}),x={title:`Construction data analysis`,date:`2024-01-01T00:00:00.000Z`,years:`2024–2026`,group:`it`,mark:`IFC`,summary:`3D models, drawings and specifications in a single database`,category:`Data, BIM`,tech:`Python (IfcOpenShell, OpenCV, bpy), Ollama (vision models)`},{title:gn,date:_n,years:vn,group:yn,mark:bn,summary:xn,category:Sn,tech:Cn}=x,wn=a(`<p>A data unification project across distributed construction environments. Multi-format data, i.e. 3D models, drawings and text specifications, was structured end to end into a central database, with local vision models helping to read the documentation. Stakeholders gained broad business intelligence capabilities.</p>`);function Tn(e){var t=wn();o(e,t)}var En=e({default:()=>Bn,metadata:()=>S}),S={title:`Dąbki`,date:`2017-05-01T00:00:00.000Z`,summary:`Seaside resort concept with a hotel and aquapark`,cover:`dabki-006.webp`,category:`Leisure`,location:`Dąbki, Poland`,gps:`54.378373, 16.311895, 16`,phase:`Designed`,office:`R2 Studio`,officeUrl:`https://r2.pl/`,authors:`Lesław Rubik, Paweł Rządkowski, Paulina Gęstwa, Michał Wroński, Dawid Huczyński`,images:`dabki-000.webp, dabki-001.webp, dabki-002.webp, dabki-003.webp, dabki-004.webp, dabki-005.webp, dabki-006.webp, dabki-007.webp, dabki-008.webp, dabki-009.webp, dabki-010.webp, dabki-011.webp, dabki-012.webp, dabki-013.webp, dabki-014.webp, dabki-015.webp, dabki-016.webp, dabki-017.webp, dabki-018.webp, dabki-019.webp, dabki-020.webp, dabki-021.webp, dabki-022.webp`},{title:Dn,date:On,summary:kn,cover:An,category:jn,location:Mn,gps:Nn,phase:Pn,office:Fn,officeUrl:In,authors:Ln,images:Rn}=S,zn=a(`<p>Three existing buildings (two hotel units and a dining hall) were completely rearranged and extended. All ground-floor functions were redesigned and connected by an open corridor. The dining area moved into this “corridor”, and the pools and spa were placed at the front of the plot. I took part in the project from the very beginning until the final design stage.</p>`);function Bn(e){var t=zn();o(e,t)}var Vn=e({default:()=>Zn,metadata:()=>C}),C={title:`DogAlone`,date:`2017-01-02T00:00:00.000Z`,years:`2017–2021`,group:`it`,mark:`DOG`,summary:`An app that calms a dog left at home alone`,category:`Web app`,tech:`JavaScript`},{title:Hn,date:Un,years:Wn,group:Gn,mark:Kn,summary:qn,category:Jn,tech:Yn}=C,Xn=a(`<p>A real-time web app: it analyses audio and recognises a dog howling by its audio fingerprint. When the dog starts to howl, it plays back the owner’s recorded, calming voice every now and then. It runs locally, without sending any audio to the network.</p>`);function Zn(e){var t=Xn();o(e,t)}var Qn=e({default:()=>lr,metadata:()=>w}),w={title:`Football Namibia`,date:`2016-07-01T00:00:00.000Z`,summary:`Concept of a sports campus with a hotel, dormitories and a football pitch`,cover:`namibia-000.webp`,category:`Sport`,location:`Namibia`,phase:`Concept`,authors:`Dawid Huczyński`,images:`namibia-000.webp, namibia-001.webp, namibia-002.webp, namibia-003.webp, namibia-004.webp`},{title:$n,date:er,summary:tr,cover:nr,category:rr,location:ir,phase:ar,authors:or,images:sr}=w,cr=a(`<p>A quick concept. The early stage gave a lot of freedom: the project was mainly meant to attract investors, so it had no particular restrictions.</p>`);function lr(e){var t=cr();o(e,t)}var ur=e({default:()=>Tr,metadata:()=>T}),T={title:`High Five`,date:`2019-01-01T00:00:00.000Z`,summary:`Sports hall and city offices`,cover:`high-five-built-01.webp`,category:`Public`,location:`Stavanger, Norway`,gps:`58.954720, 5.700193, 17`,phase:`Built`,office:`Tendra Arkitektur`,officeUrl:`http://www.tendra.is/`,authors:`Jóhann Sigurðsson, Dawid Huczyński, Marco Ekkel`,area:4226,images:`high-five-000.webp, high-five-built-01.webp, high-five-003.webp, high-five-built-05.webp, high-five-built-02.webp, high-five-built-03.webp, high-five-built-04.webp, high-five-built-06.webp, high-five-built-07.webp, high-five-built-08.webp, high-five-built-09.webp, high-five-004.webp, high-five-001.webp`},{title:dr,date:fr,summary:pr,cover:mr,category:hr,location:gr,gps:_r,phase:vr,office:yr,officeUrl:br,authors:xr,area:Sr,images:Cr}=T,wr=a(`<p>A sports hall in the very centre of the city. The ground floor holds a restaurant and a sports centre; the upper floors are split 50/50 between a school and city offices. On the roof we placed a recreation area for children.</p>`);function Tr(e){var t=wr();o(e,t)}var Er=e({default:()=>Vr,metadata:()=>E}),E={title:`Kamieńskiego`,date:`2015-04-01T00:00:00.000Z`,summary:`Concept of a residential urban quarter`,cover:`kamienskiego-residential-000.webp`,category:`Residential`,location:`Wrocław, Poland`,gps:`51.15361, 17.04737, 16`,phase:`Concept`,office:`R2 Studio`,officeUrl:`https://r2.pl/`,authors:`Lesław Rubik, Paulina Gęstwa, Marta Trzepizur, Katarzyna Jabłońska, Paweł Rządkowski, Dawid Huczyński, Michał Wroński`,area:34740,images:`kamienskiego-residential-000.webp, kamienskiego-residential-001.webp, kamienskiego-residential-002.webp, kamienskiego-residential-003.webp, kamienskiego-residential-004.webp, kamienskiego-residential-005.webp, kamienskiego-residential-006.webp`},{title:Dr,date:Or,summary:kr,cover:Ar,category:jr,location:Mr,gps:Nr,phase:Pr,office:Fr,officeUrl:Ir,authors:Lr,area:Rr,images:zr}=E,Br=a(`<p>I worked on the concept for the corner of an urban quarter. Responsible for 3D visualisation, massing and facades.</p>`);function Vr(e){var t=Br();o(e,t)}var Hr=e({default:()=>$r,metadata:()=>D}),D={title:`Library details`,date:`2010-10-01T00:00:00.000Z`,summary:`Architectural details for a library project`,cover:`detail-000.webp`,category:`Public`,location:`Prague, Czech Republic`,phase:`Detail`,authors:`Dawid Huczyński`,images:`detail-000.webp, detail-001.webp, detail-002.webp, detail-003.webp, detail-004.webp, detail-005.webp`},{title:Ur,date:Wr,summary:Gr,cover:Kr,category:qr,location:Jr,phase:Yr,authors:Xr,images:Zr}=D,Qr=a(`<p>A study of architectural details for a library project.</p>`);function $r(e){var t=Qr();o(e,t)}var ei=e({default:()=>di,metadata:()=>O}),O={title:`meshroom2blender`,date:`2017-01-03T00:00:00.000Z`,years:`2017–2021`,group:`it`,mark:`MR`,summary:`Importing photogrammetry data from Meshroom into Blender`,category:`Open source`,tech:`Python, Blender`,source:`https://github.com/tibicen/meshroom2blender`},{title:ti,date:ni,years:ri,group:ii,mark:ai,summary:oi,category:si,tech:ci,source:li}=O,ui=a(`<p>A Blender importer for data files from AliceVision Meshroom, free photogrammetry software. It brings a 3D reconstruction from photos straight into a scene, e.g. for visualisation or modelling an existing building.</p>`);function di(e){var t=ui();o(e,t)}var fi=e({default:()=>wi,metadata:()=>k}),k={title:`Mill`,date:`2011-03-01T00:00:00.000Z`,summary:`A theatre in an old mill`,cover:`mlyn-000.webp`,category:`Public`,location:`Brzeg, Poland`,gps:`50.86341, 17.47272, 18`,phase:`Concept`,authors:`Dawid Huczyński`,images:`mlyn-000.webp, mlyn-001.webp, mlyn-002.webp, mlyn-003.webp`},{title:pi,date:mi,summary:hi,cover:gi,category:_i,location:vi,gps:yi,phase:bi,authors:xi,images:Si}=k,Ci=a(`<p>Revitalisation of an old mill into a theatre.</p>`);function wi(e){var t=Ci();o(e,t)}var Ti=e({default:()=>Li,metadata:()=>A}),A={title:`Nafta Neo Bistro`,date:`2017-06-01T00:00:00.000Z`,summary:`Interior of an industrial-modern restaurant with an open kitchen`,cover:`nafta-001.webp`,category:`Interior`,location:`Wrocław, Poland`,gps:`51.081994, 17.078372, 17`,phase:`Concept`,authors:`Dawid Huczyński`,images:`nafta-001.webp, nafta-002.webp, nafta-003.webp, nafta-004.webp, nafta-005.webp, nafta-006.webp, nafta-007.webp, nafta-008.webp`},{title:Ei,date:Di,summary:Oi,cover:ki,category:Ai,location:ji,gps:Mi,phase:Ni,authors:Pi,images:Fi}=A,Ii=a(`<p>The people behind this project were the most enthusiastic clients I have met. They had plenty of ideas not only for the restaurant itself but also for a unique style: raw but new, exclusive but not overwhelming. They went into every detail and wanted to build it themselves. My modest input was advice and help with the general layout. I prepared the idea of combining charred wood with riveted metal sheets and greenery under the ceiling. The project was delayed and I could not stay until the end, but I was amazed how my concepts became reality thanks to great clients.</p>`);function Li(e){var t=Ii();o(e,t)}var Ri=e({default:()=>Yi,metadata:()=>j}),j={title:`Photovoltaic controller`,date:`2022-01-01T00:00:00.000Z`,years:`2022–now`,group:`it`,mark:`PV`,summary:`A service that stops PV farms at negative energy prices`,category:`Energy`,client:`own project, developed further at Leysa`,tech:`Python (FastAPI, pandas, plotly, cfgrib, scikit-learn, skforecast), Nginx, JavaScript`},{title:zi,date:Bi,years:Vi,group:Hi,mark:Ui,summary:Wi,category:Gi,client:Ki,tech:qi}=j,Ji=a(`<p>A web service that collects and analyses energy market data, weather forecasts (including GRIB numerical models) and solar radiation. Every 15 minutes it checks prices and the state of the farms; at negative prices it stops production automatically and resumes it when it pays again.</p> <p>The models predict energy price spikes and weather-driven fluctuations with 50–90% accuracy. The system runs in production for several PV farms and is developed further at <a href="https://leysa.pl" rel="nofollow">Leysa</a>.</p>`,1);function Yi(e){var n=Ji();t(2),o(e,n)}var Xi=e({default:()=>oa,metadata:()=>M}),M={title:`Server management`,date:`2024-01-02T00:00:00.000Z`,years:2024,group:`it`,mark:`SRV`,summary:`Deployment automation and server hardening`,category:`Infrastructure`,tech:`Apache, Tomcat, Maven, Nginx, Bash`},{title:Zi,date:Qi,years:$i,group:ea,mark:ta,summary:na,category:ra,tech:ia}=M,aa=a(`<p>Designed and implemented deployment automation and optimised custom servlet applications. Bash automation and server security hardening.</p>`);function oa(e){var t=aa();o(e,t)}var sa=e({default:()=>va,metadata:()=>N}),N={title:`Simple Asset Manager`,date:`2019-01-01T00:00:00.000Z`,years:`2019–2021`,group:`it`,mark:`SAM`,summary:`An asset manager for Blender with automatic thumbnails`,category:`Open source`,tech:`Blender, Python`,source:`https://gitlab.com/tibicen/simple-asset-manager`},{title:ca,date:la,years:ua,group:da,mark:fa,summary:pa,category:ma,tech:ha,source:ga}=N,_a=a(`<p>A Blender add-on: an asset manager with automatic thumbnail generation and directory structure. Being open source, it came with everything around the code: UX, bug reports, versioning and cross-OS troubleshooting.</p>`);function va(e){var t=_a();o(e,t)}var ya=e({default:()=>ka,metadata:()=>P}),P={title:`Site plan generator`,date:`2022-01-02T00:00:00.000Z`,years:`2022–2024`,group:`it`,mark:`3D`,summary:`A 3D site context from public GIS data and point clouds`,category:`BIM, GIS`,tech:`Python (httpx), Revit API (Python, C#), QGIS API, web API`},{title:ba,date:xa,years:Sa,group:Ca,mark:wa,summary:Ta,category:Ea,tech:Da}=P,Oa=a(`<p>A GIS engine that automatically builds 3D site plans for the start of a project: terrain, plot boundaries, neighbouring buildings and orthophoto, loaded straight into Revit in the right coordinate system. Plus algorithms for point cloud segmentation, classification and registration. More about the process in the <a href="/en/blog/001-revit-project-startup">blog post</a>.</p>`);function ka(e){var t=Oa();o(e,t)}var Aa=e({default:()=>Wa,metadata:()=>F}),F={title:`Sky Tower`,date:`2013-05-01T00:00:00.000Z`,summary:`Mixed-use skyscraper`,cover:`skytower-000.webp`,category:`Public`,location:`Wrocław, Poland`,gps:`51.0942493, 17.0191553, 17`,phase:`Construction`,office:`Studio Architektoniczne FOLD`,authors:`Dariusz Dziubiński, Mariusz Korszorsz, Irena Dzierwa, Anna Drutko, Marcin Czemplik, Tadeusz Dziuganowski, Dawid Huczyński, Agnieszka Jabłońska, Elżbieta Jabłońska, Adam Kazuro, Piotr Korejwo, Agnieszka Marcinkowska, Artur Michurski, Adam Niburski, Paweł Orłowski, Marcin Perka, Katarzyna Rycerz, Wojciech Robak, Kamil Salanyk, Wojciech Szubiński, Bartosz Szczepański, Marcin Szymański, Jakub Świerczyński, Dawid Urbaniak, Paweł Wręczycki`,area:171900,images:`skytower-000.webp, skytower-001.webp, skytower-002.webp, skytower-003.webp, skytower-004.webp, skytower-005.webp`},{title:ja,date:Ma,summary:Na,cover:Pa,category:Fa,location:Ia,gps:La,phase:Ra,office:za,authors:Ba,area:Va,images:Ha}=F,Ua=a(`<p>During my time on the project I worked on site during construction and coordinated parts of the design.</p>`);function Wa(e){var t=Ua();o(e,t)}var Ga=e({default:()=>to,metadata:()=>I}),I={title:`Small projects`,date:`2017-01-04T00:00:00.000Z`,years:`2017–2021`,group:`it`,mark:`&`,summary:`A CV from Markdown and a cleanup of the IFC importer for Blender`,category:`Hobby`,tech:`SvelteKit, Python, Blender, IfcOpenShell`},{title:Ka,date:qa,years:Ja,group:Ya,mark:Xa,summary:Za,category:Qa,tech:$a}=I,eo=a(`<p><strong>A CV from Markdown.</strong> A CV written as plain Markdown text and turned live into a document that reads well on a phone, in a browser and on paper. Also a test of the Svelte framework.</p> <p><strong>IFC importer for Blender.</strong> Cleanup and optimisation of importing IFC files into Blender as part of <a href="https://github.com/IfcOpenShell/IfcOpenShell" rel="nofollow">IfcOpenShell</a>. Today Bonsai (formerly BlenderBIM) has taken over this role.</p>`,1);function to(e){var n=eo();t(2),o(e,n)}var no=e({default:()=>po,metadata:()=>L}),L={title:`Solar Analysis`,date:`2017-01-01T00:00:00.000Z`,years:2017,group:`it`,mark:`SUN`,summary:`Daylight analysis according to Polish regulations, in Blender and Revit`,category:`Open source, analysis`,tech:`Python, bpy, PIL`},{title:ro,date:io,years:ao,group:oo,mark:so,summary:co,category:lo,tech:uo}=L,fo=a(`<p>A Blender add-on for daylight analysis of buildings and urban plans according to Polish regulations, hourly or for any period. A hybrid approach: 3D analysis combined with image processing and baked into textures. Later ported to Revit.</p>`);function po(e){var t=fo();o(e,t)}var mo=e({default:()=>To,metadata:()=>ho}),ho={title:`Spatial analysis for renewables`,date:`2023-01-01T00:00:00.000Z`,years:`2023–2026`,group:`it`,mark:`GIS`,summary:`Sites and profitability of wind farms, PV and linear infrastructure`,category:`GIS, energy`,tech:`Python (QGIS, ezdxf, laspy, plotly, scipy, sktime, skforecast), web API`},{title:go,date:_o,years:vo,group:yo,mark:bo,summary:xo,category:So,tech:Co}=ho,wo=a(`<p>Automated analysis for renewable energy projects: wind turbines, solar farms and linear infrastructure. Parametric geometry is generated from real-time and historical data (solar radiation, weather, energy prices) and used to estimate the future monthly profitability of an investment.</p>`);function To(e){var t=wo();o(e,t)}var Eo=e({default:()=>Vo,metadata:()=>R}),R={title:`Traugutta`,date:`2015-03-01T00:00:00.000Z`,summary:`Multi-family housing`,cover:`traugutta-residential-000.webp`,category:`Residential`,location:`Wrocław, Poland`,gps:`51.10327, 17.05062, 19`,phase:`Concept`,office:`R2 Studio`,officeUrl:`https://r2.pl/`,authors:`Lesław Rubik, Paulina Gęstwa, Paweł Rządkowski, Dawid Huczyński, Michał Wroński`,area:2545,images:`traugutta-residential-000.webp, traugutta-residential-001.webp, traugutta-residential-002.webp, traugutta-residential-003.webp, traugutta-residential-004.webp, traugutta-residential-005.webp, traugutta-residential-006.webp, traugutta-residential-007.webp, traugutta-residential-008.webp, traugutta-residential-009.webp, traugutta-residential-010.webp, traugutta-residential-011.webp`},{title:Do,date:Oo,summary:ko,cover:Ao,category:jo,location:Mo,gps:No,phase:Po,office:Fo,officeUrl:Io,authors:Lo,area:Ro,images:zo}=R,Bo=a(`<p>I worked on the concept of a multi-family building. Responsible for 3D visualisation, massing and facades.</p>`);function Vo(e){var t=Bo();o(e,t)}var Ho=e({default:()=>ns,metadata:()=>z}),z={title:`Tram depot`,date:`2016-03-01T00:00:00.000Z`,summary:`Multi-family housing`,cover:`zajezdnia-000.webp`,category:`Residential`,location:`Wrocław, Poland`,gps:`51.12677, 16.98276, 16`,phase:`Concept`,office:`R2 Studio`,officeUrl:`https://r2.pl/`,authors:`Lesław Rubik, Paulina Gęstwa, Paweł Rządkowski, Dawid Huczyński, Michał Wroński`,images:`zajezdnia-000.webp, zajezdnia-001.webp, zajezdnia-002.webp, zajezdnia-003.webp, zajezdnia-004.webp, zajezdnia-005.webp, zajezdnia-006.webp, zajezdnia-007.webp, zajezdnia-008.webp`},{title:Uo,date:Wo,summary:Go,cover:Ko,category:qo,location:Jo,gps:Yo,phase:Xo,office:Zo,officeUrl:Qo,authors:$o,images:es}=z,ts=a(`<p>A former tram depot on Legnicka Street. I worked on the concept of multi-family housing. Responsible for 3D visualisation, massing and facades.</p>`);function ns(e){var t=ts();o(e,t)}var rs=e({default:()=>ms,metadata:()=>B}),B={title:`A lightweight 3D scene in Three.js`,date:`2026-01-01T00:00:00.000Z`,years:2026,group:`it`,mark:`3js`,summary:`Implementation consulting: Three.js replacing the existing workflow`,category:`Web 3D`,client:`Zoovu`,tech:`Vue.js, Three.js`},{title:is,date:as,years:os,group:ss,mark:cs,summary:ls,category:us,client:ds,tech:fs}=B,ps=a(`<p>Implemented the Three.js library as a lightweight replacement for the existing 3D workflow in a Vue.js application. Optimised the processes and designed handling protocols for future 3D projects.</p>`);function ms(e){var t=ps();o(e,t)}var hs=e({default:()=>Ds,metadata:()=>V}),V={title:`Arka`,date:`2011-12-01T00:00:00.000Z`,summary:`Rewitalizacja kościoła Minorytów`,cover:`ark-000.webp`,category:`Obiekt publiczny`,location:`Brzeg, Polska`,gps:`50.86265, 17.47273, 18`,phase:`Koncepcja`,authors:`Dawid Huczyński`,images:`ark-000.webp, ark-001.webp, ark-002.webp, ark-003.webp, ark-004.webp, ark-005.webp, ark-006.webp`},{title:gs,date:_s,summary:vs,cover:ys,category:bs,location:xs,gps:Ss,phase:Cs,authors:ws,images:Ts}=V,Es=a(`<p>Projekt dyplomowy: rewitalizacja starego, niszczejącego kościoła. Pracowałem blisko z dokumentacją historyczną i wcześniejszymi projektami. „Im wyżej sklepienie kościoła, tym bliżej Boga”: pomysł polegał na wprowadzeniu widzów na górny poziom wnętrza. Parter zaaranżowałem jako ekspozycję i foyer.</p>`);function Ds(e){var t=Es();o(e,t)}var Os=e({default:()=>Us,metadata:()=>H}),H={title:`BF2`,date:`2018-12-01T00:00:00.000Z`,summary:`Część zespołu budynków wielorodzinnych`,cover:`bf2-000.webp`,category:`Mieszkaniowy`,location:`Stavanger, Norwegia`,gps:`58.88253, 5.65382, 17`,phase:`Zrealizowany`,office:`Tendra Arkitektur`,officeUrl:`http://www.tendra.is/`,authors:`Jóhann Sigurðsson, Lárus Guðmarsson, Þórarinn Malmquist, Anna Franczyk, Dawid Huczyński`,area:2818,images:`bf2-000.webp, bf2-001.webp, bf2-002.webp, bf2-003.webp`},{title:ks,date:As,summary:js,cover:Ms,category:Ns,location:Ps,gps:Fs,phase:Is,office:Ls,officeUrl:Rs,authors:zs,area:Bs,images:Vs}=H,Hs=a(`<p>Czwarty budynek zespołu 40Femti. Stoi na narożniku działki, przy rondzie, co czyni go punktem orientacyjnym całej okolicy. Przestronne mieszkania, ogrody na dachu i różnorodne układy sprawiają, że to jeden z najciekawszych i najbardziej wymagających projektów, przy jakich pracowałem.</p>`);function Us(e){var t=Hs();o(e,t)}var Ws=e({default:()=>ec,metadata:()=>U}),U={title:`Analiza danych budowlanych`,date:`2024-01-01T00:00:00.000Z`,years:`2024–2026`,group:`it`,mark:`IFC`,summary:`Modele 3D, rysunki i specyfikacje w jednej bazie danych`,category:`Dane, BIM`,tech:`Python (IfcOpenShell, OpenCV, bpy), Ollama (modele wizyjne)`},{title:Gs,date:Ks,years:qs,group:Js,mark:Ys,summary:Xs,category:Zs,tech:Qs}=U,$s=a(`<p>Projekt ujednolicenia danych z rozproszonych środowisk budowy. Dane w wielu formatach, czyli modele 3D, rysunki i specyfikacje tekstowe, zostały uporządkowane od początku do końca w centralnej bazie. Lokalne modele wizyjne pomagają odczytywać dokumentację. Interesariusze dostali dzięki temu szerokie możliwości analizy danych biznesowych.</p>`);function ec(e){var t=$s();o(e,t)}var tc=e({default:()=>hc,metadata:()=>W}),W={title:`Dąbki`,date:`2017-05-01T00:00:00.000Z`,summary:`Koncepcja ośrodka nadmorskiego z hotelem i aquaparkiem`,cover:`dabki-006.webp`,category:`Rekreacja`,location:`Dąbki, Polska`,gps:`54.378373, 16.311895, 16`,phase:`Projekt`,office:`R2 Studio`,officeUrl:`https://r2.pl/`,authors:`Lesław Rubik, Paweł Rządkowski, Paulina Gęstwa, Michał Wroński, Dawid Huczyński`,images:`dabki-000.webp, dabki-001.webp, dabki-002.webp, dabki-003.webp, dabki-004.webp, dabki-005.webp, dabki-006.webp, dabki-007.webp, dabki-008.webp, dabki-009.webp, dabki-010.webp, dabki-011.webp, dabki-012.webp, dabki-013.webp, dabki-014.webp, dabki-015.webp, dabki-016.webp, dabki-017.webp, dabki-018.webp, dabki-019.webp, dabki-020.webp, dabki-021.webp, dabki-022.webp`},{title:nc,date:rc,summary:ic,cover:ac,category:oc,location:sc,gps:cc,phase:lc,office:uc,officeUrl:dc,authors:fc,images:pc}=W,mc=a(`<p>Trzy istniejące budynki (dwa hotelowe i stołówka) zostały całkowicie przebudowane i rozbudowane. Wszystkie funkcje parterów zaprojektowano od nowa i połączono otwartym korytarzem. Część jadalna przeniesiona została do tego „korytarza”, a od frontu działki stanęły baseny i strefa spa. Brałem udział w projekcie od samego początku aż do końcowego etapu.</p>`);function hc(e){var t=mc();o(e,t)}var gc=e({default:()=>Ec,metadata:()=>G}),G={title:`DogAlone`,date:`2017-01-02T00:00:00.000Z`,years:`2017–2021`,group:`it`,mark:`DOG`,summary:`Aplikacja, która uspokaja psa zostawionego w domu`,category:`Aplikacja webowa`,tech:`JavaScript`},{title:_c,date:vc,years:yc,group:bc,mark:xc,summary:Sc,category:Cc,tech:wc}=G,Tc=a(`<p>Aplikacja webowa działająca w czasie rzeczywistym: analizuje dźwięk i rozpoznaje wycie psa po jego „odcisku” audio. Gdy pies zaczyna wyć, co jakiś czas odtwarza nagrany, uspokajający głos właściciela. Działa lokalnie, bez wysyłania dźwięku do sieci.</p>`);function Ec(e){var t=Tc();o(e,t)}var Dc=e({default:()=>Rc,metadata:()=>K}),K={title:`Football Namibia`,date:`2016-07-01T00:00:00.000Z`,summary:`Koncepcja kampusu sportowego z hotelem, internatami i boiskiem`,cover:`namibia-000.webp`,category:`Sport`,location:`Namibia`,phase:`Koncepcja`,authors:`Dawid Huczyński`,images:`namibia-000.webp, namibia-001.webp, namibia-002.webp, namibia-003.webp, namibia-004.webp`},{title:Oc,date:kc,summary:Ac,cover:jc,category:Mc,location:Nc,phase:Pc,authors:Fc,images:Ic}=K,Lc=a(`<p>Szybka koncepcja. Wczesny etap dawał dużo swobody: projekt miał przede wszystkim przyciągnąć inwestorów, więc nie miał szczególnych ograniczeń.</p>`);function Rc(e){var t=Lc();o(e,t)}var zc=e({default:()=>el,metadata:()=>q}),q={title:`High Five`,date:`2019-01-01T00:00:00.000Z`,summary:`Hala sportowa i biura miejskie`,cover:`high-five-built-01.webp`,category:`Obiekt publiczny`,location:`Stavanger, Norwegia`,gps:`58.954720, 5.700193, 17`,phase:`Zrealizowany`,office:`Tendra Arkitektur`,officeUrl:`http://www.tendra.is/`,authors:`Jóhann Sigurðsson, Dawid Huczyński, Marco Ekkel`,area:4226,images:`high-five-000.webp, high-five-built-01.webp, high-five-003.webp, high-five-built-05.webp, high-five-built-02.webp, high-five-built-03.webp, high-five-built-04.webp, high-five-built-06.webp, high-five-built-07.webp, high-five-built-08.webp, high-five-built-09.webp, high-five-004.webp, high-five-001.webp`},{title:Bc,date:Vc,summary:Hc,cover:Uc,category:Wc,location:Gc,gps:Kc,phase:qc,office:Jc,officeUrl:Yc,authors:Xc,area:Zc,images:Qc}=q,$c=a(`<p>Hala sportowa w samym centrum miasta. Na parterze znalazły się restauracja i centrum sportowe, pozostałe kondygnacje dzielą po połowie szkoła i biura miejskie. Na dachu zaprojektowaliśmy strefę rekreacji dla dzieci.</p>`);function el(e){var t=$c();o(e,t)}var tl=e({default:()=>gl,metadata:()=>J}),J={title:`Kamieńskiego`,date:`2015-04-01T00:00:00.000Z`,summary:`Koncepcja kwartału zabudowy mieszkaniowej`,cover:`kamienskiego-residential-000.webp`,category:`Mieszkaniowy`,location:`Wrocław, Polska`,gps:`51.15361, 17.04737, 16`,phase:`Koncepcja`,office:`R2 Studio`,officeUrl:`https://r2.pl/`,authors:`Lesław Rubik, Paulina Gęstwa, Marta Trzepizur, Katarzyna Jabłońska, Paweł Rządkowski, Dawid Huczyński, Michał Wroński`,area:34740,images:`kamienskiego-residential-000.webp, kamienskiego-residential-001.webp, kamienskiego-residential-002.webp, kamienskiego-residential-003.webp, kamienskiego-residential-004.webp, kamienskiego-residential-005.webp, kamienskiego-residential-006.webp`},{title:nl,date:rl,summary:il,cover:al,category:ol,location:sl,gps:cl,phase:ll,office:ul,officeUrl:dl,authors:fl,area:pl,images:ml}=J,hl=a(`<p>Pracowałem nad koncepcją narożnika kwartału miejskiego. Odpowiadałem za wizualizacje 3D, bryłę i elewacje.</p>`);function gl(e){var t=hl();o(e,t)}var _l=e({default:()=>Ol,metadata:()=>Y}),Y={title:`Detale biblioteki`,date:`2010-10-01T00:00:00.000Z`,summary:`Detale architektoniczne do projektu biblioteki`,cover:`detail-000.webp`,category:`Obiekt publiczny`,location:`Praga, Czechy`,phase:`Detal`,authors:`Dawid Huczyński`,images:`detail-000.webp, detail-001.webp, detail-002.webp, detail-003.webp, detail-004.webp, detail-005.webp`},{title:vl,date:yl,summary:bl,cover:xl,category:Sl,location:Cl,phase:wl,authors:Tl,images:El}=Y,Dl=a(`<p>Studialne opracowanie detali architektonicznych do projektu biblioteki.</p>`);function Ol(e){var t=Dl();o(e,t)}var kl=e({default:()=>Bl,metadata:()=>X}),X={title:`meshroom2blender`,date:`2017-01-03T00:00:00.000Z`,years:`2017–2021`,group:`it`,mark:`MR`,summary:`Import danych fotogrametrycznych z Meshrooma do Blendera`,category:`Open source`,tech:`Python, Blender`,source:`https://github.com/tibicen/meshroom2blender`},{title:Al,date:jl,years:Ml,group:Nl,mark:Pl,summary:Fl,category:Il,tech:Ll,source:Rl}=X,zl=a(`<p>Importer do Blendera plików danych AliceVision Meshroom, darmowego programu do fotogrametrii. Przenosi rekonstrukcję 3D ze zdjęć prosto do sceny, np. do wizualizacji albo modelowania istniejącego budynku.</p>`);function Bl(e){var t=zl();o(e,t)}var Vl=e({default:()=>$l,metadata:()=>Z}),Z={title:`Młyn`,date:`2011-03-01T00:00:00.000Z`,summary:`Teatr w starym młynie`,cover:`mlyn-000.webp`,category:`Obiekt publiczny`,location:`Brzeg, Polska`,gps:`50.86341, 17.47272, 18`,phase:`Koncepcja`,authors:`Dawid Huczyński`,images:`mlyn-000.webp, mlyn-001.webp, mlyn-002.webp, mlyn-003.webp`},{title:Hl,date:Ul,summary:Wl,cover:Gl,category:Kl,location:ql,gps:Jl,phase:Yl,authors:Xl,images:Zl}=Z,Ql=a(`<p>Rewitalizacja starego młyna na potrzeby teatru.</p>`);function $l(e){var t=Ql();o(e,t)}var eu=e({default:()=>fu,metadata:()=>Q}),Q={title:`Nafta Neo Bistro`,date:`2017-06-01T00:00:00.000Z`,summary:`Wnętrze industrialnej restauracji z otwartą kuchnią`,cover:`nafta-001.webp`,category:`Wnętrza`,location:`Wrocław, Polska`,gps:`51.081994, 17.078372, 17`,phase:`Koncepcja`,authors:`Dawid Huczyński`,images:`nafta-001.webp, nafta-002.webp, nafta-003.webp, nafta-004.webp, nafta-005.webp, nafta-006.webp, nafta-007.webp, nafta-008.webp`},{title:tu,date:nu,summary:ru,cover:iu,category:au,location:ou,gps:su,phase:cu,authors:lu,images:uu}=Q,du=a(`<p>Ludzie stojący za tym projektem byli najbardziej entuzjastycznymi klientami, jakich poznałem. Mieli mnóstwo pomysłów nie tylko na samą restaurację, ale i na jej niepowtarzalny styl: surowy, ale nowy; ekskluzywny, ale nie przytłaczający. Wchodzili w każdy detal i chcieli zrealizować go sami. Mój skromny wkład to doradztwo i pomoc przy ogólnym układzie. Przygotowałem ideę połączenia opalanego drewna z nitowaną blachą i zielenią pod sufitem. Projekt się przesunął i nie mogłem prowadzić go do końca, ale zachwyciło mnie, jak moje koncepcje stały się rzeczywistością dzięki świetnym klientom.</p>`);function fu(e){var t=du();o(e,t)}var pu=e({default:()=>Tu,metadata:()=>mu}),mu={title:`Sterownik farm fotowoltaicznych`,date:`2022-01-01T00:00:00.000Z`,years:`2022–dziś`,group:`it`,mark:`PV`,summary:`Serwis, który zatrzymuje farmy PV przy ujemnych cenach energii`,category:`Energetyka`,client:`własny projekt, rozwijany w Leysie`,tech:`Python (FastAPI, pandas, plotly, cfgrib, scikit-learn, skforecast), Nginx, JavaScript`},{title:hu,date:gu,years:_u,group:vu,mark:yu,summary:bu,category:xu,client:Su,tech:Cu}=mu,wu=a(`<p>Serwis WWW, który zbiera i analizuje dane z rynku energii, prognozy pogody (także modele numeryczne GRIB) i promieniowanie słoneczne. Co 15 minut sprawdza ceny i stan farm, a przy ujemnych cenach automatycznie zatrzymuje produkcję i wznawia ją, gdy znów się opłaca.</p> <p>Modele przewidują skoki cen energii i wahania zależne od pogody z trafnością 50–90%. System działa produkcyjnie dla kilku farm PV i jest rozwijany dalej w <a href="https://leysa.pl" rel="nofollow">Leysie</a>.</p>`,1);function Tu(e){var n=wu();t(2),o(e,n)}var Eu=e({default:()=>Lu,metadata:()=>Du}),Du={title:`Administracja serwerami`,date:`2024-01-02T00:00:00.000Z`,years:2024,group:`it`,mark:`SRV`,summary:`Automatyzacja wdrożeń i zabezpieczenie serwerów`,category:`Infrastruktura`,tech:`Apache, Tomcat, Maven, Nginx, Bash`},{title:Ou,date:ku,years:Au,group:ju,mark:Mu,summary:Nu,category:Pu,tech:Fu}=Du,Iu=a(`<p>Zaprojektowanie i wdrożenie automatyzacji wdrożeń oraz optymalizacja aplikacji serwletowych. Skrypty Bash i zabezpieczenie serwerów.</p>`);function Lu(e){var t=Iu();o(e,t)}var Ru=e({default:()=>Xu,metadata:()=>zu}),zu={title:`Simple Asset Manager`,date:`2019-01-01T00:00:00.000Z`,years:`2019–2021`,group:`it`,mark:`SAM`,summary:`Menedżer zasobów dla Blendera z automatycznymi miniaturami`,category:`Open source`,tech:`Blender, Python`,source:`https://gitlab.com/tibicen/simple-asset-manager`},{title:Bu,date:Vu,years:Hu,group:Uu,mark:Wu,summary:Gu,category:Ku,tech:qu,source:Ju}=zu,Yu=a(`<p>Dodatek do Blendera: menedżer zasobów z automatycznym generowaniem miniatur i strukturą katalogów. Projekt open source, więc obok kodu cała reszta: UX, zgłoszenia błędów, wersjonowanie i rozwiązywanie problemów na różnych systemach operacyjnych.</p>`);function Xu(e){var t=Yu();o(e,t)}var Zu=e({default:()=>cd,metadata:()=>Qu}),Qu={title:`Generator planów sytuacyjnych`,date:`2022-01-02T00:00:00.000Z`,years:`2022–2024`,group:`it`,mark:`3D`,summary:`Trójwymiarowy kontekst działki z publicznych danych GIS i chmur punktów`,category:`BIM, GIS`,tech:`Python (httpx), Revit API (Python, C#), QGIS API, web API`},{title:$u,date:ed,years:td,group:nd,mark:rd,summary:id,category:ad,tech:od}=Qu,sd=a(`<p>Silnik GIS, który automatycznie tworzy trójwymiarowe plany sytuacyjne na start projektu: teren, granice działek, budynki sąsiednie i ortofotomapę, wczytane prosto do Revita we właściwym układzie współrzędnych. Do tego algorytmy segmentacji, klasyfikacji i rejestracji chmur punktów. Więcej o samym procesie we <a href="/blog/001-revit-project-startup">wpisie na blogu</a>.</p>`);function cd(e){var t=sd();o(e,t)}var ld=e({default:()=>wd,metadata:()=>ud}),ud={title:`Sky Tower`,date:`2013-05-01T00:00:00.000Z`,summary:`Wieżowiec wielofunkcyjny`,cover:`skytower-000.webp`,category:`Obiekt publiczny`,location:`Wrocław, Polska`,gps:`51.0942493, 17.0191553, 17`,phase:`Budowa`,office:`Studio Architektoniczne FOLD`,authors:`Dariusz Dziubiński, Mariusz Korszorsz, Irena Dzierwa, Anna Drutko, Marcin Czemplik, Tadeusz Dziuganowski, Dawid Huczyński, Agnieszka Jabłońska, Elżbieta Jabłońska, Adam Kazuro, Piotr Korejwo, Agnieszka Marcinkowska, Artur Michurski, Adam Niburski, Paweł Orłowski, Marcin Perka, Katarzyna Rycerz, Wojciech Robak, Kamil Salanyk, Wojciech Szubiński, Bartosz Szczepański, Marcin Szymański, Jakub Świerczyński, Dawid Urbaniak, Paweł Wręczycki`,area:171900,images:`skytower-000.webp, skytower-001.webp, skytower-002.webp, skytower-003.webp, skytower-004.webp, skytower-005.webp`},{title:dd,date:fd,summary:pd,cover:md,category:hd,location:gd,gps:_d,phase:vd,office:yd,authors:bd,area:xd,images:Sd}=ud,Cd=a(`<p>W czasie pracy przy projekcie pracowałem na budowie w trakcie wznoszenia budynku i koordynowałem części projektu.</p>`);function wd(e){var t=Cd();o(e,t)}var Td=e({default:()=>Fd,metadata:()=>$}),$={title:`Drobne projekty`,date:`2017-01-04T00:00:00.000Z`,years:`2017–2021`,group:`it`,mark:`&`,summary:`CV z Markdowna i porządki w importerze IFC do Blendera`,category:`Hobby`,tech:`SvelteKit, Python, Blender, IfcOpenShell`},{title:Ed,date:Dd,years:Od,group:kd,mark:Ad,summary:jd,category:Md,tech:Nd}=$,Pd=a(`<p><strong>CV z Markdowna.</strong> CV pisane jako zwykły tekst w Markdownie i zamieniane na żywo w dokument czytelny na telefonie, w przeglądarce i na papierze. Przy okazji test frameworka Svelte.</p> <p><strong>Importer IFC dla Blendera.</strong> Porządki i optymalizacja importu plików IFC do Blendera w ramach <a href="https://github.com/IfcOpenShell/IfcOpenShell" rel="nofollow">IfcOpenShell</a>. Dziś tę rolę przejął Bonsai (dawniej BlenderBIM).</p>`,1);function Fd(e){var n=Pd();t(2),o(e,n)}var Id=e({default:()=>qd,metadata:()=>Ld}),Ld={title:`Solar Analysis`,date:`2017-01-01T00:00:00.000Z`,years:2017,group:`it`,mark:`SUN`,summary:`Analiza nasłonecznienia według polskich przepisów, w Blenderze i Revicie`,category:`Open source, analizy`,tech:`Python, bpy, PIL`},{title:Rd,date:zd,years:Bd,group:Vd,mark:Hd,summary:Ud,category:Wd,tech:Gd}=Ld,Kd=a(`<p>Dodatek do Blendera do analizy nasłonecznienia budynków i planów urbanistycznych według polskich przepisów, godzinowo lub dla dowolnego okresu. Podejście hybrydowe: analiza 3D połączona z przetwarzaniem obrazu i wypalana w teksturach. Później przeniesiony do Revita.</p>`);function qd(e){var t=Kd();o(e,t)}var Jd=e({default:()=>of,metadata:()=>Yd}),Yd={title:`Analizy przestrzenne pod OZE`,date:`2023-01-01T00:00:00.000Z`,years:`2023–2026`,group:`it`,mark:`GIS`,summary:`Lokalizacje i rentowność farm wiatrowych, PV i inwestycji liniowych`,category:`GIS, energetyka`,tech:`Python (QGIS, ezdxf, laspy, plotly, scipy, sktime, skforecast), web API`},{title:Xd,date:Zd,years:Qd,group:$d,mark:ef,summary:tf,category:nf,tech:rf}=Yd,af=a(`<p>Automatyzacja analiz dla projektów odnawialnych źródeł energii: turbin wiatrowych, farm fotowoltaicznych i inwestycji liniowych. Geometria parametryczna powstaje z danych bieżących i historycznych (nasłonecznienie, pogoda, ceny energii), a na jej podstawie liczona jest przyszła, miesięczna rentowność inwestycji.</p>`);function of(e){var t=af();o(e,t)}var sf=e({default:()=>Cf,metadata:()=>cf}),cf={title:`Traugutta`,date:`2015-03-01T00:00:00.000Z`,summary:`Budynek mieszkalny wielorodzinny`,cover:`traugutta-residential-000.webp`,category:`Mieszkaniowy`,location:`Wrocław, Polska`,gps:`51.10327, 17.05062, 19`,phase:`Koncepcja`,office:`R2 Studio`,officeUrl:`https://r2.pl/`,authors:`Lesław Rubik, Paulina Gęstwa, Paweł Rządkowski, Dawid Huczyński, Michał Wroński`,area:2545,images:`traugutta-residential-000.webp, traugutta-residential-001.webp, traugutta-residential-002.webp, traugutta-residential-003.webp, traugutta-residential-004.webp, traugutta-residential-005.webp, traugutta-residential-006.webp, traugutta-residential-007.webp, traugutta-residential-008.webp, traugutta-residential-009.webp, traugutta-residential-010.webp, traugutta-residential-011.webp`},{title:lf,date:uf,summary:df,cover:ff,category:pf,location:mf,gps:hf,phase:gf,office:_f,officeUrl:vf,authors:yf,area:bf,images:xf}=cf,Sf=a(`<p>Pracowałem nad koncepcją budynku wielorodzinnego. Odpowiadałem za wizualizacje 3D, bryłę i elewacje.</p>`);function Cf(e){var t=Sf();o(e,t)}var wf=e({default:()=>zf,metadata:()=>Tf}),Tf={title:`Zajezdnia`,date:`2016-03-01T00:00:00.000Z`,summary:`Budynek mieszkalny wielorodzinny`,cover:`zajezdnia-000.webp`,category:`Mieszkaniowy`,location:`Wrocław, Polska`,gps:`51.12677, 16.98276, 16`,phase:`Koncepcja`,office:`R2 Studio`,officeUrl:`https://r2.pl/`,authors:`Lesław Rubik, Paulina Gęstwa, Paweł Rządkowski, Dawid Huczyński, Michał Wroński`,images:`zajezdnia-000.webp, zajezdnia-001.webp, zajezdnia-002.webp, zajezdnia-003.webp, zajezdnia-004.webp, zajezdnia-005.webp, zajezdnia-006.webp, zajezdnia-007.webp, zajezdnia-008.webp`},{title:Ef,date:Df,summary:Of,cover:kf,category:Af,location:jf,gps:Mf,phase:Nf,office:Pf,officeUrl:Ff,authors:If,images:Lf}=Tf,Rf=a(`<p>Dawna zajezdnia tramwajowa przy ulicy Legnickiej. Pracowałem nad koncepcją zabudowy wielorodzinnej. Odpowiadałem za wizualizacje 3D, bryłę i elewacje.</p>`);function zf(e){var t=Rf();o(e,t)}var Bf=e({default:()=>Qf,metadata:()=>Vf}),Vf={title:`Lekka scena 3D w Three.js`,date:`2026-01-01T00:00:00.000Z`,years:2026,group:`it`,mark:`3js`,summary:`Konsultacja wdrożeniowa: Three.js zamiast dotychczasowego rozwiązania`,category:`Web 3D`,client:`Zoovu`,tech:`Vue.js, Three.js`},{title:Hf,date:Uf,years:Wf,group:Gf,mark:Kf,summary:qf,category:Jf,client:Yf,tech:Xf}=Vf,Zf=a(`<p>Wdrożenie biblioteki Three.js jako lekkiego zamiennika dotychczasowego rozwiązania 3D w aplikacji opartej na Vue.js. Optymalizacja procesów i zasady obsługi przyszłych projektów 3D.</p>`);function Qf(e){var t=Zf();o(e,t)}var $f=`---
title: Revit project geolocation and data scraping
date: 2022-12-27
summary: Automating project start-up in Revit. Geolocation, point clouds, site data imports and more.
authors: Dawid Huczyński
tags: [revit, architecture, point clouds, geoportal]
---

## Introduction

In this post I want to show you the kinds of data you may come across, how they can be processed, and how they can be used in the design and analysis of buildings and structures. At the end I will outline how all of this can be automated in Revit and Blender.

Public data has become more and more accessible lately. Government institutions, as well as amateur data collection and analysis, give us access to amazing resources.
All it takes is to process them, and we can create design conditions unprecedented in our industry, without much extra work.

I remember when sun analysis was done with a special ruler laid over the floor plan: a standardised practice with an enormous number of simplifications. Then we moved on to 3D sun studies, building our design in three dimensions and modelling simple masses of the neighbouring buildings. We did not necessarily check whether our software took UTC offsets into account, whether it considered elevation above sea level, whether it assumed a flat plane or the curvature of the Earth... but that may be a topic for another post.

The example above is meant to show the possibilities in front of us and how deep we can go with analysis. Of course, more complex analyses take time to enter or model the necessary data.



## DTM – a digital terrain model, but is it really?
![DEM Switzerland](/images/blog/001-dem-switzerland.webp)

We have reached the point where most geographic data is publicly available on the internet. It started with DEMs (digital elevation models): satellite imagery describing terrain height. When I first became interested, the scales were rather coarse, since one pixel covered about 30 × 30 m of terrain. Later it went down to 10 × 10 m. From such data you could already extract quite an interesting simplification of the terrain, at no extra cost.

Examples:

- ALOS World 3D - 30 m
- NASADEM Global Digital Elevation Model
- USGS 1/3 arc-second Digital Elevation Model - 10 m resolution

At some point databases appeared where you could query the elevation above sea level, such as:

- https://www.opentopography.org/
- https://open-elevation.com/
- or even the Google Maps API with elevation data.

Today you can find DEMs with a resolution of 1 m. A good example are the elevation packages published by Poland, covering the whole country with points spaced every 1 m. DEMs come in a couple of kinds:

- raster
- grid

The first is, for example, a .tiff image in which the shade of grey defines the height. The limit here is the size of one pixel (e.g. 30 m, 10 m, 1 m). Processing such data calls for free software such as **QGIS**. QGIS can load such a tiff in the right coordinates, clip it to the extent we need and then generate, for example, contour lines or a point grid from the raster. A grid is, for example, a text file with a list of numbers defining the height above sea level on a 1 m grid.
To use it in Revit, for example, you need to convert the data to a CSV file with X, Y and Z columns. That lets you import it as a toposurface.

But is this really the limit of detail? Of course not. 😉

## Point clouds
The next level of detail, in my view, is raw survey data. In the past this meant crowds of surveyors and advanced triangulation technology. Today it is still based on triangulation, only the amount of data has grown exponentially. I am talking about point clouds.
Here we can check accuracy with a margin of error of a few centimetres or, for airborne lidar, taking the Polish geoportal as an example, a density from 4 points/m² up to 20 points/m² in larger cities, with a mean height error of around 10 cm.

Again I will use the example of the Polish ministry, which publishes survey data (lidar) in the LAS format.
A point cloud is something like an image in three dimensions. Instead of pixels we have points in 3D. Each point can carry additional attributes, such as:

- colour
- classification – is it a building, low vegetation, high vegetation, ground, a car, a street lamp...
- accuracy – how precise the measurement of the point was
- intensity – the intensity of the reflected lidar beam
- and plenty of other direct data
- plus indirect data from analysing points and their relations, e.g.:
  - are the points on one plane – could it be a wall?
  - do the points form a group without any plane – could it be a tree?

That is a huge amount of data to work with. The Polish geoportal calls it survey data; I will use the general term, point cloud.
Point clouds can be divided in all sorts of ways; I will focus on a practical split:

- lidar point clouds
- photogrammetry point clouds

and another one:

- classified point clouds
- unclassified point clouds

Finally, clouds can also be:

- registered,
- unregistered.

If you hear the term, it mostly means placing the cloud in specific horizontal and vertical coordinate systems and cleaning it of gaps and erroneous measurements. In short: geolocation.

The Polish geoportal usually provides fully merged survey data with the basic information we need:

- geolocation
- colour
- classification

Thanks to this we can quickly and easily refine such a cloud for design purposes:

- Filter all buildings onto a separate layer, to measure the neighbours.
- Filter the ground and generate 3D terrain from it (e.g. a Revit toposurface).
- Filter high vegetation, process the data and find the tree tops (and therefore the tree locations).
- With free tools, filter all points within our plot boundary and remove everything but the ground points, leaving the rest of the cloud untouched.

The perfect tool for these tasks is **CloudCompare**. It opens point clouds while keeping their reference system, and it can clean, analyse and process the data. It also has basic point classification. Of its strengths, the ones I find most useful in the design process are:

- classifying ground points (if there is no classification)
- projecting colours from satellite images onto the point cloud (if colours are missing)
- registering point clouds against each other

These steps let us split the point cloud into light packages that can then be linked into a Revit file, with full control over visibility. Unfortunately you cannot avoid the paid Autodesk ReCap here: it opens \`.las\` files and saves them as \`.rcp\`, which Revit can load.

With the cloud prepared this way we can load it into our project in the right coordinates and be sure the points sit exactly on the terrain. From experience I can say such a cloud works great at the concept stage and for designing in the context of **real (!!!)** site features: vegetation, watercourses, buildings, roads, slopes, sculptures (no point listing them, it is literally everything). It helps to detail and model the roofs of neighbouring buildings, or to check the actual heights of parapets and buildings. It also works great for visualisation, for generating the real terrain and for analysing earthworks.


## Plot boundaries
Different countries have different public databases. Examples of such services:

- WMS (Web Map Service), WMTS (Web Map Tile Service),
- WFS (Web Feature Service),
- ATOM,
- INSPIRE (Infrastructure for Spatial Information in Europe).

These are standardised services for sharing geographic data such as orthophoto maps, boundaries, local zoning plans and much more.

The Polish geoportal lets you download the BDOT10k database (topographic objects database), from which, using our familiar QGIS, we can extract plot boundaries, outlines of existing buildings, road centrelines and much more, such as bus stop locations, land use types etc. Such data can then be imported into 2D or 3D design software.

QGIS lets us filter it visually and place it in the right coordinates:
so-called reprojection from the national coordinate system to the one the project is drawn in. More on that in the next section.
[This link](https://www.geoportal.gov.pl/uslugi/usluga-przegladania-wms) shows which WMS services geoportal.gov.pl offers.



## Geolocation and EPSG codes
![Map of Poland EPSG 3857](/images/blog/001-poland-epsg.gif "EPSG 3857")
This is where we should have started, but it is always better to start with something more spectacular. EPSG, however, is the piece of the puzzle that ties everything together. Knowing it makes the work easier, eliminates basic mistakes and, with almost no effort, introduces the first process automation.

EPSG codes were created to standardise the names of coordinate systems. They cover both projected (planar) and geographic coordinate systems.
In Poland we have two reference frames: the older \`PL-ETRF89\` and the current \`PL-ETRF2000\`.

The Polish planar coordinate systems with their EPSG codes are:

| EPSG | System | Central meridian |
| --- | --- | --- |
| EPSG:2180 | PL-1992 | 19° (whole country) |
| EPSG:2176 | PL-2000 zone 5 | 15° |
| EPSG:2177 | PL-2000 zone 6 | 18° |
| EPSG:2178 | PL-2000 zone 7 | 21° |
| EPSG:2179 | PL-2000 zone 8 | 24° |


Knowing which system the plot, or our data, is in lets us merge the data without trouble. **QGIS** is again the best tool for analysing and processing it. It often happens that the point cloud comes in the national system while the project is set up in local coordinates, e.g. zone 6.

## Building models
For buildings we have a few options for generating 3D models.
The first, easier but time-consuming option is to find existing models and place them in 3D on the building footprints obtained from WFS services. It is an obvious option, but worth mentioning, because sometimes you come across very accurate models.

The second option is to get the data from the geoportal. Buildings can be downloaded as GML at LOD1. To use them in Revit or another program, they have to be converted to a native format: for Revit preferably a \`MASS FAMILY\`, for Blender e.g. \`OBJ\`. A GML file has an XML structure, so we can read it in Python with an XML parser. It would look like this:

\`\`\`python
# python
import numpy as np
from xml.etree import ElementTree as et

FILEPATH = "file.gml"


def unflatten(coords, s=1):
    """gets numbers list
    returns array of points (XYZ)"""
    verts = np.array([(coords[i] * s, coords[i + 1] * s, coords[i + 2] * s) for i in range(0, len(coords), 3)])
    return verts


tree = et.parse(FILEPATH)
polygons = tree.findall(".//{http://www.opengis.net/gml}Polygon")
verts = []
faces = []
for i, p in enumerate(polygons):
    poslist = p.find(".//{http://www.opengis.net/gml}posList")
    text = poslist.text
    coords = [float(i) for i in text.split(" ")]
    points = unflatten(coords)
    start_idx = len(verts)
    end_idx = start_idx + len(points)

    verts.extend(points)
    faces.append([i for i in range(start_idx, end_idx)])

\`\`\`
This gives us a set of vertices and polygons (groups of vertices forming single polygons). From this format it is very easy to generate an object in Blender, save it as OBJ and import it into Revit. Or, with the Revit API, to model MASS objects from this data automatically. The advantage of this solution is that the buildings are already located horizontally and vertically.

---
> ### The large-distance problem
>
> There is one problem well known among 3D artists. The further a vertex is from the point [0,0,0], the more “approximate” its display becomes. It comes from how computers handle decimal numbers. A computer always approximates decimals in its own representation, so it can happen that when comparing 0.003 == 0.003, the numbers turn out different, because to the computer 0.003 = 0.003000000000000001. The solution would be to read the location of the \`internal origin\` or \`project base point\` and move all vertices by that vector, so they are placed relative to a nearby insertion point rather than through **shared coordinates**.

---

The last solution I would suggest requires a bit more technical knowledge, but it is the most accurate: generating the building geometry from the point cloud. Plenty of spatial analysis algorithms come to help here, but in short we can split it into the following tasks:

- extract the points classified as buildings from the point cloud,
- analyse which points belong to which planes and group them by plane,
- with planes and their points, find the boundary points (lying on the edges of each group); this gives approximate edges of the object and its planes,
- remove points that lie on one straight line or within a small distance of it; what remains are the vertices,
- merge vertices that lie close to each other, number them and assign them to planes,
- the final result gives the same sets of vertices and polygons as the script above.

This option gives much more detailed buildings. If we need more detail, we can use lidar, a drone, a camera or a smartphone to generate additional point clouds, for example with the free Meshroom (photogrammetry turns photos from cameras and smartphones into point clouds). We can then merge our point cloud with the one from the geoportal, densifying it and filling the gaps. Aligning a cloud without coordinates with a cloud that has them is called registration. It also involves cleaning the cloud of erroneous measurements.


## Satellite images
Would you believe me if I told you there is an image format that stores the image's location in coordinates? Imagine you get a local zoning plan, a scanned map from the investor, a satellite image of the plot or any other map. You drop it into your software and it always lands exactly in the right place? Exactly to scale? Without any distortion?

Yes, it is possible. Not always and not in every program, but geolocation can be stored for an image, for example in PDF or TIFF files. Such TIFF files are called GeoTIFF.

When you download a satellite image from a government portal, it usually already has its coordinates and coordinate system set. Drop such a TIFF into QGIS, set the system it was saved in (e.g. EPSG:2180), and it lands right in place. No distortion, no shift. Perfect.

The second strength of satellite images is the data. Colour may be useful to us: for a point cloud without colour data, we can project the colours of a satellite image onto it. CloudCompare can do that, for example.


## Joining it together and automating
The most interesting part of the puzzle is that most of these tasks can be reduced to a single button, e.g. in Revit. We only need to enter a few parameters:

- location (coordinates)
- radius (how far around to fetch data)
- optionally a polygon/region with the plot boundary

The script does the rest: it fetches the terrain, point cloud, plot boundaries, buildings and orthophoto map and places them in the right coordinate system. The designer gets a ready site context in minutes instead of days.
`,ep=`---
title: Deterministic project environments
date: 2026-10-15
summary: A proposal to bring good software engineering practices into the construction industry by creating project environments (so-called config packages) automatically and deterministically, based on geolocation and survey data of the site.
authors: Dawid Huczyński
tags: [AEC, BIM, CAD, geolocation, automation, interoperability]
---

I believe this is a very important part of the early stage of the design process, especially when setting up projects and the tools we use throughout it. Few people in the industry – apart from surveyors, perhaps – make use of the full location information of a building or project.

I often come across projects that are set up in different environments – e.g. Revit, CAD, Tekla – followed by a struggle
to export and merge these different models into one coherent project. The models vary: sometimes flat, sometimes
three-dimensional. Setting up a project automatically has the advantage of creating the environment deterministically. Just like
programmers who build reproducible, deterministic environments for themselves, designers could create
such environments too, based on a minimal amount of data, for example information about the site.

This approach makes it possible to set up the project automatically in any environment – be it a CAD program or something else. It
lets you define the plot boundaries and pull information about the surrounding utility networks. All of it should be coordinated both
in the planar coordinate system and in geolocation. As a result, all project participants share the same standard
starting project in a common space to work on.

This used to be handled with a so-called coordination file – an empty file with a cube or a coordination cone
that defined the location of the projects, and everyone had to align with that one object.

Today I think our industry should build its environments deterministically, by distributing configuration packages (*config packages*) that set up the whole design environment, just as it is done in the software world. Such a package could contain basic information about the plot, the location of the starting point, grids and levels. It does not need all of them, but such a file would allow, for example, recreating the initial settings for every participant in the process.

Using the TERYT identifier alone, it is already possible to download:

- plot boundaries,
- high-accuracy terrain levels,
- surroundings and greenery,
- neighbouring buildings,
- overhead power lines,
- applicable zoning plans,
- various zones (such as NATURA 2000 or flood risk areas),
- flat drawings of utility networks and installations.

And that is not all; it has been possible since 2022, when I was building such tools for Revit, Blender and CAD.
Today, as tools keep evolving, ideas like these are within arm's reach. All it takes is knowledge and ideas.
`,tp=`---
title: TERYT – One number that revolutionises information exchange
date: 2026-10-19
summary: How the unique TERYT identifier eliminates repetitive work and streamlines automation in the construction and design industry.
authors: Dawid Huczyński
tags: [bim, construction, teryt, automation, gis]
---

## The problem

Efficient information exchange remains a constant challenge in construction and design. The simplest, and at the same time extremely common, example of this problem is pinpointing a plot of land.

The standard process usually looks the same: we browse the land and building registry maps, select the voivodeship, county, municipality, precinct and town, and finally type in the plot number by hand to find the exact spot. Mistakes are easy. A moment of inattention is enough to end up in a neighbouring precinct with a plot of the same number.

Worse still, we do an enormous amount of repetitive work this way. Then another person joins the construction process – a discipline designer, the general contractor, a coordinator – and each of them repeats exactly the same task from scratch, searching for the location in their own systems and tools.

There is, however, one simple solution that is widely available and can radically simplify the work of everyone involved: **the TERYT number**.

## TERYT

<p style="font-size:2em;text-align:center"><strong style="color:#af3029">22</strong><strong style="color:#ad8301">61</strong><strong style="color:#66800b">01</strong>_<strong style="color:#24837b">1</strong>.<strong style="color:#205ea6">0303</strong>.<strong style="color:#5e409d">769/16</strong></p>
<p style="text-align:center;"><span style="color:#af3029">voivodeship</span> · <span style="color:#ad8301">county</span> · <span style="color:#66800b">municipality</span> _ <span style="color:#24837b">type</span> . <span style="color:#205ea6">precinct</span> . <span style="color:#5e409d">plot no.</span></p><!----> <!---->

TERYT is a nationwide unique identifier used in Poland. A single string of digits holds complete, unambiguous location information: from the voivodeship and municipality, through the precinct, down to the specific plot.

Using the TERYT number gives us a huge advantage and opens the door to automation:

- **Instant search:** Just paste the identifier into, for example, Geoportal to jump straight to the right location without clicking through administrative levels by hand.
- **API integration:** Using the Geoportal API, we can automatically download plot outlines from the TERYT number alone (or a list of them).
- **Easy data conversion:** The downloaded spatial data can easily be exported to any format – processed for CAD or loaded directly into Revit.

Suddenly a process that required repeated searching and clicking through maps comes down to handling a single identifier. If knowledge of how to use TERYT in practice were more widespread in the construction industry, everyone's work would be much easier.
`,np=`---
title: Voice notes
date: 2026-10-13
summary: How do you pour out the knowledge sitting inside you? On how LLMs help us write down our ideas.
authors: Dawid Huczyński
tags: [speech-to-text, LLM, local, AI]
---

## The problem

Many of us probably struggle with a flood of ideas that we jot down on paper and then lose. Or we already have
a full sketch of an idea in our head, but no time to flesh it out or carry it through among all our duties.

I had a few unfinished topics:

1. My website, which I knew how I wanted to change, but I had no time, because it was a purely creative project with no profit potential.
2. Becoming more active in the industry and sharing with a wider audience the knowledge I share with friends and people around me. Because I love sharing knowledge, and I think "know-how" is worth sharing, since it is not a big competitive advantage. For me, the advantage is knowing how to use it.
3. Growing my company's marketing.

Today I want to tackle topic no. 2. In 2022 I started writing blog articles. Plenty of knowledge. I even had everything
prepared and uploaded to the site, but it was missing the final polish. Filling in the substance. Fixing mistakes.
Translating into two languages. And so the topic got stuck. Because there was always something more pressing.

Today, on the day of writing this article, I have already managed to write three. And I am writing this one purely for the joy of writing. I used
AI for it, but not the way you think. Every sentence is still my own.

## The idea

The idea for this process came after I read a post by Ilya Sutskever saying he had started dictating tasks by voice to his
agents/LLMs/AI. He described using simple speech-to-text to turn speech into text. And the most important thing
about it was that he did not worry about formatting. He simply poured out all his thoughts, even broken
sentences. He poured out his whole process, knowing the LLM would sort it out and understand it anyway. That is when it clicked for me.

## The solution is TTS + LLM

Let me sketch my current process. While driving the kids or coming back from work, I start recording and make voice notes on
a specific topic. I drop the note into a speech-to-text tool such as \`Orukeet\` or \`Parakeet\`. They work great with
Polish. What's more, I use the simplest models. They spit out a transcript – with errors, with jumbled
words. It is my thoughts poured out without any filter. Then I bring in the LLM. I have a prompt that tells it to stick to
my text, but to:

- fix style and punctuation,
- fix unclear words that should be different (given the context),
- merge places where I covered the same point twice into one,
- split the text into coherent paragraphs and, if needed, regroup sentences that belong in another paragraph (it is my
stream of consciousness; sometimes I jump between topics or come back to an earlier one).

And that is how I get a nicely composed blog post. I embellish it with images and charts myself.

**But that's not all...**

Google had just made skills available, so I created a skill that adds
metadata such as the title, tags and "summary" to the article, in the right format for my blog.

**But that's not all!!!**

I already had a free app that used \`Orukeet\` to create notes, but I still had to move them over to Gemini....
So I asked an agent to build me a transcription app with \`Orukeet\` that formats the result straight away with a given prompt.
The agent delivered it in 5 minutes. A ready app in \`Rust\` and \`Tauri\`, using \`Orukeet\` and \`gemma4:e4b\`, a small model from
Google that runs entirely locally. It works perfectly.

I won't even share it here, because I think each of you can already build it on your own.
I use it every day now.
`,rp=`---
title: Geolokalizacja projektu w Revicie i pozyskiwanie danych
date: 2022-12-27
summary: Automatyzacja startu projektu w Revicie. Geolokalizacja, chmury punktów, import danych o terenie i więcej.
authors: Dawid Huczyński
tags: [revit, architecture, point clouds, geoportal]
---

## Wprowadzenie

W tym poście postaram się wam przybliżyć dane z jakimi możecie mieć styczność, możliwości ich przetwarzania i wykorzystania w projektowaniu budynków, budowli oraz ich analiz. Na koniec pokażę zarys jak można to zautomatyzować w Revicie i Blenderze.

Ostatnimi czasy dane publiczne stają się coraz bardziej dostępne. Instytucje rządowe, jak i amatorskie gromadzenie i analiza danych daje nam dostęp do niesamowitych zasobów.
Wystarczy je przetworzyć by móc stworzyć warunki do projektowania niespotykane dotychczas w naszej branży, bez większych nakładów pracy.

Pamiętam czasy, gdy analiza słońca była robiona za pomocą specjalnej linijki nakładanej na rzut. Unormowana praktyka posiadająca niesamowitą ilość uproszczeń. Potem przeszliśmy na analizy słońca 3D, tworząc nasz projekt w trzecim wymiarze i modelując proste bryły sąsiadów. Niekoniecznie sprawdzaliśmy czy program w którym pracujemy bierze pod uwagę odchylenia względem przesunięć UTC, czy bierze pod uwagę wysokość nad poziomem morza, czy liczy uproszczenie płaszczyznowe, czy krzywizny ziemi... ale na to może będzie inny post.

Powyższy przykład miał pokazać, jakie możliwości stoją przed nami i jak szczegółowo możemy wchodzić w analizy. Oczywiście, bardziej skomplikowane analizy wiążą się z czasem na wprowadzenie/wymodelowanie potrzebnych danych.

## NMT, czyli Numeryczny Model Terenu, ale czy na pewno?

![DEM Switzerland](/images/blog/001-dem-switzerland.webp)

Jesteśmy na etapie, kiedy większość danych geograficznych jest publicznie dostępna w internecie. Zaczęło się od DEM-ów (Digital Elevation Model), czyli zobrazowań satelitarnych opisujących wysokość terenu. Kiedy zaczynałem się tym interesować były to skale dosyć trudne, ponieważ jeden piksel obejmował ok. 30 × 30 m terenu. Potem zeszło to do 10 × 10 m. Z takich informacji można było już wyciągać całkiem ciekawe uproszczenie terenu, bez dodatkowych opłat.
Przykłady:

- ALOS World 3D - 30m
- NASADEM Global Digital Elevation Model
- USGS 1/3 arc-second Digital Elevation Model - 10m szczegółowości

W pewnym momencie zaczęły powstawać bazy danych, gdzie za pomocą zapytań można było pobierać wysokość nad poziomem morza. Takie strony jak:

- <https://www.opentopography.org/>
- <https://open-elevation.com/>
- czy nawet api google maps z informacjami o wysokości terenu npm.

Obecnie DEM-y można spotkać nawet w szczegółowości co 1m. Pozytywnym przykładem są udostępnione przez Polskę paczki wysokościowe pokrywające całe terytorium Polski z punktami rozstawionymi co 1m. DEM-y można podzielić na parę rodzajów:

- raster
- grid

Pierwszy to np. obrazy .tiff gdzie odcień szarości definiuje wysokość. Ograniczeniem jest tu wymiar jednego pixela (np. 30m, 10m, 1m). Przetwarzanie takich danych wymaga np. darmowego oprogramowania jak **QGIS**. QGIS pozwala załadować takiego tiffa w odpowiednich koordynatach, przyciąć go do potrzebnych nam zakresów, a potem wygenerować z danych rastrowych np. poziomice, siatkę punktów. Grid to np. plik tekstowy z listą liczb, które definiują wysokość nad poziomem morza na siatce co 1m.
Żeby użyć tego np. w Revicie trzeba przekonwertować takie dane na plik csv z kolumnami X, Y, Z. To pozwoli nam zaimportować je jako toposurface.

Ale czy to na pewno jest już granica szczegółowości? Oczywiście, że nie. 😉

## Chmura punktów

Kolejnym poziomem szczegółowości w moim przekonaniu są surowe dane pomiarowe. Wcześniej były to rzesze geodetów i zaawansowane technologie triangulacji. Teraz też opiera się to o triangulację. Tylko ilość danych wzrosła wykładniczo. Mowa o chmurach punktów.
Tutaj możemy sprawdzać dokładność z marginesem błędu do paru centymetrów, lub jak kto woli przy danych lidar z drona lotniczego to na przykładzie geoportalu, który mówi o szczegółowości od 4 punktów/m2 do aż 20 punktów /m2 w przypadku większych miast, przy średnim błędzie wysokości np. do 10cm.

Tutaj znów podam przykład polskiego ministerstwa, które udostępnia dane pomiarowe (lidar) w formacie las.
Chmura punktów to coś na kształt obrazka w 3 wymiarach. Zamiast pixeli mamy punkty w 3D. Każdy z punktów może mieć dodatkowe parametry, jak:

- kolor
- klasyfikację - czy jest to budynek, zieleń niska, wysoka, teren, samochód, lampa uliczna...
- dokładność - jak precyzyjny był pomiar tego punktu
- intensywność - intensywność odbicia wiązki lidar
- oraz wiele innych danych bezpośrednich
- dodatkowo dane pośrednie wynikające z analizy punktów i ich relacji względem siebie np.:
  - czy punkty są na jednej płaszczyźnie - może być to ściana?
  - czy punkty nie mają żadnej płaszczyzny a są w grupie - może to drzewo?

To już jest olbrzymia ilość danych z której możemy korzystać. W geoportalu nazywa się to Dane Pomiarowe, ja będę używał uogólnienia, czyli chmura punktów.
Chmury możemy podzielić, na przeróżny sposób i w różne grupy, ja skupię się na praktycznym podziale:

- chmury punktów lidar
- chmury punktów fotogrametrii

oraz innym:

- chmury punktów sklasyfikowane
- chmury punktów niesklasyfikowane

Na koniec można dodać, że chmury mogą też być:

- zarejestrowane,
- niezarejestrowane.

Jeżeli słyszycie to pojęcie, to głównie chodzi o ustawienie takiej chmury w konkretnych układach współrzędnych pionowych i poziomych, oraz wyczyszczenie i poprawienie ich z niedociągnięć i błędnych pomiarów. Czyli w uproszczeniu geolokalizacja.

Polski geoportal najczęściej dostarcza nam w pełni scalone dane pomiarowe zawierające podstawowe potrzebne informacje:

- geolokalizację
- kolor
- klasyfikację

Dzięki temu możemy łatwo i szybko dopracować taką chmurę do potrzeb projektowych.

- Wyfiltrować wszystkie budynki i wrzucić je na osobną warstwę, do pomiarów sąsiadów
- Wyfiltrować teren i wygenerować z niego teren 3D (np. revitową toposurface)
- Wyfiltrować zieleń wysoką, przetworzyć dane i sprawdzić, gdzie są wierzchołki drzew (a co za tym idzie, ich lokalizację)
- Za pomocą darmowych narzędzi możemy wyfiltrować wszystkie punkty leżące w granicach naszej działki i usunąć z niej wszystko poza punktami terenu, resztę chmury zostawiając w spokoju.

Do tych zadań idealnie nadaje się narzędzie **CloudCompare**. Potrafi otwierać chmury punktów z zachowaniem układu odniesienia, czyścić, analizować i przetwarzać dane. Dodatkowo ma podstawowe możliwości klasyfikacji punktów. Z zalet tego programu, które przydają się w procesie projektowym wymieniłbym głównie:

- możliwość klasyfikacji punktów terenu (jeżeli nie ma klasyfikacji)
- możliwość nakładania kolorów ze zdjęć satelitarnych na chmurę punktów (jeżeli brakuje kolorów)
- rejestrację chmur punktów względem siebie

Takie ruchy pozwolą nam podzielić chmurę punktów na lekkie paczki, które można potem podlinkować w pliku Revitowym i mieć kontrolę nad widocznością wszystkiego. Tutaj niestety nie obejdzie się bez płatnego programu Autodesk Recap, który otwiera pliki \`.las\` i zapisuje je do formatu \`.rcp\`, który można podczytać w Revicie.

Z tak załadowaną chmurą, możemy ją podczytać w odpowiednich koordynatach do naszego projektu i możemy być pewni, że punkty siedzą idealnie w terenie. Z praktyki mogę powiedzieć, że taka chmura świetnie się sprawdza na etapie koncepcji i projektowaniu w kontekście terenu z **rzeczywistymi (!!!)** obiektami terenu jak zieleń, cieki, budynki, drogi, wzniesienia, rzeźby (nie ma co wymieniać, bo to jest dosłownie wszystko). Przydaje się do uszczegóławiania i modelowania dachów budynków sąsiednich, lub sprawdzania rzeczywistej wysokości attyk i wysokości. Świetnie się sprawdza również w przypadku wizualizacji. Generowania rzeczywistego terenu i analizy wykopów mas ziemnych.

## Granice działek

Różne kraje mają różne bazy dostępnych publicznie danych. Jako przykład można podać usługi:

- WMS (Web Map Service) WMTS (Web Map Tile Service),
- WFS (Web Feature Service),
- ATOM,
- INSPIRE (Infrastructure for Spatial Information in Europe).

Są to ujednolicone usługi udostępniania danych geograficznych jak ortofotomapy, granice, plany miejscowe i wiele innych.

Polski Geoportal pozwala na pobranie bazy BDOT10k (Baza Danych Obiektów Topograficznych), z których za pomocą znanego nam QGIS możemy wyciągnąć np. granice działek, lub obrysy istniejących budynków, osie dróg oraz wiele innych informacji, jak punkty lokalizacji przystanków, rodzaje terenów etc. Takie dane możemy potem zaimportować do programów projektowych 2D lub 3D.

QGIS pozwala nam to wizualnie wyfiltrować oraz ustawić w odpowiednich koordynatach.
Tzw. reprojekcja z ogólnopolskiego układu współrzędnych na układ, w którym projekt jest opracowywany. A o tym w następnym podpunkcie.
Pod [tym linkiem](https://www.geoportal.gov.pl/uslugi/usluga-przegladania-wms) widać jakie usługi są dostępne w ramach WMS geoportalu.pl

## Geolokalizacja i numery EPSG

![Map of Poland EPSG 3857](/images/blog/001-poland-epsg.gif "EPSG 3857")
Od tego tematu powinniśmy zacząć, ale zawsze lepiej zacząć od czegoś bardziej efektownego. EPSG natomiast to element układanki, który połączy wszystko w całość. Znajomość tego pojęcia ułatwi nam pracę, wyeliminuje podstawowe błędy i przy prawie zerowym nakładzie pracy wprowadzi pierwszą automatyzację procesów.

Kody EPSG powstały w celu standaryzacji nazewnictwa układów współrzędnych. W te kody wchodzą układy współrzędnych prostokątnych płaskich (rzutowania) jak i geograficznych.
W Polsce mamy dwa układy odniesienia: starszy \`PL-ETRF89\` i obowiązujący dziś \`PL-ETRF2000\`.

Układy współrzędnych płaskich prostokątnych razem z numerami EPSG to:

| EPSG | Układ | Południk osiowy |
| --- | --- | --- |
| EPSG:2180 | PL-1992 | 19° (cała Polska) |
| EPSG:2176 | PL-2000 strefa 5 | 15° |
| EPSG:2177 | PL-2000 strefa 6 | 18° |
| EPSG:2178 | PL-2000 strefa 7 | 21° |
| EPSG:2179 | PL-2000 strefa 8 | 24° |

Wiedza o tym, w jakim układzie znajduje się działka, lub w jakim układzie mamy dane pozwoli nam w bezproblemowy sposób scalić takie dane. Do analizy i przetwarzania takich danych też najlepiej sprawdzi się **QGIS**. Często zdarzy się, że chmura punktów dostarczana jest w układzie ogólnopolskim, a projekt ustawiony jest w koordynatach szczegółowych np. strefy 6.

## Modele Budynków

W temacie budynków będziemy mieli parę opcji generowania modeli 3D.
Pierwsza, łatwiejsza, ale czasochłonna opcja, to znalezienie istniejących modeli i ustawianie ich w 3D do granic budynków pozyskanych z usług WFS. To oczywista opcja, ale warto ją wymienić, bo czasem można natknąć się na bardzo dokładne modele obiektów.

Drugą opcją jest pozyskanie danych z geoportalu. Budynki można pobrać w formacie GML w szczegółowości LOD1. Aby móc je wykorzystać w Revicie lub innym programie trzeba je przerobić na natywny format. Dla Revita będzie to najlepiej \`MASS FAMILY\`. Dla Blendera np. \`OBJ\`. Plik GML ma strukturę XML, więc możemy go odczytać w Pythonie parserem XML. Wyglądałoby to tak:

\`\`\`python
# python
import numpy as np
from xml.etree import ElementTree as et

FILEPATH = "file.gml"


def unflatten(coords, s=1):
    """gets numbers list
    returns array of points (XYZ)"""
    verts = np.array([(coords[i] * s, coords[i + 1] * s, coords[i + 2] * s) for i in range(0, len(coords), 3)])
    return verts


tree = et.parse(FILEPATH)
polygons = tree.findall(".//{http://www.opengis.net/gml}Polygon")
verts = []
faces = []
for i, p in enumerate(polygons):
    poslist = p.find(".//{http://www.opengis.net/gml}posList")
    text = poslist.text
    coords = [float(i) for i in text.split(" ")]
    points = unflatten(coords)
    start_idx = len(verts)
    end_idx = start_idx + len(points)

    verts.extend(points)
    faces.append([i for i in range(start_idx, end_idx)])

\`\`\`

Daje nam to zbiór wierzchołków i poligonów (grupy wierzchołków które tworzą pojedyncze poligony). Z takiego formatu bardzo łatwo już wygenerować obiekt w Blenderze, zapisać jako OBJ i zaimportować do Revita. Lub za pomocą Revit API automatycznie wymodelować obiekty MASS za pomocą tych danych. Plusem tego rozwiązania jest to, że takie budynki są już zlokalizowane w układzie poziomym i pionowym.

---

> ### Problem dalekich odległości
>
> Pojawia się jeden problem dosyć znany w środowiskach grafików 3D. Im dalej wierzchołek jest położony od punktu [0,0,0], tym jego wyświetlanie zaczyna być coraz bardziej “przybliżone”. Jest to problem radzenia sobie komputerów z liczbami po przecinku. Komputer zawsze uogólnia liczby po przecinku do swojej interpretacji dlatego czasami może się zdarzyć, że np. porównując liczby 0,003 == 0,003 okaże się, że są różne, ponieważ dla komputera 0,003 = 0,003000000000000001. Rozwiązaniem tego problemu byłoby pobranie informacji o lokalizacji \`internal origin\` lub \`project base point\` i przesunięcie wszystkich wierzchołków o dany wektor, aby wstawiały się nie poprzez **shared coordinates**, a poprzez bliższy punkt wstawienia.

---

Ostatnie rozwiązanie, jakie mógłbym zaproponować wymaga trochę więcej wiedzy technicznej, ale jest najdokładniejsze. Geometrię budynków moglibyśmy wygenerować z chmury punktów. Na pomoc przychodzi tutaj sporo algorytmów do analiz przestrzennych, ale w skrócie myślowym możemy to rozdzielić na poniższe zadania:

- wydzielamy z chmury punktów punkty klasyfikowane jako budynki.
- analizujemy, które punkty należą do jakich płaszczyzn, i dzielimy je na grupy według płaszczyzn,
- mając płaszczyzny i punkty należące do płaszczyzn wyszukujemy punkty graniczne (leżące na krawędziach każdej z grup). Dzięki temu mamy przybliżone krawędzie danego obiektu i płaszczyzny.
- czyścimy punkty, które leżą na jednej prostej lub w jakiejś małej odległości od niej. Zostają nam wtedy wierzchołki
- łączymy wierzchołki, które leżą blisko siebie, nadajemy im numer i przypisujemy do płaszczyzn.
- finalny wynik daje nam te same zbiory wierzchołków i poligonów jak we wcześniejszym skrypcie.

Ta opcja daje nam dużo bardziej szczegółowe budynki. Jeżeli brakuje nam szczegółowości, wówczas możemy użyć lidaru, drona, aparatu lub smartfonu, aby wygenerować dodatkowe chmury punktów za pomocą np. darmowego programu Meshroom (fotogrametria to przetwarzanie zdjęć z aparatów i smartfonów na chmurę punktów). Mając chmurę punktów możemy ją połączyć z chmurą dostarczoną z geoportalu, zagęszczając dokładność i uzupełniając braki. Takie połączenie chmury bez koordynatów z chmurą z koordynatami nazywamy rejestracją chmury. Łączy się to też z wyczyszczeniem takiej chmury z błędnych pomiarów.

## Zdjęcia satelitarne

Czy uwierzycie, jeżeli wam powiem, że jest taki format zapisu obrazu, który pozwala na geolokalizację tego obrazu w koordynatach? Wyobraźcie sobie, że dostajecie mapę planu miejscowego / skan mapy do celów opiniodawczych od inwestora / zdjęcie satelitarne działki lub dowolną inną mapę. Wrzucacie ją do waszego programu i zawsze wkleja się idealnie we właściwe miejsce? Idealnie w skali? Bez żadnych zniekształceń?

Tak jest to możliwe, nie zawsze, nie dla wszystkich programów, ale jest możliwy zapis geolokalizacji dla obrazu. Możemy to zrobić np. dla plików PDF, lub TIFF. Takie pliki tiff nazywamy wtedy GeoTiff.

Kiedy pobieracie zdjęcie satelitarne z portalu rządowego, to najczęściej ma ono już ustawione swoje koordynaty i system w jakim został zapisany. Wrzucając takiego tiff’a np. do programu QGIS wystarczy mu ustawić w jakim układzie został zapisany (np. EPSG:2180) i od razu wkleja się we właściwe miejsce. Bez żadnych zniekształceń, bez przesunięć. Idealnie.

Drugim atutem zdjęć satelitarnych są dane. Dla nas może być przydatny kolor. W przypadku chmury punktów, która nie ma zapisanych danych kolorystycznych możemy przełożyć kolory ze zdjęcia satelitarnego na daną chmurę punktów. Taką możliwość daje np. Cloud Compare.

## Łączymy wszystko i automatyzujemy

Najciekawszym elementem tej układanki jest to, że większość tych zadań można skrócić do jednego przycisku np. w Revicie. Potrzebujemy wprowadzić tylko parę parametrów:

- lokalizację (koordynaty)
- promień widoczności (w jakim zasięgu pobierać dane)
- opcjonalnie poligon/region z granicami działki

Resztę, czyli pobranie terenu, chmury punktów, granic działek, budynków i ortofotomapy oraz ustawienie ich we właściwym układzie współrzędnych, załatwia skrypt. Projektant dostaje gotowy kontekst w kilka minut zamiast kilku dni.
`,ip=`---
title: Deterministyczne środowiska projektowe
date: 2026-10-15
summary: Propozycja przeniesienia dobrych praktyk programistycznych do branży budowlanej poprzez automatyczne i deterministyczne tworzenie środowisk projektowych (tzw. config packages) w oparciu o geolokalizację i geodezyjne dane terenu.
authors: Dawid Huczyński
tags: [AEC, BIM, CAD, geolocation, automation, interoperability]
---

Uważam, że jest to bardzo ważny element na etapie początkowym procesu projektowego, a zwłaszcza przy ustawianiu projektów i narzędzi, których używamy w całym procesie. Mało osób w branży – może poza geodetami – wykorzystuje pełne informacje o lokalizacji obiektu lub projektu.

Często spotykam się z sytuacją, w której projekty są stawiane w różnych środowiskach – np. Revit, CAD, Tekla – a następnie powstaje
walka z eksportem i połączeniem tych różnych modeli w jeden spójny projekt. Modele mogą być różne: czasem płaskie, a czasem
trójwymiarowe. Automatyczne stawianie projektu ma tę przewagę, że pozwala deterministycznie stworzyć środowisko. Podobnie jak
programiści, którzy tworzą dla siebie odtwarzalne i deterministyczne środowiska, tak projektanci również mogliby sobie stwarzać
takie środowiska, bazując na minimalnej ilości danych, na przykład na informacji o terenie.

Takie podejście daje możliwość automatycznego postawienia projektu w każdym środowisku – czy będzie to program CAD, czy inny. Można
w ten sposób zdefiniować granice działki i ściągnąć informacje o okolicznych sieciach. Wszystko to powinno być skoordynowane zarówno
w ładzie współrzędnych płaskich, jak i w geolokalizacji. Efektem jest to, że wszyscy uczestnicy projektu mają we wspólnej
przestrzeni taki sam, standardowy projekt startowy, na którym się pracuje.

Wcześniej zastępowało się to tak zwanym plikiem koordynacyjnym – pustym plikiem, jakimś sześcianem lub stożkiem koordynacyjnym,
który definiował lokalizację projektów, a wszyscy musieli się do tego jednego obiektu dostosować.

Obecnie uważam, że nasza branża powinna budować swoje środowiska w sposób deterministyczny, poprzez rozsyłanie pakietów konfiguracyjnych (ang. *config packages*), które ustawiają całe środowisko projektowe, podobnie jak ma miejsce w świecie programistycznym. W takim pakiecie mogłyby zawierać się podstawowe informacje o działce, lokalizacji punktu startowego, osiach, poziomach. Nie muszą być wszystkie, ale taki plik pozwalałby np. odtworzyć początkowe ustawienia dla każdego uczestnika procesu.

Już teraz jest możliwe za pomocą samego terytu:

- pobranie granic działki,
- poziomu terenu w wysokiej dokładności,
- otoczenia i zieleni,
- sąsiadujących budynków,
- linii napowietrznych,
- obowiązujących planów,
- różnych stref (jak NATURA 2000 lub podtopienia),
- rysunków płaskich sieci i instalacji.

To i tak nie wszystko, a możliwe to było już\xA0od 2022 roku, kiedy tworzyłem takie narzędzia dla Revita, Blendera i CAD-a.
Obecnie wraz z rozwojem narządzi takie pomysły są dostępne na wyciągnięcie ręki. Potrzebna jest tylko wiedza i pomysły.
`,ap=`---
title: TERYT – Jeden numer, który rewolucjonizuje wymianę informacji
date: 2026-10-19
summary: Jak unikalny identyfikator TERYT eliminuje powtarzalną pracę i usprawnia automatyzację procesów w branży budowlanej oraz projektowej.
authors: Dawid Huczyński
tags: [bim, construction, teryt, automation, gis]
---

## Problem

W budownictwie i projektowaniu stałym wyzwaniem pozostaje sprawna wymiana informacji. Najprostszym, a zarazem wyjątkowo powszechnym przykładem tego problemu jest precyzyjne lokalizowanie działki.

Standardowy proces najczęściej wygląda podobnie: poruszamy się po mapach ewidencji gruntów i budynków, wybieramy województwo, powiat, gminę, obręb oraz miasto, aby na końcu ręcznie wpisać numer działki i odszukać konkretne miejsce. Łatwo o pomyłkę. Wystarczy chwila nieuwagi, by trafić na sąsiedni obręb z działką o takim samym numerze.

Co gorsza, wykonujemy w ten sposób ogrom powtarzalnej pracy. Następnie do projektu dołącza kolejna osoba w procesie budowlanym – projektant branżowy, generalny wykonawca, koordynator – i każda z nich powtarza dokładnie tę samą czynność od zera, szukając lokalizacji w swoich systemach i narzędziach.

Istnieje jednak jedno proste rozwiązanie, które jest powszechnie dostępne i może radykalnie uprościć pracę wszystkim zaangażowanym stronom: **numer TERYT**.

## TERYT

<p style="font-size:2em;text-align:center"><strong style="color:#af3029">22</strong><strong style="color:#ad8301">61</strong><strong style="color:#66800b">01</strong>_<strong style="color:#24837b">1</strong>.<strong style="color:#205ea6">0303</strong>.<strong style="color:#5e409d">769/16</strong></p>
<p style="text-align:center;"><span style="color:#af3029">województwo</span> · <span style="color:#ad8301">powiat</span> · <span style="color:#66800b">gmina</span> _ <span style="color:#24837b">rodzaj</span> . <span style="color:#205ea6">obręb</span> . <span style="color:#5e409d">nr działki</span></p><!----> <!---->

TERYT to unikalny identyfikator w skali całego kraju. W jednym ciągu cyfr zawiera pełną i jednoznaczną informację o lokalizacji: od województwa i gminy, przez obręb, aż po konkretną działkę.

Wykorzystanie numeru TERYT daje nam ogromną przewagę i otwiera drzwi do automatyzacji:

- **Błyskawiczne wyszukiwanie:** Wystarczy wkleić identyfikator np. do Geoportalu, aby od razu przejść do właściwej lokalizacji bez ręcznego przeklikiwania struktur administracyjnych.
- **Integracja przez API:** Korzystając z API Geoportalu, możemy na podstawie samego numeru TERYT (lub ich listy) automatycznie pobierać obrysy działek.
- **Łatwa konwersja danych:** Pobrane dane przestrzenne można w prosty sposób wyeksportować do dowolnego formatu – przetworzyć do CAD-a czy załadować bezpośrednio do programu Revit.

Nagle proces, który wymagał wielokrotnego wyszukiwania i przeklikiwania map, sprowadza się do prostego operowania jednym identyfikatorem. Gdyby wiedza o praktycznym wykorzystaniu TERYT była w branży budowlanej bardziej powszechna, wszystkim pracowałoby się znacznie lżej.
`,op=`---
title: Notatki głosowe
date: 2026-10-13
summary: Jak wylać swoją\xA0wiedzę która w tobie siedzi? O tym jak LLM wspomaga nas w zapisywaniu pomysłów.
authors: Dawid Huczyński
tags: [speech-to-text, LLM, local, AI]
---

## Problem

Pewnie wielu z nas boryka się z dużą ilością pomysłów, które zapisujemy na kartkę, a potem nam umykają. Lub mamy już
pełen szkic pomysłu w głowie, ale nie mamy czasu go uszczegółowić bądź zrealizować w natłoku obowiązków.

Ja miałem parę niedokończonych tematów:

1. Moją stronę internetową, którą wiedziałem jak mam zmienić tylko nie miałem czasu bo był to temat czysto kreatywny, a nie miał potencjału do zysku.
2. Stać się aktywniejszy w branży i podzielić się szerszej publiczności wiedzą jaką dzielę się ze znajomymi i otoczeniem. Bo uwielbiam dzielić się wiedzą i uważam że warto dzielić się "know how" bo to nie jest wielka przewaga konkurencyjna. Przewagą jest dla mnie wiedza jak to wykorzystać.
3. Rozwinąć marketing mojej firmy.

Dziś na tapetę chcę wziąć temat nr 2. W 2022 zacząłem pisać artykuły na bloga. Sporo wiedzy. Już nawet miałem wszystko
przygotowane i wrzucone na stronę, ale brakowało mi ostatnich szlifów. Uzupełnienie merytoryki. Poprawienie błędów.
Przetłumaczenie na dwa języki. I tak temat utknął. Bo były tematy bieżące.

Dziś w dniu pisania tego artykułu zdążyłem napisać już\xA0trzy. A ten piszę z czystej przyjemności pisania. Wykorzystałem
do tego AI, ale nie tak jak myślicie. Dalej każde zdanie jest moim zdaniem.

## Idea

Pomysł na ten proces pojawił się po tym jak przeczytałem post Ilya Sutskever o tym, że zaczął on dyktować głosem swoim
agentom/LLM/AI zadania. Opisał to w taki sposób, że używa prostego speech-to-text do przekładania mowy na tekst. I najważniejsze co
w tym było to to, że nie przejmował się formatowaniem tekstu. Wylewał po prostu wszystkie swoje myśli, nawet błędne
zdania. Wylewał\xA0cały swój proces z wiedzą, że LLM i tak to ogarnie i zrozumie. Tutaj mnie olśniło.

## Rozwiązanie to TTS + LLM

Naszkicuję mam mój obecny proces. Odwożąc dzieci, bądź wracając z pracy. Włączam nagrywanie i tworzę notatki głosowe na
konkretny temat. Taką notatkę wrzucam do speech-to-text takiego jak \`Orukeet\` lub \`Parakeet\`. Świetnie się sprawdzają w
języku polskim. Dodatkowo używam najprostszych modeli. One wypluwają mi transkrypcję - z błędami, z przemieszanymi
słowami. Są to wylane moje myśli bez żadnego filtra. Wtedy włączam LLM. Mam ustawiony prompt który nakazuje trzymać się
mojego tekstu, ale:

- poprawiać stylistykę interpunkcję,
- poprawiać niewyraźne wyrazy które powinny być inne (znając kontekst),
- Jeżeli w jakimś miejscu rozwinąłem temat podwójnie to scalić to w jedno,
- podzielić ten tekst na pasujące do siebie akapity i ew. pogrupować zdania jeżeli pasują do innego akapitu (to mój
słowotok, czasami skaczę po tematach, albo wracam do poprzedniego).

Tak oto dostaję pięknie skomponowaną notkę do bloga. Upiększam to obrazkami i wykresami już\xA0we własnym zakresie.

**Ale to nie wszystko...**

Akurat Google udostępnił tworzenie skilli więc stworzyłem mu skilla, który dodaje do artykułu
metadane jak tytuł, tagi, "summary" w odpowiednim formacie do mojego bloga.

**Ale to nie wszystko!!!**

Miałem już darmową aplikację korzystającą\xA0z \`Orukeet\` i tworzącą notatki, ale i tak musiałem to przerzucać do Gemini....
Dlatego poprosiłem agenta, żeby zrobił mi aplikację do transkrypcji z \`Orukeet\`, która potem od razu formatuje z zadanym promptem.
Agent wyrzucił mi to w 5 minut. Gotowa aplikacja w \`Rust\` i \`Tauri\`, korzystająca z \`Orukeet\` i \`gemma4:e4b\` małego modelu od
Google który uruchamia się całkowicie lokalnie. Sprawdza się idealnie.

Nawet nie będę tego tu udostępniał bo myślę, że każdy z Was może już to zrobić całkiem sam.
Korzystam teraz z tego codziennie.
`,sp=`---
title: DWG importer to Revit 
date: 2023-01-10
summary: DWG floor plans data extraction to excel database and build model in revit file.
authors: Dawid Huczyński
tags: [revit, architecture, dwg, dxf]
sketch: true
---

## Introduction
`,cp=`---
title: IFC analysis with IFCOpenShell
date: 2023-02-07
summary: DWG floor plans data extraction to excel database and build model in revit file.
authors: Dawid Huczyński
tags: [architecture, point cloud, cloud compare, photogrammetry]
sketch: true
---

## Introduction
`,lp=`---
title: Point Clouds in architecture
date: 2023-01-24
summary: DWG floor plans data extraction to excel database and build model in revit file.
authors: Dawid Huczyński
tags: [architecture, point cloud, cloud compare, photogrammetry]
sketch: true
---

## Introduction
`,up=`---
title: Ark
date: 2011-12-01
summary: Revitalisation of the Minorite church
cover: ark-000.webp
category: Public
location: Brzeg, Poland
gps: 50.86265, 17.47273, 18
phase: Concept
authors: Dawid Huczyński
images: ark-000.webp, ark-001.webp, ark-002.webp, ark-003.webp, ark-004.webp, ark-005.webp, ark-006.webp
---

Diploma project: the revitalisation of an old, decaying church. I worked closely with the historical documents and earlier projects. “The higher the church ceiling, the closer to God”: the idea was to bring the audience up to the upper level of the interior. The ground floor became an exhibition space and foyer.
`,dp=`---
title: BF2
date: 2018-12-01
summary: Part of a multi-family residential complex
cover: bf2-000.webp
category: Residential
location: Stavanger, Norway
gps: 58.88253, 5.65382, 17
phase: Built
office: Tendra Arkitektur
officeUrl: http://www.tendra.is/
authors: Jóhann Sigurðsson, Lárus Guðmarsson, Þórarinn Malmquist, Anna Franczyk, Dawid Huczyński
area: 2818
images: bf2-000.webp, bf2-001.webp, bf2-002.webp, bf2-003.webp
---

The fourth building of the 40Femti complex. It stands on a corner of the site, by a roundabout, which makes it a landmark for the whole area. Spacious apartments, roof gardens and a variety of layouts make it one of the most interesting and challenging projects I have worked on.
`,fp=`---
title: Construction data analysis
date: 2024-01-01
years: 2024–2026
group: it
mark: 'IFC'
summary: 3D models, drawings and specifications in a single database
category: Data, BIM
tech: Python (IfcOpenShell, OpenCV, bpy), Ollama (vision models)
---

A data unification project across distributed construction environments. Multi-format data, i.e. 3D models, drawings and text specifications, was structured end to end into a central database, with local vision models helping to read the documentation. Stakeholders gained broad business intelligence capabilities.
`,pp=`---
title: Dąbki
date: 2017-05-01
summary: Seaside resort concept with a hotel and aquapark
cover: dabki-006.webp
category: Leisure
location: Dąbki, Poland
gps: 54.378373, 16.311895, 16
phase: Designed
office: R2 Studio
officeUrl: https://r2.pl/
authors: Lesław Rubik, Paweł Rządkowski, Paulina Gęstwa, Michał Wroński, Dawid Huczyński
images: dabki-000.webp, dabki-001.webp, dabki-002.webp, dabki-003.webp, dabki-004.webp, dabki-005.webp, dabki-006.webp, dabki-007.webp, dabki-008.webp, dabki-009.webp, dabki-010.webp, dabki-011.webp, dabki-012.webp, dabki-013.webp, dabki-014.webp, dabki-015.webp, dabki-016.webp, dabki-017.webp, dabki-018.webp, dabki-019.webp, dabki-020.webp, dabki-021.webp, dabki-022.webp
---

Three existing buildings (two hotel units and a dining hall) were completely rearranged and extended. All ground-floor functions were redesigned and connected by an open corridor. The dining area moved into this “corridor”, and the pools and spa were placed at the front of the plot. I took part in the project from the very beginning until the final design stage.
`,mp=`---
title: DogAlone
date: 2017-01-02
years: 2017–2021
group: it
mark: 'DOG'
summary: An app that calms a dog left at home alone
category: Web app
tech: JavaScript
---

A real-time web app: it analyses audio and recognises a dog howling by its audio fingerprint. When the dog starts to howl, it plays back the owner’s recorded, calming voice every now and then. It runs locally, without sending any audio to the network.
`,hp=`---
title: Football Namibia
date: 2016-07-01
summary: Concept of a sports campus with a hotel, dormitories and a football pitch
cover: namibia-000.webp
category: Sport
location: Namibia
phase: Concept
authors: Dawid Huczyński
images: namibia-000.webp, namibia-001.webp, namibia-002.webp, namibia-003.webp, namibia-004.webp
---

A quick concept. The early stage gave a lot of freedom: the project was mainly meant to attract investors, so it had no particular restrictions.
`,gp=`---
title: High Five
date: 2019-01-01
summary: Sports hall and city offices
cover: high-five-built-01.webp
category: Public
location: Stavanger, Norway
gps: 58.954720, 5.700193, 17
phase: Built
office: Tendra Arkitektur
officeUrl: http://www.tendra.is/
authors: Jóhann Sigurðsson, Dawid Huczyński, Marco Ekkel
area: 4226
images: high-five-000.webp, high-five-built-01.webp, high-five-003.webp, high-five-built-05.webp, high-five-built-02.webp, high-five-built-03.webp, high-five-built-04.webp, high-five-built-06.webp, high-five-built-07.webp, high-five-built-08.webp, high-five-built-09.webp, high-five-004.webp, high-five-001.webp
---

A sports hall in the very centre of the city. The ground floor holds a restaurant and a sports centre; the upper floors are split 50/50 between a school and city offices. On the roof we placed a recreation area for children.
`,_p=`---
title: Kamieńskiego
date: 2015-04-01
summary: Concept of a residential urban quarter
cover: kamienskiego-residential-000.webp
category: Residential
location: Wrocław, Poland
gps: 51.15361, 17.04737, 16
phase: Concept
office: R2 Studio
officeUrl: https://r2.pl/
authors: Lesław Rubik, Paulina Gęstwa, Marta Trzepizur, Katarzyna Jabłońska, Paweł Rządkowski, Dawid Huczyński, Michał Wroński
area: 34740
images: kamienskiego-residential-000.webp, kamienskiego-residential-001.webp, kamienskiego-residential-002.webp, kamienskiego-residential-003.webp, kamienskiego-residential-004.webp, kamienskiego-residential-005.webp, kamienskiego-residential-006.webp
---

I worked on the concept for the corner of an urban quarter. Responsible for 3D visualisation, massing and facades.
`,vp=`---
title: Library details
date: 2010-10-01
summary: Architectural details for a library project
cover: detail-000.webp
category: Public
location: Prague, Czech Republic
phase: Detail
authors: Dawid Huczyński
images: detail-000.webp, detail-001.webp, detail-002.webp, detail-003.webp, detail-004.webp, detail-005.webp
---

A study of architectural details for a library project.
`,yp=`---
title: meshroom2blender
date: 2017-01-03
years: 2017–2021
group: it
mark: 'MR'
summary: Importing photogrammetry data from Meshroom into Blender
category: Open source
tech: Python, Blender
source: https://github.com/tibicen/meshroom2blender
---

A Blender importer for data files from AliceVision Meshroom, free photogrammetry software. It brings a 3D reconstruction from photos straight into a scene, e.g. for visualisation or modelling an existing building.
`,bp=`---
title: Mill
date: 2011-03-01
summary: A theatre in an old mill
cover: mlyn-000.webp
category: Public
location: Brzeg, Poland
gps: 50.86341, 17.47272, 18
phase: Concept
authors: Dawid Huczyński
images: mlyn-000.webp, mlyn-001.webp, mlyn-002.webp, mlyn-003.webp
---

Revitalisation of an old mill into a theatre.
`,xp=`---
title: Nafta Neo Bistro
date: 2017-06-01
summary: Interior of an industrial-modern restaurant with an open kitchen
cover: nafta-001.webp
category: Interior
location: Wrocław, Poland
gps: 51.081994, 17.078372, 17
phase: Concept
authors: Dawid Huczyński
images: nafta-001.webp, nafta-002.webp, nafta-003.webp, nafta-004.webp, nafta-005.webp, nafta-006.webp, nafta-007.webp, nafta-008.webp
---

The people behind this project were the most enthusiastic clients I have met. They had plenty of ideas not only for the restaurant itself but also for a unique style: raw but new, exclusive but not overwhelming. They went into every detail and wanted to build it themselves. My modest input was advice and help with the general layout. I prepared the idea of combining charred wood with riveted metal sheets and greenery under the ceiling. The project was delayed and I could not stay until the end, but I was amazed how my concepts became reality thanks to great clients.
`,Sp=`---
title: Photovoltaic controller
date: 2022-01-01
years: 2022–now
group: it
mark: 'PV'
summary: A service that stops PV farms at negative energy prices
category: Energy
client: own project, developed further at Leysa
tech: Python (FastAPI, pandas, plotly, cfgrib, scikit-learn, skforecast), Nginx, JavaScript
---

A web service that collects and analyses energy market data, weather forecasts (including GRIB numerical models) and solar radiation. Every 15 minutes it checks prices and the state of the farms; at negative prices it stops production automatically and resumes it when it pays again.

The models predict energy price spikes and weather-driven fluctuations with 50–90% accuracy. The system runs in production for several PV farms and is developed further at [Leysa](https://leysa.pl).
`,Cp=`---
title: Server management
date: 2024-01-02
years: 2024
group: it
mark: 'SRV'
summary: Deployment automation and server hardening
category: Infrastructure
tech: Apache, Tomcat, Maven, Nginx, Bash
---

Designed and implemented deployment automation and optimised custom servlet applications. Bash automation and server security hardening.
`,wp=`---
title: Simple Asset Manager
date: 2019-01-01
years: 2019–2021
group: it
mark: 'SAM'
summary: An asset manager for Blender with automatic thumbnails
category: Open source
tech: Blender, Python
source: https://gitlab.com/tibicen/simple-asset-manager
---

A Blender add-on: an asset manager with automatic thumbnail generation and directory structure. Being open source, it came with everything around the code: UX, bug reports, versioning and cross-OS troubleshooting.
`,Tp=`---
title: Site plan generator
date: 2022-01-02
years: 2022–2024
group: it
mark: '3D'
summary: A 3D site context from public GIS data and point clouds
category: BIM, GIS
tech: Python (httpx), Revit API (Python, C#), QGIS API, web API
---

A GIS engine that automatically builds 3D site plans for the start of a project: terrain, plot boundaries, neighbouring buildings and orthophoto, loaded straight into Revit in the right coordinate system. Plus algorithms for point cloud segmentation, classification and registration. More about the process in the [blog post](/en/blog/001-revit-project-startup).
`,Ep=`---
title: Sky Tower
date: 2013-05-01
summary: Mixed-use skyscraper
cover: skytower-000.webp
category: Public
location: Wrocław, Poland
gps: 51.0942493, 17.0191553, 17
phase: Construction
office: Studio Architektoniczne FOLD
authors: Dariusz Dziubiński, Mariusz Korszorsz, Irena Dzierwa, Anna Drutko, Marcin Czemplik, Tadeusz Dziuganowski, Dawid Huczyński, Agnieszka Jabłońska, Elżbieta Jabłońska, Adam Kazuro, Piotr Korejwo, Agnieszka Marcinkowska, Artur Michurski, Adam Niburski, Paweł Orłowski, Marcin Perka, Katarzyna Rycerz, Wojciech Robak, Kamil Salanyk, Wojciech Szubiński, Bartosz Szczepański, Marcin Szymański, Jakub Świerczyński, Dawid Urbaniak, Paweł Wręczycki
area: 171900
images: skytower-000.webp, skytower-001.webp, skytower-002.webp, skytower-003.webp, skytower-004.webp, skytower-005.webp
---

During my time on the project I worked on site during construction and coordinated parts of the design.
`,Dp=`---
title: Small projects
date: 2017-01-04
years: 2017–2021
group: it
mark: '&'
summary: A CV from Markdown and a cleanup of the IFC importer for Blender
category: Hobby
tech: SvelteKit, Python, Blender, IfcOpenShell
---

**A CV from Markdown.** A CV written as plain Markdown text and turned live into a document that reads well on a phone, in a browser and on paper. Also a test of the Svelte framework.

**IFC importer for Blender.** Cleanup and optimisation of importing IFC files into Blender as part of [IfcOpenShell](https://github.com/IfcOpenShell/IfcOpenShell). Today Bonsai (formerly BlenderBIM) has taken over this role.
`,Op=`---
title: Solar Analysis
date: 2017-01-01
years: 2017
group: it
mark: 'SUN'
summary: Daylight analysis according to Polish regulations, in Blender and Revit
category: Open source, analysis
tech: Python, bpy, PIL
---

A Blender add-on for daylight analysis of buildings and urban plans according to Polish regulations, hourly or for any period. A hybrid approach: 3D analysis combined with image processing and baked into textures. Later ported to Revit.
`,kp=`---
title: Spatial analysis for renewables
date: 2023-01-01
years: 2023–2026
group: it
mark: 'GIS'
summary: Sites and profitability of wind farms, PV and linear infrastructure
category: GIS, energy
tech: Python (QGIS, ezdxf, laspy, plotly, scipy, sktime, skforecast), web API
---

Automated analysis for renewable energy projects: wind turbines, solar farms and linear infrastructure. Parametric geometry is generated from real-time and historical data (solar radiation, weather, energy prices) and used to estimate the future monthly profitability of an investment.
`,Ap=`---
title: Traugutta
date: 2015-03-01
summary: Multi-family housing
cover: traugutta-residential-000.webp
category: Residential
location: Wrocław, Poland
gps: 51.10327, 17.05062, 19
phase: Concept
office: R2 Studio
officeUrl: https://r2.pl/
authors: Lesław Rubik, Paulina Gęstwa, Paweł Rządkowski, Dawid Huczyński, Michał Wroński
area: 2545
images: traugutta-residential-000.webp, traugutta-residential-001.webp, traugutta-residential-002.webp, traugutta-residential-003.webp, traugutta-residential-004.webp, traugutta-residential-005.webp, traugutta-residential-006.webp, traugutta-residential-007.webp, traugutta-residential-008.webp, traugutta-residential-009.webp, traugutta-residential-010.webp, traugutta-residential-011.webp
---

I worked on the concept of a multi-family building. Responsible for 3D visualisation, massing and facades.
`,jp=`---
title: Tram depot
date: 2016-03-01
summary: Multi-family housing
cover: zajezdnia-000.webp
category: Residential
location: Wrocław, Poland
gps: 51.12677, 16.98276, 16
phase: Concept
office: R2 Studio
officeUrl: https://r2.pl/
authors: Lesław Rubik, Paulina Gęstwa, Paweł Rządkowski, Dawid Huczyński, Michał Wroński
images: zajezdnia-000.webp, zajezdnia-001.webp, zajezdnia-002.webp, zajezdnia-003.webp, zajezdnia-004.webp, zajezdnia-005.webp, zajezdnia-006.webp, zajezdnia-007.webp, zajezdnia-008.webp
---

A former tram depot on Legnicka Street. I worked on the concept of multi-family housing. Responsible for 3D visualisation, massing and facades.
`,Mp=`---
title: A lightweight 3D scene in Three.js
date: 2026-01-01
years: 2026
group: it
mark: '3js'
summary: "Implementation consulting: Three.js replacing the existing workflow"
category: Web 3D
client: Zoovu
tech: Vue.js, Three.js
---

Implemented the Three.js library as a lightweight replacement for the existing 3D workflow in a Vue.js application. Optimised the processes and designed handling protocols for future 3D projects.
`,Np=`---
title: Arka
date: 2011-12-01
summary: Rewitalizacja kościoła Minorytów
cover: ark-000.webp
category: Obiekt publiczny
location: Brzeg, Polska
gps: 50.86265, 17.47273, 18
phase: Koncepcja
authors: Dawid Huczyński
images: ark-000.webp, ark-001.webp, ark-002.webp, ark-003.webp, ark-004.webp, ark-005.webp, ark-006.webp
---

Projekt dyplomowy: rewitalizacja starego, niszczejącego kościoła. Pracowałem blisko z dokumentacją historyczną i wcześniejszymi projektami. „Im wyżej sklepienie kościoła, tym bliżej Boga”: pomysł polegał na wprowadzeniu widzów na górny poziom wnętrza. Parter zaaranżowałem jako ekspozycję i foyer.
`,Pp=`---
title: BF2
date: 2018-12-01
summary: Część zespołu budynków wielorodzinnych
cover: bf2-000.webp
category: Mieszkaniowy
location: Stavanger, Norwegia
gps: 58.88253, 5.65382, 17
phase: Zrealizowany
office: Tendra Arkitektur
officeUrl: http://www.tendra.is/
authors: Jóhann Sigurðsson, Lárus Guðmarsson, Þórarinn Malmquist, Anna Franczyk, Dawid Huczyński
area: 2818
images: bf2-000.webp, bf2-001.webp, bf2-002.webp, bf2-003.webp
---

Czwarty budynek zespołu 40Femti. Stoi na narożniku działki, przy rondzie, co czyni go punktem orientacyjnym całej okolicy. Przestronne mieszkania, ogrody na dachu i różnorodne układy sprawiają, że to jeden z najciekawszych i najbardziej wymagających projektów, przy jakich pracowałem.
`,Fp=`---
title: Analiza danych budowlanych
date: 2024-01-01
years: 2024–2026
group: it
mark: 'IFC'
summary: Modele 3D, rysunki i specyfikacje w jednej bazie danych
category: Dane, BIM
tech: Python (IfcOpenShell, OpenCV, bpy), Ollama (modele wizyjne)
---

Projekt ujednolicenia danych z rozproszonych środowisk budowy. Dane w wielu formatach, czyli modele 3D, rysunki i specyfikacje tekstowe, zostały uporządkowane od początku do końca w centralnej bazie. Lokalne modele wizyjne pomagają odczytywać dokumentację. Interesariusze dostali dzięki temu szerokie możliwości analizy danych biznesowych.
`,Ip=`---
title: Dąbki
date: 2017-05-01
summary: Koncepcja ośrodka nadmorskiego z hotelem i aquaparkiem
cover: dabki-006.webp
category: Rekreacja
location: Dąbki, Polska
gps: 54.378373, 16.311895, 16
phase: Projekt
office: R2 Studio
officeUrl: https://r2.pl/
authors: Lesław Rubik, Paweł Rządkowski, Paulina Gęstwa, Michał Wroński, Dawid Huczyński
images: dabki-000.webp, dabki-001.webp, dabki-002.webp, dabki-003.webp, dabki-004.webp, dabki-005.webp, dabki-006.webp, dabki-007.webp, dabki-008.webp, dabki-009.webp, dabki-010.webp, dabki-011.webp, dabki-012.webp, dabki-013.webp, dabki-014.webp, dabki-015.webp, dabki-016.webp, dabki-017.webp, dabki-018.webp, dabki-019.webp, dabki-020.webp, dabki-021.webp, dabki-022.webp
---

Trzy istniejące budynki (dwa hotelowe i stołówka) zostały całkowicie przebudowane i rozbudowane. Wszystkie funkcje parterów zaprojektowano od nowa i połączono otwartym korytarzem. Część jadalna przeniesiona została do tego „korytarza”, a od frontu działki stanęły baseny i strefa spa. Brałem udział w projekcie od samego początku aż do końcowego etapu.
`,Lp=`---
title: DogAlone
date: 2017-01-02
years: 2017–2021
group: it
mark: 'DOG'
summary: Aplikacja, która uspokaja psa zostawionego w domu
category: Aplikacja webowa
tech: JavaScript
---

Aplikacja webowa działająca w czasie rzeczywistym: analizuje dźwięk i rozpoznaje wycie psa po jego „odcisku” audio. Gdy pies zaczyna wyć, co jakiś czas odtwarza nagrany, uspokajający głos właściciela. Działa lokalnie, bez wysyłania dźwięku do sieci.
`,Rp=`---
title: Football Namibia
date: 2016-07-01
summary: Koncepcja kampusu sportowego z hotelem, internatami i boiskiem
cover: namibia-000.webp
category: Sport
location: Namibia
phase: Koncepcja
authors: Dawid Huczyński
images: namibia-000.webp, namibia-001.webp, namibia-002.webp, namibia-003.webp, namibia-004.webp
---

Szybka koncepcja. Wczesny etap dawał dużo swobody: projekt miał przede wszystkim przyciągnąć inwestorów, więc nie miał szczególnych ograniczeń.
`,zp=`---
title: High Five
date: 2019-01-01
summary: Hala sportowa i biura miejskie
cover: high-five-built-01.webp
category: Obiekt publiczny
location: Stavanger, Norwegia
gps: 58.954720, 5.700193, 17
phase: Zrealizowany
office: Tendra Arkitektur
officeUrl: http://www.tendra.is/
authors: Jóhann Sigurðsson, Dawid Huczyński, Marco Ekkel
area: 4226
images: high-five-000.webp, high-five-built-01.webp, high-five-003.webp, high-five-built-05.webp, high-five-built-02.webp, high-five-built-03.webp, high-five-built-04.webp, high-five-built-06.webp, high-five-built-07.webp, high-five-built-08.webp, high-five-built-09.webp, high-five-004.webp, high-five-001.webp
---

Hala sportowa w samym centrum miasta. Na parterze znalazły się restauracja i centrum sportowe, pozostałe kondygnacje dzielą po połowie szkoła i biura miejskie. Na dachu zaprojektowaliśmy strefę rekreacji dla dzieci.
`,Bp=`---
title: Kamieńskiego
date: 2015-04-01
summary: Koncepcja kwartału zabudowy mieszkaniowej
cover: kamienskiego-residential-000.webp
category: Mieszkaniowy
location: Wrocław, Polska
gps: 51.15361, 17.04737, 16
phase: Koncepcja
office: R2 Studio
officeUrl: https://r2.pl/
authors: Lesław Rubik, Paulina Gęstwa, Marta Trzepizur, Katarzyna Jabłońska, Paweł Rządkowski, Dawid Huczyński, Michał Wroński
area: 34740
images: kamienskiego-residential-000.webp, kamienskiego-residential-001.webp, kamienskiego-residential-002.webp, kamienskiego-residential-003.webp, kamienskiego-residential-004.webp, kamienskiego-residential-005.webp, kamienskiego-residential-006.webp
---

Pracowałem nad koncepcją narożnika kwartału miejskiego. Odpowiadałem za wizualizacje 3D, bryłę i elewacje.
`,Vp=`---
title: Detale biblioteki
date: 2010-10-01
summary: Detale architektoniczne do projektu biblioteki
cover: detail-000.webp
category: Obiekt publiczny
location: Praga, Czechy
phase: Detal
authors: Dawid Huczyński
images: detail-000.webp, detail-001.webp, detail-002.webp, detail-003.webp, detail-004.webp, detail-005.webp
---

Studialne opracowanie detali architektonicznych do projektu biblioteki.
`,Hp=`---
title: meshroom2blender
date: 2017-01-03
years: 2017–2021
group: it
mark: 'MR'
summary: Import danych fotogrametrycznych z Meshrooma do Blendera
category: Open source
tech: Python, Blender
source: https://github.com/tibicen/meshroom2blender
---

Importer do Blendera plików danych AliceVision Meshroom, darmowego programu do fotogrametrii. Przenosi rekonstrukcję 3D ze zdjęć prosto do sceny, np. do wizualizacji albo modelowania istniejącego budynku.
`,Up=`---
title: Młyn
date: 2011-03-01
summary: Teatr w starym młynie
cover: mlyn-000.webp
category: Obiekt publiczny
location: Brzeg, Polska
gps: 50.86341, 17.47272, 18
phase: Koncepcja
authors: Dawid Huczyński
images: mlyn-000.webp, mlyn-001.webp, mlyn-002.webp, mlyn-003.webp
---

Rewitalizacja starego młyna na potrzeby teatru.
`,Wp=`---
title: Nafta Neo Bistro
date: 2017-06-01
summary: Wnętrze industrialnej restauracji z otwartą kuchnią
cover: nafta-001.webp
category: Wnętrza
location: Wrocław, Polska
gps: 51.081994, 17.078372, 17
phase: Koncepcja
authors: Dawid Huczyński
images: nafta-001.webp, nafta-002.webp, nafta-003.webp, nafta-004.webp, nafta-005.webp, nafta-006.webp, nafta-007.webp, nafta-008.webp
---

Ludzie stojący za tym projektem byli najbardziej entuzjastycznymi klientami, jakich poznałem. Mieli mnóstwo pomysłów nie tylko na samą restaurację, ale i na jej niepowtarzalny styl: surowy, ale nowy; ekskluzywny, ale nie przytłaczający. Wchodzili w każdy detal i chcieli zrealizować go sami. Mój skromny wkład to doradztwo i pomoc przy ogólnym układzie. Przygotowałem ideę połączenia opalanego drewna z nitowaną blachą i zielenią pod sufitem. Projekt się przesunął i nie mogłem prowadzić go do końca, ale zachwyciło mnie, jak moje koncepcje stały się rzeczywistością dzięki świetnym klientom.
`,Gp=`---
title: Sterownik farm fotowoltaicznych
date: 2022-01-01
years: 2022–dziś
group: it
mark: 'PV'
summary: Serwis, który zatrzymuje farmy PV przy ujemnych cenach energii
category: Energetyka
client: własny projekt, rozwijany w Leysie
tech: Python (FastAPI, pandas, plotly, cfgrib, scikit-learn, skforecast), Nginx, JavaScript
---

Serwis WWW, który zbiera i analizuje dane z rynku energii, prognozy pogody (także modele numeryczne GRIB) i promieniowanie słoneczne. Co 15 minut sprawdza ceny i stan farm, a przy ujemnych cenach automatycznie zatrzymuje produkcję i wznawia ją, gdy znów się opłaca.

Modele przewidują skoki cen energii i wahania zależne od pogody z trafnością 50–90%. System działa produkcyjnie dla kilku farm PV i jest rozwijany dalej w [Leysie](https://leysa.pl).
`,Kp=`---
title: Administracja serwerami
date: 2024-01-02
years: 2024
group: it
mark: 'SRV'
summary: Automatyzacja wdrożeń i zabezpieczenie serwerów
category: Infrastruktura
tech: Apache, Tomcat, Maven, Nginx, Bash
---

Zaprojektowanie i wdrożenie automatyzacji wdrożeń oraz optymalizacja aplikacji serwletowych. Skrypty Bash i zabezpieczenie serwerów.
`,qp=`---
title: Simple Asset Manager
date: 2019-01-01
years: 2019–2021
group: it
mark: 'SAM'
summary: Menedżer zasobów dla Blendera z automatycznymi miniaturami
category: Open source
tech: Blender, Python
source: https://gitlab.com/tibicen/simple-asset-manager
---

Dodatek do Blendera: menedżer zasobów z automatycznym generowaniem miniatur i strukturą katalogów. Projekt open source, więc obok kodu cała reszta: UX, zgłoszenia błędów, wersjonowanie i rozwiązywanie problemów na różnych systemach operacyjnych.
`,Jp=`---
title: Generator planów sytuacyjnych
date: 2022-01-02
years: 2022–2024
group: it
mark: '3D'
summary: Trójwymiarowy kontekst działki z publicznych danych GIS i chmur punktów
category: BIM, GIS
tech: Python (httpx), Revit API (Python, C#), QGIS API, web API
---

Silnik GIS, który automatycznie tworzy trójwymiarowe plany sytuacyjne na start projektu: teren, granice działek, budynki sąsiednie i ortofotomapę, wczytane prosto do Revita we właściwym układzie współrzędnych. Do tego algorytmy segmentacji, klasyfikacji i rejestracji chmur punktów. Więcej o samym procesie we [wpisie na blogu](/blog/001-revit-project-startup).
`,Yp=`---
title: Sky Tower
date: 2013-05-01
summary: Wieżowiec wielofunkcyjny
cover: skytower-000.webp
category: Obiekt publiczny
location: Wrocław, Polska
gps: 51.0942493, 17.0191553, 17
phase: Budowa
office: Studio Architektoniczne FOLD
authors: Dariusz Dziubiński, Mariusz Korszorsz, Irena Dzierwa, Anna Drutko, Marcin Czemplik, Tadeusz Dziuganowski, Dawid Huczyński, Agnieszka Jabłońska, Elżbieta Jabłońska, Adam Kazuro, Piotr Korejwo, Agnieszka Marcinkowska, Artur Michurski, Adam Niburski, Paweł Orłowski, Marcin Perka, Katarzyna Rycerz, Wojciech Robak, Kamil Salanyk, Wojciech Szubiński, Bartosz Szczepański, Marcin Szymański, Jakub Świerczyński, Dawid Urbaniak, Paweł Wręczycki
area: 171900
images: skytower-000.webp, skytower-001.webp, skytower-002.webp, skytower-003.webp, skytower-004.webp, skytower-005.webp
---

W czasie pracy przy projekcie pracowałem na budowie w trakcie wznoszenia budynku i koordynowałem części projektu.
`,Xp=`---
title: Drobne projekty
date: 2017-01-04
years: 2017–2021
group: it
mark: '&'
summary: CV z Markdowna i porządki w importerze IFC do Blendera
category: Hobby
tech: SvelteKit, Python, Blender, IfcOpenShell
---

**CV z Markdowna.** CV pisane jako zwykły tekst w Markdownie i zamieniane na żywo w dokument czytelny na telefonie, w przeglądarce i na papierze. Przy okazji test frameworka Svelte.

**Importer IFC dla Blendera.** Porządki i optymalizacja importu plików IFC do Blendera w ramach [IfcOpenShell](https://github.com/IfcOpenShell/IfcOpenShell). Dziś tę rolę przejął Bonsai (dawniej BlenderBIM).
`,Zp=`---
title: Solar Analysis
date: 2017-01-01
years: 2017
group: it
mark: 'SUN'
summary: Analiza nasłonecznienia według polskich przepisów, w Blenderze i Revicie
category: Open source, analizy
tech: Python, bpy, PIL
---

Dodatek do Blendera do analizy nasłonecznienia budynków i planów urbanistycznych według polskich przepisów, godzinowo lub dla dowolnego okresu. Podejście hybrydowe: analiza 3D połączona z przetwarzaniem obrazu i wypalana w teksturach. Później przeniesiony do Revita.
`,Qp=`---
title: Analizy przestrzenne pod OZE
date: 2023-01-01
years: 2023–2026
group: it
mark: 'GIS'
summary: Lokalizacje i rentowność farm wiatrowych, PV i inwestycji liniowych
category: GIS, energetyka
tech: Python (QGIS, ezdxf, laspy, plotly, scipy, sktime, skforecast), web API
---

Automatyzacja analiz dla projektów odnawialnych źródeł energii: turbin wiatrowych, farm fotowoltaicznych i inwestycji liniowych. Geometria parametryczna powstaje z danych bieżących i historycznych (nasłonecznienie, pogoda, ceny energii), a na jej podstawie liczona jest przyszła, miesięczna rentowność inwestycji.
`,$p=`---
title: Traugutta
date: 2015-03-01
summary: Budynek mieszkalny wielorodzinny
cover: traugutta-residential-000.webp
category: Mieszkaniowy
location: Wrocław, Polska
gps: 51.10327, 17.05062, 19
phase: Koncepcja
office: R2 Studio
officeUrl: https://r2.pl/
authors: Lesław Rubik, Paulina Gęstwa, Paweł Rządkowski, Dawid Huczyński, Michał Wroński
area: 2545
images: traugutta-residential-000.webp, traugutta-residential-001.webp, traugutta-residential-002.webp, traugutta-residential-003.webp, traugutta-residential-004.webp, traugutta-residential-005.webp, traugutta-residential-006.webp, traugutta-residential-007.webp, traugutta-residential-008.webp, traugutta-residential-009.webp, traugutta-residential-010.webp, traugutta-residential-011.webp
---

Pracowałem nad koncepcją budynku wielorodzinnego. Odpowiadałem za wizualizacje 3D, bryłę i elewacje.
`,em=`---
title: Zajezdnia
date: 2016-03-01
summary: Budynek mieszkalny wielorodzinny
cover: zajezdnia-000.webp
category: Mieszkaniowy
location: Wrocław, Polska
gps: 51.12677, 16.98276, 16
phase: Koncepcja
office: R2 Studio
officeUrl: https://r2.pl/
authors: Lesław Rubik, Paulina Gęstwa, Paweł Rządkowski, Dawid Huczyński, Michał Wroński
images: zajezdnia-000.webp, zajezdnia-001.webp, zajezdnia-002.webp, zajezdnia-003.webp, zajezdnia-004.webp, zajezdnia-005.webp, zajezdnia-006.webp, zajezdnia-007.webp, zajezdnia-008.webp
---

Dawna zajezdnia tramwajowa przy ulicy Legnickiej. Pracowałem nad koncepcją zabudowy wielorodzinnej. Odpowiadałem za wizualizacje 3D, bryłę i elewacje.
`,tm=`---
title: Lekka scena 3D w Three.js
date: 2026-01-01
years: 2026
group: it
mark: '3js'
summary: "Konsultacja wdrożeniowa: Three.js zamiast dotychczasowego rozwiązania"
category: Web 3D
client: Zoovu
tech: Vue.js, Three.js
---

Wdrożenie biblioteki Three.js jako lekkiego zamiennika dotychczasowego rozwiązania 3D w aplikacji opartej na Vue.js. Optymalizacja procesów i zasady obsługi przyszłych projektów 3D.
`,nm=Object.assign({"/src/lib/blog/en/001-revit-project-startup.md":te,"/src/lib/blog/en/002-project-environments.md":le,"/src/lib/blog/en/003-teryt.md":ve,"/src/lib/blog/en/004-notes.md":Ee,"/src/lib/blog/pl/001-revit-project-startup.md":Pe,"/src/lib/blog/pl/002-project-environments.md":He,"/src/lib/blog/pl/003-teryt.md":Xe,"/src/lib/blog/pl/004-notes.md":it,"/src/lib/blog/pl/999-dwg2rvt.md":ft,"/src/lib/blog/pl/999-ifc-analysis-openifcshell.md":xt,"/src/lib/blog/pl/999-point-clouds-in-architecture.md":At,"/src/lib/projects/en/ark.md":zt,"/src/lib/projects/en/bf2.md":Qt,"/src/lib/projects/en/construction-data.md":hn,"/src/lib/projects/en/dabki.md":En,"/src/lib/projects/en/dogalone.md":Vn,"/src/lib/projects/en/football-namibia.md":Qn,"/src/lib/projects/en/high-five.md":ur,"/src/lib/projects/en/kamienskiego-residential.md":Er,"/src/lib/projects/en/library-details.md":Hr,"/src/lib/projects/en/meshroom2blender.md":ei,"/src/lib/projects/en/mlyn.md":fi,"/src/lib/projects/en/nafta-neo-bistro.md":Ti,"/src/lib/projects/en/pv-controller.md":Ri,"/src/lib/projects/en/server-management.md":Xi,"/src/lib/projects/en/simple-asset-manager.md":sa,"/src/lib/projects/en/site-plan-generator.md":ya,"/src/lib/projects/en/sky-tower.md":Aa,"/src/lib/projects/en/small-projects.md":Ga,"/src/lib/projects/en/solar-analysis.md":no,"/src/lib/projects/en/spatial-analysis.md":mo,"/src/lib/projects/en/traugutta-residential.md":Eo,"/src/lib/projects/en/zajezdnia.md":Ho,"/src/lib/projects/en/zoovu-threejs.md":rs,"/src/lib/projects/pl/ark.md":hs,"/src/lib/projects/pl/bf2.md":Os,"/src/lib/projects/pl/construction-data.md":Ws,"/src/lib/projects/pl/dabki.md":tc,"/src/lib/projects/pl/dogalone.md":gc,"/src/lib/projects/pl/football-namibia.md":Dc,"/src/lib/projects/pl/high-five.md":zc,"/src/lib/projects/pl/kamienskiego-residential.md":tl,"/src/lib/projects/pl/library-details.md":_l,"/src/lib/projects/pl/meshroom2blender.md":kl,"/src/lib/projects/pl/mlyn.md":Vl,"/src/lib/projects/pl/nafta-neo-bistro.md":eu,"/src/lib/projects/pl/pv-controller.md":pu,"/src/lib/projects/pl/server-management.md":Eu,"/src/lib/projects/pl/simple-asset-manager.md":Ru,"/src/lib/projects/pl/site-plan-generator.md":Zu,"/src/lib/projects/pl/sky-tower.md":ld,"/src/lib/projects/pl/small-projects.md":Td,"/src/lib/projects/pl/solar-analysis.md":Id,"/src/lib/projects/pl/spatial-analysis.md":Jd,"/src/lib/projects/pl/traugutta-residential.md":sf,"/src/lib/projects/pl/zajezdnia.md":wf,"/src/lib/projects/pl/zoovu-threejs.md":Bf}),rm=(e,t)=>t.metadata.sketch||e===`blog`&&new Date(t.metadata.date)>new Date,im=Object.assign({"/src/lib/blog/en/001-revit-project-startup.md":$f,"/src/lib/blog/en/002-project-environments.md":ep,"/src/lib/blog/en/003-teryt.md":tp,"/src/lib/blog/en/004-notes.md":np,"/src/lib/blog/pl/001-revit-project-startup.md":rp,"/src/lib/blog/pl/002-project-environments.md":ip,"/src/lib/blog/pl/003-teryt.md":ap,"/src/lib/blog/pl/004-notes.md":op,"/src/lib/blog/pl/999-dwg2rvt.md":sp,"/src/lib/blog/pl/999-ifc-analysis-openifcshell.md":cp,"/src/lib/blog/pl/999-point-clouds-in-architecture.md":lp,"/src/lib/projects/en/ark.md":up,"/src/lib/projects/en/bf2.md":dp,"/src/lib/projects/en/construction-data.md":fp,"/src/lib/projects/en/dabki.md":pp,"/src/lib/projects/en/dogalone.md":mp,"/src/lib/projects/en/football-namibia.md":hp,"/src/lib/projects/en/high-five.md":gp,"/src/lib/projects/en/kamienskiego-residential.md":_p,"/src/lib/projects/en/library-details.md":vp,"/src/lib/projects/en/meshroom2blender.md":yp,"/src/lib/projects/en/mlyn.md":bp,"/src/lib/projects/en/nafta-neo-bistro.md":xp,"/src/lib/projects/en/pv-controller.md":Sp,"/src/lib/projects/en/server-management.md":Cp,"/src/lib/projects/en/simple-asset-manager.md":wp,"/src/lib/projects/en/site-plan-generator.md":Tp,"/src/lib/projects/en/sky-tower.md":Ep,"/src/lib/projects/en/small-projects.md":Dp,"/src/lib/projects/en/solar-analysis.md":Op,"/src/lib/projects/en/spatial-analysis.md":kp,"/src/lib/projects/en/traugutta-residential.md":Ap,"/src/lib/projects/en/zajezdnia.md":jp,"/src/lib/projects/en/zoovu-threejs.md":Mp,"/src/lib/projects/pl/ark.md":Np,"/src/lib/projects/pl/bf2.md":Pp,"/src/lib/projects/pl/construction-data.md":Fp,"/src/lib/projects/pl/dabki.md":Ip,"/src/lib/projects/pl/dogalone.md":Lp,"/src/lib/projects/pl/football-namibia.md":Rp,"/src/lib/projects/pl/high-five.md":zp,"/src/lib/projects/pl/kamienskiego-residential.md":Bp,"/src/lib/projects/pl/library-details.md":Vp,"/src/lib/projects/pl/meshroom2blender.md":Hp,"/src/lib/projects/pl/mlyn.md":Up,"/src/lib/projects/pl/nafta-neo-bistro.md":Wp,"/src/lib/projects/pl/pv-controller.md":Gp,"/src/lib/projects/pl/server-management.md":Kp,"/src/lib/projects/pl/simple-asset-manager.md":qp,"/src/lib/projects/pl/site-plan-generator.md":Jp,"/src/lib/projects/pl/sky-tower.md":Yp,"/src/lib/projects/pl/small-projects.md":Xp,"/src/lib/projects/pl/solar-analysis.md":Zp,"/src/lib/projects/pl/spatial-analysis.md":Qp,"/src/lib/projects/pl/traugutta-residential.md":$p,"/src/lib/projects/pl/zajezdnia.md":em,"/src/lib/projects/pl/zoovu-threejs.md":tm}),am=(e,t)=>Object.entries(nm).filter(([n,r])=>n.startsWith(`/src/lib/${e}/${t}/`)&&!rm(e,r)).map(([e,t])=>{let n=e.split(`/`).pop().slice(0,-3);return{...t.metadata,slug:n}}).sort((e,t)=>+new Date(t.date)-new Date(e.date));function om(e,t,n){let r=`/src/lib/${e}/${t}/${n}.md`,i=nm[r];return(!i||rm(e,i))&&c(404),{Post:i.default,metadata:i.metadata,headings:ee(im[r])}}export{am as n,om as t};