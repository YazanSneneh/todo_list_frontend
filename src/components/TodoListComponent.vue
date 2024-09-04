<script setup>
import { onMounted, ref } from 'vue'
import { getTodoList } from '@/api/todoService'

const todoList = ref(Array)

onMounted(async () => {
  const result = await getTodoList()
  todoList.value = result.data
})
</script>

<template>
  <div class="todo ma-3 pa-5 elevation-2" v-for="(todo, index) in todoList" :key="index">
    <div class="d-flex">
      <span> <v-icon icon="$vuetify"></v-icon> {{ todo.piriority }}</span>
      <span>{{ todo.status_display }}</span>
    </div>
    <h3>{{ todo.title }}</h3>
    <p>{{ todo.description }}</p>
  </div>
</template>

<style scoped>
.todo {
  width: 350px;
  height: 200px;
}
</style>
