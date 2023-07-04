<template>
  <div>
    <p>count:{{ count }}</p>
    <p> person:{{ person }}</p>
    <button @click="changePerson">person</button>
    <button @click="changeCount">count</button>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref,watch } from 'vue'
export default defineComponent({
  name: 'App'
})
</script>
<script lang="ts" setup>
interface personType {
  name: string,
  age: number,
  sex: string,
  girlFri: string[],
  height?: number,
  xueke:{
    math:number,
    ch:number
  }
}
const person = ref<personType>({
  name: 'zhangsan',
  age: 20,
  sex: "nan",
  girlFri: ['lili', 'zzzz'],
  xueke:{
    math:100,
    ch:50
  }
})


const count  = ref(1)
const changePerson = () => {
  // person.value.girlFri[0] = '545'
  person.value.girlFri.push('1111')
  // person.value.xueke.math++
  // person.value.age++
  // person.value = {...person.value,height:180}
}

const changeCount = ()=>{
  count.value++
}

// 基础类型的ref是可以直接进行监听的
watch(count,()=>{
  console.log('count');
  
})

// 对象类型的ref对象直接监听不到,需要进行深度监听,直接替换也可监听到
// watch(person,()=>{
//   console.log('person');
  
// },{
//   deep:true
// })

// 直接监听对象,可以直接监听到,如果是替换这个对象,就算是深度监听也监听不到,这时可以是用一个函数来返回这个对象进行监听,就可以进行监听了,且不需要深度监听
// watch(()=>person.value,()=>{
//   console.log('person');
  
// })


// 直接监听ref对象内部里面对象的值是可以监听到的,因为可能是一个基础类型,所以需要使用一个函数来进行返回,当里面是一个数组的时候是可以直接监听到,也可以监听到里面某个值的改变
// watch(()=>person.value.girlFri[0],()=>{
//   console.log('person');
  
// })

// 监听一个数组的时候是可以监听到里面值的变化的
// watch(person.value.girlFri,()=>{
//   console.log('person');
// })

</script>

<style lang="less" scoped></style>