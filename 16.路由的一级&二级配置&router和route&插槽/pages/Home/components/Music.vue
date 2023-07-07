<template>
    <div>Music</div>
    <p>id:{{ id }}</p>
</template>

<script lang="ts">
 import { defineComponent } from 'vue'
  export default  defineComponent({
    name:'Music'
  })
</script>
<script lang="ts" setup>
  import {useRoute} from 'vue-router'
  const route = useRoute()
  const id  = route.params.id
</script>

<style lang="less" scoped>
  
</style>