<!--
 * @Author: lijin
 * @Description:
 * @Date: 2024-03-29 10:41:35
 * @LastEditTime: 2024-03-29 11:22:13
 * @FilePath: \mono-ui\docs\demo\button\components\MonoIcon.vue
-->
<template>
  <span :class="iconClasses" />
</template>

<script setup lang="ts">
import { IconProps, defaultIconProps } from './props';

const props = withDefaults(defineProps<IconProps>(), defaultIconProps());

const iconClasses = {
  monoicon: true,
  [props.typeClass]: true,
  'monoicon-spin': props.spin,
};
</script>

<style scoped>
.monoicon {
  display: inline-flex;
  align-items: center;
  font-style: normal;
  line-height: 0;
  color: inherit;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizelegibility;
  -webkit-font-smoothing: antialiased;
}

@keyframes loading-circle {
  100% {
    transform: rotate(360deg);
  }
}

.monoicon-spin::before,
.monoicon-spin {
  display: inline-block;
  animation: loading-circle 1s infinite linear;
}
</style>
