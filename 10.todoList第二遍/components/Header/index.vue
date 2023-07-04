<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="addTodo" />
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>
  
<script setup lang="ts">
// 接收App传来的自定义事件函数
const emits = defineEmits<{
  (event: 'addTodo', thing: string): void
}>()

// 添加todo,$event的类型为Event
const addTodo = (e: Event) => {
  // 当e为Event的时候,target要断言为元素的类型,然后才能获取到value值,去掉空格
  const thing = (e.target as HTMLInputElement).value.trim()
  // 当没有thing的时候直接返回
  if (!thing) return
  emits('addTodo', thing);
  (e.target as HTMLInputElement).value = ''
}
</script>
  
<style scoped lang="scss">
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
  