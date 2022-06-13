<template>
  <div class="flex ml-2">
    <div
      class="border px-4 py-2 mr-2"
      :class="customClass"
    >
      {{ value }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    customClass: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
};
</script>