<template>
  <div>
    <input type="text" ref="ipt" @change="ipt1">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App'
})
</script>
<script lang="ts" setup>
  import {ref} from 'vue'
  const ipt = ref()
  const ipt1 = ()=>{
    console.log(ipt.value.value);
    
  }
  
</script>

<style lang="scss">
</style>