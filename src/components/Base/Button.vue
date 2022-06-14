<template>
  <component
    :is="tag"
    :type="buttonType"
    class="btn"
    :class="classObject"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>
<script>
export default {
  name: 'Button',
  props: {
    tag: {
      type: String,
      default: 'button',
      validator: val => ['button', 'a', 'nuxt-link'].includes(val),
    },
    type: {
      type: String,
      default: 'button',
    },
    size: {
      type: String,
      default: '',
      validator: val => ['', 'xs', 'sm', 'md', 'lg'].includes(val),
    },
    color: {
      type: String,
      default: '',
      validator: val => ['', 'btn-primary', 'btn-success'].includes(val),
    },
    outline: {
      type: [Boolean, String],
      default: null,
    },
    block: {
      type: Boolean,
      default: false,
    },
    customClass: {
      type: [String, Array, Object],
      default: '',
    },
    customTextClass: {
      type: [String, Array, Object],
      default: '',
    },
  },
  computed: {
    classObject() {
      return Object.values({
        size: this.size ? (this.size === 'xs' && 'btn-xs') || (this.size === 'sm' && 'btn-sm') || (this.size === 'md' && 'btn-md') : null,
        color: this.color,
        block: this.block && 'w-full',
        customClass: this.customClass,
        outline: this.outline ? 'btn-outline' + (this.outline === true ? '' : ' ' + this.outline) : null,
      });
    },
    buttonType() {
      return this.tag === 'button' ? this.type : null;
    },
  },
};
</script>
<style lang="postcss">
  .btn {
    @apply flex w-min justify-center text-center items-center px-3 text-base font-semibold h-12 rounded-md bg-transparent whitespace-nowrap;
  }
  .btn:disabled {
    @apply opacity-50 pointer-events-none bg-gray-200 !important;
  }
  .btn-primary {
    &:not(.btn-outline) {
      @apply bg-yellow-400 text-white hover:bg-yellow-500;
    }
    &.btn-outline {
      @apply  text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-white;
    }
  }
  .btn-success {
    &:not(.btn-outline) {
      @apply bg-green-500 text-white hover:bg-green-500;
    }
    &.btn-outline {
      @apply text-green-500 border-green-500 hover:bg-green-500 hover:text-white;
    }
  }
</style>