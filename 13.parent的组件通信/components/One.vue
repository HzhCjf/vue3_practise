<template>
  <div>
    <button @click="count($parent)">获取</button>
    <p>{{ count2 }}</p>
  </div>
</template>

<script lang="ts">
 import { defineComponent } from 'vue'
  export default  defineComponent({
    name:'One'
  })
</script>
<script lang="ts" setup>
import {ref} from 'vue'
const count2 = ref()
  const count = (parent:any)=>{
    console.log(parent);
    
    console.log(parent.count);
    count2.value = parent.count
    
  }
</script>

<style lang="less" scoped>
  
</style>