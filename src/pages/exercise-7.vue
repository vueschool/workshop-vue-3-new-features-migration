<template>
  <div>
    <ExerciseHeader n="7" />
    <div class="flex gap-3">
      <AsyncComp1 />
      <AsyncComp2 />
    </div>
  </div>
</template>
<script>
import AsyncComp1 from "@/components/AsyncComp1.vue";
import AsyncComp2 from "@/components/AsyncComp2.vue";
export default {
  components: { AsyncComp1, AsyncComp2 },
};
</script>
