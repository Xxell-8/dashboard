<template>
  <div class="content default">
    <div class="top">
      <div class="region-info">
        <div class="state">{{ targetData.name }}</div>
        <div class="detail">
          <span>Profit: <strong>${{ targetData.profit }}</strong></span>
          <span>Sales: <strong>${{ targetData.sales }}</strong></span>
          <span>Customer: <strong>{{ customerCnt }}</strong></span>
          <span>Order: <strong>{{ targetData.order }}</strong></span>
        </div>
      </div>
      <Region/>
    </div>
    <div class="bottom">
      <span class="region-title">
        {{ targetData.name }}
      </span>
      <RegionCategory/>
      <RegionSegment/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Region from '@/components/region/Region'
import RegionCategory from '@/components/region/RegionCategory'
import RegionSegment from '@/components/region/RegionSegment'

export default {
  name: 'BoardRegion',
  components: {
    Region,
    RegionCategory,
    RegionSegment,
  },
  computed: {
    ...mapState(['regionId']),
    ...mapGetters(['regionData']),
    targetData () {
      if (this.regionId) {
        return this.regionData.find(dt => {
          return dt.id === this.regionId
        })
      } else {
        return this.regionData[0]
      }
    },
    customerCnt () {
      return this.targetData.segment.reduce((acc, dt) => {
        return acc + dt.cnt
      }, 0)
    }
  }
}
</script>

<style scoped>
  .default {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .top {
    position: relative;
  }
  .region-info {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.15);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: .5rem 1rem;
    border-radius: 10px;
    color: #232334;
  }
  .region-info .state {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 900;
    margin-bottom: .2rem;
  }
  .region-info .detail {
    display: flex;
    flex-direction: column;
    gap: .1rem;
  }
  .bottom {
    flex: 1;
    display: flex;
    gap: 1rem;
    background: #F2EEEE;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: relative;
  }
  .region-title {
    position: absolute;
    top: -2rem;
    left: 50%;
    transform: translate(-50%);
    color: white;
    margin: 0;
    font-size: 1.2rem;
    font-weight: 700;
    padding: .5rem 3rem;
    border-radius: 2rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: linear-gradient(120deg,#232334 40%, #13131f 100%);
  }
</style>