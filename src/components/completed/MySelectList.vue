<template>
  <label class="font-bold mb-2 block" :for="$attrs.id">{{ label }}</label>
  <ul v-bind="$attrs">
    <li
      v-for="option in options"
      @click="toggleOption(option)"
      class="cursor-pointer"
      :key="option"
    >
      {{ option }} <span v-show="modelValue.includes(option)">✅</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    label: String,
    options: Array,
    modelValue: Array,
  },
  methods: {
    toggleOption(option) {
      const val = this.modelValue;
      const newValue = val.includes(option)
        ? val.filter((o) => o !== option)
        : [...val, option];
      this.$emit("update:modelValue", newValue);
    },
  },
};
</script>
