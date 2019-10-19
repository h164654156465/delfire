var map;
var markers = [];
// var neighborhoods = [
//     { lat: 25.04, lng: 121.512 },
//     { lat: 25.035, lng: 121.519 }
// ];
// var neighborhoods = FirePoints


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 25.04, lng: 121.512 },
        zoom: 14
    });

    // //建立地圖 marker 的集合
    // var marker_config = [{
    //     position: { lat: 25.04, lng: 121.512 },
    //     map: map,
    //     title: '總統府',
    //     icon: 'flame (2).png'
    // }, {
    //     position: { lat: 25.035, lng: 121.519 },
    //     map: map,
    //     title: '中正紀念堂',
    //     icon: 'animated-fire-image-0379.gif'
    // }];

    // //標出 marker
    // marker_config.forEach(function (e, i) {
    //     markers[i] = new google.maps.Marker(e);
    //     markers[i].setMap(map);
    // });
}

function drop() {
    for (var i = 0; i < neighborhoods.length; i++) {
        addMarkerWithTimeout(neighborhoods[i], i * 1200);
    }

}

function addMarkerWithTimeout(position, timeout) {
    window.setTimeout(function() {
        markers.push(new google.maps.Marker({
            position: position,
            map: map,
            animation: google.maps.Animation.DROP
        }));
    }, timeout);
}