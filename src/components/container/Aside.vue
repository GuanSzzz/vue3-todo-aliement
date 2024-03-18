


<template>
  <aside
    class="el-aside"
    :style="{ width }"
  >
    <slot />
  </aside>
</template>

<script setup lang="ts" name="ElAside">
import {withDefaults} from 'vue'

type PropValues = {
  width:string
}
withDefaults(defineProps<PropValues>(),{
  width:"300px"
})
</script>

<style lang="scss">
@import '../styles/mixin.scss';
@include b(aside) {
  overflow: auto;
  box-sizing: border-box;
  flex-shrink: 0;
}

</style>