<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="allChecked" />
    </label>
    <span> <span>已完成{{ todoComplateNUm }}</span> / 全部{{ todoList.length }} </span>
    <button class="btn btn-danger" @click="emits('deleteAllTodo')">清除已完成任务</button>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
});
</script>
  
<script setup lang="ts">
import { computed } from "vue";
import type { todoListType } from "../../App.vue";

// 接收App传来的自定义事件
const emits = defineEmits<{
  (event:'allChecked',value:boolean):void;
  (event:'deleteAllTodo'):void
}>()

// 接收App传来的todoList
const props = defineProps<{
  todoList: todoListType
}>()

// 计算已完成的todo,当todo的done为true的时候就+1
const todoComplateNUm = computed(() => {
  return props.todoList.reduce((p, c) => c.done ? p + 1 : p,0)
})

// 全选按钮
const allChecked = computed({
  // 每一个todo的done都为true的时候并且todoList的长度不等于0选中全选
  get(){
    return props.todoList.every(item => item.done) && props.todoList.length !== 0 
  },
  set(newVal){
    emits('allChecked',newVal)
  }
})

</script>
  
<style scoped lang="scss">
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
  