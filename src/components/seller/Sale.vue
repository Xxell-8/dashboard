<template>
  <div class="discount">
    <div class="select-box">
      <select 
        v-model="type"
        @change="changeYAxis"
      >
        <option 
          class="decorated"
          v-for="(type, idx) in typeOption"
          :value="type"
          :key="idx"
        >{{ type }}</option>
      </select>
    </div>
    <div class="sale" id="sale"></div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import * as am5 from "@amcharts/amcharts5/index";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_animated from "@amcharts/amcharts5/themes/Animated";

export default {
  name: 'Discount',
  data () {
    return {
      type: 'ProfitRatio',
      typeOption: [
        'Profit',
        'Sales',
        'ProfitRatio',
      ],
      series: null,
    }
  },
  methods: {
    changeYAxis () {
      this.$store.commit('SET_DISCOUNT_Y', this.type)
    }
  },
  computed: {
    ...mapGetters(['saleData']),
    ...mapState(['discountY'])
  },
  watch: {
    discountY () {
      this.series.data.setAll(this.saleData)
    }
  },
  mounted () {
    let root = am5.Root.new("sale");
    root.setThemes([
      am5themes_animated.new(root)
    ]);

    let chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: true,
      panY: true,
      wheelY: "zoomXY"
    }));

    let xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererX.new(root, {}),
      tooltip: am5.Tooltip.new(root, {})
    }));

    xAxis.children.moveValue(am5.Label.new(root, {
      text: "[bold]Discount(%)[/]",
      x: am5.p50,
      centerX: am5.p50
    }), xAxis.children.length - 1);

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {
        inversed: false
      }),
      tooltip: am5.Tooltip.new(root, {})
    }));

    this.series = chart.series.push(am5xy.LineSeries.new(root, {
      calculateAggregates: true,
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "y",
      valueXField: "x",
      valueField: "value",
      seriesTooltipTarget:"bullet",
      tooltip: am5.Tooltip.new(root, {
        pointerOrientation: "horizontal",
        labelText: "[bold]{category}({subCategory})[/]\nOrder Date: {date}\nProfit Ratio: {profitRatio}%\nProfit: ${profit}\nSales: ${sales}\nDiscount: {valueX}%"
      })
    }));

    this.series.strokes.template.set("visible", false);

    let circleTemplate = am5.Template.new({});
    circleTemplate.adapters.add("fill", function(fill, target) {
      let dataItem = target.dataItem;
      if (dataItem) {
        return am5.Color.fromString(dataItem.dataContext.color);
      }
      return fill
    });
    this.series.bullets.push(() => {
      let bulletCircle = am5.Circle.new(root, {
        radius: 5,
        fill: this.series.get("fill"),
        fillOpacity: 0.8,
      }, circleTemplate);
      return am5.Bullet.new(root, {
        sprite: bulletCircle
      });
    });

    this.series.set("heatRules", [{
      target: circleTemplate,
      min: 5,
      max: 5,
      dataField: "value",
      key: "radius"
    }]);

    this.series.data.setAll(this.saleData)

    chart.set("cursor", am5xy.XYCursor.new(root, {
      xAxis: xAxis,
      yAxis: yAxis,
      snapToSeries: [this.series]
    }));

    chart.set("scrollbarX", am5.Scrollbar.new(root, {
      orientation: "horizontal"
    }));

    chart.set("scrollbarY", am5.Scrollbar.new(root, {
      orientation: "vertical"
    }));

    this.series.appear(1000);
    chart.appear(1000, 100);
  }
}
</script>

<style>
  .discount {
    width: 100%;
    height: 100%;
    background: #F2EEEE;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: relative;
  }
  .sale {
    width: 100%;
    height: 100%;
  }
  .select-box {
    position: absolute;
    z-index: 10;
    top: 4rem;
    right: 4rem;
    width: fit-content;
    height: 2.4rem;
    background: #232334;
    color: #F43142;
    padding: 0 .7rem;
    border-radius: 1.2rem;
    display: flex;
    align-items: center;
  }
  select {
    border: none;
    outline: none;
    width: fit-content;
    min-width: 110px;
    height: 2rem;
    margin-left: .3rem;
    padding: 0 .3rem;
    background: #232334;
    color: #F43142;
    font-weight: 500;
    cursor: pointer;
    font-size: .9rem;
  }
  option:checked {
    background: #F43142;
    color: #232334;
  }
</style>