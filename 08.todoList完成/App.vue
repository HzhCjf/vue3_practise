<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header @addTodo="addTodo" />
      <List :todoList="todoList" @changeSignle="changeSignle" @deleteSignle="deleteSignle" />
      <Footer :todoList="todoList" @allComplate="allComplate" @deleteComplate="deleteComplate" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<script setup lang="ts">
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";
import List from "./components/List/index.vue";
import { nanoid } from 'nanoid'
import { ref } from 'vue'

// 暴露todo的类型
export interface todoType {
  id: string,
  thing: string,
  done: boolean
}

// 暴露todoList的类型,它是由todo组成的数组
export type todoListType = todoType[]

// 用ref创建todoList的响应式数据
const todoList = ref<todoListType>([
  { id: nanoid(), thing: '吃饭', done: true },
  { id: nanoid(), thing: '喝酒', done: false },
  { id: nanoid(), thing: '按摩', done: false },
])


// 1.修改单个todo的状态,用下标来进行选择
const changeSignle = (index: number) => {
  todoList.value[index].done = !todoList.value[index].done
}

// 2.删除单个todo,用下标来进行选择删除
const deleteSignle = (index: number) => {
  todoList.value.splice(index, 1)
}

// 3.按回车添加todo,只接收一个thing
const addTodo = (thing: string) => {
  todoList.value.unshift({ id: nanoid(), thing, done: false })
}

// 4.全选
const allComplate = (type: boolean) => {
  todoList.value.forEach(item => item.done = type)
}

// 5.批量删除todo
const deleteComplate = () => {
  todoList.value = todoList.value.filter(item => !item.done)
}
</script>

<style lang="scss">
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
