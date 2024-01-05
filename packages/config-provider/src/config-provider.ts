/*
 * @Author: yudidayeye 908737208@qq.com
 * @Date: 2024-01-02 17:33:28
 * @LastEditors: yudidayeye 908737208@qq.com
 * @LastEditTime: 2024-01-02 18:09:44
 * @FilePath: \mono-ui\packages\config-provider\src\config-provider.ts
 * @Description: ConfigProvider组件Props类型定义|默认值类型定义
 */
import { Component } from 'vue';
import { MonouiCssVarsConfig } from '@monoui/styles';
import { InferVueDefaults } from '@monoui/utils';
import type ConfigProvider from './config-provider.vue';

export interface ConfigProviderProps {
  /** 组件的节点将被渲染的标签类型 */
  tag?: string | Component;

  /** 应用在该节点上的主题变量 */
  themeVars?: MonouiCssVarsConfig;
}

export function defaultConfigProviderProps(): Required<InferVueDefaults<ConfigProviderProps>> {
  return {
    tag: 'div',
    themeVars: () => ({}),
  };
}

export type ConfigProviderInstance = InstanceType<typeof ConfigProvider>;
