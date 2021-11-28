<template>
  <div id="period" class="period"></div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as am5 from "@amcharts/amcharts5/index";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_animated from "@amcharts/amcharts5/themes/Animated";

export default {
  name: 'Period',
  computed: {
    ...mapGetters(['periodData']),
  },
  mounted() {
    am5.ready(() => {
      const root = am5.Root.new("period");
      root.setThemes([
        am5themes_animated.new(root)
      ])

      let chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panX: false,
          panY: false,
          wheelX: "panX",
          wheelY: "zoomX",
          layout: root.verticalLayout
        })
      )
      chart.set(
        "scrollbarX",
        am5.Scrollbar.new(root, {
          orientation: "horizontal"
        })
      );
      let xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(root, {
          categoryField: "month",
          renderer: am5xy.AxisRendererX.new(root, {}),
          tooltip: am5.Tooltip.new(root, {})
        })
      );
      xAxis.data.setAll(this.periodData);

      var yAxis0 = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererY.new(root, {})
        })
      );
      var yRenderer1 = am5xy.AxisRendererY.new(root, {
        opposite: true
      });
      yRenderer1.grid.template.set("forceHidden", true);
      var yAxis1 = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          numberFormat: "#'%'",
          renderer: yRenderer1,
        })
      );

      var seriesProfit = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: "Profit",
          xAxis: xAxis,
          yAxis: yAxis0,
          valueYField: "profit",
          categoryXField: "month",
          clustered: false,
          tooltip:am5.Tooltip.new(root, {
            pointerOrientation:"horizontal",
            labelText:"{name} in {categoryX}: ${valueY}"
          })
        })
      );
      seriesProfit.columns.template.set("width", am5.percent(40));

      var seriesSales = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: "Sales",
          xAxis: xAxis,
          yAxis: yAxis0,
          valueYField: "sales",
          categoryXField: "month",
          clustered: false,
          tooltip:am5.Tooltip.new(root, {
            pointerOrientation:"horizontal",
            labelText:"{name} in {categoryX}: ${valueY}"
          })
        })
      );
      seriesSales.columns.template.events.on('click', (ev) => {
        this.$store.commit('SET_MONTH', ev.target.dataItem.dataContext.month)
      })
      seriesSales.columns.template.setAll({
        width: am5.percent(60),
        fillOpacity: 0.5,
        strokeOpacity: 0
      });

      seriesProfit.data.setAll(this.periodData);
      seriesSales.data.setAll(this.periodData);

      var series3 = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: "Profit Ratio",
          xAxis: xAxis,
          yAxis: yAxis1,
          valueYField: "rate",
          categoryXField: "month",
          tooltip:am5.Tooltip.new(root, {
            pointerOrientation:"horizontal",
            labelText:"{name} in {categoryX}: {valueY}%"
          })    
        })
      );

      series3.strokes.template.setAll({
        strokeWidth: 3,
        templateField: "strokeSettings"
      });


      series3.data.setAll(this.periodData);

      series3.bullets.push(function () {
        return am5.Bullet.new(root, {
          sprite: am5.Circle.new(root, {
            strokeWidth: 3,
            stroke: seriesSales.get("stroke"),
            radius: 5,
            fill: root.interfaceColors.get("background")
          })
        });
      });

      chart.set("cursor", am5xy.XYCursor.new(root, {}));

      var legend = chart.children.push(
        am5.Legend.new(root, {
          centerX: am5.p50,
          x: am5.p50
        })
      );
      legend.data.setAll(chart.series.values);

      chart.appear(1000, 100);
      seriesProfit.appear(1000);
      seriesSales.appear(1000);

    });
  }
}
</script>

<style scoped>
  .period {
    height: 400px;
    background: #F2EEEE;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
</style>