<script
  setup
  lang="ts"
>
const header = ref<HTMLElement | null>(null)
</script>

<template>
  <header
    ref="header"
    class="fixed top-0 left-0 right-0 border-b-2 border-green-600  flex items-center justify-end bg-white dark:bg-[#0C1B33]"
  >
    <nav>
      <ul class="flex justify-center space-x-8 ">
        <li>
          <NuxtLink
            class="dark:text-white no-underline inline-block p-4 cursor-pointer dark:hover:text-green-600 hover:text-green-600"
            to="/"
          >
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="dark:text-white no-underline inline-block p-4 cursor-pointer dark:hover:text-green-600 hover:text-green-600"
            to="/about-me"
          >
            About
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="dark:text-white no-underline inline-block p-4 cursor-pointer dark:hover:text-green-600 hover:text-green-600"
            to="/creations"
          >Creations
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <SwitchButton />

  </header>
  <main :style="{
    marginTop: `${header?.clientHeight}px`
  }">
    <slot></slot>
  </main>
</template>

<style></style>