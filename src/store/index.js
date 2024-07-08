import { createStore } from 'vuex';
import { useStorage } from '@vueuse/core';

const studentInformation = {
  name: '',
  score: 0,
  studentId: '0',
  subject: '0'
};

const storedStudentInformation = useStorage('student-information', studentInformation);
const storedTableNameList = useStorage('table-name-list', {});

const store = createStore({
  state() {
    return {
      studentInformation: storedStudentInformation.value,
      tablenamelist: storedTableNameList.value
    };
  },
  mutations: {
    setName(state, name) {
      state.studentInformation.name = name;
      storedStudentInformation.value = state.studentInformation;
    },
    setScore(state, score) {
      state.studentInformation.score = score;
      storedStudentInformation.value = state.studentInformation;
    },
    setStudentId(state, studentId) {
      state.studentInformation.studentId = studentId;
      storedStudentInformation.value = state.studentInformation;
    },
    setSubject(state, subject) {
      state.studentInformation.subject = subject;
      storedStudentInformation.value = state.studentInformation;
    },
    addToArchive(state, { name, record }) {
      if (!state.tablenamelist[name]) {
        throw new Error('没有找到当前报考人，请先构建档案');
      }
      state.tablenamelist[name].data.push(record);
      storedTableNameList.value = state.tablenamelist;
    },
    addTableName(state, name) {
      if (!state.tablenamelist[name]) {
        state.tablenamelist[name] = { data: [] };
        storedTableNameList.value = state.tablenamelist;
      }
    },
    deleteArchive(state, name) {
      delete state.tablenamelist[name];
      storedTableNameList.value = state.tablenamelist;
    }
  }
});

export default store;
