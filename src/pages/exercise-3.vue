<template>
  <div>
    <ExerciseHeader n="3" />
    <div>
      <p>{{ msg | allCaps }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello world",
    };
  },
  filters: {
    allCaps(value) {
      return value.toUpperCase();
    },
  },
};
</script>
