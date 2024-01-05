<!--
 * @Author: lijin
 * @Date: 2023-08-11 10:04:52
 * @LastEditTime: 2024-01-04 18:52:02
 * @LastEditors: yudidayeye 908737208@qq.com
-->

<template>
  <div>
    <div class="btns">
      <Button type="primary">
        primary
      </Button>
      <Button type="default">
        default
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
