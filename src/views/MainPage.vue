<template>
  <div>
    <a-calendar v-model:value="value" @panelChange="onPanelChange" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
const value = ref();
const onPanelChange = (value, mode) => {
  console.log(value, mode);
};
</script>

<script>
export default {
  name: 'MainPage',
};
</script>

<style scoped>
/* Add your styles here */
</style>
