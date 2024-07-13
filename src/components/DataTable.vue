<template class="data-table-container">
    <div>
        <div style="display: flex;">
            <div style="margin-bottom: 10px;">
                <a-button type="primary" @click="clearFilters" style="font-size: 0.8rem; width: 100px;">清除筛选</a-button>
            </div>
            <div class="filter-text-and-icon">
            <AppstoreTwoTone style="font-size: 25px; margin-top: 5px; margin-bottom: 5px; margin-left: 10px;" />
            <div class="filter-text-main">
                当前筛选条件：
            </div>
        </div>
            <div style="margin-bottom: 10px;">
                <template v-if="filterDescription.length > 0">
                    <span v-for="(desc, index) in filterDescription" :key="index" class="filter-item">
                        <span class="filter-text">{{ desc.key }}: {{ desc.value }}</span>
                    </span>
                </template>
                <template v-else >
                    <span class="filter-item">
                        <span class="filter-text">None</span>
                    </span>
                </template>
            </div>

        </div>
        <div style="height: 1px; background-color: #ebebeb;">
        </div>
        <form @submit.prevent="handleFilter" class="filter-form">
            <div class="form-item">
                <p>批次</p>
                <select id="batch" v-model="selectedBatch" @change="updateBatch">
                    <option value="提前批本科">提前批本科</option>
                    <option value="普通批本科">普通批本科</option>
                    <option value="提前批专科">提前批专科</option>
                    <option value="普通批专科">普通批专科</option>
                </select>
            </div>
            <div class="form-item">
                <p>再选</p>
                <select id="subjectType" v-model="selectedSubjectType" @change="updateSubjectType">
                    <option value="化学">化学</option>
                    <option value="不限">不限</option>
                </select>
            </div>
            <div class="form-item">
                <p>省份</p>
                <select id="province" v-model="selectedProvince" multiple @change="updateProvince"
                    style="height: 70px;">
                    <option value="河北省">河北省</option>
                    <option value="山西省">山西省</option>
                    <option value="辽宁省">辽宁省</option>
                    <option value="吉林省">吉林省</option>
                    <option value="黑龙江省">黑龙江省</option>
                    <option value="江苏省">江苏省</option>
                    <option value="浙江省">浙江省</option>
                    <option value="安徽省">安徽省</option>
                    <option value="福建省">福建省</option>
                    <option value="江西省">江西省</option>
                    <option value="山东省">山东省</option>
                    <option value="河南省">河南省</option>
                    <option value="湖北省">湖北省</option>
                    <option value="湖南省">湖南省</option>
                    <option value="广东省">广东省</option>
                    <option value="海南省">海南省</option>
                    <option value="四川省">四川省</option>
                    <option value="贵州省">贵州省</option>
                    <option value="云南省">云南省</option>
                    <option value="陕西省">陕西省</option>
                    <option value="甘肃省">甘肃省</option>
                    <option value="青海省">青海省</option>
                    <option value="台湾省">台湾省</option>
                    <option value="内蒙古自治区">内蒙古自治区</option>
                    <option value="广西自治区">广西自治区</option>
                    <option value="西藏自治区">西藏自治区</option>
                    <option value="宁夏自治区">宁夏自治区</option>
                    <option value="新疆自治区">新疆自治区</option>
                    <option value="北京市">北京市</option>
                    <option value="天津市">天津市</option>
                    <option value="上海市">上海市</option>
                    <option value="重庆市">重庆市</option>
                    <option value="香港">香港</option>
                    <option value="澳门">澳门</option>
                </select>
            </div>
            <div class="form-item">
                <p>公办民办</p>
                <select id="type" v-model="selectedType" multiple @change="updateType" style="height: 70px;">
                    <option value="公办">公办</option>
                    <option value="民办">民办</option>
                    <option value="合作办学">合作办学</option>
                    <option value="军委直属院校">军委直属院校</option>
                    <option value="军兵种院校">军兵种院校</option>
                </select>
            </div>
            <div class="form-item">
                <p>专业类</p>
                <select id="majorType" v-model="selectedMajorType" multiple @change="updateMajorType"
                    style="height: 70px;">
                    <option value="中医学类">中医学类</option>
                    <option value="中国语言文学类">中国语言文学类</option>
                    <option value="中药学类">中药学类</option>
                    <option value="中西医结合类">中西医结合类</option>
                    <option value="临床医学类">临床医学类</option>
                    <option value="交通运输类">交通运输类</option>
                    <option value="仪器类">仪器类</option>
                    <option value="体育学类">体育学类</option>
                    <option value="健康管理与促进类">健康管理与促进类</option>
                    <option value="公共卫生与预防医学类">公共卫生与预防医学类</option>
                    <option value="公共服务类">公共服务类</option>
                    <option value="公共管理类">公共管理类</option>
                    <option value="公安学类">公安学类</option>
                    <option value="公安技术类">公安技术类</option>
                    <option value="兵器类">兵器类</option>
                    <option value="农业工程类">农业工程类</option>
                    <option value="农业经济管理类">农业经济管理类</option>
                    <option value="力学类">力学类</option>
                    <option value="动物医学类">动物医学类</option>
                    <option value="动物生产类">动物生产类</option>
                    <option value="化学类">化学类</option>
                    <option value="化工与制药类">化工与制药类</option>
                    <option value="化工技术类">化工技术类</option>
                    <option value="医学技术类">医学技术类</option>
                    <option value="印刷类">印刷类</option>
                    <option value="历史学类">历史学类</option>
                    <option value="口腔医学类">口腔医学类</option>
                    <option value="哲学类">哲学类</option>
                    <option value="图书情报与档案管理类">图书情报与档案管理类</option>
                    <option value="土建施工类">土建施工类</option>
                    <option value="土木类">土木类</option>
                    <option value="地球物理学类">地球物理学类</option>
                    <option value="地理科学类">地理科学类</option>
                    <option value="地质学类">地质学类</option>
                    <option value="地质类">地质类</option>
                    <option value="基础医学类">基础医学类</option>
                    <option value="外国语言文学类">外国语言文学类</option>
                    <option value="大气科学类">大气科学类</option>
                    <option value="天文学类">天文学类</option>
                    <option value="安全科学与工程类">安全科学与工程类</option>
                    <option value="少数民族预科班">少数民族预科班</option>
                    <option value="工业工程类">工业工程类</option>
                    <option value="工商管理类">工商管理类</option>
                    <option value="康复治疗类">康复治疗类</option>
                    <option value="建筑类">建筑类</option>
                    <option value="建筑设备类">建筑设备类</option>
                    <option value="建筑设计类">建筑设计类</option>
                    <option value="建设工程管理类">建设工程管理类</option>
                    <option value="心理学类">心理学类</option>
                    <option value="戏剧与影视学类">戏剧与影视学类</option>
                    <option value="护理学类">护理学类</option>
                    <option value="护理类">护理类</option>
                    <option value="政治学类">政治学类</option>
                    <option value="教育学类">教育学类</option>
                    <option value="数学类">数学类</option>
                    <option value="新闻传播学类">新闻传播学类</option>
                    <option value="旅游管理类">旅游管理类</option>
                    <option value="机械类">机械类</option>
                    <option value="机械设计制造类">机械设计制造类</option>
                    <option value="机电设备类">机电设备类</option>
                    <option value="材料类">材料类</option>
                    <option value="林业工程类">林业工程类</option>
                    <option value="林学类">林学类</option>
                    <option value="核工程类">核工程类</option>
                    <option value="植物生产类">植物生产类</option>
                    <option value="气象类">气象类</option>
                    <option value="水上运输类">水上运输类</option>
                    <option value="水产类">水产类</option>
                    <option value="水利类">水利类</option>
                    <option value="汽车制造类">汽车制造类</option>
                    <option value="法医学类">法医学类</option>
                    <option value="法学类">法学类</option>
                    <option value="测绘类">测绘类</option>
                    <option value="海洋工程类">海洋工程类</option>
                    <option value="海洋科学类">海洋科学类</option>
                    <option value="煤炭类">煤炭类</option>
                    <option value="物流管理与工程类">物流管理与工程类</option>
                    <option value="物流类">物流类</option>
                    <option value="物理学类">物理学类</option>
                    <option value="环境保护类">环境保护类</option>
                    <option value="环境科学与工程类">环境科学与工程类</option>
                    <option value="生物医学工程类">生物医学工程类</option>
                    <option value="生物工程类">生物工程类</option>
                    <option value="生物科学类">生物科学类</option>
                    <option value="电子信息类">电子信息类</option>
                    <option value="电子商务类">电子商务类</option>
                    <option value="电气类">电气类</option>
                    <option value="石油与天然气类">石油与天然气类</option>
                    <option value="矿业类">矿业类</option>
                    <option value="社会学类">社会学类</option>
                    <option value="管理科学与工程类">管理科学与工程类</option>
                    <option value="粮食类">粮食类</option>
                    <option value="纺织类">纺织类</option>
                    <option value="经济与贸易类">经济与贸易类</option>
                    <option value="经济学类">经济学类</option>
                    <option value="统计学类">统计学类</option>
                    <option value="美术学类">美术学类</option>
                    <option value="能源动力类">能源动力类</option>
                    <option value="自动化类">自动化类</option>
                    <option value="自然保护与环境生态类">自然保护与环境生态类</option>
                    <option value="航空航天类">航空航天类</option>
                    <option value="航空装备类">航空装备类</option>
                    <option value="航空运输类">航空运输类</option>
                    <option value="艺术学理论类">艺术学理论类</option>
                    <option value="草学类">草学类</option>
                    <option value="药品与医疗器械类">药品与医疗器械类</option>
                    <option value="药学类">药学类</option>
                    <option value="计算机类">计算机类</option>
                    <option value="设计学类">设计学类</option>
                    <option value="试验班类">试验班类</option>
                    <option value="财务会计类">财务会计类</option>
                    <option value="财政学类">财政学类</option>
                    <option value="财政税务类">财政税务类</option>
                    <option value="轻工类">轻工类</option>
                    <option value="边防军人子女预科班">边防军人子女预科班</option>
                    <option value="道路运输类">道路运输类</option>
                    <option value="金融学类">金融学类</option>
                    <option value="食品科学与工程类">食品科学与工程类</option>
                    <option value="香港的大学专业">香港的大学专业</option>
                    <option value="马克思主义理论类">马克思主义理论类</option>
                    <option value="黑色金属材料类">黑色金属材料类</option>
                </select>
            </div>
            <div class="form-item">
                <p>专业名称</p>
                <select id="majorName" v-model="selectedMajorName" @change="updateMajorName">
                    <!-- 动态添加专业名称 -->
                </select>
            </div>
            <div class="form-item">
                <p>分数下界</p>
                <input type="number" id="minScore" v-model="minScore" @change="updateMinScore" />
            </div>
            <div class="form-item">
                <p>分数上界</p>
                <input type="number" id="maxScore" v-model="maxScore" @change="updateMaxScore" />
            </div>
        </form>
        <div style="height: 1px; background-color: #ebebeb; margin-bottom: 10px;">
        </div>

        <a-table :columns="columns" :dataSource="filteredData" :scroll="{ x: 2000, y: 850 }" size="small"
            class="custom-table">
            <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'schoolName'">
                    <a class="custom-font">{{ record['院校名称'] }}</a>
                </template>
                <template v-else-if="column.key === 'majorName'">
                    <span class="custom-font">{{ record['专业名称'] }}</span>
                </template>
                <template v-else-if="column.key === 'province'">
                    <span class="custom-font">{{ record['省市自治区'] }}</span>
                </template>
                <template v-else-if="column.key === 'score'">
                    <span class="custom-font">{{ record['2023年投档线'] }}</span>
                </template>
                <template v-else-if="column.key === 'type'">
                    <span class="custom-font">{{ record['办学性质备注'] }}</span>
                </template>
                <template v-else-if="column.key === 'majorType'">
                    <span class="custom-font">{{ record['专业类'] }}</span>
                </template>
                <template v-else-if="column.key === 'actions'">
                    <a-button type="primary" @click="handleAddToArchive(record)" class="custom-font">添加</a-button>
                </template>
            </template>
        </a-table>
    </div>
</template>

<script>
import { ref, onMounted, watch, computed, onBeforeUnmount } from 'vue';
import { useStore } from 'vuex';
import fileMappings from '@/data/index.js';
import { notification } from 'ant-design-vue';
import eventBus from '@/eventBus';
import { AppstoreTwoTone } from '@ant-design/icons-vue';


export default {
    components: {
        AppstoreTwoTone
    },
    name: 'DataTable',
    setup() {
        const store = useStore();
        const selectedBatch = ref('');
        const selectedSubjectType = ref('');
        const selectedProvince = ref([]);
        const selectedType = ref('');
        const selectedMajorType = ref([]);
        const selectedMajorName = ref('');
        const minScore = ref(null);
        const maxScore = ref(null);
        const rawData = ref([]);
        const filteredData = ref([]);

        const resetFilters = () => {
            selectedBatch.value = '';
            selectedSubjectType.value = '';
            selectedProvince.value = [];
            selectedType.value = '';
            selectedMajorType.value = [];
            selectedMajorName.value = '';
            minScore.value = null;
            maxScore.value = null;
        };

        const saveFilters = () => {
            const filters = {
                batch: selectedBatch.value,
                subjectType: selectedSubjectType.value,
                province: selectedProvince.value,
                type: selectedType.value,
                majorType: selectedMajorType.value,
                majorName: selectedMajorName.value,
                minScore: minScore.value,
                maxScore: maxScore.value
            };
            sessionStorage.setItem('database_filter_options', JSON.stringify(filters));
            eventBus.emit('filters-changed'); // 使用 mitt 触发事件
        };

        const loadFilters = () => {
            const filters = JSON.parse(sessionStorage.getItem('database_filter_options'));
            if (filters) {
                selectedBatch.value = filters.batch;
                selectedSubjectType.value = filters.subjectType;
                selectedProvince.value = filters.province;
                selectedType.value = filters.type;
                selectedMajorType.value = filters.majorType;
                selectedMajorName.value = filters.majorName;
                minScore.value = filters.minScore;
                maxScore.value = filters.maxScore;
            }
        };

        const clearFilters = () => {
            resetFilters();
            saveFilters();
            filterData();
        };

        const updateBatch = async (event) => {
            selectedBatch.value = event.target.value;
            saveFilters();
            loadData(); // 确保数据在批次更改后被加载
        };

        const updateSubjectType = (event) => {
            selectedSubjectType.value = event.target.value;
            saveFilters();
            filterData();
        };

        const updateProvince = (event) => {
            selectedProvince.value = Array.from(event.target.selectedOptions, option => option.value);
            saveFilters();
            filterData();
        };

        const updateType = (event) => {
            selectedType.value = Array.from(event.target.selectedOptions, option => option.value);
            saveFilters();
            filterData();
        };

        const updateMajorType = (event) => {
            selectedMajorType.value = Array.from(event.target.selectedOptions, option => option.value);
            saveFilters();
            filterData();
        };
        const updateMajorName = (event) => {
            selectedMajorName.value = Array.from(event.target.selectedOptions, option => option.value);
            saveFilters();
            filterData();
        };

        const updateMinScore = (event) => {
            minScore.value = event.target.value;
            saveFilters();
            filterData();
        };

        const updateMaxScore = (event) => {
            maxScore.value = event.target.value;
            saveFilters();
            filterData();
        };

        const handleFilter = () => {
            saveFilters();
            filterData();
        };

        const loadData = async () => {
            try {
                const url = window.location.href;
                let category = '';
                if (url.includes('history')) {
                    category = '历史类';
                } else if (url.includes('physics')) {
                    category = '物理类';
                }
                const batch = selectedBatch.value;
                const key = `${category}${batch}`;
                const data = fileMappings[key];
                if (data) {
                    rawData.value = data.default || data;
                    filterData();
                } else {
                    throw new Error(`Data file ${key} not found`);
                }
            } catch (error) {
                console.error('Error loading data:', error);
            }
        };

        const filterData = () => {
            filteredData.value = rawData.value.filter((item) => {
                const matchesMajorType = selectedMajorType.value.length === 0 || selectedMajorType.value.includes(item['专业类']);
                const matchesProvince = selectedProvince.value.length === 0 || selectedProvince.value.includes(item['省市自治区']);
                const matchesType = selectedType.value.length === 0 || selectedType.value.includes(item['办学性质备注']);
                const matchesMajorName = selectedMajorName.value.length === 0 || selectedMajorName.value.includes(item['专业名称']);
                return (
                    (selectedSubjectType.value === '' || item['再选'] === selectedSubjectType.value) &&
                    matchesProvince &&
                    matchesType &&
                    matchesMajorType &&
                    matchesMajorName &&
                    (minScore.value === null || item['2023年投档线'] >= minScore.value) &&
                    (maxScore.value === null || item['2023年投档线'] <= maxScore.value)
                );
            });
        };
        onMounted(() => {
            loadFilters();
            loadData();
            eventBus.on('filters-changed', handleFiltersChanged); // 使用 mitt 监听事件
        });

        onBeforeUnmount(() => {
            eventBus.off('filters-changed', handleFiltersChanged); // 使用 mitt 移除监听
        });

        watch(selectedBatch, () => {
            loadData();
        });

        watch([selectedSubjectType, selectedProvince, selectedType, selectedMajorType, selectedMajorName, minScore, maxScore], () => {
            filterData();
        });

        const openNotification = (studentName, schoolName, majorName) => {
            notification.open({
                message: '添加到报考档案',
                description: `${schoolName} ${majorName} 已经被添加到 ${studentName} 的报考档案。`,
                onClick: () => {
                    console.log('Notification Clicked!');
                },
            });
        };

        const handleAddToArchive = (record) => {
            const { name } = store.state.studentInformation;
            if (!name) {
                alert('请先设定报考人');
                return;
            }

            if (!store.state.tablenamelist[name]) {
                alert('没有找到当前报考人，请先构建档案');
                return;
            }

            const recordToAdd = {
                schoolName: record['院校名称'],
                majorName: record['专业名称'],
            };
            store.commit('addToArchive', { name, record: recordToAdd });
            openNotification(name, record['院校名称'], record['专业名称']);
        };

        const filterOption = (input, option) => {
            return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        };

        const handleFiltersChanged = () => {
            loadFilters();
            filterData();
        };


        const filterDescription = computed(() => {
            const filters = {
                batch: selectedBatch.value,
                subjectType: selectedSubjectType.value,
                province: Array.isArray(selectedProvince.value) ? selectedProvince.value.join(', ') : selectedProvince.value,
                type: Array.isArray(selectedType.value) ? selectedType.value.join(', ') : selectedType.value,
                majorType: Array.isArray(selectedMajorType.value) ? selectedMajorType.value.join(', ') : selectedMajorType.value,
                majorName: selectedMajorName.value,
                minScore: minScore.value,
                maxScore: maxScore.value
            };
            let description = [];
            if (filters.batch) {
                description.push({ key: '批次', value: filters.batch });
            }
            if (filters.subjectType) {
                description.push({ key: '再选', value: filters.subjectType });
            }
            if (filters.province) {
                description.push({ key: '省份', value: filters.province });
            }
            if (filters.type) {
                description.push({ key: '公办民办', value: filters.type });
            }
            if (filters.majorType) {
                description.push({ key: '专业类', value: filters.majorType });
            }
            if (filters.majorName) {
                description.push({ key: '专业名称', value: filters.majorName });
            }
            if (filters.minScore !== null) {
                description.push({ key: '分数下界', value: filters.minScore });
            }
            if (filters.maxScore !== null) {
                description.push({ key: '分数上界', value: filters.maxScore });
            }
            return description;
        });


        return {
            selectedBatch,
            selectedSubjectType,
            selectedProvince,
            selectedType,
            selectedMajorType,
            selectedMajorName,
            minScore,
            maxScore,
            rawData,
            filteredData,
            updateBatch,
            updateSubjectType,
            updateProvince,
            updateType,
            updateMajorType,
            updateMajorName,
            updateMinScore,
            updateMaxScore,
            handleFilter,
            clearFilters,
            filterOption,
            handleAddToArchive,
            filterDescription,
            handleFiltersChanged
        };
    },
    data() {
        return {
            columns: [
                {
                    title: '院校名称',
                    dataIndex: 'schoolName',
                    key: 'schoolName',
                    fixed: 'left',
                    width: 150,
                },
                {
                    title: '省份',
                    dataIndex: 'province',
                    key: 'province',
                },
                {
                    title: '专业类',
                    dataIndex: 'majorType',
                    key: 'majorType',
                },
                {
                    title: '专业名称',
                    dataIndex: 'majorName',
                    key: 'majorName',
                },
                {
                    title: '公办民办',
                    dataIndex: 'type',
                    key: 'type',
                },
                {
                    title: '办学层次',
                    dataIndex: '办学层次',
                    key: '办学层次',
                },
                {
                    title: '所在地',
                    dataIndex: '所在地',
                    key: '所在地',
                },
                {
                    title: '主管部门',
                    dataIndex: '主管部门',
                    key: '主管部门',
                },
                {
                    title: '硕士招生资格',
                    dataIndex: '硕士招生资格',
                    key: '硕士招生资格',
                },
                {
                    title: '博士招生资格',
                    dataIndex: '博士招生资格',
                    key: '博士招生资格',
                },
                {
                    title: '院校代码',
                    dataIndex: '院校代码',
                    key: '院校代码',
                },
                {
                    title: '专业代码',
                    dataIndex: '专业代码',
                    key: '专业代码',
                },
                {
                    title: '学制',
                    dataIndex: '学制',
                    key: '学制',
                },
                {
                    title: '学费',
                    dataIndex: '学费',
                    key: '学费',
                },
                {
                    title: '2024年计划数',
                    dataIndex: '2024年计划数',
                    key: '2024年计划数',
                },
                {
                    title: '2023年计划',
                    dataIndex: '2023年计划',
                    key: '2023年计划',
                },
                {
                    title: '2023年投档线位次',
                    dataIndex: '2023年投档线位次',
                    key: '2023年投档线位次',
                },
                {
                    title: '分数',
                    dataIndex: 'score',
                    key: 'score',
                },
                {
                    title: '操作',
                    key: 'actions',
                    dataIndex: 'actions',
                    fixed: 'right',
                }
            ],
        };
    },
};
</script>

<style scoped>
body {
    font-family: Arial, sans-serif;
}

.data-table-container {
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    min-height: 1000px;
}

.filter-form {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    background-color: #f5f5f5;
    padding: 10px
}

.form-item {
    flex: 0 0 130px;
    padding: 5px;

}

.form-item:hover {
    border: 1px dashed #bfbfbf;
    padding: 4px;
}

.form-item p {
    font-size: 0.8rem;
    font-weight: bold;
    margin-bottom: 2px;
    color: #000000;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 3px;
    width: 80px;
    text-align: left;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

select {
    padding: 10px 15px;
    font-size: 0.8rem;
    border: 2px solid #007BFF;
    background-color: #fff;
    color: #333;
    outline: none;
    transition: border-color 0.3s, box-shadow 0.3s;
    width: 100%;
    box-sizing: border-box;
}

select:hover {
    border-color: #0056b3;
}

select:focus {
    border-color: #0056b3;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.form-item select::placeholder {
    color: #aaa;
}

option {
    font-size: 0.8rem;
    padding: 1px;
}

select,
input[type="number"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #d9d9d9;
    transition: border-color 0.3s ease;
}

select:focus,
input[type="number"]:focus {
    border-color: #40a9ff;
    outline: none;
}

.ant-table {
    background: white;
    overflow: hidden;
}

.filter-item {
    border: 1px solid #d3d3d3;
    /* 灰色边框 */
    border-radius: 20px;
    background-color: #f5f5f5;
    /* 浅灰色背景 */
    margin: 6px 6px 6px 0px;
    display: inline-block;
    padding: 3px;
    font-size: 0.8rem;
}

.filter-text-and-icon {
    display: flex;
    min-width: 140px;
}

.filter-text {
    color: #636363;
    /* 深灰色字体 */
    padding: 3px;
    font-size: 0.8rem;
}

.filter-text-main {
    color: #515156;
    margin: 5px 0px 5px 5px;
    padding: 5px;
    font-size: 0.8rem;
}
</style>