<template>
  <a-layout style="height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible @update:collapsed="handleCollapse" width="90"
      :collapsed-width="80">
      <AppSidebar :menu="menu" :collapsed="collapsed" @update:collapsed="handleCollapse" />
    </a-layout-sider>
    <a-layout>
      <AppHeader :collapsed="collapsed" />
      <a-layout-content :style="{ marginLeft: collapsed ? '80px' : '110px', transition: 'margin-left 0.2s' }">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import AppSidebar from './components/AppSidebar.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppSidebar,
    AppHeader,
  },
  data() {
    return {
      collapsed: false,
      menu: [
        {
          header: '院校数据库',
        },

            {
              href: '/history',
              title: '历史类',
              icon: 'database',
            },
            {
              href: '/physics',
              title: '物理类',
              icon: 'database',
            },

        {
          header: '个人报考档案',
        },
        {
          href: '/main',
          title: '报考档案',
          icon: 'file',
        },
        {
          header: '知识库',
        },

            {
              href: '/one-point-one-segment',
              title: '一分一段表',
              icon: 'file-alt',
            },
            {
              href: '/subject-evaluation',
              title: '学科评估和双一流',
              icon: 'file-alt',
            },
            {
              href: '/undergraduate-major',
              title: '本科专业大全',
              icon: 'file-alt',
            },
            {
              href: '/junior-college-major',
              title: '专科专业大全',
              icon: 'file-alt',
            },

      ],
    };
  },
  methods: {
    handleCollapse(collapsed) {
      this.collapsed = collapsed;
    },
  },
};
</script>

<style>
a-layout {
  transition: margin-left 0.2s;
}

a-layout-sider {
  transition: width 0.2s;
}

a-layout-content {
  padding: 24px;
  background: #fff;
  min-height: 280px;
}
</style>
