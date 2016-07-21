var map;
var styles = [{ "featureType": "landscape.man_made", "elementType": "all", "stylers": [{ "color": "#B6DFD2" }, { "hue": "#B6DFD2" }, { "lightness": -20 }] }, { "featureType": "landscape.natural", "elementType": "all", "stylers": [{ "color": "#B6DFD2" }] }]

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 43.6187, lng: -116.2146 },
        zoom: 15
    });

    map.setOptions({ styles: styles });

     var contentString = "<div><p>Sweet Cake</p></div>";

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        var marker = new google.maps.Marker({
          position: { lat: 43.6187, lng: -116.2146 },
          map: map,
          title: 'Sweet Cake'
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });

}
