<template>
  <div class="flex items-center h-10">
    <div
      :class="classes.swatch"
      class="rounded-tl-md rounded-bl-md h-full w-10 border-[1px] border-white"
    ></div>
    <input
      class="pl-4 bg-transparent border-[1px] rounded-tr-md rounded-br-md border-white h-full border-l-0 focus:outline-none"
      type="text"
      v-model="color"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      color: "red",
    };
  },
};
</script>
<style module="classes">
.swatch {
  background-color: v-bind(color);
}
</style>
