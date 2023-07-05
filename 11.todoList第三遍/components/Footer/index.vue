<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="allChecked" />
    </label>
    <span> <span>已完成{{ todoNum }}</span> / 全部{{ todoList.length }} </span>
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
import { todoListType } from "../../App.vue";

// props
const props = defineProps<{
  todoList:todoListType
}>()

// 接收的自定义事件函数
const emits = defineEmits<{
  (event:'allChecked',value:boolean):void;
  (event:'deleteAllTodo'):void
}>()

// 已完成数量
const todoNum = computed(()=>{
  return props.todoList.reduce((p,c)=> c.done?p+1:p,0)
})

// 全选
const allChecked = computed({
  get(){
    return props.todoList.every(item => item.done) && props.todoList.length !==0
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
  