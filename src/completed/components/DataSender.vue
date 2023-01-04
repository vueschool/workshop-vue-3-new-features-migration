<template>
  <div>
    <button @click="sendData">Send Data</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  // define as object to use validation
  emits: {
    // null is no validation
    "sending-start": null,

    // or provide function to validate
    "sending-complete"(payload: { duration: number; response: string }) {
      return !!(typeof payload.duration === "number" && payload.response);
    },
  },
  methods: {
    sendData() {
      this.$emit("sending-start");

      // send data to API

      this.$emit("sending-complete", {
        duration: 2,
        response: "how are you",
      });
    },
  },
});
</script>
