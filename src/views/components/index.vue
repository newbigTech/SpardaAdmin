<!--<template>-->
  <!--<baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15" :scroll-wheel-zoom="true">-->
    <!--&lt;!&ndash;<bm-polyline :path="polylinePath" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" :editing="true" @lineupdate="updatePolylinePath"></bm-polyline>&ndash;&gt;-->
  <!--</baidu-map>-->
<!--</template>-->

<!--<script>-->
  <!--export default {-->
    <!--data() {-->
      <!--return {-->
        <!--polylinePath: [-->
          <!--{ lng: 116.404, lat: 39.915 },-->
          <!--{ lng: 116.405, lat: 39.920 },-->
          <!--{ lng: 116.423493, lat: 39.907445 }-->
        <!--]-->
      <!--}-->
    <!--},-->
    <!--methods: {-->
      <!--updatePolylinePath(e) {-->
        <!--this.polylinePath = e.target.getPath()-->
      <!--},-->
      <!--addPolylinePoint() {-->
        <!--this.polylinePath.push({ lng: 116.404, lat: 39.915 })-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</script>-->
<template>
  <baidu-map class="map" center="杭州" :zoom="15" :scroll-wheel-zoom="true">
    <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
    <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
  <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
    <!--<bm-label content="我爱北京天安门" :position="{lng: 116.404, lat: 39.915}" :labelStyle="{color: 'red', fontSize : '24px'}" title="Hover me"/>-->


  </baidu-map>
</template>

<style>
.map {
width: 100%;
height: 900px;
}
</style>
