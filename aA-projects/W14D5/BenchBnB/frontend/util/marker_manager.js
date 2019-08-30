export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(benches) {
        // console.log("time to update");
        const missingMarkers = benches.filter(bench => !this.markers[bench.id]);
        missingMarkers.forEach(bench => this.createMarkerFromBench(bench))
    }

    createMarkerFromBench(bench) {
        const coords = new google.maps.LatLng(bench.lat, bench.lng);
        const newMarker = new google.maps.Marker({
            coords, 
            map: this.map,
            id: bench.id
        });

        this.markers[newMarker.id] = newMarker;
    }
} 