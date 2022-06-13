<template>
  <div id="app">
    <BaseContainer custom-class="flex py-10">
      <DetailShowcase :image-list="productVariant" />
      <DetailInfo
        :title="productDetail.productTitle"
        :barem-list="productDetail.baremList"
        :attribute-list="productDetail.selectableAttributes"
        :selected-variant-list.sync="selectedVariantList"
        :selectable-variant-list="productDetail.productVariants"
      />
    </BaseContainer>
  </div>
</template>
<script>
import productDetail from '@/services';
import BaseContainer from '@/components/Base/Container';
import DetailShowcase from '@/components/Detail/Showcase';
import DetailInfo from '@/components/Detail/Info';
export default {
  name: 'App',
  components: {
    BaseContainer,
    DetailShowcase,
    DetailInfo,
  },
  data() {
    return {
      productDetail: null,
      selectedVariantList: [],
    };
  },
  computed: {
    productVariant() {
      const that = this;
      if (this.selectedVariantList.length === this.productDetail.selectableAttributes.length) {
        return this.productDetail.productVariants
          .find((variant) => {
            return variant.attributes.every((attribute) => {
              return that.selectedVariantList.some((selectedVariant) => {
                return attribute.name === selectedVariant.title && attribute.value === selectedVariant.value;
              });
            });
          }).images;
      }
      return this.productDetail.productVariants.flatMap((productVariant) => productVariant.images);
    },
  },
  beforeMount() {
    this.fetchProductDetail();
  },
  methods: {
    fetchProductDetail() {
      this.productDetail = productDetail.getProductDetail();
    },
  },
};
</script>