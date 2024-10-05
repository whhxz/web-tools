<template>
  <Dialog v-model:show="visable" :title="title" show-cancel-button @confirm="onSubmit">
    <Field
      label-width="5em"
      clickable
      label="日期"
      v-model="date.field"
      readonly
      name="date"
      placeholder="点击选择日期"
      @click="date.visable = true"
    />
    <Calendar
      :min-date="new Date(new Date() - 100 * 24 * 60 * 60 * 1000)"
      :default-date="date.select"
      v-model:show="date.visable"
      :show-confirm="false"
      teleport="#app"
      @cancel="date.visable = false"
      @confirm="onSelectDate"
    />

    <Field
      label-width="5em"
      clickable
      label="时间"
      v-model="time.field"
      readonly
      name="time"
      placeholder="点击选择时间"
      @click="time.visable = true"
    />
    <Popup v-model:show="time.visable" position="bottom" teleport="#app">
      <TimePicker v-model="time.select" @cancel="time.visable = false" @confirm="onSelectTime" />
    </Popup>
    <Field label-width="5em" v-model="form.value" label="温度" placeholder="当前温度（摄氏度）" />
    <Field label-width="5em" v-model="form.remark" label="备注" placeholder="(选填)" />
  </Dialog>
</template>
<script setup>
import { ref, unref, reactive } from 'vue';
import { dateFormart } from '@/util/date';

import { Dialog } from 'vant';
import 'vant/lib/dialog/style';

import { Calendar } from 'vant';
import 'vant/lib/calendar/style';

import { Popup } from 'vant';
import 'vant/lib/popup/style';

import { Field, CellGroup } from 'vant';
import 'vant/lib/cell-group/style';
import 'vant/lib/field/style';

import { TimePicker } from 'vant';
import 'vant/lib/time-picker/style';
import { toRefs } from 'vue';

const emit = defineEmits(['success']);
const visable = ref(false);
const title = ref('录入');

const datetime = reactive({
  date: {
    field: '0:0',
    select: null,
    visable: false,
  },
  time: {
    field: '0:0',
    select: ['0', '0'],
    visable: false,
  },
});

const { date, time } = toRefs(datetime);

const form = reactive({
  datetime: new Date(),
  value: null,
  remark: null,
});
const onSelectDate = (data) => {
  date.value.field = dateFormart(data, 'YYYY/MM/DD');
  date.value.visable = false;
};
const onSelectTime = ({ selectedValues }) => {
  time.value.field = selectedValues[0] + ':' + selectedValues[1];
  time.value.visable = false;
};
const onSubmit = () => {};
const open = (data) => {
  visable.value = true;
  Object.assign(form, {
    datetime: new Date(),
    value: null,
    remark: null,
  });
  init();
};

const init = () => {
  let datetime = form.datetime;
  time.value.field = dateFormart(datetime, 'hh:mm');
  time.value.select = time.value.field.split(':');
  date.value.field = dateFormart(datetime, 'YYYY/MM/DD');
  date.value.select = datetime;
};

defineExpose({
  open,
});
</script>

<style scoped>
.van-cell :deep(.van-cell__title) {
  flex: none;
}
</style>
