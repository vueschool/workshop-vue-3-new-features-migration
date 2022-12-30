<template>
  <div>
    <div>
      <h1 class="text-6xl font-bold">Vue 2→3</h1>
      <h2 class="text-3xl opacity-50">New Features + Migration Workshop</h2>
      <br />
      <div>
        <span v-for="i in 8" :key="i">
          |
          <RouterLink class="mr-1 pl-1" :to="`/exercise-${i}`">
            Exercise {{ i }}
          </RouterLink>
        </span>
      </div>
    </div>
  </div>
</template>
