<template>
  <li v-show="isActive">
    <slot></slot>
  </li>
</template>


<script>
  import {Indexable} from 'vue-hex-mixins';

  export default {
    name: 'HexTabPanel',


    mixins: [Indexable],


    computed: {
      /**
       * Check whether this tab panel is active.
       *
       * @return {Boolean}
       */
      isActive() {
        return this.$parent.activeTabPanel === this.index;
      },
    },


    methods: {
      /**
       * Notify the parent of this tab panel's height.
       *
       * @author Curtis Blackwell
       * @return {void}
       */
      emitHeight() {
        let style      = window.getComputedStyle(this.$el);
        let display    = style.display;
        let visibility = style.visibility;

        // Set styles to allow measuring while maintaining visibility.
        this.$el.style.visibility = !this.isActive ? 'hidden' : this.$el.style.visibility;
        this.$el.style.display    = 'block';

        HexBus.$emit('HexTabPanel:heightMeasured', this.$parent._uid, this.$el.offsetHeight);

        // Reset styles.
        this.$el.style.display    = display;
        this.$el.style.visibility = visibility;
      },
    },


    mounted() {
      if (this.$parent.fixedHeight) {
        typeof this.$parent.fixedHeight === 'boolean'
          ? this.emitHeight()
          : setTimeout(this.emitHeight, this.$parent.fixedHeight.delay);
      }
    },
  }
</script>
