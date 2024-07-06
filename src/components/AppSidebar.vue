<template>
  <SidebarMenu
    class="custom-sidebar-menu"
    :menu="menu"
    :collapsed="false"
    hide-toggle
    theme="white-theme"
  />
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
  },
};
</script>

<style scoped>
.custom-sidebar-menu {
  width: 200px !important;
  max-width: 200px !important;
}
</style>
