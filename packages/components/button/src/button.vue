<!--
 * @Description: Button
 * @Author: lijin
 * @Date: 2023-08-10 15:49:33
 * @LastEditTime: 2023-08-11 15:54:14
 * @LastEditors:  
-->
<template>
  按钮：
  <button class="openx-button" @click="clickHandler">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { hello } from "@monoui/utils";

const props = defineProps(["text"]);

function clickHandler() {
  hello(props.text + "????");
}
</script>
