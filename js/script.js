//Load maps
document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelectorAll('#map').length > 0)
  {
    if (document.querySelector('html').lang)
      lang = document.querySelector('html').lang;
    else
      lang = 'en';

    var js_file = document.createElement('script');
    js_file.type = 'text/javascript';
    js_file.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBe3tmaJfIK61mmGiJtP25qTuVp3HwCuPU&callback=initMap&signed_in=true&language=' + lang;
    document.getElementsByTagName('head')[0].appendChild(js_file);
  }
});

var map;
var PhilLatLng = {lat: 12.90363138, lng: 122.0004814};
var radarmap;
var RadarLatLng = {lat: 14.6760, lng: 121.0437};

function initMap()
{
  map = new google.maps.Map(document.getElementById('map'), {
    center: PhilLatLng,
    zoom: 6,
    draggable: false,
    scaleControl: false,
    mayTypeControl: false,
    scrollwheel: false,
    disableDefaultUI: true,
    styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#98b3d1'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#414F5E'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#536377fff'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#536377'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#ffffff'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#536377'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#536377'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#536377'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#536377'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#536377'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#536377'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#536377'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#536377'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#536377'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#000000'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#536377'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#536377'}]
            },
            {
              featureType: 'poi',
              elementType: 'geometry',
              stylers: [{color: '#536377'}]
            }
          ]
  });
  
    radarmap = new google.maps.Map(document.getElementById('radarmap'), {
    center: RadarLatLng,
    zoom: 11,
    draggable: false,
    scaleControl: false,
    mayTypeControl: false,
    scrollwheel: false,
    disableDefaultUI: true,
    styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#98b3d1'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#414F5E'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#536377fff'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#536377'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#ffffff'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#536377'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#536377'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#536377'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#536377'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#536377'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#536377'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#536377'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#536377'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#536377'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#000000'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#536377'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#536377'}]
            },
            {
              featureType: 'poi',
              elementType: 'geometry',
              stylers: [{color: '#536377'}]
            }
          ]
  });
}

//loading-screen
document.getElementById('tick').stop(); 
  $(window).load(function() {
    $("#load-icon").fadeOut();
    $('#loading-screen').delay(100).fadeOut('slow'); 
    $('body').delay(100).css({'overflow':'visible'});
    document.getElementById('tick').start(); 
  });

//set element heights (Map, radarmap, info)
var body = document.body, html = document.documentElement;
var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
document.getElementById('map').style.height = height + 'px';
document.getElementById('radarmap').style.height = (height/2) + 'px';
document.getElementById('info').style.height = (height/2) + 'px';
