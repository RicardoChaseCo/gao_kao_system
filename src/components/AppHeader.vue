<template>
  <a-layout-header class="app-header">
    <div class="header-content">
      <a-row :gutter="16" align="middle" class="header-row">
        <img src="@/assets/logo.png" alt="老姜高考" style="width: 170px;"/>
        <a-col>
          <div @click="$emit('toggleSidebar')" class="menu-icon">
            <MenuFoldOutlined v-if="!props.sidebarHidden" :style="{ fontSize: '24px', color: '#007bff'}" />
            <MenuUnfoldOutlined v-else :style="{ fontSize: '24px', color: '#007bff' }" />
          </div>
        </a-col>
        <a-col>
          考生姓名
          <input v-model="name" type="text" class="styled-input">
        </a-col>
        <a-col class="col-hidden">
          考生分数
          <input v-model="score" type="text" class="styled-input">
        </a-col>
        <a-col class="col-hidden">
          考生考号
          <input v-model="studentId" type="text" class="styled-input">
        </a-col>
        <a-col class="col-hidden">
          考生位次
          <input v-model="subject" type="text" class="styled-input">
        </a-col>
        <a-col class="styled-col compact-col">
          当前报考人: {{ name }} - {{ score }} - {{ studentId }} - {{ subject }}
        </a-col>
      </a-row>
      <div>
        <a-space size="large" class="header-row">
          <a-button type="primary" @click="setCandidate">设定报考人</a-button>
          <a-button type="primary" @click="createArchive">创建报考档案</a-button>
        </a-space>
      </div>
    </div>
  </a-layout-header>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { defineProps } from 'vue';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';
const props = defineProps({
  sidebarHidden: {
    type: Boolean,
    required: true
  }
});
const store = useStore();


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

const setCandidate = () => {
  alert('报考人信息输入成功');
};

const createArchive = () => {
  const name = store.state.studentInformation.name;

  if (!name) {
    alert('请先输入考生信息');
    return;
  }

  store.commit('addTableName', name);
  alert('报考档案创建成功');
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
  background-color: #f5f5f5; /* 确保背景色为浅色 */
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.styled-input {
  width: 100px;
  height: 40px;
  padding: 8px;
  font-size: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
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
  border: 1px solid #007bff;
  border-radius: 8px;
  font-size: 0.8rem;
  color: #333;
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-left: 20px;
}

.styled-col:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 123, 255, 0.3);
}

.styled-col span {
  font-weight: bold;
  color: #007bff;
}

.compact-col {
  padding: 4px;
  font-size: 0.8rem;
  line-height: 2;
}

@media (max-width: 1527px) and (min-width: 768px) {
  .compact-col {
    display: none;
  }
}

@media (max-width: 1311px) and (min-width: 768px) {
  .col-hidden {
    display: none;
  }
}

@media (min-width: 768px) {
  .header-logo {
    display: none;
  }
}

@media (max-width: 768px) {
  .header-logo {
    display: block;
    height: 60px;
  }

}

@media (max-width: 768px) {
  .styled-input,
  .styled-col,
  .compact-col {
    font-size: 0.8rem;
  }
  .header-row {
    display: none;
  }
}
</style>
