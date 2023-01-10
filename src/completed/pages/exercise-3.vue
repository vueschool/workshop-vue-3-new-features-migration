<template>
  <div>
    <ExerciseHeader n="3" />
    <div>
      <p>{{ allCaps(msg) }}</p>
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
  methods: {
    allCaps(value) {
      return value.toUpperCase();
    },
  },
};
</script>
