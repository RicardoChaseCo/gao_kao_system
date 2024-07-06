<template>
  <a-layout-header :style="{ marginLeft: collapsed ? '80px' : '110px', transition: 'margin-left 0.2s', background: '#fff', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }">
    <div>
      <a-row :gutter="16" align="middle">
        <a-col>
          考生姓名
        </a-col>
        <a-col>
          <a-input v-model="name" placeholder="姓名" style="width: 200px;padding-top: 10px;padding-bottom: 8px;" />
        </a-col>
        <a-col>
          考生分数
        </a-col>
        <a-col>
          <a-input v-model="score" placeholder="分数" style="width: 200px;padding-top: 10px;padding-bottom: 8px;" />
        </a-col>
      </a-row>
    </div>
    <div>
      <!-- 添加更多信息的示例 -->
      <a-space size="large">
        <a-button type="primary">创建报考档案</a-button>
      </a-space>
    </div>
  </a-layout-header>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'AppHeader',
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState(['name', 'score']),
  },
  methods: {
    ...mapMutations(['setName', 'setScore']),
  },
  watch: {
    name(val) {
      this.setName(val);
    },
    score(val) {
      this.setScore(val);
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
