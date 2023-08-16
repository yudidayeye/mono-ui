<!--
 * @Description: button
 * @Author: lijin
 * @Date: 2023-08-15 13:50:23
 * @LastEditTime: 2023-08-16 17:28:14
 * @LastEditors:
-->
<template>
  按钮：
  <button
    class="openx-button"
    @click="clickHandler"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { hello } from '@monoui/utils';

const props = withDefaults(
  defineProps<{ text: string }>(),
  {
    text: 'hello',
  },
);

function clickHandler() {
  hello(`${props.text}????`);
}
</script>

<style lang="scss">
.test-class {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  background-color: #e9ecef;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}
</style>
