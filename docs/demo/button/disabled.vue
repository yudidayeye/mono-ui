<!--
 * @Author: lijin
 * @Date: 2023-08-11 10:04:52
 * @LastEditTime: 2024-03-25 17:36:49
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
    <div class="btns">
      <Button
        type="primary"
        ghost
      >
        plain
      </Button>
      <Button
        type="primary"
        ghost
        disabled
      >
        plain disabled
      </Button>
    </div>
    <div :style="{ padding: '10px', background: 'rgb(190, 200, 200)' }">
      <Button ghost>
        Ghost
      </Button>
      <Button
        ghost
        disabled
      >
        Ghost(disabled)
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
