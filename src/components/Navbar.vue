<template>
  <div class="nav">
    <div class="nav-item" @click="changeBoard(0)">
      <i class="fi fi-rr-chart-histogram"></i>
      <span>Period</span>
    </div>
    <div class="nav-item" @click="changeBoard(1)">
      <i class="fi fi-rr-map-marker"></i>
      <span>Region</span>
    </div>
    <div class="nav-item" @click="changeBoard(2)">
      <i class="fi fi-rr-earnings rotate-180"></i>
      <span>Discount</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    changeBoard (num) {
      this.$store.commit('SET_BOARD', num)
    }
  }
}
</script>

<style scoped>
  .nav {
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    
    background: linear-gradient(120deg, rgba(244,49,66,1) 60%, rgba(254,115,6,1) 100%);
    color: #fff;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .nav-item {
    display: grid;
    text-align: center;
    cursor: pointer;
  }
  .nav-item i {
    font-size: 1.8rem;
  }
  .nav-item span {
    cursor: pointer;
    font-size: .8rem;
  }
  .rotate-180 {
    transform: rotate(180deg);
  }
</style>