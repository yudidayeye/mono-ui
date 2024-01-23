<!--
 * @Author: lijin
 * @Date: 2023-08-11 10:04:52
 * @LastEditTime: 2024-01-04 14:48:14
 * @LastEditors: yudidayeye 908737208@qq.com
-->

<template>
  <div>
    <div class="btns">
      <Button>Button</Button>
      <Button type="primary">
        Button
      </Button>
      <Button type="success">
        Button
      </Button>
      <Button type="danger">
        Button
      </Button>
      <Button type="warning">
        Button
      </Button>
      <Button type="info">
        Button
      </Button>
    </div>
    <div class="btns">
      <Button plain>
        Button
      </Button>
      <Button
        type="primary"
        plain
      >
        Button
      </Button>
      <Button
        type="success"
        plain
      >
        Button
      </Button>
      <Button
        type="danger"
        plain
      >
        Button
      </Button>
      <Button
        type="warning"
        plain
      >
        Button
      </Button>
      <Button
        type="info"
        plain
      >
        Button
      </Button>
    </div>
    <div class="btns">
      <Button disabled>
        Button
      </Button>
      <Button
        type="primary"
        disabled
      >
        Button
      </Button>
      <Button
        type="success"
        disabled
      >
        Button
      </Button>
      <Button
        type="danger"
        disabled
      >
        Button
      </Button>
      <Button
        type="warning"
        disabled
      >
        Button
      </Button>
      <Button
        type="info"
        disabled
      >
        Button
      </Button>
    </div>
  </div>
  <div>---------------------主题切换-------------------</div>
  <br>
  <div>
    <ConfigProvider
      class="btns"
      :theme-vars="partThemeVars"
    >
      <Button plain>
        Button
      </Button>
      <Button
        type="primary"
        plain
      >
        Button
      </Button>
      <Button
        type="success"
        plain
      >
        Button
      </Button>
      <Button
        type="danger"
        plain
      >
        Button
      </Button>
      <Button
        type="warning"
        plain
      >
        Button
      </Button>
      <Button
        type="info"
        plain
      >
        Button
      </Button>
    </ConfigProvider>
    <div class="btns">
      <Button @click="switchGlobalTheme">
        切换全局主题，当前：{{ currentGlobalTheme }}
      </Button>
      <Button @click="switchPartTheme">
        切换当前行主题，当前：{{ currentPartTheme }}
      </Button>
    </div>
    <div>------------------图标-------------------</div>
    <div>
      <div>
        <i class="i-mono-alert text-100px c-primary inline-block" />
        <i class="i-mono-alert-marked text-20px color-red c-success inline-block" />
      </div>
    </div>
    <Input />
  </div>
</template>

<script setup lang="ts">
import {
  Button, Input, ConfigProvider, useTheme,
  tinyThemeVars,
  themeVars,
  MonouiCssVarsConfig,
} from '@monouijin/components';
import { ref, reactive } from 'vue';

const { setTheme } = useTheme();

// 全局主题切换
const currentGlobalTheme = ref<'default' | 'tiny'>('default');
function switchGlobalTheme() {
  if (currentGlobalTheme.value === 'tiny') {
    currentGlobalTheme.value = 'default';
    setTheme(themeVars);
  } else {
    currentGlobalTheme.value = 'tiny';
    setTheme(tinyThemeVars);
  }
}

// 局部主题切换
const currentPartTheme = ref<'default' | 'tiny'>('default');
const partThemeVars: MonouiCssVarsConfig = reactive({});
function switchPartTheme() {
  if (currentPartTheme.value === 'tiny') {
    currentPartTheme.value = 'default';
    Object.assign(partThemeVars, themeVars);
  } else {
    currentPartTheme.value = 'tiny';
    Object.assign(partThemeVars, tinyThemeVars);
  }
}
</script>

<style lang="scss" scoped>
.btns {
  :deep(.mono-button) {
    margin-bottom: 10px;

    &:not(:first-child) {
      margin-left: 10px;
    }
  }
}
</style>
