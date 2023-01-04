<template>
  <div class="bg-slate-700 p-4 rounded">
    <AppSpinner v-if="loading" />
    <div v-else>
      <h2 class="text-2xl">Request 2</h2>
      <p>Complete</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
  async created() {
    await fetch("https://httpstat.us/200?sleep=2000");
    this.loading = false;
  },
};
</script>
