<script setup lang="ts">

</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about-me">AboutMe</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/creations">Creations</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <slot></slot>
  </main>
</template>

<style scoped></style>