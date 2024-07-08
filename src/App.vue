<template>
  <a-layout style="height: 100vh; overflow: hidden;">
    <a-layout-sider
      v-if="!isMobile"
      v-model:collapsed="collapsed"
      collapsible
      @update:collapsed="handleCollapse"
      width="210"
      :collapsed-width="80"
    >
      <AppSidebar :menu="menu" :collapsed="collapsed" />
    </a-layout-sider>
    <a-layout>
      <AppHeader :collapsed="collapsed" class="app-header" />
      <a-layout-content class="app-content">
        <router-view />
      </a-layout-content>
    </a-layout>
    <a-drawer
      v-if="isMobile"
      v-model:visible="drawerVisible"
      placement="left"
      closable
      :width="210"
      @close="drawerVisible = false"
    >
      <AppSidebar :menu="menu" />
    </a-drawer>
    <a-button
      v-if="isMobile"
      class="menu-button"
      type="primary"
      @click="toggleDrawer"
      style="position: fixed; top: 10px; right: 10px; z-index: 1001;"
    >
      <MenuOutlined />
    </a-button>
  </a-layout>
</template>

<script>
import AppSidebar from './components/AppSidebar.vue';
import AppHeader from './components/AppHeader.vue';
import { MenuOutlined } from '@ant-design/icons-vue';

export default {
  components: {
    AppSidebar,
    AppHeader,
    MenuOutlined,
  },
  data() {
    return {
      collapsed: false,
      drawerVisible: false,
      isMobile: false,
      menu: [
        { header: '主页面', hiddenOnCollapse: true },
        { href: '/', title: '终端主页', icon: 'fa fa-cloud' },
        { header: '院校数据库', hiddenOnCollapse: true },
        { href: '/history', title: '历史类', icon: 'fa fa-book' },
        { href: '/physics', title: '物理类', icon: 'fa fa-atom' },
        { header: '报考学生数据库', hiddenOnCollapse: true },
        { href: '/main', title: '报考信息数据库', icon: 'fa fa-file-alt' },
        { header: '知识库', hiddenOnCollapse: true },
        { href: '/one-point-one-segment', title: '一分一段表', icon: 'fa fa-table' },
        { href: '/subject-evaluation', title: '学科评估和双一流', icon: 'fa fa-star' },
        { href: '/undergraduate-major', title: '本科专业', icon: 'fa fa-paper-plane' },
        { href: '/junior-college-major', title: '专科专业', icon: 'fa fa-book-open' },
      ],
    };
  },
  methods: {
    handleCollapse(collapsed) {
      this.collapsed = collapsed;
    },
    handleResize() {
      this.isMobile = window.innerWidth <= 768;
    },
    toggleDrawer() {
      this.drawerVisible = !this.drawerVisible;
    },
  },
  mounted() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style scoped>
a-layout {
  transition: margin-left 0.2s;
}

a-layout-sider {
  transition: width 0.2s;
}

.app-header {
  position: fixed;
  width: 100%;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
  transition: margin-left 0.2s, width 0.2s;
}

.app-content {
  margin-top: 64px; /* Adjust according to your header height */
  padding: 24px;
  background: #fff;
  min-height: calc(100vh - 64px); /* Adjust according to your header height */
  overflow-y: auto;
}

.menu-button {
  display: none;
}

@media (min-width: 768px) {
  .app-header {
    margin-left: 210px;
    width: calc(100% - 210px);
  }
}

@media (max-width: 768px) {
  .menu-button {
    display: block;
  }
}
</style>
