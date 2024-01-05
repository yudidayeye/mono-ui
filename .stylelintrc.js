/*
 * @Description: stylelint 配置
 * @Author: lijin
 * @Date: 2023-08-15 13:18:18
 * @LastEditTime: 2024-01-05 13:59:34
 * @LastEditors: yudidayeye 908737208@qq.com
 */
module.exports = {
  // 继承的预设，这些预设包含了规则集插件
  extends: [
    // 代码风格规则
    'stylelint-stylistic/config',
    // 基本 scss 规则
    'stylelint-config-standard-scss',
    // scss vue 规则
    'stylelint-config-recommended-vue/scss',
    // 样式属性顺序规则
    'stylelint-config-recess-order',
  ],
  rules: {
    // 自定义规则集的启用 / 禁用
    // 'stylistic/max-line-length': null,
    'stylistic/max-line-length': 100,
    // to be kebab-case
    'selector-class-pattern': null,
    'stylistic/block-closing-brace-newline-after': null,
  },
};
