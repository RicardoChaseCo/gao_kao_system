<template>
  <div class="history-container">
    <div class="history-message">历史类数据待更新</div>
  </div>
</template>

<script>
export default {
  name: 'HistoryView',
};
</script>

<style scoped>
.history-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
  padding: 20px;
}

.history-message {
  font-size: 20px;
  color: #333;
  background-color: #fff;
  padding: 15px 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
