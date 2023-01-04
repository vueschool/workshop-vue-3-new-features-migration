<template>
  <div class="bg-slate-700 p-4 rounded">
    <div>
      <h2 class="text-2xl">Request 2</h2>
      <p>Complete</p>
    </div>
  </div>
</template>
<script>
export default {
  async setup() {
    await fetch("https://httpstat.us/200?sleep=2000");
  },
};
</script>
