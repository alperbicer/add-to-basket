<template>
  <div class="mb-2 pr-5 pl-2" :class="{'bg-yellow-200': count >= min && count <= max }">
    <div>{{ min }} - {{ max }}</div>
    <div>{{ formattedPrice }}</div>
  </div>
</template>
<script>
import utils from '@/utils';
export default {
  props: {
    min: {
      type: Number,
      default: null,
    },
    max: {
      type: Number,
      default: null,
    },
    price: {
      type: Number,
      default: null,
    },
    count: {
      type: Number,
      default: null,
    },
  },
  computed: {
    formattedPrice() {
      return utils.convertNumberToPrice(this.price);
    },
  },
};
</script>