<template>
  <main class="el-main">
    <slot />
  </main>
</template>


<!-- <script lang="ts">
export default{
  name:'ElMain'
}
</script> -->

<script setup lang="ts" name="ElMain">
6666
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
  background: rgb(241, 231, 239);
}

</style>