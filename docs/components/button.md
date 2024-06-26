<script setup>
import demoType from '../demo/button/type.vue';
import demoStatus from '../demo/button/status.vue';
import demoDisabled from '../demo/button/disabled.vue';
</script>

# Button 按钮

常用的操作按钮

## type 类型

<!-- 介绍 -->

- 按钮有五种类型：
  - 默认按钮
  - 主按钮（"primary"）
  - 朴素按钮（"plain"）
  - 虚线按钮("dashed")
  - 文本按钮（"text"）
  - 链接按钮（"link"）

:::demo

../demo/button/type.vue

:::

## status 状态

- 按钮有 4 种状态：
  - 警告（warning）
  - 危险（danger）
  - 成功（success）
  - 信息（info）

:::demo

../demo/button/status.vue

:::

## disabled 禁用

- 禁用：添加 disabled 属性即可让按钮处于不可用状态

:::demo

../demo/button/disabled.vue

:::

## TODO：ghost 幽灵按钮

<!-- 介绍  -->

- 幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。

<!-- 展示组件 -->

<demoDisabled></demoDisabled>

<!-- 展示源码 -->

<<< ../demo/button/disabled.vue

## TODO：ghost 幽灵按钮

<!-- 介绍  -->

- 幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。

<!-- 展示组件 -->

<demoDisabled></demoDisabled>

<!-- 展示源码 -->

<<< ../demo/button/disabled.vue

## TODO：loading 加载中

<!-- 介绍  -->

- 添加 loading 属性即可让按钮处于加载状态。

<!-- 展示组件 -->

<demoDisabled></demoDisabled>

<!-- 展示源码 -->

<<< ../demo/button/disabled.vue

## TODO：size 按钮尺寸

<!-- 介绍  -->

- 通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。

<!-- 展示组件 -->

<demoDisabled></demoDisabled>

<!-- 展示源码 -->

<<< ../demo/button/disabled.vue

## TODO：#icon 按钮图标

<!-- 介绍  -->

当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。

如果想控制 Icon 具体的位置，只能直接使用 Icon 组件，而非 icon 属性。

<!-- 展示组件 -->

<demoDisabled></demoDisabled>

<!-- 展示源码 -->

<<< ../demo/button/disabled.vue

## API

### [Button Props](../api/interfaces/Button.ButtonProps.md)

### [Button Slots](../api/interfaces/Button.ButtonSlots.md)
