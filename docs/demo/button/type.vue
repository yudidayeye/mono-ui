<!--
 * @Author: lijin
 * @Date: 2023-08-11 10:04:52
 * @LastEditTime: 2024-03-22 17:41:04
 * @LastEditors: yudidayeye 908737208@qq.com
-->

<template>
  <div>
    <div class="btns">
      <Button>
        default
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
    <hr>
    <div class="btns">
      <div>
        <Button
          type="primary"
          ghost
        >
          plain
        </Button>
      </div>
      一般这种按钮可称为朴素(plain)按钮,可通过 primary-ghost 的方式实现
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
