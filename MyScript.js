// Put your custom code here

/*
$(function () {
    demo.add(function () {
        $('#map_canvas').gmap({
            'center': '29.33852576354393,48.00433695316315', 'zoom': 16, 'disableDefaultUI': true, 'callback': function () {
                var self = this;
                self.addMarker({ 'position': this.get('map').getCenter() }).click(function () {
                    self.openInfoWindow({ 'content': 'Hello World!' }, this);
                });
            }
        });
    }).load();
});*/


/*!
  NZQuake (c) Copyright Greg Smith
*/

var map;

function createQuakeEventMarker(quakeEventLatlng) {
    return new google.maps.Marker({ position: quakeEventLatlng, map: map });
}

function setupMap(lat, lng, mapZoom, showOverviewControl) {
    var mapLatlng = new google.maps.LatLng(lat, lng);
    var myOptions = {
        zoom: mapZoom,
        center: mapLatlng,
        overviewMapControl: showOverviewControl,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.LEFT_TOP

        },
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
}
