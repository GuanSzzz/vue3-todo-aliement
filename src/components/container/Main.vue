<template>
  <main class="el-main">
    <slot />
  </main>
</template>

<script setup lang="ts" name="ElMain">
</script>
<style lang="scss">
@import '../styles/mixin.scss';
@include b(main) {
  display: block;
  flex: 1;
  flex-basis: auto;
  overflow: auto;
  box-sizing: border-box;
  padding: $--main-padding;
}

</style>