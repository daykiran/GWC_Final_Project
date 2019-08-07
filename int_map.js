var map;
var ourLoc;
var view;

function init() {
  // map.on('singleclick', function (event) {
  //   if (map.hasFeatureAtPixel(event.pixel) === true) {
  //     var coordinate = event.coordinate;
  //
  //     content.innerHTML = '<b>Hello world!</b><br />I am a popup.';
  //     overlay.setPosition(coordinate);
  //   } else {
  //     overlay.setPosition(undefined);
  //     closer.blur();
  //   }
  // });
  //
  // var container = document.getElementById('popup');
  // var content = document.getElementById('popup-content');
  // var closer = document.getElementById('popup-closer');
  //
  // var overlay = new ol.Overlay({
  //   element: container,
  //   autoPan: true,
  //   autoPanAnimation: {
  //     duration: 250
  //   }
  // });
  // map.addOverlay(overlay);
  //
  // closer.onclick = function() {
  //   overlay.setPosition(undefined);
  //   closer.blur();
  //   return false;
  // };
  //
  ourLoc = ol.proj.fromLonLat([-87.6372544, 41.8841369]);

  view = new ol.View({
    center: ourLoc,
    zoom:8
  });

  map = new ol.Map({
    target: "map",
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    loadTilesWhileAnimating: true,
    view: view
  });
  var layer = new ol.layer.Vector({
    source: new ol.source.Vector({
      features: [
        new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat([-87.9806, 42.0834]))
        }),
        new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat([-88.0834, 42.0314]))
        }),
        new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat([-87.6651, 41.8796]))
        }),
        new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat([-87.6899, 41.8676]))
        }),
        new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat([-87.6551, 41.8786]))
        }),
        new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat([-87.6951, 41.8756]))
        }),
        new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat([-87.6751, 41.8916]))
        }),
        new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat([-87.6491, 41.8838]))
        }),
        new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat([-88.2320, 41.6332]))
        }),
        new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat([-87.8398, 41.8950]))
        }),
        new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat([-87.8298, 41.8952]))
        }),
        new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat([-87.8298, 41.8974]))
        }),
        new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat([-87.6398, 41.8956]))
        }),
        new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat([-88.2535, 41.7608]))
        }),
        new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat([-88.1637, 41.7638]))
        }),
        new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat([-88.1549, 41.7519]))
        }),
        new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat([-88.2541, 41.7308]))
        }),
        new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat([-88.1563, 41.6508]))
        }),
        new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat([-88.4201, 41.6606]))
        })
      ]
    })

  });

map.addLayer(layer);
}

function panhome() {
  view.animate({
    center: ourLoc,
    duration: 3000,
    zoom: 15
  });
}

function makeCountryRequest() {
  var countryName = document.getElementById("country-name").value;

  if(countryName === "") {
    alert("Bruh. Enter the name of a REAL country.")
  }

  var query = "https://restcountries.eu/rest/v2/name/" + countryName + "?fullText=true";
  query = query.replace(/ /g, "%20")

  countryRequest = new XMLHttpRequest();
  countryRequest.open("GET", query, true);
  countryRequest.onload = processCountryRequest

  countryRequest.send();

  // alert("Ready State" + countryRequest.readyState);
  // alert("Status" + countryRequest.status);
  // alert("Response" + countryRequest.responseText);


}
function processCountryRequest(){

  if (countryRequest.readyState != 4) {
    return;
  }

  if (countryRequest.status != 200 || countryRequest.responseText === "") {
    alert("We were unable to find your requested country.")
    return;
  }
  var countryInformation = JSON.parse(countryRequest.responseText);
  var lon = countryInformation[0].latlng[1];
  var lat = countryInformation[0].latlng[0];

  var location = ol.proj.fromLonLat([lon,lat]);
  view.animate({
    center: location,
    duration: 3000
  });
}

window.onload = init;
