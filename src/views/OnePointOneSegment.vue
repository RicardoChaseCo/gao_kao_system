<template>
  <div class="container">
    <div class="list-container">
      <div class="list">
        <div class="list-title">历史类一分一段</div>
        <a-table :columns="columns" :dataSource="dataSource" pagination={false} />
      </div>
      <div class="list">
        <div class="list-title">物理类一分一段</div>
        <a-table :columns="columns" :dataSource="dataSource" pagination={false} />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OnePointOneSegment',
  data() {
    return {
      columns: [
        {
          title: '分数段',
          dataIndex: 'scoreRange',
          key: 'scoreRange',
        },
        {
          title: '人数',
          dataIndex: 'count',
          key: 'count',
        },
      ],
      dataSource: [
        {
          key: '1',
          scoreRange: '700-750',
          count: 50,
        },
        {
          key: '2',
          scoreRange: '650-699',
          count: 100,
        },
        // Add more data as needed
      ],
    };
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
  background-color: #ffffff;
  min-height: 80vh;
}

.list-container {
  display: flex;
  justify-content: space-between;
}

.list {
  width: 48%;
  border: 1px solid #ccc;
}

.list-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.ant-table {
  background: white;
  border-radius: 8px;
  overflow: hidden;
}
</style>
