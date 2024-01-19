<!--
 * @Description: Input
 * @Author: lijin
 * @Date: 2023-08-10 16:21:04
 * @LastEditTime: 2024-01-09 15:53:21
 * @LastEditors: yudidayeye 908737208@qq.com
-->
<template>
  <input
    class="mono-input"
    type="text"
    :value="modelValue"
    @input="inputHandler"
  >
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  defaultInputProps,
  InputProps,
  InputEmits,
  InputExpose,
} from './props';

withDefaults(
  defineProps<InputProps>(),
  defaultInputProps(),
);

const emit = defineEmits<InputEmits>();

function inputHandler(e: any) {
  const { value } = e.target;
  emit('update:modelValue', value);
}

function clear() {
  emit('update:modelValue', '');
}

const a = ref(0);

defineExpose<InputExpose>({
  clear,
  a,
});

</script>
