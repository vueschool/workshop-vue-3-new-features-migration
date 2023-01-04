<template>
  <div>
    <ExerciseHeader n="5" />
    <!-- This is the component you'll create -->
    <ColorPreview />
  </div>
</template>

<script>
// Change this import to your newly created component
import ColorPreview from "@/completed/components/ColorPreview.vue";
export default {
  components: { ColorPreview },
};
</script>
