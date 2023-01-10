<template>
  <div>
    <ExerciseHeader n="1" />
    <MySelectList
      label="Groceries"
      v-model="items"
      :options="['Apples', 'Milk', 'Bread', 'Eggs']"
      class="bg-neutral-700 p-2 rounded"
    />
  </div>
</template>

<script>
import MySelectList from "@/completed/components/MySelectList.vue";
export default {
  components: { MySelectList },
  data() {
    return {
      items: [],
    };
  },
};
</script>
