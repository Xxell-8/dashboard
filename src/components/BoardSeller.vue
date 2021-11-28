<template>
  <div class="content default">
    <Sale/>
  </div>
</template>

<script>
import Sale from '@/components/seller/Sale'

export default {
  name: 'BoardCustomer',
  components: {
    Sale,
  },
}
</script>

<style scoped>
  .default {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .rank {
    flex: 1;
    background: #F2EEEE;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
</style>