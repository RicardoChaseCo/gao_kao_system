<template class="data-table-container">
    <div>
        <a-form layout="inline" @submit.prevent="handleFilter" class="filter-form">
            <a-form-item label="批次">
                <a-select placeholder="选择批次" style="width: 200px" @change="updateBatch">
                    <a-select-option value="提前批本科">提前批本科</a-select-option>
                    <a-select-option value="普通批本科">普通批本科</a-select-option>
                    <a-select-option value="提前批专科">提前批专科</a-select-option>
                    <a-select-option value="普通批专科">普通批专科</a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item label="再选">
                <a-select placeholder="选择再选" style="width: 200px" @change="updateSubjectType">
                    <a-select-option value="化学">化学</a-select-option>
                    <a-select-option value="不限">不限</a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item label="省份">
                <a-select mode="multiple" placeholder="选择省份" style="width: 200px" @change="updateProvince" show-search
                    :filter-option="filterOption">
                    <a-select-option value="河北省">河北省</a-select-option>
                    <a-select-option value="山西省">山西省</a-select-option>
                    <a-select-option value="辽宁省">辽宁省</a-select-option>
                    <a-select-option value="吉林省">吉林省</a-select-option>
                    <a-select-option value="黑龙江省">黑龙江省</a-select-option>
                    <a-select-option value="江苏省">江苏省</a-select-option>
                    <a-select-option value="浙江省">浙江省</a-select-option>
                    <a-select-option value="安徽省">安徽省</a-select-option>
                    <a-select-option value="福建省">福建省</a-select-option>
                    <a-select-option value="江西省">江西省</a-select-option>
                    <a-select-option value="山东省">山东省</a-select-option>
                    <a-select-option value="河南省">河南省</a-select-option>
                    <a-select-option value="湖北省">湖北省</a-select-option>
                    <a-select-option value="湖南省">湖南省</a-select-option>
                    <a-select-option value="广东省">广东省</a-select-option>
                    <a-select-option value="海南省">海南省</a-select-option>
                    <a-select-option value="四川省">四川省</a-select-option>
                    <a-select-option value="贵州省">贵州省</a-select-option>
                    <a-select-option value="云南省">云南省</a-select-option>
                    <a-select-option value="陕西省">陕西省</a-select-option>
                    <a-select-option value="甘肃省">甘肃省</a-select-option>
                    <a-select-option value="青海省">青海省</a-select-option>
                    <a-select-option value="台湾省">台湾省</a-select-option>
                    <a-select-option value="内蒙古自治区">内蒙古自治区</a-select-option>
                    <a-select-option value="广西自治区">广西自治区</a-select-option>
                    <a-select-option value="西藏自治区">西藏自治区</a-select-option>
                    <a-select-option value="宁夏自治区">宁夏自治区</a-select-option>
                    <a-select-option value="新疆自治区">新疆自治区</a-select-option>
                    <a-select-option value="北京市">北京市</a-select-option>
                    <a-select-option value="天津市">天津市</a-select-option>
                    <a-select-option value="上海市">上海市</a-select-option>
                    <a-select-option value="重庆市">重庆市</a-select-option>
                    <a-select-option value="香港">香港</a-select-option>
                    <a-select-option value="澳门">澳门</a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item label="公办民办">
                <a-select placeholder="选择公办民办" style="width: 200px" @change="updateType">
                    <a-select-option value="公办">公办</a-select-option>
                    <a-select-option value="民办">民办</a-select-option>
                    <a-select-option value="合作办学">合作办学</a-select-option>
                    <a-select-option value="军委直属院校">军委直属院校</a-select-option>
                    <a-select-option value="军兵种院校">军兵种院校</a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item label="专业类">
                <a-select mode="multiple" placeholder="选择专业类" style="width: 200px" @change="updateMajorType" show-search
                    :filter-option="filterOption">
                    <a-select-option value="中医学类">中医学类</a-select-option>
                    <a-select-option value="中国语言文学类">中国语言文学类</a-select-option>
                    <a-select-option value="中药学类">中药学类</a-select-option>
                    <a-select-option value="中西医结合类">中西医结合类</a-select-option>
                    <a-select-option value="临床医学类">临床医学类</a-select-option>
                    <a-select-option value="交通运输类">交通运输类</a-select-option>
                    <a-select-option value="仪器类">仪器类</a-select-option>
                    <a-select-option value="体育学类">体育学类</a-select-option>
                    <a-select-option value="健康管理与促进类">健康管理与促进类</a-select-option>
                    <a-select-option value="公共卫生与预防医学类">公共卫生与预防医学类</a-select-option>
                    <a-select-option value="公共服务类">公共服务类</a-select-option>
                    <a-select-option value="公共管理类">公共管理类</a-select-option>
                    <a-select-option value="公安学类">公安学类</a-select-option>
                    <a-select-option value="公安技术类">公安技术类</a-select-option>
                    <a-select-option value="兵器类">兵器类</a-select-option>
                    <a-select-option value="农业工程类">农业工程类</a-select-option>
                    <a-select-option value="农业经济管理类">农业经济管理类</a-select-option>
                    <a-select-option value="力学类">力学类</a-select-option>
                    <a-select-option value="动物医学类">动物医学类</a-select-option>
                    <a-select-option value="动物生产类">动物生产类</a-select-option>
                    <a-select-option value="化学类">化学类</a-select-option>
                    <a-select-option value="化工与制药类">化工与制药类</a-select-option>
                    <a-select-option value="化工技术类">化工技术类</a-select-option>
                    <a-select-option value="医学技术类">医学技术类</a-select-option>
                    <a-select-option value="印刷类">印刷类</a-select-option>
                    <a-select-option value="历史学类">历史学类</a-select-option>
                    <a-select-option value="口腔医学类">口腔医学类</a-select-option>
                    <a-select-option value="哲学类">哲学类</a-select-option>
                    <a-select-option value="图书情报与档案管理类">图书情报与档案管理类</a-select-option>
                    <a-select-option value="土建施工类">土建施工类</a-select-option>
                    <a-select-option value="土木类">土木类</a-select-option>
                    <a-select-option value="地球物理学类">地球物理学类</a-select-option>
                    <a-select-option value="地理科学类">地理科学类</a-select-option>
                    <a-select-option value="地质学类">地质学类</a-select-option>
                    <a-select-option value="地质类">地质类</a-select-option>
                    <a-select-option value="基础医学类">基础医学类</a-select-option>
                    <a-select-option value="外国语言文学类">外国语言文学类</a-select-option>
                    <a-select-option value="大气科学类">大气科学类</a-select-option>
                    <a-select-option value="天文学类">天文学类</a-select-option>
                    <a-select-option value="安全科学与工程类">安全科学与工程类</a-select-option>
                    <a-select-option value="少数民族预科班">少数民族预科班</a-select-option>
                    <a-select-option value="工业工程类">工业工程类</a-select-option>
                    <a-select-option value="工商管理类">工商管理类</a-select-option>
                    <a-select-option value="康复治疗类">康复治疗类</a-select-option>
                    <a-select-option value="建筑类">建筑类</a-select-option>
                    <a-select-option value="建筑设备类">建筑设备类</a-select-option>
                    <a-select-option value="建筑设计类">建筑设计类</a-select-option>
                    <a-select-option value="建设工程管理类">建设工程管理类</a-select-option>
                    <a-select-option value="心理学类">心理学类</a-select-option>
                    <a-select-option value="戏剧与影视学类">戏剧与影视学类</a-select-option>
                    <a-select-option value="护理学类">护理学类</a-select-option>
                    <a-select-option value="护理类">护理类</a-select-option>
                    <a-select-option value="政治学类">政治学类</a-select-option>
                    <a-select-option value="教育学类">教育学类</a-select-option>
                    <a-select-option value="数学类">数学类</a-select-option>
                    <a-select-option value="新闻传播学类">新闻传播学类</a-select-option>
                    <a-select-option value="旅游管理类">旅游管理类</a-select-option>
                    <a-select-option value="机械类">机械类</a-select-option>
                    <a-select-option value="机械设计制造类">机械设计制造类</a-select-option>
                    <a-select-option value="机电设备类">机电设备类</a-select-option>
                    <a-select-option value="材料类">材料类</a-select-option>
                    <a-select-option value="林业工程类">林业工程类</a-select-option>
                    <a-select-option value="林学类">林学类</a-select-option>
                    <a-select-option value="核工程类">核工程类</a-select-option>
                    <a-select-option value="植物生产类">植物生产类</a-select-option>
                    <a-select-option value="气象类">气象类</a-select-option>
                    <a-select-option value="水上运输类">水上运输类</a-select-option>
                    <a-select-option value="水产类">水产类</a-select-option>
                    <a-select-option value="水利类">水利类</a-select-option>
                    <a-select-option value="汽车制造类">汽车制造类</a-select-option>
                    <a-select-option value="法医学类">法医学类</a-select-option>
                    <a-select-option value="法学类">法学类</a-select-option>
                    <a-select-option value="测绘类">测绘类</a-select-option>
                    <a-select-option value="海洋工程类">海洋工程类</a-select-option>
                    <a-select-option value="海洋科学类">海洋科学类</a-select-option>
                    <a-select-option value="煤炭类">煤炭类</a-select-option>
                    <a-select-option value="物流管理与工程类">物流管理与工程类</a-select-option>
                    <a-select-option value="物流类">物流类</a-select-option>
                    <a-select-option value="物理学类">物理学类</a-select-option>
                    <a-select-option value="环境保护类">环境保护类</a-select-option>
                    <a-select-option value="环境科学与工程类">环境科学与工程类</a-select-option>
                    <a-select-option value="生物医学工程类">生物医学工程类</a-select-option>
                    <a-select-option value="生物工程类">生物工程类</a-select-option>
                    <a-select-option value="生物科学类">生物科学类</a-select-option>
                    <a-select-option value="电子信息类">电子信息类</a-select-option>
                    <a-select-option value="电子商务类">电子商务类</a-select-option>
                    <a-select-option value="电气类">电气类</a-select-option>
                    <a-select-option value="石油与天然气类">石油与天然气类</a-select-option>
                    <a-select-option value="矿业类">矿业类</a-select-option>
                    <a-select-option value="社会学类">社会学类</a-select-option>
                    <a-select-option value="管理科学与工程类">管理科学与工程类</a-select-option>
                    <a-select-option value="粮食类">粮食类</a-select-option>
                    <a-select-option value="纺织类">纺织类</a-select-option>
                    <a-select-option value="经济与贸易类">经济与贸易类</a-select-option>
                    <a-select-option value="经济学类">经济学类</a-select-option>
                    <a-select-option value="统计学类">统计学类</a-select-option>
                    <a-select-option value="美术学类">美术学类</a-select-option>
                    <a-select-option value="能源动力类">能源动力类</a-select-option>
                    <a-select-option value="自动化类">自动化类</a-select-option>
                    <a-select-option value="自然保护与环境生态类">自然保护与环境生态类</a-select-option>
                    <a-select-option value="航空航天类">航空航天类</a-select-option>
                    <a-select-option value="航空装备类">航空装备类</a-select-option>
                    <a-select-option value="航空运输类">航空运输类</a-select-option>
                    <a-select-option value="艺术学理论类">艺术学理论类</a-select-option>
                    <a-select-option value="草学类">草学类</a-select-option>
                    <a-select-option value="药品与医疗器械类">药品与医疗器械类</a-select-option>
                    <a-select-option value="药学类">药学类</a-select-option>
                    <a-select-option value="计算机类">计算机类</a-select-option>
                    <a-select-option value="设计学类">设计学类</a-select-option>
                    <a-select-option value="试验班类">试验班类</a-select-option>
                    <a-select-option value="财务会计类">财务会计类</a-select-option>
                    <a-select-option value="财政学类">财政学类</a-select-option>
                    <a-select-option value="财政税务类">财政税务类</a-select-option>
                    <a-select-option value="轻工类">轻工类</a-select-option>
                    <a-select-option value="边防军人子女预科班">边防军人子女预科班</a-select-option>
                    <a-select-option value="道路运输类">道路运输类</a-select-option>
                    <a-select-option value="金融学类">金融学类</a-select-option>
                    <a-select-option value="食品科学与工程类">食品科学与工程类</a-select-option>
                    <a-select-option value="香港的大学专业">香港的大学专业</a-select-option>
                    <a-select-option value="马克思主义理论类">马克思主义理论类</a-select-option>
                    <a-select-option value="黑色金属材料类">黑色金属材料类</a-select-option>
                </a-select>
            </a-form-item>

            <a-form-item label="专业名称">
                <a-select placeholder="选择专业名称" style="width: 200px" @change="updateMajorName">
                    <!-- Add options for major names dynamically based on data -->
                </a-select>
            </a-form-item>
            <a-form-item label="分数区间">
                <a-input-number placeholder="最低分" style="width: 100px" @change="updateMinScore" />
                -
                <a-input-number placeholder="最高分" style="width: 100px" @change="updateMaxScore" />
            </a-form-item>

            <a-form-item>
                <!-- <a-button type="primary" @click="handleFilter">筛选</a-button> -->
            </a-form-item>
        </a-form>

        <a-table :columns="columns" :dataSource="filteredData" :scroll="{ x: 2000, y: 850 }">
            <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'schoolName'">
                    <a>{{ record['院校名称'] }}</a>
                </template>
                <template v-else-if="column.key === 'majorName'">
                    <span>{{ record['专业名称'] }}</span>
                </template>
                <template v-else-if="column.key === 'province'">
                    <span>{{ record['省市自治区'] }}</span>
                </template>
                <template v-else-if="column.key === 'score'">
                    <span>{{ record['2023年投档线'] }}</span>
                </template>
                <template v-else-if="column.key === 'type'">
                    <span>{{ record['办学性质备注'] }}</span>
                </template>
                <template v-else-if="column.key === 'majorType'">
                    <span>{{ record['专业类'] }}</span>
                </template>
                <template v-else-if="column.key === 'actions'">
                    <a-button type="primary" @click="handleAddToArchive(record)">添加</a-button>
                </template>
            </template>
        </a-table>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import fileMappings from '@/data/index.js';

export default {
    name: 'DataTable',
    setup() {
        const store = useStore();
        const selectedBatch = ref('');
        const selectedSubjectType = ref('');
        const selectedProvince = ref('');
        const selectedType = ref('');
        const selectedMajorType = ref([]);
        const selectedMajorName = ref('');
        const minScore = ref(null);
        const maxScore = ref(null);
        const rawData = ref([]);
        const filteredData = ref([]);

        const resetFilters = () => {
            selectedSubjectType.value = '';
            selectedProvince.value = '';
            selectedType.value = '';
            selectedMajorType.value = '';
            selectedMajorName.value = '';
            minScore.value = null;
            maxScore.value = null;
        };

        const updateBatch = (value) => {
            selectedBatch.value = value;
            resetFilters();
            loadData();
        };

        const updateSubjectType = (value) => {
            selectedSubjectType.value = value;
            filterData();
        };

        const updateProvince = (value) => {
            selectedProvince.value = value;
            filterData();
        };


        const updateType = (value) => {
            selectedType.value = value;
            filterData();
        };

        const updateMajorType = (value) => {
            selectedMajorType.value = value;
            filterData();
        };

        const updateMajorName = (value) => {
            selectedMajorName.value = value;
            filterData();
        };

        const updateMinScore = (value) => {
            minScore.value = value;
            filterData();
        };

        const updateMaxScore = (value) => {
            maxScore.value = value;
            filterData();
        };

        const handleFilter = () => {
            filterData();
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
            alert('数据已添加到报考档案');
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
                return (
                    (selectedSubjectType.value === '' || item['再选'] === selectedSubjectType.value) &&
                    matchesProvince &&
                    (selectedType.value === '' || item['办学性质备注'] === selectedType.value) &&
                    matchesMajorType &&
                    (selectedMajorName.value === '' || item['专业名称'] === selectedMajorName.value) &&
                    (minScore.value === null || item['2023年投档线'] >= minScore.value) &&
                    (maxScore.value === null || item['2023年投档线'] <= maxScore.value)
                );
            });
        };



        const filterOption = (input, option) => {
            return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        };


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
            filterOption,
            handleAddToArchive
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
                    fixed: 'left',
                },
                {
                    title: '专业类',
                    dataIndex: 'majorType',
                    key: 'majorType',
                    fixed: 'left',
                },
                {
                    title: '专业名称',
                    dataIndex: 'majorName',
                    key: 'majorName',
                    fixed: 'left',
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
                    title: '学校档次',
                    dataIndex: '学校档次',
                    key: '学校档次',
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
                    title: '分数',
                    dataIndex: 'score',
                    key: 'score',
                    fixed: 'right',
                },
                {
                    title: '2023年投档线位次',
                    dataIndex: '2023年投档线位次',
                    key: '2023年投档线位次',
                    fixed: 'right',
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
.data-table-container {
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    min-height: 1000px;
}

.filter-form {
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.filter-form .ant-form-item {
    flex: 1;
    min-width: 200px;
}

.ant-table {
    background: white;
    border-radius: 8px;
    overflow: hidden;
}
</style>