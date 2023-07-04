<template>
  <ul class="todo-main">
    <li v-for="todo, index in todoList" :key="todo.id" :class="{ active: isActiveIndex === index }"
      @mouseenter="isActiveIndex = index" @mouseleave="isActiveIndex = -1">
      <label>
        <input type="checkbox" :checked="todo.done" @change="emits('changeSignle', index)" />
        <span>{{ todo.thing }}</span>
      </label>
      <button class="btn btn-danger" @click="emits('deleteSignle', index)">删除</button>
    </li>
  </ul>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "List",
});
</script>
  
<script setup lang="ts">
import { todoListType } from '../../App.vue';
import { ref } from 'vue'


// 接收todoList,以及定义它的类型
defineProps<{
  todoList: todoListType
}>()

// 类名active的数据
const isActiveIndex = ref(-1)

// 单个todo的checked状态和删除单个todo
const emits = defineEmits<{
  (event: 'changeSignle', index: number): void,
  (event: 'deleteSignle', index: number): void
}>()
</script>
  
<style  scoped lang="scss">
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}

/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li.active {
  background-color: #ccc;
}

li.active button {
  display: block;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>