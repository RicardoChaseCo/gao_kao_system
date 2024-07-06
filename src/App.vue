<template>
  <a-layout style="height: 100vh">
    <a-layout-sider
      v-model:collapsed="collapsed"
      collapsible
      @update:collapsed="handleCollapse"
      width="90"
      :collapsed-width="80"
    >
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
          header: true,
          title: 'Menu',
        },
        {
          href: '/history',
          title: '历史类',
          icon: 'book',
        },
        {
          href: '/physics',
          title: '物理类',
          icon: 'experiment',
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

/* Custom styles for vue-sidebar-menu */
.v-sidebar-menu {
  --vsm-primary-color: #ffffff;
  --vsm-base-bg: #ffffff;
  --vsm-item-color: #000000;
  --vsm-item-active-color: #000000;
  --vsm-item-active-bg: #f0f0f0;
  --vsm-item-active-line-color: #f0f0f0;
  --vsm-item-open-color: #000000;
  --vsm-item-hover-color: #000000;
  --vsm-item-open-bg: #ffffff;
  --vsm-item-hover-bg: #f0f0f0;
  --vsm-icon-color: #000000;
  --vsm-icon-bg: #ffffff;
  --vsm-icon-active-color: #000000;
  --vsm-icon-active-bg: #f0f0f0;
  --vsm-icon-open-color: #000000;
  --vsm-icon-open-bg: #ffffff;
  --vsm-mobile-item-color: #000000;
  --vsm-mobile-item-bg: #ffffff;
  --vsm-mobile-icon-color: #000000;
  --vsm-mobile-icon-bg: #ffffff;
  --vsm-dropdown-bg: #ffffff;
  --vsm-header-item-color: #000000;
  --vsm-toggle-btn-color: #000000;
  --vsm-toggle-btn-bg: #ffffff;
}
</style>
