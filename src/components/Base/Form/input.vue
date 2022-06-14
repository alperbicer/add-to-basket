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
      @focus="focushandler(true)"
      @blur="focushandler(false)"
      @keypress="keypressHandler"
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
      type: [String, Number],
      default: null,
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
          if (vm.type === 'number') {
            const newValue = parseInt(event.target.value) > vm.max ? vm.max : parseInt(event.target.value) || null;
            vm.$emit('input', newValue);
            event.target.value = newValue;
          } else {
            vm.$emit('input', event.target.value);
          }
        },
      });
    },
  },
  methods: {
    focushandler(focus) {
      this.isFocus = focus;
    },
    keypressHandler(event) {
      if (this.type === 'number') {
        let charCode = event.which || event.keyCode;
        if ((charCode > 31 && (charCode < 48 || charCode > 57))) {
          event.preventDefault();
        } else {
          return true;
        }
      } else {
        return true;
      }
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
