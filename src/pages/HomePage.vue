<script>
import "leaflet/dist/leaflet.css";
import {LMap, LMarker, LTileLayer} from '@vue-leaflet/vue-leaflet'

export default {
  name: "HomePage",
  components: {
    LMarker,
    LTileLayer,
    LMap,
  },
  data: () => ({
    markers: [
      [49.43312225363091, 26.98312011415495]
    ]
  }),
  methods: {
    addMarker(point) {
      this.markers.push([point.latlng.lat, point.latlng.lng]);
    },
    removeMarker() {
      console.log(arguments);
    }
  }
}
</script>

<template>
  <div>
    home page

    <div style="width: 100%; height: 800px;">
      <l-map :center="[49.432720, 27.000026]" :zoom="13" @click="addMarker">
        <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            layer-type="base"
            name="OpenStreetMap"
        />

        <l-marker v-for="(marker,index) in markers"
                  :key="index"
                  :lat-lng="marker"
                  @click="removeMarker(marker)"
        />

      </l-map>
    </div>
  </div>
</template>

<style scoped>

</style>