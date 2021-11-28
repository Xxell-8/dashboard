<template>
  <div class="region" id="region"></div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as am5 from "@amcharts/amcharts5/index";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_usaLow from "@amcharts/amcharts5-geodata/usaLow";
import am5themes_animated from "@amcharts/amcharts5/themes/Animated";

export default {
  name: 'Region',
  computed: {
    ...mapGetters(['regionData']),
  },
  mounted () {
    am5.ready(() => {
      const root = am5.Root.new("region")
      root.setThemes([
        am5themes_animated.new(root)
      ])

      var chart = root.container.children.push(
        am5map.MapChart.new(root, {
          projection: am5map.geoAlbersUsa()
        })
      )

      var polygonSeries = chart.series.push(
        am5map.MapPolygonSeries.new(root, {
          geoJSON: am5geodata_usaLow,
          valueField: "profit",
          calculateAggregates: true
        })
      )
      polygonSeries.mapPolygons.template.events.on('click', (ev) => {
        this.$store.commit('SET_REGION_ID', ev.target.dataItem.dataContext.id)
      })

      polygonSeries.mapPolygons.template.setAll({
        tooltipText: "[bold]{name}[/]\nprofit: ${profit}\nsales: ${sales}"
      });
      polygonSeries.set("heatRules", [{
        target: polygonSeries.mapPolygons.template,
        dataField: "value",
        min: am5.color(0x8A82E9),
        max: am5.color(0xF43142),
        key: "fill"
      }])
      polygonSeries.data.setAll(this.regionData)
      
    })
  }
}
</script>

<style scoped>
  .region {
    width: 100%;
    height: 400px;
    background: #F2EEEE;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
</style>