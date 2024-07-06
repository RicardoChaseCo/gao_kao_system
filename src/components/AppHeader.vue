<template>
  <a-layout-header :style="{ marginLeft: collapsed ? '80px' : '110px', transition: 'margin-left 0.2s', background: '#fff', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }">
    <div>
      <a-row :gutter="16" align="middle">
        <a-col>考生姓名</a-col>
        <a-col>
          <a-input v-model="name" placeholder="姓名" style="width: 200px; padding-top: 10px; padding-bottom: 8px;" />
        </a-col>
        <a-col>考生分数</a-col>
        <a-col>
          <a-input v-model="score" placeholder="分数" style="width: 200px; padding-top: 10px; padding-bottom: 8px;" />
        </a-col>
        <a-col>
          当前报考人: {{ currentCandidate }}
        </a-col>
      </a-row>
    </div>
    <div>
      <a-space size="large">
        <a-button type="default" @click="setCandidate">设定报考人</a-button>
        <a-button type="primary" @click="createArchive">创建报考档案</a-button>
      </a-space>
    </div>
  </a-layout-header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      name: '',
      score: '',
      currentName: localStorage.getItem('currentName') || '',
      currentScore: localStorage.getItem('currentScore') || ''
    };
  },
  computed: {
    currentCandidate() {
      return `${this.currentName} - ${this.currentScore}`;
    }
  },
  methods: {
    setCandidate() {
      this.currentName = this.name;
      this.currentScore = this.score;
      localStorage.setItem('currentName', this.name);
      localStorage.setItem('currentScore', this.score);
    },
    createArchive() {
      const currentName = this.currentName;
      const currentScore = this.currentScore;
      const archiveName = `${currentName}${currentScore}`;
      let archivesList = JSON.parse(localStorage.getItem('archivesList')) || [];

      if (!archivesList.some(archive => archive.name === archiveName)) {
        archivesList.push({ name: archiveName, data: [] });
        localStorage.setItem('archivesList', JSON.stringify(archivesList));
        alert(`${archiveName} 的报考档案构建成功`);
      } else {
        alert(`${archiveName} 的报考档案已存在`);
      }
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
