<template>
  <img
    decoding="auto"
    :src="imageSource"
    :class="customClass"
    :data-src="src"
    :alt="alt"
    @error="imageErrorHandler"
  >
</template>
<script>
import defaultPlaceholderImage from '@/assets/img/placeholder.png';
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
    placeholderImage: {
      type: String,
      default: defaultPlaceholderImage,
    },
    errorImage: {
      type: String,
      default: defaultPlaceholderImage,
    },
    rootMargin: {
      type: String,
      default: '200px',
    },
    threshold: {
      type: Number,
      default: 0.25,
    },
    passive: {
      type: Boolean,
      default: false,
    },
    customClass: {
      type: [String, Array, Object],
      default: null,
    },
    preloadPlaceholder: {
      type: Boolean,
      default: false,
    },
    preload: {
      type: Boolean,
      default: false,
    },
    alt: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isNativeLazyLoadSupported: false,
      isIntersectionObserverSupported: false,
      isObserverReady: false,
      hasError: false,
      forcePassive: false,
    };
  },
  head() {
    return {
      link: [
        ...(this.preloadPlaceholder
          ? [
            {
              hid: 'preload#' + this.placeholderImage,
              rel: 'preload',
              as: 'image',
              href: this.placeholderImage,
            },
          ]
          : []),
        ...(this.preload
          ? [
            {
              hid: 'preload#' + this.src,
              rel: 'preload',
              as: 'image',
              href: this.src,
            },
          ]
          : []),
      ],
    };
  },
  computed: {
    imageSource() {
      if (this.hasError || this.src === 'null') {
        return this.errorImage;
      }
      const isReady =
        this.disableLazyLoad ||
        this.isNativeLazyLoadSupported ||
        this.isObserverReady;
      if (isReady) {
        return this.src || this.errorImage;
      }
      return this.placeholderImage;
    },
    disableLazyLoad() {
      return this.passive || this.forcePassive;
    },
  },
  watch: {
    src: 'initHybridLazyLoad',
  },
  mounted() {
    this.initHybridLazyLoad();
  },
  methods: {
    initHybridLazyLoad() {
      if (this.disableLazyLoad) {
        return;
      }
      this.isNativeLazyLoadSupported = 'loading' in HTMLImageElement.prototype;
      this.isIntersectionObserverSupported = 'IntersectionObserver' in window;
      if (this.isNativeLazyLoadSupported) {
        this.$el.setAttribute('loading', 'lazy');
      } else if (this.isIntersectionObserverSupported) {
        this.initIntersectionObserver();
      } else {
        this.forcePassive = true;
      }
    },
    initIntersectionObserver() {
      const intersectionObserverOptions = {
        rootMargin: this.rootMargin,
        threshold: this.threshold,
      };
      const observer = new IntersectionObserver(
        this.intersectionObserverCallback,
        intersectionObserverOptions,
      );
      observer.observe(this.$el);
    },
    intersectionObserverCallback(entries, observer) {
      const [target] = entries;
      if (target.isIntersecting) {
        this.loadOriginalImageSource();
        observer.unobserve(this.$el);
        observer.disconnect();
      }
    },
    loadOriginalImageSource() {
      const newImage = new Image();
      newImage.onload = () => {
        this.isObserverReady = true;
        this.$emit('loaded', true);
        newImage.remove();
      };
      newImage.onerror = () => {
        this.isObserverReady = true;
        this.hasError = true;
        this.$emit('failed', true);
        newImage.remove();
      };
      newImage.src = this.src || this.errorImage;
    },
    imageErrorHandler() {
      this.hasError = true;
    },
  },
};
</script>
