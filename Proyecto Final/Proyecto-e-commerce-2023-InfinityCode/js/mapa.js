// Función de inicialización del mapa
function initMap() {
    // Coordenadas de ubicación (por ejemplo, Nueva York)
    var ubicacion = { lat: -34.616423, lng: -68.330228 };

    // Crear un nuevo mapa en el contenedor con la ubicación y zoom
    var map = new google.maps.Map(document.getElementById('map'), {
        center: ubicacion,
        zoom: 15 // Puedes ajustar el nivel de zoom según tus necesidades
    });

    // Crear un marcador en la ubicación
    var marker = new google.maps.Marker({
        position: ubicacion,
        map: map,
        title: 'Track Route' // Puedes personalizar el título del marcador
    });
}
