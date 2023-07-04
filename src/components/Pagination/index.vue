<template>
  <div>
    <button v-for="page in totalPages" :key="page" :class="{active:page === current}" @click="emits('update:current',page)">{{ page }}</button>
    <select :value="limit" @change="emits('update:limit',+($event.target as HTMLSelectElement).value)">
        <option :value=3>每页3条</option>
        <option :value=5>每页5条</option>
        <option :value=7>每页7条</option>
        <option :value=9>每页9条</option>
    </select>
  </div>
</template>

<script lang="ts">
 import { defineComponent } from 'vue'
  export default  defineComponent({
    name:'Pagination'
  })
</script>
<script lang="ts" setup>
  defineProps<{
    current:number,
    limit:number,
    totalPages:number
  }>()


 const emits =  defineEmits<{
    (event:'update:current',page:number):void;
    (event:'update:limit',value:number):void
  }>()

</script>

<style lang="scss" scoped>
  .active{
    background-color: red;
  }
</style>