<!--
 * @Author: lijin
 * @Date: 2023-08-11 10:04:52
 * @LastEditTime: 2024-03-22 17:42:49
 * @LastEditors: yudidayeye 908737208@qq.com
-->

<template>
  <div>
    <div class="btns">
      <Button>
        Button
      </Button>
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
    <div class="btns">
      <Button type="primary">
        primary
      </Button>
      <Button
        type="primary"
        status="success"
      >
        primary success
      </Button>
      <Button
        type="primary"
        status="danger"
      >
        primary danger
      </Button>
      <Button
        type="primary"
        status="info"
      >
        primary info
      </Button>
      <Button
        type="primary"
        status="warning"
      >
        primary warning
      </Button>
    </div>
    <div class="btns">
      <Button type="dashed">
        dashed
      </Button>
      <Button
        type="dashed"
        status="success"
      >
        dashed success
      </Button>
      <Button
        type="dashed"
        status="danger"
      >
        dashed danger
      </Button>
      <Button
        type="dashed"
        status="info"
      >
        dashed info
      </Button>
      <Button
        type="dashed"
        status="warning"
      >
        dashed warning
      </Button>
    </div>
    <div class="btns">
      <Button type="text">
        text
      </Button>
      <Button
        type="text"
        status="success"
      >
        text success
      </Button>
      <Button
        type="text"
        status="danger"
      >
        text danger
      </Button>
      <Button
        type="text"
        status="info"
      >
        text info
      </Button>
      <Button
        type="text"
        status="warning"
      >
        text warning
      </Button>
    </div>
    <div class="btns">
      <Button type="link">
        link
      </Button>
      <Button
        type="link"
        status="success"
      >
        link success
      </Button>
      <Button
        type="link"
        status="danger"
      >
        link danger
      </Button>
      <Button
        type="link"
        status="info"
      >
        link info
      </Button>
      <Button
        type="link"
        status="warning"
      >
        link warning
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
        status="success"
      >
        plain success
      </Button>
      <Button
        type="primary"
        ghost
        status="danger"
      >
        plain danger
      </Button>
      <Button
        type="primary"
        ghost
        status="warning"
      >
        plain warning
      </Button>
      <Button
        type="primary"
        ghost
        status="info"
      >
        plain info
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
