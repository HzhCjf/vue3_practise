<template>
  <div>
    <Header :count="count" @changeCount="changeCount" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App'
})
</script>
<script lang="ts" setup>
import { ref } from 'vue'
import Header from './components/Header.vue'

const count = ref(1)
const changeCount = ()=>{
  count.value++
}

</script>

<style lang="scss"></style>