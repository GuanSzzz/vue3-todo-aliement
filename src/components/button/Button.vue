<template>
    <button
      class="el-button" 
      :class="[size ? `el-button--${size}` : '',]"
    >
      <slot />
    </button>
  </template>
  <script setup lang="ts" name="ElButton">
  
  import {computed, withDefaults} from 'vue'
  interface Props {
    size?:""|'small'|'medium'|'large'
  }
  const props = withDefaults(defineProps<Props>(),{
    size:""
  })
  </script>
  