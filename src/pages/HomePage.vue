<script>
import "leaflet/dist/leaflet.css";
// import {LMap, LMarker, LTileLayer} from '@vue-leaflet/vue-leaflet'
// eslint-disable-next-line no-unused-vars
import {mapState, mapActions} from 'vuex'
// import RM from 'leaflet-routing-machine'
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

export default {
  name: "HomePage",
  components: {
    // LMarker,
    // LTileLayer,
    // LMap,
  },
  data: () => ({
    map: null
  }),
  computed: {
    ...mapState(['markers'])
  },
  methods: {
    ...mapActions(['addMarker', 'removeMarker', 'getMarkersFromLocalStorage']),
  },
  created() {
    console.log(L)
    this.$store.dispatch('getMarkersFromLocalStorage')
  },
  mounted() {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png")
    });
    // 1. Створення карти
    this.map = L.map("map").setView([50.4501, 30.5234], 13); // Київ

    // 2. Додавання тайлів
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(this.map);

    // 3. Додавання маршруту
    L.Routing.control({
      waypoints: [
        L.latLng(50.4501, 30.5234),  // Точка А (Київ)
        L.latLng(50.4643, 30.5197),  // Точка B (інша точка в Києві)
      ],
      routeWhileDragging: true, // дозволяє змінювати маршрут вручну
    }).addTo(this.map);
  }

}
</script>

<template>
  <div>
    home page

    <div style="display: flex; width: 100%; height: 800px;">

      <div style="width: 300px; margin-right: 20px;">
        <ul>
          <li v-for="(marker, index) in markers" :key="index"
              style="margin-bottom: 10px; display: flex;">
            {{ marker }}

            <button @click="removeMarker(index)">Del</button>
          </li>
        </ul>
      </div>

      <div id="map" style="height: 500px; width: 100%;"></div>
<!--      <l-map ref="map" :center="[49.432720, 27.000026]" :zoom="13" @click="addMarker">-->
<!--        <l-tile-layer-->
<!--            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"-->
<!--            layer-type="base"-->
<!--            name="OpenStreetMap"-->
<!--        />-->
<!--        <l-marker v-for="(marker,index) in markers"-->
<!--                  :key="index"-->
<!--                  :lat-lng="marker"-->
<!--                  @click="removeMarker(index)"-->
<!--        />-->

<!--      </l-map>-->
    </div>
  </div>
</template>

<style scoped>

</style>