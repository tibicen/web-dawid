// Contact Map
var contactMap = document.getElementById("contact-map");
if (contactMap) {
  var mymap = L.map('contact-map', { zoomControl: false }).setView([52.018, 19.137], 4);
  
  var OpenStreetMap_HOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    // bounds: [[-75, -180], [81, 180]],
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
  });

  // Poland contour
  // var myCustomStyle = {
  //   stroke: false,
  //   fill: true,
  //   fillColor: '#b8d656',
  //   fillOpacity: 0.5
  // }

  // var poland = L.geoJSON();
  // $.getJSON('theme/js/Poland.json',
  //   function (data) {
  //     poland.addData(data).setStyle(myCustomStyle);
  //   });

  var projects = {
    "High Five": [58.954720, 5.700193, 'high-five'],
    "BF3": [58.88280, 5.65293],
    "Kringlan 2017": [64.1302, -21.8952],
    "BF2": [58.88253, 5.65382, 'bf2'],
    "Dąbki": [54.378373, 16.311895, 'dabki'],
    'Zajezdnia': [51.12677, 16.98276, 'zajezdnia'],
    "Kamińskiego Residential": [51.154073, 17.047597, 'kamienskiego'],
    "Traugutta Residential": [51.102246, 17.052313, 'traugutta'],
    "Sky Tower": [51.0942493, 17.0191553, 'sky-tower'],
    "Młyn": [50.8634221, 17.4723963, 'mlyn'],
    "Ark": [50.8627378, 17.4720564, 'ark'],
    "Szybowcowa": [51.129455, 16.969604, 'szybowcowa'],
    "Nafta Neo Bistro": [51.081994, 17.078372, 'nafta-neo-bistro'],
  }

  var current_location = new L.marker([51.1102, 17.0322], { opacity: 1 });
  current_location.bindTooltip("Wrocław", { permanent: false, className: "city-name", offset: [0, -50], direction: 'center' });

  OpenStreetMap_HOT.addTo(mymap);

  for (x in projects) {
    var marker = L.circleMarker([projects[x][0], projects[x][1]], { color: '#869b40', weight: .1, fillColor: '#869b40', fillOpacity: 0.5, radius: 7 });
    if (projects[x].length > 2) {
      marker.bindPopup(`${x}<br><a href='./projects/${projects[x][2]}/'>Open</a>`);
    } else {
      marker.bindPopup(`${x}`);
    }
    marker.addTo(mymap)
  }

  current_location.addTo(mymap);
}