<!--
 * @Author: yudidayeye 908737208@qq.com
 * @Date: 2024-03-22 16:11:57
 * @LastEditors: yudidayeye 908737208@qq.com
 * @LastEditTime: 2024-03-22 17:43:27
 * @FilePath: \mono-ui\docs\demo\button\ghost.vue
 * @Description: ghost
-->
<template>
  <div>
    <div class="btns">
      <Button ghost>
        default
      </Button>
      <Button
        type="primary"
        ghost
      >
        primary
      </Button>
      <Button
        type="dashed"
        ghost
      >
        dashed
      </Button>
      <Button
        type="text"
        ghost
      >
        text
      </Button>
      <Button
        type="link"
        ghost
      >
        link
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@monouixc/components';

</script>

<style scoped>
.mono-button:not(:first-child) {
  margin-left: 10px;
}

.btns {
  padding: 20px;
  background-color: #bec8c8;
}
</style>
