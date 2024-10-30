<template>
  <Dialog v-model:show="visable" show-cancel-button @confirm="onSubmit">
    <div class="container">
      <div>
        <div class="title">
          <Icon name="label-o" />
          <input type="text" :value="title" placeholder="输入记录标题" />
        </div>
        <!-- <p class="tip">输入记录标题</p> -->
      </div>
      <RadioGroup class="operation" v-model="operate" direction="horizontal">
        <Radio name="create">新增</Radio>
        <Radio name="edit">修改</Radio>
      </RadioGroup>
    </div>
  </Dialog>
</template>
<script setup>
import { ref, unref, reactive } from 'vue';

import { Icon } from 'vant';
import 'vant/lib/icon/style';

import { Dialog } from 'vant';
import 'vant/lib/dialog/style';

import { RadioGroup, Radio } from 'vant';
import 'vant/lib/radio-group/style';
import 'vant/lib/radio/style';

import { toRefs } from 'vue';

const emit = defineEmits(['success']);
const visable = ref(false);
const form = reactive({
  title: '',
  operate: 'create',
});
const { title, operate } = toRefs(form);

const onSubmit = () => {};
const open = (data) => {
  visable.value = true;
};

defineExpose({
  open,
});
</script>

<style lang="css" scoped>
.container {
  padding: 1rem;
}
.container .title {
  border-bottom: 1px solid #ddd;
  padding: 1rem 0.5rem 1rem;
  display: flex;
  align-items: center;
}
.title :deep(.van-icon) {
  padding-right: 0.5rem;
}
.title input {
  /* outline: none; */
  border: none;
  font-size: 1rem;
}
.container .tip {
  font-size: 0.8rem;
  color: #a6a6a6;
  padding-bottom: 0.5rem;
  margin-top: 0.3rem;
  margin-left: 0.6rem;
}
.container .operation {
  margin-top: 0.5rem;
  margin-left: 0.6rem;
}
</style>
