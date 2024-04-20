<script setup lang="ts">
const header = ref<HTMLElement | null>(null)
const bodyElement = ref<HTMLElement | null>(null)
const hasScrolled = ref<Boolean>(false);
const colorMode = useColorMode()
onMounted(() => {
  console.log("colorMode", colorMode)
  bodyElement.value = document.getElementsByTagName('body')?.[0];
  console.log(bodyElement.value)
  window.addEventListener('scroll', (e) => {
    hasScrolled.value = true;
  })
})

watch(hasScrolled, (newVal, oldVal) => {
  console.log('newVal', newVal)
});
</script>

<template>
  <header ref="header"
    class="fixed top-0 left-0 right-0 border-b-2 border-green-600  flex items-center justify-around dark:bg-black">
    <div class="switch-container">
      <select v-model="colorMode.preference"
        class="border w-24 h-8 dark:bg-gray-900 dark:text-white dark:border-gray-700">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
    <nav>
      <ul class="flex justify-center space-x-8 ">
        <li>
          <NuxtLink class="dark:text-white no-underline inline-block p-4 cursor-pointer hover:text-green-600" to="/">
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="dark:text-white no-underline inline-block p-4 cursor-pointer hover:text-green-600"
            to="/about-me">
            About
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="dark:text-white no-underline inline-block p-4 cursor-pointer hover:text-green-600"
            to="/creations">Creations
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
  <div class="grid justify-items-center flex h-full items-top dark:bg-slate-900">
    <div class="text-9xl mt-16 dark:text-white">
      <h1>Nuxt Dark Mode is Easy</h1>
    </div>
  </div>
  <main :style="{
        marginTop: `${header?.clientHeight}px`
      }">
    <slot></slot>
  </main>
</template>

<style></style>