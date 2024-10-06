<template>
  <div class="page">
    <div class="container">
      <div class="header">
        <DropdownMenu>
          <DropdownItem v-model="title" :options="titles" />
        </DropdownMenu>
        <Icon class="add-title" name="edit" @click="onCreateTitle" />
      </div>
      <Search v-model="search" placeholder="请输入备注关键词" input-align="center" />
      <div class="list">
        <Cell
          v-for="record in records"
          :title="record.date + ' ' + record.time"
          :value="record.value"
          :label="record.remark"
        />
      </div>
      <FloatingBubble icon="plus" @click="onCreate" />
      <SaveRecord ref="saveRecordRef" />
      <SaveTitle ref="saveTitleRef" />
    </div>
  </div>
</template>
<script setup>
import SaveRecord from './save-record.vue';
import SaveTitle from './save-title.vue';

import { Icon } from 'vant';
import 'vant/lib/icon/style';

import { DropdownMenu, DropdownItem } from 'vant';
import 'vant/lib/dropdown-menu/style';
import 'vant/lib/dropdown-item/style';

import { Cell, CellGroup } from 'vant';
import 'vant/lib/cell/style';
import 'vant/lib/cell-group/style';

import { Search } from 'vant';
import 'vant/lib/search/style';

import { FloatingBubble } from 'vant';
import 'vant/lib/floating-bubble/style';

import { ref } from 'vue';

const saveRecordRef = ref(null);
const saveTitleRef = ref(null);

const search = ref('');

const title = ref(0);
const titles = ref([
  { text: '23年1月2', value: 0 },
  { text: '23年4月2', value: 1 },
  { text: '24年1月2', value: 2 },
]);

const records = ref([
  { date: '2024-09-23', time: '23:39', value: '34.2', remark: '' },
  { date: '2024-09-23', time: '23:39', value: '34.2', remark: '吃药' },
  { date: '2024-09-23', time: '23:39', value: '34.2', remark: '' },
  { date: '2024-09-23', time: '23:39', value: '34.2', remark: '' },
]);
for (let i = 0; i <= 5; i++) {
  records.value.push(...records.value);
}
const onCreateTitle = () => {
  saveTitleRef.value.open({});
};
const onCreate = () => {
  saveRecordRef.value.open({});
};
</script>
<style scoped>
.page {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100vh;
}
.container {
  height: 100vh;
  max-width: 375px;
  width: 100%;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
}
.header {
  height: 8vh;
  position: relative;
}
.header .add-title {
  position: absolute;
  right: 1rem;
  top: 2.5vh;
  cursor: pointer;
  font-size: 18px;
}
.list {
  flex: 1;
  overflow: auto;
}
</style>
