<template>
  <a-layout-header class="app-header">
    <div class="header-content">
      <a-row :gutter="16" align="middle" class="header-row">
        <img class="header-logo" src="@/assets/logo.png" alt="老姜高考" style="width: 170px; height: 100%" />
        <a-col>
          <div @click="$emit('toggleSidebar')" class="menu-icon">
            <MenuFoldOutlined v-if="!props.sidebarHidden" :style="{ fontSize: '20px', color: '#007bff' }" />
            <MenuUnfoldOutlined v-else :style="{ fontSize: '20px', color: '#007bff' }" />
          </div>
        </a-col>
      </a-row>
      <div>
        <a-space size="large" class="header-row" style="display: flex; align-items: center;">
          <a-col class="styled-col compact-col"
            style="font-size: 0.8rem; margin-top: 1.5px; padding-left: 10px; padding-right: 10px; background-color: #ecf1fe; color: #285df6;">
            <a-avatar size="small">
              <template #icon>
                <UserOutlined />
              </template>
            </a-avatar>
            当前报考人 : {{ name }}
          </a-col>
          <a-col>
            <a-dropdown :visible="dropdownVisible">
              <a-button @click="toggleDropdown" class="dropdown-button" style="font-size: 0.8rem; margin-top: 1.5px; ">
                输入考生信息
                <DownOutlined v-if="!dropdownVisible" />
                <UpOutlined v-else />
              </a-button>
              <template #overlay>
                <a-menu class="dropdown-menu">
                  <a-menu-item>
                    <span
                      style="font-size: 0.8rem; margin-right: 10px; display: inline-block; border-bottom: 2px solid blue; padding-bottom: 2px; width: fit-content;">
                      考生姓名
                    </span>
                    <input v-model="name" type="text" class="styled-input">
                  </a-menu-item>
                  <a-menu-item>
                    <span
                      style="font-size: 0.8rem; margin-right: 10px; display: inline-block; border-bottom: 2px solid blue; padding-bottom: 2px; width: fit-content;">考生分数</span>
                    <input v-model="score" type="text" class="styled-input">
                  </a-menu-item>
                  <a-menu-item>
                    <span
                      style="font-size: 0.8rem; margin-right: 10px; display: inline-block; border-bottom: 2px solid blue; padding-bottom: 2px; width: fit-content;">考生考号</span>
                    <input v-model="studentId" type="text" class="styled-input">
                  </a-menu-item>
                  <a-menu-item>
                    <span
                      style="font-size: 0.8rem; margin-right: 10px; display: inline-block; border-bottom: 2px solid blue; padding-bottom: 2px; width: fit-content;">考生位次</span>
                    <input v-model="subject" type="text" class="styled-input">
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>

          </a-col>
          <a-button class="set-button" @click="setCandidate"
            style="font-size: 0.8rem; background-color: #f5f5f5;">设定报考人</a-button>
          <a-button class="set-button" @click="createArchive"
            style="font-size: 0.8rem; background-color: #f5f5f5;">创建报考档案</a-button>
          <a-avatar style="color: #f56a00; background-color: #fde3cf" class="avatar">姜</a-avatar>
        </a-space>
      </div>
    </div>
  </a-layout-header>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { defineProps } from 'vue';
import { MenuFoldOutlined, MenuUnfoldOutlined, DownOutlined, UpOutlined, UserOutlined } from '@ant-design/icons-vue';
import { notification } from 'ant-design-vue';

const props = defineProps({
  sidebarHidden: {
    type: Boolean,
    required: true
  }
});

const store = useStore();
const dropdownVisible = ref(false);

const name = computed({
  get: () => store.state.studentInformation.name,
  set: value => store.commit('setName', value)
});
const score = computed({
  get: () => store.state.studentInformation.score,
  set: value => store.commit('setScore', value)
});
const studentId = computed({
  get: () => store.state.studentInformation.studentId,
  set: value => store.commit('setStudentId', value)
});
const subject = computed({
  get: () => store.state.studentInformation.subject,
  set: value => store.commit('setSubject', value)
});

const openNotificationBaoKao = (studentName) => {
  notification.open({
    message: '设定报考人',
    description: `报考人已被设置为 ${studentName} 。`,
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};

const openNotificationDangAn = (studentName) => {
  notification.open({
    message: '创建报考档案',
    description: `${studentName} 已经被添加到报考信息数据库。`,
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};

const setCandidate = () => {
  openNotificationBaoKao(name.value);
};

const createArchive = () => {
  const name = store.state.studentInformation.name;

  if (!name) {
    alert('请先输入考生信息');
    return;
  }

  store.commit('addTableName', name);
  openNotificationDangAn(name.value);
};

const toggleDropdown = () => {
  dropdownVisible.value = !dropdownVisible.value;
};


</script>

<style scoped>
.menu-icon {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.app-header {
  border-bottom: 1px solid #ddd;
  background-color: #ffffff;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  height: 50px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
}

.styled-input {
  width: 100px;
  height: 40px;
  padding: 8px;
  font-size: 0.8rem;
  border: 1px solid #ccc;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.styled-input:hover {
  border-color: #007bff;
}

.styled-input:focus {
  border-color: #007bff;
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
  outline: none;
}

.styled-input::placeholder {
  color: #aaa;
  font-style: italic;
}

.styled-col {
  border: 1px solid #dbdbdb;
  color: #333;
  background-color: #f5f5f5;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.styled-col:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 123, 255, 0.3);
}


.compact-col {
  padding: 4px;
  font-size: 0.7rem;
  line-height: 2;
}

.dropdown-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #007bff;
  background-color: #ffffff;
  color: #007bff;
  padding: 4px 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dropdown-button:hover {
  background-color: #007bff;
  color: #ffffff;
}

.dropdown-menu {
  padding: 12px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.dropdown-menu .a-menu-item {
  display: flex;
  flex-direction: column;
  padding: 8px 12px;
}

.dropdown-menu .a-menu-item span {
  font-size: 0.8rem;
  margin-bottom: 4px;
}

@media (max-width: 993px) {
  .compact-col {
    display: none;
  }
}

@media (max-width: 768px) {

  /* .header-row {
    display: none;
  } */

  .dropdown-button {
    display: none;
  }

  .set-button {
    display: none;
  }

  .menu-icon {
    display: none;
  }

  .avatar {
    display: none;
  }
}
</style>
