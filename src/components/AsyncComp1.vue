<template>
  <div class="bg-slate-700 p-4 rounded">
    <AppSpinner v-if="loading" />
    <div v-else>
      <h2 class="text-2xl">Request 1</h2>
      <p>Complete</p>
      <AsyncComp2 />
    </div>
  </div>
</template>
<script>
import AsyncComp2 from "./AsyncComp2.vue";
export default {
  components: { AsyncComp2 },
  data() {
    return {
      loading: true,
    };
  },
  async created() {
    await fetch("https://httpstat.us/200?sleep=1000");
    this.loading = false;
  },
};
</script>
