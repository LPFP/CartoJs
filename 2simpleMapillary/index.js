L.Icon.Default.imagePath = '../assets/img/';

// OSM Tiles
// thunderforest
// https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png
// OpenStreetMap
// https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
var tiles = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  'attribution':
  '&copy; <a href="https://osmlab.github.io/attribution-mark/copyright/?name=lepetitfablabdeparis">OpenStreetMap</a> contributors'
});

// LPFLDP Coords
var lat = 48.855164;
var lng = 2.3919349;

// mapi_id est valable que pour le domaine Github.com
var mapi_id = 'enpzOU5oNGZIQW1NLTI0T2JrdGFmQTo0NDJjMTkzMzEwMDQxNGE4';
var mapi_photoid = 'qTfbBM92Wrx2LNELoprtXw';

// Map Parmas
var map = new L.Map('map', {
  'center': [48.8558669, 2.3920235],
  'zoom': 17,
  'layers': [tiles]
});

// map options
map.scrollWheelZoom.disable();

// Marker FabLab
var marker = L.marker([fablat, fablng]).addTo(map);

// FabLab popup
marker.bindPopup(
  "<center><b>le petit fablab de paris</b><br>" +
  "86 Av Philippe Auguste <br>" +
  "75011 Paris" +
  "<center><a target='_blank' href='https://www.openstreetmap.org/node/4352430942'>ouvrir dans Open Street Map</a></center>" +
  "<center><a target='_blank' href=" + 'http://mapillary.com/map/im/' + mapi_photoid + ">ouvrir dans Mapillary</a></center>"

).openPopup();

// Mapillary Params
var mly = new Mapillary.Viewer(
  'mly',
  mapi_id,
  mapi_photoid
);
