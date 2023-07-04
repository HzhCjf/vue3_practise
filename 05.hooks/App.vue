<template>
  <div>
    <div id="box" @click="boxChang"></div>
    <p>x:{{ box.x }}</p>
    <p>x:{{ box.y }}</p>
  </div>

  <img :src="cat" alt="" width="200">
  <button @click="catShow">获取猫</button>
</template>

<script lang="ts">
import { defineComponent} from 'vue'
export default defineComponent({
  name: 'App'
})
</script>
<script lang="ts" setup>
import axios from 'axios';
import {ref} from 'vue'
import useMousePoint from './hooks/useMousePoint'

const {box,boxChang} = useMousePoint()

const cat = ref('')

const catShow = async()=>{
  const result = await axios.get(`https://api.thecatapi.com/v1/images/search`)
  console.log(result);
  
  cat.value = result.data[0].url
}





</script>

<style lang="scss" scoped>
  #box{
    background-color: red;
    width: 200px;
    height: 200px;
  }
</style>