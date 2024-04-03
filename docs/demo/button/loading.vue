<!--
 * @Author: lijin
 * @Date: 2023-08-11 10:04:52
 * @LastEditTime: 2024-04-03 18:37:26
 * @LastEditors: Please set LastEditors
-->

<template>
  <div>
    <div class="btns">
      <Button
        type="primary"
        loading
      >
        primary
      </Button>
      <Button
        type="primary"
        :loading="loading"
        :icon="h(AlertOutlined)"
        @click="handleClick"
      >
        mouseenter me!
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@monouixc/components';
import { ref, h } from 'vue';
import { AlertOutlined } from '@monouixc/icons';

const loading = ref(false);

const handleClick = () => {
  loading.value = true;
};
</script>

<style scoped>
:deep(.btns .mono-button) {
  margin-bottom: 10px;
}

.mono-button:not(:first-child) {
  margin-left: 10px;
}
</style>
