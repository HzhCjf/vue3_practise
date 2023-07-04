<template>
  <div>
    <p>firstName:{{ firstName }}</p>
    <p>lastName:{{ lastName }}</p>
    <p>fullName:{{ fullName }}</p>
    <button @click="changeFullName">修改</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
export default defineComponent({
  name: 'App'
})
</script>
<script lang="ts" setup>

// 姓
const firstName = ref('zhang')
// 名
const lastName = ref('san')

//为姓名创建一个计算属性
// 这是computed的对象写法,可以使用get和set方法
const fullName = computed({
  // 在获取的时候用'-'把姓和名分隔开
  get() {
    return firstName.value + '-' + lastName.value
  },

  // 在姓名被修改的时候,这个函数接收一个新值
  set(newVal) {
    // 用split方法把新的姓和名提取出来
    const [first, last] = newVal.split('-')

    // 分别赋值给姓和名
    firstName.value = first
    lastName.value = last
  }
})


// 也可以写成一个函数,但是是只读的,不可更改
// const fullName = computed(()=>  firstName.value + '-' + lastName.value)

// 修改姓名
const changeFullName = () => {
  fullName.value = 'li-si'
}





</script>

<style lang="less" scoped></style>