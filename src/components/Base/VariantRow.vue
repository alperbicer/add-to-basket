<template>
  <div class="flex items-center mt-2">
    <span class="mr-2 w-20">
      {{ variant.name }}
    </span>:
    <BaseButton
      v-for="(value, index) in variant.values"
      :key="index"
      :custom-class="selectedVariant.value === value ? 'border-2 border-black rounded ml-2' : 'ml-2 border'"
      :disabled="checkDisable(value)"
      @click.native="selectedHandler(value)"
    >
      {{ value }}
    </BaseButton>
  </div>
</template>
<script>
import BaseButton from '@/components/Base/Button';
import utils from '@/utils';
export default {
  components: {
    BaseButton,
  },
  props: {
    variant: {
      type: Object,
      default: () => ({}),
    },
    selectedVariantList: {
      type: Array,
      default: () => [],
    },
    selectableVariantList: {
      type: Array,
      default: () => [],
    },
    attributeCount: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    selectedVariant() {
      return this.selectedVariantList.find((selectedVariant => selectedVariant.title === this.variant.name)) || {};
    },
  },
  methods: {
    selectedHandler(value) {
      const newSelectedVariantList = this.getNewSelectedVariantList({
        title: this.variant.name,
        value: value,
      });
      this.$emit('selectedVariant', newSelectedVariantList);
    },
    checkDisable(value) {
      const newSelectedVariantList = this.getNewSelectedVariantList({
        title: this.variant.name,
        value: value,
      });
      return newSelectedVariantList.length === this.attributeCount &&
        !utils.checkIsExistSelectedVariant(this.selectableVariantList, newSelectedVariantList);
    },
    getNewSelectedVariantList(variant) {
      let newSelectedVariantList = JSON.parse(JSON.stringify(this.selectedVariantList));
      if (newSelectedVariantList.length === this.attributeCount) {
        const newVariant = newSelectedVariantList.find((newSelectedVariant) => newSelectedVariant.title === variant.title);
        newVariant.value = variant.value;
        return newSelectedVariantList;
      } else {
        newSelectedVariantList = newSelectedVariantList.filter((newSelectedVariant) => newSelectedVariant.title !== variant.title);
        newSelectedVariantList.push(variant);
        return newSelectedVariantList;
      }
    },
  },
};
</script>