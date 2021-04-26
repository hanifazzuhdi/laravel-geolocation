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
            zoom: 10,
            center: objLocalCoord,
            pixelRatio: window.devicePixelRatio || 1
        });

        window.addEventListener('resize', () => map.getViewPort().resize());

        // Core UI
        let ui = H.ui.UI.createDefault(map, defaultLayers);

        // Enable the event system on the map instance:
        let mapEvents = new H.mapevents.MapEvents(map);

        let behavior = new H.mapevents.Behavior(mapEvents);

        // Add event listener:
        // map.addEventListener('tap', function(evt) {
        // // Log 'tap' and 'mouse' events:
        //     console.log(evt.type, evt.currentPointer.type);
        // });

    });

} else {
    console.log('Geolocation in your browser off !');
}
