<script setup>
defineProps({
  n: [String, Number],
});
</script>
<template>
  <div class="mb-10">
    <h1 class="text-6xl font-bold">Exercise {{ n }}</h1>
    <RouterLink to="/">←Home</RouterLink>
  </div>
</template>
