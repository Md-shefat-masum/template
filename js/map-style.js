
/*---------------------------- Google Map---------------------------- */
function initMap() {
    var add = {
        lat: 22.572646,
        lng: 88.363895
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: add,
        gestureHandling: 'cooperative',
        streetViewControl: false,
        mapTypeControl: false,
        zoomControl: true,
        draggable: true,
        disableDoubleClickZoom: true,
        overviewMapControl: true,
        overviewMapControlOptions: {
            opened: false,
        },
        zoomControlOptions: {
            position: google.maps.ControlPosition.TOP_LEFT
        },
        styles: [{
            "featureType": "all",
            "elementType": "all",
            "stylers": [{
                "hue": "#ff0000"
                    }, {
                "saturation": -100
                    }, {
                "lightness": -30
                    }]
                }, {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#ffffff"
                    }]
                }, {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#353535"
                    }]
                }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#656565"
                    }]
                }, {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#505050"
                    }]
                }, {
            "featureType": "poi",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#808080"
                    }]
                }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
                "color": "#454545"
                    }]
                }, {
            "featureType": "transit",
            "elementType": "labels",
            "stylers": [{
                "hue": "#000000"
                    }, {
                "saturation": 100
                    }, {
                "lightness": -40
                    }, {
                "invert_lightness": true
                    }, {
                "gamma": 1.5
                    }]
                }]
    });
    var marker = new google.maps.Marker({
        position: add,
        icon: 'images/markar.png',
        map: map
    });
}



