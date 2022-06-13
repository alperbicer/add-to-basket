<template>
  <div class="font-bold text-lg mt-2">
    {{ minimumPrice }} - {{ maximumPrice }}
    <BaseInfoText>/ Adet</BaseInfoText>
    <div>
      <BaseInfoText>{{ minimumOrderCount }} Adet (Minimum Sipariş Adedi)</BaseInfoText>
    </div>
  </div>
</template>
<script>
import utils from '@/utils';
import BaseInfoText from '@/components/Base/InfoText';
export default {
  components: {
    BaseInfoText,
  },
  props: {
    baremList: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    maximumPrice() {
      return utils.convertNumberToPrice(this.baremList[0].price);
    },
    minimumPrice() {
      return utils.convertNumberToPrice(this.baremList[this.baremList.length - 1].price);
    },
    minimumOrderCount() {
      return this.baremList[0].minimumQuantity;
    },
  },
};
</script>