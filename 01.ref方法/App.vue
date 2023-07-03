<template>
  <div>
    <p>a:{{ a }}</p>
    <button @click="changea">changea</button>
    <Header/>
  </div>
</template>

<script lang="ts">
 import { defineComponent } from 'vue'
  export default  defineComponent({
    name:'App'
  })
</script>
<script lang="ts" setup>
// 使用ref来把数据变成响应式
import {ref} from 'vue'
// 引用子组件,直接使用,不需要注册
import Header from './components/Header.vue'
    const a= ref<number>(1);
    const changea = ()=>{
      // 使用ref的响应式的时候在script里面是调用里面value属性里面的值
      a.value++
      
    }
</script>

<style lang="less" scoped>
  
</style>