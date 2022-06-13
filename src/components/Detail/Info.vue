<template>
  <div>
    <BaseHeading size="text-2xl">
      {{ title }}
    </BaseHeading>
    <DetailPriceRange :barem-list="baremList" />
    <BaseVariantRow
      v-for="(attribute, index) in attributeList"
      :key="index"
      :variant="attribute"
      :selected-variant-list="selectedVariantList"
      :selectable-variant-list="selectableVariantList"
      :attribute-count="attributeList.length"
      @selectedVariant="selectedVariantHandler"
    />
    <DetailPricingCombination :barem-list="baremList" :count.sync="count" />
    <DetailTotalPrice :count="count" :price="price" />
    <BaseAddBasket :disabled="!isEnableAddToBasketButton" />
  </div>
</template>
<script>
import BaseHeading from '@/components/Base/Heading';
import BaseVariantRow from '@/components/Base/VariantRow';
import DetailPriceRange from '@/components/Detail/PriceRange';
import DetailPricingCombination from '@/components/Detail/PricingCombination';
import DetailTotalPrice from '@/components/Detail/TotalPrice';
import BaseAddBasket from '@/components/Base/AddBasket';
export default {
  components: {
    BaseHeading,
    DetailPriceRange,
    BaseVariantRow,
    DetailPricingCombination,
    DetailTotalPrice,
    BaseAddBasket,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    baremList: {
      type: Array,
      default: () => [],
    },
    attributeList: {
      type: Array,
      default: () => [],
    },
    selectedVariantList: {
      type: Array,
      default: () => [],
    },
    selectableVariantList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      count: null,
    };
  },
  computed: {
    price() {
      const barem = this.baremList.find((barem) => this.count >= barem.minimumQuantity && this.count <= barem.maximumQuantity);
      return barem ? barem.price : 0;
    },
    isEnableAddToBasketButton() {
      return this.attributeList.length === this.selectedVariantList.length &&
        (this.count >= this.baremList[0].minimumQuantity && this.count <= this.baremList[this.baremList.length - 1].maximumQuantity);
    },
  },
  methods: {
    selectedVariantHandler(newSelectedVariantList) {
      this.$emit('update:selected-variant-list', newSelectedVariantList);
    },
  },
};
</script>