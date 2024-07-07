<template>
  <a-layout-header class="app-header">
    <div class="header-content">
      <div>
        <a-row :gutter="16" align="middle" class="header-row">
          <a-col>考生姓名</a-col>
          <a-col>
            <input v-model="name" type="text" class="styled-input">
          </a-col>
          <a-col>考生分数</a-col>
          <a-col>
            <input v-model="score" type="text" class="styled-input">
          </a-col>
          <a-col>考生考号</a-col>
          <a-col>
            <input v-model="studentId" type="text" class="styled-input">
          </a-col>
          <a-col>考生位次</a-col>
          <a-col>
            <input v-model="subject" type="text" class="styled-input">
          </a-col>
          <a-col class="styled-col compact-col">
            当前报考人: {{ name }} - {{ score }} - {{ studentId }} - {{ subject }}
          </a-col>
        </a-row>
      </div>
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
