<!--
 * @Author: lijin
 * @Date: 2023-08-11 10:04:52
 * @LastEditTime: 2024-01-23 18:56:26
 * @LastEditors: yudidayeye 908737208@qq.com
-->

<template>
  <div>
    <div class="btns">
      <Button>
        default
      </Button>
      <Button disabled>
        default disabled
      </Button>
    </div>
    <div class="btns">
      <Button type="plain">
        plain
      </Button>
      <Button
        type="plain"
        disabled
      >
        plain disabled
      </Button>
    </div>
    <div class="btns">
      <Button type="primary">
        primary
      </Button>
      <Button
        type="primary"
        disabled
      >
        primary disabled
      </Button>
    </div>
    <div class="btns">
      <Button type="dashed">
        dashed
      </Button>
      <Button
        type="dashed"
        disabled
      >
        dashed disabled
      </Button>
    </div>
    <div class="btns">
      <Button type="text">
        text
      </Button>
      <Button
        type="text"
        disabled
      >
        text disabled
      </Button>
    </div>
    <div class="btns">
      <Button type="link">
        link
      </Button>
      <Button
        type="link"
        disabled
      >
        link disabled
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@monouixc/components';

</script>

<style scoped>
:deep(.mono-button) {
  margin-bottom: 10px;
}

.mono-button:not(:first-child) {
  margin-left: 10px;
}
</style>
