<template>
  <div class="max-w-md mr-10">
    <BaseImg
      :src="imageList[selectedIndex]"
      custom-class="mx-auto"
    />
    <DetailShowcaseRow
      :image-list="imageList"
      :selected-index.sync="selectedIndex"
      custom-class="flex flex-wrap justify-start mt-2"
    />
  </div>
</template>
<script>
import BaseImg from '@/components/Base/Img';
import DetailShowcaseRow from '@/components/Detail/ShowcaseRow';
export default {
  components: {
    BaseImg,
    DetailShowcaseRow,
  },
  props: {
    imageList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedIndex: 0,
    };
  },
};
</script>