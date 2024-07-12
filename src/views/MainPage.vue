<template>
  <div>
    <a-carousel autoplay>
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </a-carousel>
  </div>
  <div>
    <a-calendar v-model:value="value" @panelChange="onPanelChange" class="main-calendar"/>
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
.main-calendar {
  padding: 20px;
}

:deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #a9bee3;
  overflow: hidden;
}
:deep(.slick-slide h3) {
  color: #fff;
}
</style>
