<script setup>
import TodoListComponent from '@/components/TodoListComponent.vue'
</script>

<template>
  <div class="pa-10">
    <h1>Todo List</h1>
    <div class="d-flex flex-wrap mb-6">
      <TodoListComponent />
    </div>
  </div>
</template>

<style>
.container {
  flex-wrap: wrap;
}
</style>
