<template>
  <div>
    <h1>App</h1>
    <hr>
    <Count/>
    <hr>
    <Moive/>
  </div>
</template>

<script lang="ts">
 import { defineComponent } from 'vue'
  export default  defineComponent({
    name:'App'
  })
</script>
<script lang="ts" setup>
import Count from './components/Count.vue';
import Moive from './components/Moive.vue';
</script>

<style lang="less" scoped>
  
</style>