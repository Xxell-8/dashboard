<template>
  <div class="board">
    <Navbar/>
    <BoardDefault v-if="!board"/>
    <BoardRegion v-if="board === 1"/>
    <BoardSeller v-if="board === 2"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Navbar from '@/components/Navbar'
import BoardDefault from '@/components/BoardDefault'
import BoardRegion from '@/components/BoardRegion'
import BoardSeller from '@/components/BoardSeller'

export default {
  name: 'Dashboard',
  components: {
    Navbar,
    BoardDefault,
    BoardRegion,
    BoardSeller
  },
  computed: {
    ...mapState(['board'])
  }
}
</script>

<style scoped>
  .board {
    padding: 20px;
    height: 100%;
    display: grid;
    grid-template-columns: 5rem 1fr;
    gap: 1rem;
  }
  .board div {
    width: 100%;
  }
  .content {
    padding: 10px 50px 10px 0;
  }
</style>
