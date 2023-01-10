<template>
  <div>
    <ExerciseHeader n="4" />
    <!-- This is the component you'll create -->
    <ModalOverlay>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hic enim
        totam possimus eligendi, veritatis accusamus, at amet quia sit, quidem
        aut! Amet quam repellendus asperiores odio maxime neque nostrum.
      </p>
    </ModalOverlay>
  </div>
</template>

<script>
// Change this import to your newly created component
import ModalOverlay from "../components/ModalOverlay.vue";
export default {
  components: { ModalOverlay },
};
</script>
