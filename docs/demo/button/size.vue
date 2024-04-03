<!--
 * @Author: lijin
 * @Date: 2023-08-11 10:04:52
 * @LastEditTime: 2024-03-27 11:12:28
 * @LastEditors: Please set LastEditors
-->

<template>
  <div>
    <div class="btns">
      <Button
        type="primary"
        size="large"
      >
        Large
      </Button>
      <Button
        type="primary"
        size="default"
      >
        Default
      </Button>
      <Button
        type="primary"
        size="small"
      >
        Small
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
