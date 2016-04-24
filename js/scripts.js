var map;

function initMap() {
  var mapDiv = document.getElementById('map');
  map = new google.maps.Map(mapDiv, {
    center: new google.maps.LatLng(39.727995,-121.841952),
    zoom: 7,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          { "color": "#0e657e" }
        ]
      },{
        "featureType": "landscape.natural",
        "stylers": [
          { "color": "#2e7878" }
        ]
      },{
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
          { "color": "#3f8f8d" }
        ]
      },{
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          { "color": "#a5a471" }
        ]
      },{
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
          { "color": "#2e7878" }
        ]
      },{
        "featureType": "road"  },{
        "featureType": "administrative.province",
        "elementType": "labels.text.fill",
        "stylers": [
          { "color": "#ffffff" }
        ]
      },{
        "elementType": "labels.text.fill",
        "stylers": [
          { "visibility": "simplified" },
          { "color": "#ffffff" },
          { "weight": 0.1 }
        ]
      },{
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
          { "visibility": "simplified" },
          { "color": "#ffffff" }
        ]
      }
    ]
          });
}

window.onload = initMap;
