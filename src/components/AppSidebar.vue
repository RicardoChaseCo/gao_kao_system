<template>
  <SidebarMenu
    class="custom-sidebar-menu"
    :menu="menu"
    :collapsed="collapsed"
    hide-toggle
    theme="white-theme"
    @item-click="onItemClick"
  >
    <!-- <template v-slot:header>
      <div class="sidebar-header">
        <img src="@/assets/logo.png" alt="老姜高考" class="sidebar-logo" />
      </div>
    </template> -->
    <template v-slot:dropdown-icon="{ isOpen }">
      <span v-if="!isOpen">+</span>
      <span v-else>-</span>
    </template>
  </SidebarMenu>
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';
import { useRouter } from 'vue-router';

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
  setup() {
    const router = useRouter();

    const onItemClick = (item) => {
      if (item.href) {
        router.push(item.href);
      }
    };

    return {
      onItemClick,
    };
  },
};
</script>

<style scoped>
.custom-sidebar-menu {
  width: 180px !important;
  max-width: 180px !important;
  margin-top: 64px;
  --vsm-primary-color: #ffffff;
  --vsm-base-bg: #f5f5f5;
  --vsm-item-color: #000000;
  --vsm-item-active-color: #3875f6;
  --vsm-item-active-bg: #f5f5f5;
  --vsm-item-active-line-color: #3875f6;
  --vsm-item-open-color: #000000;
  --vsm-item-hover-color: #3875f6;
  --vsm-item-open-bg: #ffffff;
  --vsm-item-hover-bg: #f5f5f5;
  --vsm-icon-color: rgb(76, 76, 76);
  --vsm-icon-bg: #f5f5f5;
  --vsm-icon-active-color: #3875f6;
  --vsm-icon-active-bg: #ebebeb;
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
  --vsm-item-font-size: 0.85rem;
  --vsm-icon-height: 20px;
  --vsm-icon-width: 20px;

  border-right: 1px solid #ddd;
  margin-right: 10px;
}

.sidebar-header {
  padding: 20px;
  text-align: center;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
}

.sidebar-logo {
  max-width: 100%;
  height: auto;
}
</style>
