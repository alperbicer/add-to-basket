<template>
  <BaseButton
    :color="isLoading ? 'btn-success' : 'btn-primary'"
    v-bind="$attrs"
    custom-class="w-40"
    :disabled="disabled"
    @click.native="!isLoading && addToBasketHandler()"
  >
    {{ isLoading ? 'SEPETE EKLENDİ!' : 'SEPETE EKLE' }}
  </BaseButton>
</template>
<script>
import BaseButton from '@/components/Base/Button';
export default {
  components: {
    BaseButton,
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    addToBasketHandler() {
      this.isLoading = true;
      this.$emit('add-to-basket');
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
  },
};
</script>
