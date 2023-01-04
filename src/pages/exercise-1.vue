<template>
  <div>
    <ExerciseHeader n="1" />

    <!-- 
      # This is the component you'll create 
        * Notice it must support v-model
        * and those classes must affect the ul of list items 
    -->
    <MySelectList
      label="Groceries"
      v-model="items"
      :options="['Apples', 'Milk', 'Bread', 'Eggs']"
      class="bg-neutral-700 p-2 rounded"
    />
  </div>
</template>

<script>
// Change this import to your newly created component
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
