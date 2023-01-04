<template>
  <div>
    <button @click="sendData">Send Data</button>
  </div>
</template>
<script>
export default {
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
};
</script>
