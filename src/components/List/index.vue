<template>
    <ul class="todo-main">
        <li v-for="todo,index in todoList" :key="todo.id" :class="{active:isActive === index}" @mouseenter="isActive = index" @mouseleave="isActive = -1">
            <label>
                <input type="checkbox" :checked="todo.done" @change="emits('todoCheck',index)" />
                <span>{{ todo.thing }}</span>
            </label>
            <button class="btn btn-danger" @click="emits('deleteTodo',index)">删除</button>
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
import { todoListType } from "../../App.vue";
import {ref} from "vue"

// 接收App传来的todoList
defineProps<{
    todoList:todoListType
}>()
// 接收App传来的自定义事件函数
const emits = defineEmits<{
    (event:'todoCheck',index:number):void;
    (event:'deleteTodo',index:number):void
}>()

// 类名active的开关，初始值是-1，当鼠标移入todo的时候，值为这个todo的下标，移出就改回-1，这个值与todo的下标相等的时候就可以获得类名active
const isActive = ref(-1)
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

li.active{
    background-color: #ccc;
}

li.active button{
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