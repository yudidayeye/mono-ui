/*
 * @Description: main.ts
 * @Author: lijin
 * @Date: 2023-08-11 10:04:44
 * @LastEditTime: 2024-01-02 18:37:26
 * @LastEditors: yudidayeye 908737208@qq.com
 */
import { createApp } from 'vue';
import { Theme } from '@monoui/components';
import App from './App.vue';
import 'virtual:uno.css';

const app = createApp(App);
app.use(Theme, {
  /* 可选的选项 */
});
app.mount('#app');
