map = new OpenLayers.Map("mapdiv");
  map.addLayer(new OpenLayers.Layer.OSM());

//set lonLat to new location
  var currentLonLat = new OpenLayers.LonLat(37.0902, 95.7129)
        .transform(
          new OpenLayers.Projection("EPSG:4326"),
          map.getProjectionObject()
        );
  var TheLocalFarmstand = new OpenLayers.LonLat(40.193487,-85.385559)
        .transform(
          new OpenLayers.Projection("EPSG:4326"),
          map.getProjectionObject()
        );
  var BufordFarmers = new OpenLayers.LonLat(-84.274242, 33.905758)
        .transform(
          new OpenLayers.Projection("EPSG:4326"),
          map.getProjectionObject()
        );
  var GoldbergsFineFoods = new OpenLayers.LonLat(-84.314982,33.922866)
        .transform(
          new OpenLayers.Projection("EPSG:4326"),
          map.getProjectionObject()
        );



  var zoom=16;


  var markers = new OpenLayers.Layer.Markers( "Markers" );
  map.addLayer(markers);

// add marker to msl
  markers.addMarker(new OpenLayers.Marker(currentLonLat));
  markers.addMarker(new OpenLayers.Marker(TheLocalFarmstand));
  markers.addMarker(new OpenLayers.Marker(GoldbergsFineFoods));
  markers.addMarker(new OpenLayers.Marker(BufordFarmers));
  markers.addMarker(new OpenLayers.Marker(GoldbergsFineFoods));

  map.setCenter (currentLonLat, zoom);
  map.setCenter (BufordHighway,zoom);
