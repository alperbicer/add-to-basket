<template>
  <div class=" bg-gray-100 p-5 mt-3">
    <div class="flex">
      <div class="flex flex-col mr-5 w-32">
        <BaseRowTitle title="Toptan Fiyat" />
        <span>(Adet)</span>
      </div>
      <div class="flex flex-wrap">
        <DetailCountRange
          v-for="(barem, index) in baremList"
          id="count-range"
          :key="index"
          :min="barem.minimumQuantity"
          :max="barem.maximumQuantity"
          :count="formattedCount"
          :price="barem.price"
        />
      </div>
    </div>
    <div class="mt-5 flex items-center justify-between">
      <div class="flex items-center">
        <BaseRowTitle custom-class="w-32 mr-5" title="Adet" />
        <BaseFormInput
          type="number"
          :min="minCount"
          :max="maxCount"
          input-class="w-32 h-8 mr-5"
          @input="(value) => $emit('update:count', parseInt(value || 0))"
        />
        Adet
      </div>
      <div class="text-green-400 ml-32">
        Stok Adeti: {{ maxCount }}
      </div>
    </div>
  </div>
</template>
<script>
import DetailCountRange from '@/components/Detail/CountRange';
import BaseRowTitle from '@/components/Base/RowTitle';
import BaseFormInput from '@/components/Base/Form/input';
export default {
  components: {
    DetailCountRange,
    BaseRowTitle,
    BaseFormInput,
  },
  props: {
    baremList: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    minCount() {
      return this.baremList[0].minimumQuantity;
    },
    maxCount() {
      return this.baremList[this.baremList.length - 1].maximumQuantity;
    },
    formattedCount() {
      return parseInt(this.count || 0);
    },
  },
};
</script>
<style lang="postcss" scoped>
  #count-range:not(:nth-last-of-type(1)) {
    @apply border-r
  }
</style>