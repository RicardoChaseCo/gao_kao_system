<template>
  <div>
    <div>报考档案</div>
    <pre>{{ archivesList }}</pre>
    <div v-for="(archive, index) in archivesList" :key="archive.name" style="margin-bottom: 24px;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <h2>{{ archive.name }}</h2>
        <a-button type="danger" @click="deleteArchive(index)">删除</a-button>
      </div>
      <a-table :dataSource="archive.data" :columns="columns" :pagination="false" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaoKaoDanView',
  data() {
    return {
      archivesList: JSON.parse(localStorage.getItem('archivesList')) || [],
      columns: [
        {
          title: '院校名称',
          dataIndex: 'schoolName',
          key: 'schoolName',
        },
        {
          title: '专业名称',
          dataIndex: 'majorName',
          key: 'majorName',
        },
        {
          title: '省份',
          dataIndex: 'province',
          key: 'province',
        },
        {
          title: '分数',
          dataIndex: 'score',
          key: 'score',
        },
        {
          title: '操作',
          key: 'actions',
          dataIndex: 'actions',
        },
      ],
    };
  },
  methods: {
    deleteArchive(index) {
      this.archivesList.splice(index, 1);
      localStorage.setItem('archivesList', JSON.stringify(this.archivesList));
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
