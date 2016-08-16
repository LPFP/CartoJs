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
var fablat = 48.85516458113589;
var fablng = 2.3919349908828735;

// Map Parmas
var map = new L.Map('map', {
	'center': [48.85586696617964, 2.392023503780365],
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
	"<center><a target='_blank' href=''>ouvrir dans Mapillary</a></center>"

).openPopup();

// Mapillary Params
// mapi_id est valable que pour le domaine Github.com
var mapi_id = 'enpzOU5oNGZIQW1NLTI0T2JrdGFmQTo0NDJjMTkzMzEwMDQxNGE4';
var mapi_photoid = '9bKLvXb1SGL6xQX54vWttA';

var mly = new Mapillary.Viewer(
		'mly',
		mapi_id,
		mapi_photoid
);
