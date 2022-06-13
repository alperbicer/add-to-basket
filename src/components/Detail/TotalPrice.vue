<template>
  <div class="flex p-5">
    <BaseRowTitle title="Toplam" custom-class="font-bold w-32 mr-5" />
    <div>
      <span class="text-xl font-bold">
        {{ formattedPrice }}
      </span>
      <div class="flex items-center mt-3">
        <BaseSvg file="cargo" custom-class="mr-2" />
        <span>Kargo Ücreti:</span>
        <span class="ml-2 text-blue-500">Alıcı Öder</span>
      </div>
    </div>
  </div>
</template>
<script>
import BaseRowTitle from '@/components/Base/RowTitle';
import BaseSvg from '@/components/Base/Svg';
import utils from '@/utils';
export default {
  components: {
    BaseRowTitle,
    BaseSvg,
  },
  props: {
    count: {
      type: Number,
      default: null,
    },
    price: {
      type: Number,
      default: null,
    },
  },
  computed: {
    formattedPrice() {
      return utils.convertNumberToPrice(this.count * this.price);
    },
  },
};
</script>