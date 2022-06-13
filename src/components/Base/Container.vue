<template>
  <div
    class="mx-auto px-6.25"
    :class="classObject"
  >
    <slot />
  </div>
</template>
<script>
export default {
  name: 'Container',
  props: {
    size: {
      type: String,
      default: 'container',
    },
    customClass: {
      type: [String, Array, Object],
      default: null,
    },
  },
  computed: {
    classObject() {
      return Object.values({
        size: this.size,
        customClass: this.customClass,
      });
    },
  },
};
</script>
