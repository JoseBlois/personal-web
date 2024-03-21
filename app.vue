<script setup>

const counter = ref(0)

</script>

<template>
  <div>
    <button @click="counter++">+</button>
    <span>{{counter}}</span>
  </div>
</template>
