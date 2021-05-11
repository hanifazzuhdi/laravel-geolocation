if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {

        localCoord = position.coords;
        objLocalCoord = {
            lat: localCoord.latitude,
            lng: localCoord.longitude
        }

        let platform = new H.service.Platform({
            'apikey': 'v7_X4951Ht0LQEuECNGnUazLQgMZVrIlq4AajGd6C-Y'
        });

        // Obtain the default map types from the platform object:
        let defaultLayers = platform.createDefaultLayers();

        // Instantiate (and display) a map object:
        let map = new H.Map(
            document.getElementById('mapContainer'),
            defaultLayers.vector.normal.map,
        {
            zoom: 12,
            center: objLocalCoord,
            pixelRatio: window.devicePixelRatio || 1
        });

        window.addEventListener('resize', () => map.getViewPort().resize());

        // Core UI
        let ui = H.ui.UI.createDefault(map, defaultLayers);

        // Enable the event system on the map instance:
        let mapEvents = new H.mapevents.MapEvents(map);

        let behavior = new H.mapevents.Behavior(mapEvents);

        function addDraggableMarker(map, behavior){

            let lat = document.getElementById('latitude');
            let lng = document.getElementById('longitude');

            lat.value = objLocalCoord.lat.toFixed(5);
            lng.value = objLocalCoord.lng.toFixed(5);

            var marker = new H.map.Marker(objLocalCoord, {
              // mark the object as volatile for the smooth dragging
              volatility: true
            });
            // Ensure that the marker can receive drag events
            marker.draggable = true;
            map.addObject(marker);

            // disable the default draggability of the underlying map
            // and calculate the offset between mouse and target's position
            // when starting to drag a marker object:
            map.addEventListener('dragstart', function(ev) {
              var target = ev.target,
                  pointer = ev.currentPointer;
              if (target instanceof H.map.Marker) {
                var targetPosition = map.geoToScreen(target.getGeometry());
                target['offset'] = new H.math.Point(pointer.viewportX - targetPosition.x, pointer.viewportY - targetPosition.y);
                behavior.disable();
              }
            }, false);


            // re-enable the default draggability of the underlying map
            // when dragging has completed
            map.addEventListener('dragend', function(ev) {
              var target = ev.target;
              if (target instanceof H.map.Marker) {
                behavior.enable();

                lat.value = target.b.lat.toFixed(5);
                lng.value = target.b.lng.toFixed(5);
              }
            }, false);

            // Listen to the drag event and move the position of the marker
            // as necessary
             map.addEventListener('drag', function(ev) {
              var target = ev.target,
                  pointer = ev.currentPointer;
              if (target instanceof H.map.Marker) {
                target.setGeometry(map.screenToGeo(pointer.viewportX - target['offset'].x, pointer.viewportY - target['offset'].y));
              }
            }, false);
          }

          addDraggableMarker(map, behavior);

    });
} else {
    console.log('Geolocation in your browser off !');
}
