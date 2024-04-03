<!--
 * @Author: lijin
 * @Date: 2023-08-11 10:04:52
 * @LastEditTime: 2024-03-26 17:46:00
 * @LastEditors: Please set LastEditors
-->

<template>
  <div>
    <div class="btns">
      <Button
        type="primary"
        shape="default"
      >
        primary
      </Button>
      <Button
        type="primary"
        shape="round"
      >
        primary
      </Button>
      <Button
        type="primary"
        shape="circle"
      >
        dashed
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
