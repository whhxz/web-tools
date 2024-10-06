<template>
  <Dialog v-model:show="visable" show-cancel-button @confirm="onSubmit">
    <div class="container">
      <div>
        <div class="title">
          <Icon name="label-o" @click="onCreateTitle" />
          <input type="text" :value="title" />
        </div>
        <p class="tip">输入记录标题</p>
      </div>
      <RadioGroup v-model="operate" direction="horizontal">
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
const visable = ref(true);
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

<style scoped>
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
  font-size: 1.2rem;
}
.container .tip {
  font-size: 0.8rem;
  color: #a6a6a6;
  padding-bottom: 0.5rem;
}
</style>
