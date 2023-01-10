<template>
  <div>
    <div>
      <h1 class="text-6xl font-bold">Vue 2→3</h1>
      <h2 class="text-3xl opacity-50">New Features + Migration Workshop</h2>
      <br />
      <div class="flex gap-2 flex-wrap">
        <div
          v-for="i in 8"
          :key="i"
          class="border-2 border-neutral-700 rounded p-2"
        >
          <span class="whitespace-nowrap text-lg font-bold"
            >Exercise {{ i }}</span
          >
          <div class="whitespace-nowrap">
            <RouterLink class="mr-1 pl-1" :to="`/exercise-${i}`"
              >Start</RouterLink
            >
            |
            <RouterLink class="mr-1 pl-1" :to="`/solutions/exercise-${i}`"
              >Solution</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
