<script setup lang="ts">
defineProps({
  n: [String, Number],
});
</script>
<template>
  <div class="mb-10">
    <h1 class="text-6xl font-bold">Exercise {{ n }}</h1>
    <div
      v-if="$route.path.startsWith('/solutions')"
      class="text-2xl opacity-60 italic"
    >
      (Solution)
    </div>
    <RouterLink to="/">←Home</RouterLink>
  </div>
</template>
