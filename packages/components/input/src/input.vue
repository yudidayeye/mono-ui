<!--
 * @Description: Input
 * @Author: lijin
 * @Date: 2023-08-10 16:21:04
 * @LastEditTime: 2023-08-16 17:30:16
 * @LastEditors:
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
import { hello } from '@monoui/utils';

const { modelValue } = withDefaults(defineProps<{ modelValue: string }>(), {
  modelValue: 'lijin',
});

const emit = defineEmits<{
  (event: 'update:modelValue', val: string): void;
}>();

function inputHandler(e: any) {
  const { value } = e.target;
  emit('update:modelValue', value);
  hello(`${value}!!!`);
}
</script>
