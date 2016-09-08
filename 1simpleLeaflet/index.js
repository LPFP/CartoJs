L.Icon.Default.imagePath = '../assets/img/';

//Type de carte
var tiles = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  'attribution':
  '&copy; <a href="https://osmlab.github.io/attribution-mark/copyright/?name=votre nom">OpenStreetMap</a> contributors'
});

//Coords
var lat = 48.855164;
var lng = 2.3919349;

// Parametres de la carte
var map = new L.Map('map', {
  'center': [lat, lng],
  'zoom': 17,
  'layers': [tiles]
});

//Options de la carte
// map.scrollWheelZoom.disable();

//Marker
var marker = L.marker([lat, lng]).addTo(map);

//Popup
marker.bindPopup(
  "<center><b>le petit fablab de paris</b><br>"
).openPopup();
