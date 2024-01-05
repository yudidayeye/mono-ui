<!--
 * @Description: Input
 * @Author: lijin
 * @Date: 2023-08-10 16:21:04
 * @LastEditTime: 2024-01-02 15:57:41
 * @LastEditors: yudidayeye 908737208@qq.com
-->
<template>
  输入：
  <input
    class="openx-input"
    type="text"
    :value="modelValue"
    @input="inputHandler"
  >
</template>

<script setup lang="ts">
const { modelValue } = withDefaults(defineProps<{ modelValue: string }>(), {
  modelValue: 'lijin',
});

const emit = defineEmits<{
  (event: 'update:modelValue', val: string): void;
}>();

function inputHandler(e: any) {
  const { value } = e.target;
  emit('update:modelValue', value);
}
</script>
