<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header @addTodo="addTodo" />
      <List :todoList="todoList" @changeTodo="changeTodo" @deleteTodo="deleteTodo" />
      <Footer :todoList="todoList" @allChecked="allChecked" @deleteAllTodo="deleteAllTodo" />
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
import {ref} from 'vue'
import {nanoid} from 'nanoid'
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";
import List from "./components/List/index.vue";

// todo的类型
export interface todoType{
  id:string,
  thing:string,
  done:boolean
}

// todoList的类型
export type todoListType = todoType[]

// todoList数据
const todoList = ref<todoListType>([
  {id:nanoid(),thing:'落地',done:true},
  {id:nanoid(),thing:'寻找',done:false},
  {id:nanoid(),thing:'归土',done:false},
])

// 改变单个todo的状态
const changeTodo  = (index:number)=>{
  todoList.value[index].done = !todoList.value[index].done
}

// 删除单个todo
const deleteTodo = (index:number)=>{
  todoList.value.splice(index,1)
}

// 添加一个todo
const addTodo = (thing:string)=>{
  todoList.value.unshift({id:nanoid(),thing,done:false})
}

// 全选
const allChecked = (value:boolean)=>{
  todoList.value.forEach(item => item.done = value)
}

// 批量删除
const deleteAllTodo = ()=>{
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
