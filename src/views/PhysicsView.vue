<template>
  <div class="physics-container">
    <DataTable />
  </div>
</template>

<script>
import DataTable from '../components/DataTable.vue';

export default {
  name: 'PhysicsView',
  components: {
    DataTable,
  },
};
</script>

<style scoped>
.physics-container {
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 80vh;
}

/* Additional styles for DataTable can be added here if needed */
</style>
