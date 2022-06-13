<template>
  <div class="relative">
    <input
      ref="input"
      :value="value"
      class="form-input"
      :class="inputClass"
      :type="inputType"
      :min="min"
      :max="max"
      v-bind="$attrs"
      v-on="inputListeners"
      @focus="handleFocus(true)"
      @blur="handleFocus(false)"
    >
  </div>
</template>
<script>
export default {
  name: 'Input',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
      default: '',
    },
    min: {
      type: Number,
      default: null,
    },
    max: {
      type: Number,
      default: null,
    },
    inputClass: {
      type: [String, Array, Object],
      default: '',
    },
  },
  data() {
    return {
      isFocus: false,
      inputType: this.type,
    };
  },
  computed: {
    inputListeners() {
      const vm = this;
      return Object.assign({}, this.$listeners, {
        input(event) {
          const newValue = vm.maskRule ? event : event.target.value;
          vm.$emit('input', newValue);
        },
      });
    },
  },
  methods: {
    handleFocus(focus) {
      this.isFocus = focus;
    },
  },
};
</script>
<style lang="postcss" scoped>
.focused.has-label {
  & label {
    @apply top-1 translate-y-0 text-xs font-semibold !important;
    @apply text-gray-500;
  }
  & .form-input {
    @apply pt-4 !important;
  }
}
input {
  &::-webkit-contacts-auto-fill-button {
    @apply invisible !hidden pointer-events-none absolute right-0;
  }
  &::-webkit-credentials-auto-fill-button {
    @apply right-0 absolute pointer-events-none invisible;
  }
  &::-ms-reveal,
  &::-ms-clear {
    @apply: none;
  }
}
</style>
