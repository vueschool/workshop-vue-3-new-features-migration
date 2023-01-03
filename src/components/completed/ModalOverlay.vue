<template>
  <button @click="open = true" class="border-[1px] p-2 border-white rounded">
    Open Modal
  </button>

  <Teleport to="body">
    <Transition>
      <div
        v-if="open"
        class="z-50 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center"
      >
        <div
          @click="open = false"
          class="bg-cover bg-black opacity-90 absolute top-0 left-0 right-0 bottom-0"
        ></div>
        <div
          class="modal bg-white text-black p-4 rounded w-96 max-w-full relative"
        >
          <slot></slot>
          <footer class="mt-3">
            <button
              class="bg-blue-500 p-2 rounded text-white"
              @click="open = false"
            >
              Close
            </button>
          </footer>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
};
</script>

<style scoped>
.modal,
.bg-cover {
  transition: all 0.2s ease;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from .bg-cover,
.v-leave-to .bg-cover {
  opacity: 0;
}

.v-enter-from .modal,
.v-leave-to .modal {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
