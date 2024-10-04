<template>
  <Dialog v-model:show="visable" :title="title" show-cancel-button>
    <Form>
      <CellGroup inset>
        <Field
          v-model="form.time"
          label="日期"
          is-link
          readonly
          name="time"
          placeholder="点击选择日期"
          @click="timeVisable = true"
        />
        <Popup v-model:show="timeVisable" position="bottom" teleport="#app" @confirm="onSelectDate">
          <TimePicker v-model="tmp" @cancel="timeVisable = false" @confirm="onSelectDate" />
        </Popup>
        <Field v-model="form.value" label="温度" placeholder="当前温度（摄氏度）" />
        <Field v-model="form.remark" label="备注" placeholder="（选填）" />
      </CellGroup>
    </Form>
  </Dialog>
</template>
<script setup>
import { ref, unref, reactive } from 'vue';

import { Dialog } from 'vant';
import 'vant/lib/dialog/style';

import { Form } from 'vant';
import 'vant/lib/form/style';

import { Popup } from 'vant';
import 'vant/lib/popup/style';

import { Field, CellGroup } from 'vant';
import 'vant/lib/cell-group/style';
import 'vant/lib/field/style';

import { TimePicker } from 'vant';
import 'vant/lib/time-picker/style';

const emit = defineEmits(['success']);
const visable = ref(false);
const timeVisable = ref(false);
const title = ref('录入');
const tmp = ref(['12', '32']);
const form = reactive({
  date: '2024-01-02',
  time: '23:23',
  value: '234.2',
  remark: null,
});
const onSelectDate = ({ selectedValues }) => {
  form.time = selectedValues[0] + ':' + selectedValues[1];
  timeVisable.value = false;
  console.log(tmp.value);
};

const open = (data) => {
  visable.value = true;
};
defineExpose({
  open,
});
</script>
