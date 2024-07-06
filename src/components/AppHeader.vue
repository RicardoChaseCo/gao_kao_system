<template>
  <a-layout-header :style="{ marginLeft: collapsed ? '80px' : '200px', transition: 'margin-left 0.2s', background: '#fff', padding: '0 24px' }">
    <div>
      <a-input v-model="name" placeholder="姓名" style="width: 200px; margin-right: 20px;" />
      <a-input-number v-model="score" placeholder="分数" :min="0" :max="750" />
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
