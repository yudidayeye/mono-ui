<!--
 * @Author: yudidayeye 908737208@qq.com
 * @Date: 2024-01-19 18:45:45
 * @LastEditors: yudidayeye 908737208@qq.com
 * @LastEditTime: 2024-01-19 18:46:00
 * @FilePath: \mono-ui\docs\.vitepress\components\Playground.vue
 * @Description: 演练场组件
-->
<template>
  <div v-if="isMounted">
    <Repl :store="store" :editor="Monaco" :auto-resize="true" :clear-console="false" :preview-options="previewOptions" />
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  reactive,
  onMounted,
} from 'vue';
import { Repl, ReplStore } from '@vue/repl';
import '@vue/repl/style.css';

let Monaco: any;
const isMounted = ref(false);

// 为了适配服务端渲染，组件本身，以及 Monaco 编辑器只在挂载完成后渲染
onMounted(() => {
  import('@vue/repl/monaco-editor').then((res) => {
    Monaco = res.default;
    isMounted.value = true;
  });
});

// repl组件需要store管理状态
const store = new ReplStore({});

const previewOptions = reactive({});

</script>

<style scoped lang="scss">
:deep(.vue-repl) {
  height: calc(100vh - var(--vp-nav-height));
}
</style>