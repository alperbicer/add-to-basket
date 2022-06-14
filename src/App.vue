<template>
  <div id="app">
    <BaseContainer custom-class="flex flex-wrap py-10 justify-center">
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
import utils from '@/utils';
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
      if (this.selectedVariantList.length === this.productDetail.selectableAttributes.length) {
        return utils.checkIsExistSelectedVariant(this.productDetail.productVariants, this.selectedVariantList).images;
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