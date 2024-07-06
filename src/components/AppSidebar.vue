<template>
  <SidebarMenu
    class="custom-sidebar-menu"
    :menu="menu"
    :collapsed="collapsed"
    hide-toggle
    theme="white-theme"
  >
    <template v-slot:header>
      <div style="padding: 10px; text-align: center;">
        <img src="@/assets/logo.png" alt="老姜高考" style="max-width: 80%; height: auto;" />
      </div>
    </template>
    <template v-slot:dropdown-icon="{ isOpen }">
      <span v-if="!isOpen">+</span>
      <span v-else>-</span>
    </template>
  </SidebarMenu>
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';

export default {
  name: 'AppSidebar',
  components: {
    SidebarMenu,
  },
  props: {
    menu: {
      type: Array,
      required: true,
    },
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.custom-sidebar-menu {
  width: 200px !important;
  max-width: 200px !important;
  --vsm-primary-color: #ffffff;
  --vsm-base-bg: #ffffff;
  --vsm-item-color: rgb(0, 0, 0);
  --vsm-item-active-color: #000000;
  --vsm-item-active-bg: #f0f0f0;
  --vsm-item-active-line-color: #f0f0f0;
  --vsm-item-open-color: #000000;
  --vsm-item-hover-color: #000000;
  --vsm-item-open-bg: #ffffff;
  --vsm-item-hover-bg: #a6a6a6;
  --vsm-icon-color: #000000;
  --vsm-icon-bg: #dfdfdf;
  --vsm-icon-active-color: #dd0808;
  --vsm-icon-active-bg: #f0f0f0;
  --vsm-icon-open-color: #b40808;
  --vsm-icon-open-bg: #d60909;
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
