<!--
 * @Author: lijin
 * @Date: 2023-08-11 10:04:52
 * @LastEditTime: 2024-01-05 14:05:32
 * @LastEditors: yudidayeye 908737208@qq.com
-->

<template>
  <div>
    <div class="btns">
      <Button status="success">
        success
      </Button>
      <Button status="danger">
        danger
      </Button>
      <Button status="warning">
        warning
      </Button>
      <Button status="info">
        info
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
