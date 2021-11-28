<template>
  <div class="content default">
    <Period/>
    <div class="bottom">
      <span class="month-title">
        {{ selectedMonth }}
      </span>
      <Category/>
      <Segment/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Category from '@/components/default/Category'
import Period from '@/components/default/Period'
import Segment from '@/components/default/Segment'

export default {
  name: 'BoardDefault',
  components: {
    Category,
    Period,
    Segment,
  },
  computed: {
    ...mapState(['month']),
    selectedMonth () {
      if (this.month) {
        return this.month
      } else {
        return 'Total'
      }
    },
  }
}
</script>

<style scoped>
  .default {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .bottom {
    display: flex;
    flex: 1;
    gap: 1rem;
    background: #F2EEEE;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: relative;
  }
  .month-title {
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