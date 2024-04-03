<!--
 * @Description: button 组件
 * @Author: lijin
 * @Date: 2023-08-15 13:50:23
 * @LastEditTime: 2024-04-03 18:37:49
 * @LastEditors: Please set LastEditors
-->
<template>
  <button v-bind="buttonProps">
    <component :is="showIcon" />
    <slot :type="type" />
  </button>
</template>

<script setup lang="ts">
import { computed, h, useAttrs } from 'vue';
import { DEFAULT_PREFIX } from '@monouixc/styles';
import { LoadingOutlined } from '@monouixc/icons';
import {
  ButtonProps, defaultButtonProps, ButtonSlots, ButtonEmits,
} from './props';

const props = withDefaults(
  defineProps<ButtonProps>(),
  defaultButtonProps(),
);

const slots = defineSlots<ButtonSlots>();
const emit = defineEmits<ButtonEmits>();
const attrs = useAttrs();

const componentName = 'button';
const defaultClassName = DEFAULT_PREFIX + componentName;
const withPrefix = (name: string) => `${defaultClassName}${name}`;

const { icon: iconNode = slots.icon } = props;
const showIcon = computed(() => (props.loading ? h(LoadingOutlined) : iconNode));
const defaultClasses = computed(() => ([[defaultClassName], {
  [withPrefix(`--${props.type}`)]: props.type !== 'default' && props.type,
  [withPrefix(`--${props.status}`)]: props.status,
  [withPrefix('--disabled')]: props.disabled,
  [withPrefix('--ghost')]: props.ghost,
  [withPrefix('--loading')]: props.loading,
  [withPrefix(`--${props.shape}`)]: props.shape !== 'default' && props.shape,
  [withPrefix(`--${props.size}`)]: props.size !== 'default' && props.size,
  [withPrefix('--icon')]: showIcon,
}]));

const handleClick = (event: Event) => {
  if (props.loading || props.disabled) {
    event.preventDefault();
    return;
  }
  emit('click', event);
};
const handleMousedown = (event: Event) => {
  emit('mousedown', event);
};
const buttonProps = {
  ...attrs,
  class: [defaultClasses.value, attrs.class],
  onClick: handleClick,
  onMousedown: handleMousedown,
};

</script>
