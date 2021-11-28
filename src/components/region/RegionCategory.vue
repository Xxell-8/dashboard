<template>
  <div class="region-category" id="region-category"></div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import * as am5 from "@amcharts/amcharts5/index";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_animated from "@amcharts/amcharts5/themes/Animated";

export default {
  name: 'RegionCategory',
  data () {
    return {
      chart: null,
      seriesInner: null,
      seriesOuter: null,
    }
  },
  computed: {
    ...mapGetters(['regionData']),
    ...mapState(['regionId']),
    targetData () {
      if (this.regionId) {
        return this.regionData.find(dt => {
          return dt.id === this.regionId
        })
      } else {
        return this.regionData[0]
      }
    },
  },
  watch: {
    regionId() {
      this.seriesInner.data.setAll(this.targetData.category)
      this.seriesOuter.data.setAll(this.targetData.category)
    }
  },
  mounted () {
    am5.ready(() => {
      const root = am5.Root.new("region-category");
      root.setThemes([
        am5themes_animated.new(root)
      ])
      this.chart = root.container.children.push(
        am5percent.PieChart.new(root, {
          startAngle: 170, endAngle: 370
        })
      )
      
      this.seriesInner = this.chart.series.push(
        am5percent.PieSeries.new(root, {
          categoryField: "name",
          valueField: "order",
          startAngle: 170,
          endAngle: 370,
          radius: am5.percent(70),
          innerRadius: am5.percent(65)
        })
      )
      this.seriesOuter = this.chart.series.push(
        am5percent.PieSeries.new(root, {
          categoryField: "name",
          valueField: "profit",
          startAngle: 170,
          endAngle: 370,
          innerRadius: am5.percent(80),
        })
      );
      let colorSet = am5.ColorSet.new(root, {
        colors: [this.seriesInner.get("colors").getIndex(4)],
        passOptions: {
          lightness: -0.2,
          hue: 0
        }
      })
      let tooltipInner = am5.Tooltip.new(root, {
        labelText: "[bold]{category}[/]\n{valueField}: {value}"
      });
      let tooltipOuter = am5.Tooltip.new(root, {
        labelText: "[bold]{category}[/]\n{valueField}: ${value}"
      });


      this.seriesInner.set("tooltip", tooltipInner);
      this.seriesInner.set("colors", colorSet);
      this.seriesInner.ticks.template.set("forceHidden", true);
      this.seriesInner.labels.template.set("forceHidden", true);
  
      this.seriesOuter.set("tooltip", tooltipOuter);
      this.seriesOuter.ticks.template.set("forceHidden", true);
      this.seriesOuter.labels.template.set("forceHidden", true);

      this.chart.seriesContainer.children.push(
        am5.Label.new(root, {
          textAlign: "center",
          centerY: am5.p100,
          centerX: am5.p50,
          text: "[fontSize:16px]Profit by[/]\n[bold fontSize:24px]Category[/]"
        })
      );
      this.seriesInner.data.setAll(this.targetData.category);
      this.seriesOuter.data.setAll(this.targetData.category);
    })
  }
    
}
</script>

<style>
  .region-category {
    width: 100%;
  }
</style>