<template>
  <a-layout style="height: 100vh; overflow: hidden;">
    <a-layout-sider
      :style="{ display: isMobile || sidebarHidden ? 'none' : 'block' }"
      width="210"
      class="sider"
    >
      <AppSidebar :menu="menu" />
    </a-layout-sider>
    <a-layout>
      <AppHeader :sidebarHidden="sidebarHidden" @toggleSidebar="toggleSidebar" class="app-header"/>
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
      sidebarHidden: false,
      drawerVisible: false,
      isMobile: false,
      menu: [
        { header: '主页面', hiddenOnCollapse: true },
        { href: '/', title: '终端主页', icon: 'fa fa-desktop' },
        { header: '院校数据库', hiddenOnCollapse: true },
        { href: '/history', title: '历史类', icon: 'fa fa-cubes' },
        { href: '/physics', title: '物理类', icon: 'fa fa-rocket' },
        { header: '报考学生数据库', hiddenOnCollapse: true },
        { href: '/main', title: '报考信息数据库', icon: 'fa fa-database' },
        { header: '知识库', hiddenOnCollapse: true },
        { href: '/one-point-one-segment', title: '一分一段表', icon: 'fa fa-tags' },
        { href: '/subject-evaluation', title: '学科评估和双一流', icon: 'fa-graduation-cap' },
        { href: '/undergraduate-major', title: '本科专业', icon: 'fa fa-bars' },
        { href: '/junior-college-major', title: '专科专业', icon: 'fa fa-bars' },
      ],
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarHidden = !this.sidebarHidden;
    },
    handleResize() {
      this.isMobile = window.innerWidth <= 768;
      this.sidebarHidden = this.isMobile;
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
.sider {
  transition: all 0.3s;
}

a-layout {
  transition: margin-left 0.3s;
}

.app-header {
  position: fixed;
  width: 100%;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
  transition: margin-left 0.3s, width 0.3s;
}

.app-content {
  margin-top: 50px; /* Adjust according to your header height */
  padding: 24px;
  background: #ffffff;
  min-height: calc(100vh - 50px); /* Adjust according to your header height */
  overflow-y: auto;
}

.menu-button {
  display: none;
}


@media (max-width: 768px) {
  .menu-button {
    display: block;
    margin-top: 7px
  }
}


</style>
