<template functional>
  <component :is="`h${props.level}`" v-bind="attrs" v-on="listeners">
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: ["level"],
};
</script>
