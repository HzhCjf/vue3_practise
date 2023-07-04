<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="AllComplate" />
    </label>
    <span> <span>已完成{{ todoComplate }}</span> / 全部{{ todoList.length }} </span>
    <button class="btn btn-danger" @click="emits('deleteComplate')">清除已完成任务</button>
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

// todoList
const props = defineProps<{
  todoList: todoListType
}>()

// 接收自定义事件
const emits = defineEmits<{
  (event: 'allComplate', type: boolean): void;
  (event: 'deleteComplate'): void
}>()

// 已完成数量
const todoComplate = computed(() => {
  return props.todoList.reduce((p, c) => c.done ? p + 1 : p, 0)
})

// 全选
const AllComplate = computed({
  // 当todo都被选中的时候,全选也是选中状态,如果有一个没有被选中,那么全选就不是选中状态
  get() {
    return props.todoList.every(item => item.done) && props.todoList.length !== 0
  },
  // 当全选按钮状态改变的时候,todo的状态也随着改变
  set(newVal) {
    emits('allComplate', newVal)
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
  