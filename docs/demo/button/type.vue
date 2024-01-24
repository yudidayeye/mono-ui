<!--
 * @Author: lijin
 * @Date: 2023-08-11 10:04:52
 * @LastEditTime: 2024-01-24 11:01:07
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
import { Button } from '@monouixc/components';

</script>

<style scoped>
  :deep(.btns .mono-button) {
    margin-bottom: 10px;
  }

  .mono-button:not(:first-child) {
    margin-left: 10px;
  }
</style>
