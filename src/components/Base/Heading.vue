<template>
  <component
    :is="tag"
    :class="classObject"
  >
    <slot />
  </component>
</template>
<script>
export default {
  name: 'Heading',
  props: {
    tag: {
      type: String,
      default: 'h1',
    },
    size: {
      type: String,
      default: 'text-5xl',
    },
    color: {
      type: String,
      default: 'text-gray-600',
    },
    font: {
      type: String,
      default: 'font-bold',
    },
    customClass: {
      type: String,
      default: '',
    },
  },
  computed: {
    classObject() {
      return Object.values({
        size: this.size,
        color: this.color,
        font: this.font,
        customClass: this.customClass,
      });
    },
  },
};
</script>
