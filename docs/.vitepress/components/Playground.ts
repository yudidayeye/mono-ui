/*
 * @Author: yudidayeye 908737208@qq.com
 * @Date: 2024-01-22 18:53:22
 * @LastEditors: yudidayeye 908737208@qq.com
 * @LastEditTime: 2024-01-23 10:51:57
 * @FilePath: \mono-ui\docs\.vitepress\components\Playground.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const APP_WRAPPER_CODE = `
<script setup lang="ts">
import { getCurrentInstance } from 'vue';
import { Theme } from '@monouijin/components';
import App from './App.vue';

const instance = getCurrentInstance();

instance?.appContext.app.use(Theme);
</script>

<template>
  <App />
</template>
`;
