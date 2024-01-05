<!--
 * @Description: button 组件
 * @Author: lijin
 * @Date: 2023-08-15 13:50:23
 * @LastEditTime: 2024-01-05 14:06:52
 * @LastEditors: yudidayeye 908737208@qq.com
-->
<template>
  <button :class="defaultClasses">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { DEFAULT_PREFIX } from '@monoui/styles';
import { ButtonProps, defaultButtonProps } from './button';

const props = withDefaults(
  defineProps<ButtonProps>(),
  defaultButtonProps(),
);

const componentName = 'button';

const defaultClassName = DEFAULT_PREFIX + componentName;

const withPrefix = (name: string, prefix = DEFAULT_PREFIX) => `${prefix}${componentName}${name}`;

const classes = computed(() => {
  const results = [];
  results.push(withPrefix(`--${props.type ? props.type : 'default'}`));
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
