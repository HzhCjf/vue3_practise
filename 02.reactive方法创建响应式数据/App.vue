<template>
  <div>
   <p> person:{{ person }}</p>
    <button @click="changePerson">按钮</button>
  </div>
</template>

<script lang="ts">
 import { defineComponent,reactive } from 'vue'
  export default  defineComponent({
    name:'App'
  })
</script>
<script lang="ts" setup>
  interface personType {
    name:string,
    age?:number,
    sex:string,
    girlFri:string[],
    height?:number
  }
  const person = reactive<personType>({
    name:'zhangsan',
    age:20,
    sex:"nan",
    girlFri:['lili','zzzz']
  })

  const changePerson= ()=>{
    // 增
    person.height = 100
    // 删
    delete person.age
    // 改
    person.sex = 'nv'

    // person.girlFri[0] = 'oooo'

    // person.girlFri.length = 1

    // person.girlFri = [...person.girlFri,'pppp']

    person.girlFri.push('qqqq')
  }
</script>

<style lang="less" scoped>
  
</style>