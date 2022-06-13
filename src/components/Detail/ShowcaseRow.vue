<template>
  <div :class="customClass">
    <BaseImg
      v-for="(image, index) in imageList"
      :key="index"
      :src="image"
      custom-class="h-20 mr-2 mt-2 border"
      :class="{ 'border-4 border-black': selectedIndex === index }"
      @click.native="selectedHandler(index)"
    />
  </div>
</template>
<script>
import BaseImg from '@/components/Base/Img';
export default {
  components: {
    BaseImg,
  },
  props: {
    imageList: {
      type: Array,
      default: () => [],
    },
    selectedIndex: {
      type: Number,
      default: 0,
    },
    customClass: {
      type: String,
      default: '',
    },
  },
  methods: {
    selectedHandler(index) {
      this.$emit('update:selected-index', index);
    },
  },
};
</script>