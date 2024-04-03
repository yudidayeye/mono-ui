<!--
 * @Author: lijin
 * @Date: 2023-08-11 10:04:52
 * @LastEditTime: 2024-03-27 17:04:47
 * @LastEditors: Please set LastEditors
-->

<template>
  <div class="btns">
    <Button
      type="primary"
      :icon="h(AlertOutlined)"
    >
      icon-prop
    </Button>
    <Button type="primary">
      <template #icon>
        <LoadingOutlined />
      </template>
      icon-slot
    </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@monouixc/components';
import { h } from 'vue';
import { AlertOutlined, LoadingOutlined } from '@monouixc/icons';
</script>

<style scoped>
:deep(.btns .mono-button) {
  margin-bottom: 10px;
}

.mono-button:not(:first-child) {
  margin-left: 10px;
}
</style>
