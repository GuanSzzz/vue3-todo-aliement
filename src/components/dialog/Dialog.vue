<template>
  <!-- Dialog 组件可以直接使用 Vue3 自带的 Teleport，很方便地渲染到 body 之上 -->
  <teleport :disabled="!appendToBody" to="body">
    <div class="el-dialog">
      <slot />
    </div>
  </teleport>
</template>

<script setup lang="ts" name="ElDialog">
import { ref,withDefaults } from "vue";
// withDefaults 是一个函数，用于设置 Vue 组件的默认属性值。它接受两个参数：

// defineProps<{...}>()：defineProps 函数用于定义组件的属性(props)，通过传入一个类型定义对象来指定属性的名称和类型。在这个例子中，defineProps 定义了一个包含多个属性的类型定义对象。
// 默认值对象：作为 withDefaults 的第二个参数，可以设置每个属性的默认值。
// withDefaults 函数的作用是合并传入的属性和默认值对象，返回一个新的属性对象。如果属性对象中没有传入某个属性，那么将使用默认值对象中对应属性的默认值。

withDefaults(defineProps<{
  appendToBody?:boolean,
}>(),{
  appendToBody:true
})
</script>

<style>
    .el-dialog{
        position: fixed;
        width: 100%;
  top: 0; right: 0; bottom: 0; left: 0;

display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,.5);

    }
    .el-dialog__content{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: white;
      width: 800px;
      height: 400px;
      padding: 5px;
    }
    iframe{
      width:600px;
      height:300px;
    }
</style>
