<template>
  <div class="w-full flex justify-between" :class="customClass">
    <span>{{ title }}</span><span>:</span>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    customClass: {
      type: String,
      default: '',
    },
  },
};
</script>