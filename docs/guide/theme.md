<!--
 * @Author: yudidayeye 908737208@qq.com
 * @Date: 2024-01-09 10:37:42
 * @LastEditors: yudidayeye 908737208@qq.com
 * @LastEditTime: 2024-01-09 10:59:27
 * @FilePath: \mono-ui\docs\guide\theme.md
 * @Description: 主题
-->

# 主题

## 主题变量

### 通用变量

- 通用变量

```css
{
  /* 常用 */
  --mono-color-primary: 64, 169, 255;
  --mono-color-success: 255, 120, 117;
  --mono-color-warning: 251, 177, 117;
  --mono-color-danger: 246, 111, 106;
  --mono-color-info: 82, 110, 204;
  --mono-color-transparent: transparent;
  --mono-color-black: 0, 0, 0;
  --mono-color-white: 255, 255, 255;

  /* 背景 */
  --mono-color-page: 245, 245, 246;
  --mono-color-card: 255, 255, 255;
  --mono-color-bg_disable: 245,245,245;

  /* 文字 */
  --mono-color-header: 37, 43, 58;
  --mono-color-regular: 87, 93, 108;
  --mono-color-secondary: 138, 142, 153;
  --mono-color-placeholder: 171, 176, 184;
  --mono-color-disabled: 192, 196, 204;
  --mono-color-reverse: 255, 255, 255;

  /* 边框 */
  --mono-color-bd_darker: 205, 208, 214;
  --mono-color-bd_dark: 212, 215, 222;
  --mono-color-bd_base: 220, 223, 230;
  --mono-color-bd_light: 223, 225, 230;
  --mono-color-bd_lighter: 235, 239, 245;
  --mono-color-bd_lightest: 242, 246, 252;

  /* 基础边距 */
  --mono-spacing-xs: 8px;
  --mono-spacing-sm: 12px;
  --mono-spacing-md: 16px;
  --mono-spacing-lg: 24px;
  --mono-spacing-xl: 32px;
}
```

- 阶梯色: color-primary，color-success，color-warning，color-danger，color-info，color-gray

```css
{
  --mono-color-primary-light-1: 83, 178, 255;
  --mono-color-primary-dark-1: 58, 152, 230;
  --mono-color-primary-light-2: 102, 186, 255;
  --mono-color-primary-dark-2: 51, 135, 204;
  --mono-color-primary-light-3: 121, 195, 255;
  --mono-color-primary-dark-3: 45, 118, 179;
  --mono-color-primary-light-4: 140, 203, 255;
  --mono-color-primary-dark-4: 38, 101, 153;
  --mono-color-primary-light-5: 160, 212, 255;
  --mono-color-primary-dark-5: 32, 85, 128;
  --mono-color-primary-light-6: 179, 221, 255;
  --mono-color-primary-dark-6: 26, 68, 102;
  --mono-color-primary-light-7: 198, 229, 255;
  --mono-color-primary-dark-7: 19, 51, 77;
  --mono-color-primary-light-8: 217, 238, 255;
  --mono-color-primary-dark-8: 13, 34, 51;
  --mono-color-primary-light-9: 236, 246, 255;
  --mono-color-primary-dark-9: 6, 17, 26;

  --mono-color-success-light-1: 255, 134, 131;
  --mono-color-success-dark-1: 230, 108, 105;
  --mono-color-success-light-2: 255, 147, 145;
  --mono-color-success-dark-2: 204, 96, 94;
  --mono-color-success-light-3: 255, 161, 158;
  --mono-color-success-dark-3: 179, 84, 82;
  --mono-color-success-light-4: 255, 174, 172;
  --mono-color-success-dark-4: 153, 72, 70;
  --mono-color-success-light-5: 255, 188, 186;
  --mono-color-success-dark-5: 128, 60, 59;
  --mono-color-success-light-6: 255, 201, 200;
  --mono-color-success-dark-6: 102, 48, 47;
  --mono-color-success-light-7: 255, 215, 214;
  --mono-color-success-dark-7: 77, 36, 35;
  --mono-color-success-light-8: 255, 228, 227;
  --mono-color-success-dark-8: 51, 24, 23;
  --mono-color-success-light-9: 255, 242, 241;
  --mono-color-success-dark-9: 26, 12, 12;

  --mono-color-warning-light-1: 251, 185, 131;
  --mono-color-warning-dark-1: 226, 159, 105;
  --mono-color-warning-light-2: 252, 193, 145;
  --mono-color-warning-dark-2: 201, 142, 94;
  --mono-color-warning-light-3: 252, 200, 158;
  --mono-color-warning-dark-3: 176, 124, 82;
  --mono-color-warning-light-4: 253, 208, 172;
  --mono-color-warning-dark-4: 151, 106, 70;
  --mono-color-warning-light-5: 253, 216, 186;
  --mono-color-warning-dark-5: 126, 89, 59;
  --mono-color-warning-light-6: 253, 224, 200;
  --mono-color-warning-dark-6: 100, 71, 47;
  --mono-color-warning-light-7: 254, 232, 214;
  --mono-color-warning-dark-7: 75, 53, 35;
  --mono-color-warning-light-8: 254, 239, 227;
  --mono-color-warning-dark-8: 50, 35, 23;
  --mono-color-warning-light-9: 255, 247, 241;
  --mono-color-warning-dark-9: 25, 18, 12;

  --mono-color-danger-light-1: 247, 125, 121;
  --mono-color-danger-dark-1: 221, 100, 95;
  --mono-color-danger-light-2: 248, 140, 136;
  --mono-color-danger-dark-2: 197, 89, 85;
  --mono-color-danger-light-3: 249, 154, 151;
  --mono-color-danger-dark-3: 172, 78, 74;
  --mono-color-danger-light-4: 250, 169, 166;
  --mono-color-danger-dark-4: 148, 67, 64;
  --mono-color-danger-light-5: 251, 183, 181;
  --mono-color-danger-dark-5: 123, 56, 53;
  --mono-color-danger-light-6: 251, 197, 195;
  --mono-color-danger-dark-6: 98, 44, 42;
  --mono-color-danger-light-7: 252, 212, 210;
  --mono-color-danger-dark-7: 74, 33, 32;
  --mono-color-danger-light-8: 253, 226, 225;
  --mono-color-danger-dark-8: 49, 22, 21;
  --mono-color-danger-light-9: 254, 241, 240;
  --mono-color-danger-dark-9: 25, 11, 11;

  --mono-color-info-light-1: 99, 125, 209;
  --mono-color-info-dark-1: 74, 99, 184;
  --mono-color-info-light-2: 117, 139, 214;
  --mono-color-info-dark-2: 66, 88, 163;
  --mono-color-info-light-3: 134, 154, 219;
  --mono-color-info-dark-3: 57, 77, 143;
  --mono-color-info-light-4: 151, 168, 224;
  --mono-color-info-dark-4: 49, 66, 122;
  --mono-color-info-light-5: 169, 183, 230;
  --mono-color-info-dark-5: 41, 55, 102;
  --mono-color-info-light-6: 186, 197, 235;
  --mono-color-info-dark-6: 33, 44, 82;
  --mono-color-info-light-7: 203, 212, 240;
  --mono-color-info-dark-7: 25, 33, 61;
  --mono-color-info-light-8: 220, 226, 245;
  --mono-color-info-dark-8: 16, 22, 41;
  --mono-color-info-light-9: 238, 241, 250;
  --mono-color-info-dark-9: 8, 11, 20;

  --mono-color-gray-light-1: 209, 209, 209;
  --mono-color-gray-dark-1: 184, 184, 184;
  --mono-color-gray-light-2: 214, 214, 214;
  --mono-color-gray-dark-2: 163, 163, 163;
  --mono-color-gray-light-3: 219, 219, 219;
  --mono-color-gray-dark-3: 143, 143, 143;
  --mono-color-gray-light-4: 224, 224, 224;
  --mono-color-gray-dark-4: 122, 122, 122;
  --mono-color-gray-light-5: 230, 230, 230;
  --mono-color-gray-dark-5: 102, 102, 102;
  --mono-color-gray-light-6: 235, 235, 235;
  --mono-color-gray-dark-6: 82, 82, 82;
  --mono-color-gray-light-7: 240, 240, 240;
  --mono-color-gray-dark-7: 61, 61, 61;
  --mono-color-gray-light-8: 245, 245, 245;
  --mono-color-gray-dark-8: 41, 41, 41;
  --mono-color-gray-light-9: 250, 250, 250;
  --mono-color-gray-dark-9: 20, 20, 20;
}
```

## 主题切换

### 全局切换

### 局部切换
