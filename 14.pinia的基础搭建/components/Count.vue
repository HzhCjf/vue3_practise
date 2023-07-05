<template>
    <div>
        <h2>Count:{{ count }}</h2>
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
const { count } = storeToRefs(countStore)

</script>

<style lang="less" scoped></style>