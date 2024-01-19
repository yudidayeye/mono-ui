<!--
 * @Author: lijin
 * @Date: 2023-08-11 10:04:52
 * @LastEditTime: 2024-01-08 17:20:20
 * @LastEditors: yudidayeye 908737208@qq.com
-->

<template>
  <div>
    <div class="btns">
      <Button>
        default
      </Button>
      <Button type="plain">
        plain
      </Button>
      <Button type="primary">
        primary
      </Button>
      <Button type="dashed">
        dashed
      </Button>
      <Button type="text">
        text
      </Button>
      <Button type="link">
        link
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@monoui/components';

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
