<template>
  <!-- 头部布局组件 -->
  <header class="el-header" :style="{ height }">
    <slot />
  </header>
</template>

<script setup lang="ts" name="ElHeader">
import { withDefaults } from "vue";

interface Props {
  height?: string;
}

withDefaults(defineProps<Props>(), {
  height: "60px",
});
</script>


<style lang="scss">
@import "../styles/mixin.scss";
@include b(header) {
  padding: $--header-padding;
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>
