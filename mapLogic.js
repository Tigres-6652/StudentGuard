// Configuración del mapa
var map = L.map('map').setView([25.6936962, -100.2685415], 14.5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Capa de calor
var heatData = [
    [25.740559, -100.2659, 2], [25.6936962, -100.2685415, 0.5],
    [25.703228, -100.268867, 2], [25.69641, -100.267669, 0.5],
    [25.688154, -100.268662, 2], [25.700125, -100.268418, 0.5],
    [25.69507077, -100.270229, 2], [25.682981, -100.276949, 2],
    [25.690488, -100.268171, 2], [25.687801, -100.268189, 2],
    [25.69886, -100.268187, 2], [25.70314, -100.26843, 2],
    [25.70289, -100.26719, 2], [25.686149, -100.266269, 2],
    [25.70258, -100.27832, 2], [25.691005, -100.270227, 2]
];

var heatLayer = L.heatLayer(heatData, {
    radius: 30,
    minOpacity: 0.6,
}).addTo(map);

// Icono de asaltos
var assaultIcon = L.icon({
    iconUrl: './assets/icon.png',
    iconSize: [50, 50],
    popupAnchor: [-3, -76],
});

// Función para marcar puntos de asaltos
function marcarAsalto(lat, lng) {
    L.marker([lat, lng], { icon: assaultIcon }).addTo(map)
        .bindPopup('Hubo un asalto aquí');
}

// Asaltos registrados
var puntosAsaltos = [
    [25.684798, -100.27214], [25.740559, -100.2659],
    [25.703228, -100.268867], [25.688154, -100.268662],
    [25.696532, -100.268553], [25.703028, -100.26843],
    [25.70289, -100.26719], [25.686149, -100.266269],
    [25.70258, -100.27832], [25.691005, -100.270227]
];

// Añadir los puntos al mapa
puntosAsaltos.forEach(([lat, lng]) => marcarAsalto(lat, lng));
