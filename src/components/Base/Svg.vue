<template>
  <span
    class="svg"
    :class="classObject"
    :style="style"
    v-on="$listeners"
    v-html="source"
  />
</template>
<script>
import SvgList from '@/constants/svg';
export default {
  props: {
    file: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: null,
    },
    color: {
      type: String,
      default: 'text-gray-500',
    },
    customClass: {
      type: [String, Array, Object],
      default: '',
    },
  },
  computed: {
    source() {
      return require(`!!svg-inline-loader!@/assets/svg/${this.file}.svg`);
    },
    classObject() {
      return Object.values({
        color: this.color,
        file: ' svg--' + this.file,
        customClass: this.customClass,
      });
    },
    style() {
      const icon = SvgList[this.file];
      if (!icon) {
        throw new Error(`Svg doesn't have any icon with name ${icon}. Please insert a valid icon.`);
      }
      let iconWidth = icon.width;
      let iconHeight = icon.height;
      if (this.size) {
        const size = this.size;
        const ratio = size / iconWidth;
        iconWidth = size;
        iconHeight = iconHeight * ratio;
      }
      return {
        width: iconWidth + 'px',
        height: iconHeight + 'px',
      };
    },
  },
};
</script>
<style lang="postcss" scoped>
.svg {
  display: inherit;
  fill: currentColor;
}
</style>
