<template>
  <div class="container">
    <div v-for="(archive, name) in tablenamelist" :key="name" style="margin-bottom: 24px;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <h2>{{ name }}</h2>
        <div>
          <a-button type="primary" @click="exportToExcel(name)">导出为 Excel</a-button>
          <a-button type="danger" @click="handleDeleteArchive(name)">删除</a-button>
        </div>
      </div>
      <a-table :dataSource="archive.data" :columns="columns" :pagination="false" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import * as XLSX from 'xlsx';

export default {
  name: 'BaoKaoDanView',
  computed: {
    ...mapState(['tablenamelist']),
  },
  methods: {
    ...mapMutations(['deleteArchive']),
    handleDeleteArchive(name) {
      this.deleteArchive(name);
    },
    exportToExcel(name) {
      const archive = this.tablenamelist[name];
      if (!archive || !archive.data || archive.data.length === 0) {
        alert('没有数据可导出');
        return;
      }

      // 创建工作簿
      const wb = XLSX.utils.book_new();

      // 将数据转换为工作表
      const ws = XLSX.utils.json_to_sheet(archive.data);

      // 添加工作表到工作簿
      XLSX.utils.book_append_sheet(wb, ws, name);

      // 导出 Excel 文件
      XLSX.writeFile(wb, `${name}.xlsx`);
    }
  },
  data() {
    return {
      columns: [
        { title: '院校名称', dataIndex: 'schoolName', key: 'schoolName' },
        { title: '专业名称', dataIndex: 'majorName', key: 'majorName' }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  padding: 20px;
  background-color: #ffffff;
  min-height: 80vh;
}
</style>
