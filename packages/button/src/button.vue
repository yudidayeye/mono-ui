<!--
 * @Description: button 组件
 * @Author: lijin
 * @Date: 2023-08-15 13:50:23
 * @LastEditTime: 2024-01-19 11:01:18
 * @LastEditors: yudidayeye 908737208@qq.com
-->
<template>
  <button :class="defaultClasses">
    <slot :type="type" />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { DEFAULT_PREFIX } from '@monouijin/styles';
import { ButtonProps, defaultButtonProps, ButtonSlots } from './props';

const props = withDefaults(
  defineProps<ButtonProps>(),
  defaultButtonProps(),
);

defineSlots<ButtonSlots>();

const componentName = 'button';

const defaultClassName = DEFAULT_PREFIX + componentName;

const withPrefix = (name: string, prefix = DEFAULT_PREFIX) => `${prefix}${componentName}${name}`;

const classes = computed(() => {
  const results = [];
  if (props.type) {
    results.push(withPrefix(`--${props.type}`));
  }
  if (props.status) {
    results.push(withPrefix(`--${props.status}`));
  }
  if (props.plain) {
    results.push(withPrefix('--plain'));
  }
  if (props.disabled) {
    results.push(withPrefix('--disabled'));
  }
  return results;
});

const defaultClasses = computed(() => [defaultClassName, ...classes.value]);

</script>
