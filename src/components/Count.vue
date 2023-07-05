<template>
    <div>
        <h2>Count:{{ count }}</h2>
        <h2>doubelCount:{{ douobelNum }}</h2>
        <button @click="addNum">累加</button>
        <button @click="addNNum(3)">累加n</button>
        <button @click="awaitAddNum(3)">累加n</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Count'
})
</script>
<script lang="ts" setup>
import useCountStore from '../store/modules/count'
import { storeToRefs } from 'pinia'
// 将自定义hooks调用,返回的值赋给一个变量,里面是一个代理对象
const countStore = useCountStore()

// 用pinia提供的storeToRefs方法将里面count解构出来
const { count,douobelNum } = storeToRefs(countStore)
const {addNum,addNNum,awaitAddNum} = countStore
</script>

<style lang="less" scoped></style>