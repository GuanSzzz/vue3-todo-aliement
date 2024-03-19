<template>
<div class="el-form">
    <slot />
</div>
</template>

<script lang="ts" setup name="ElForm">

import { PropType,provide,ref } from 'vue';
import {Rules} from 'async-validator'
import {emitter} from '../../emitter'
import {FormItem,key} from './type'
// 接受
const props=defineProps({
    model:{type:Object,required:true},
    rules:{type: Object as PropType<Rules>}
})

// 传递
provide(key,{
    model:props.model,
    rules:props.rules
})

const items=ref<FormItem[]>([])
// 相当于event-bus 
emitter.on('addFormItem',(item)=>{
    items.value.push(item)
})

// 校验函数
function validate(cb: (isValid: boolean) => void) {
  const tasks = items.value.map((item) => item.validate())
  Promise.all(tasks)
    .then(() => { cb(true) })
    .catch(() => { cb(false) })
}
//  暴露
defineExpose({
  validate,
})
</script>