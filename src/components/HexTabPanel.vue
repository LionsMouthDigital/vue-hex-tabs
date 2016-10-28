<template>
  <li v-show="show">
    <slot></slot>
  </li>
</template>

<script>
  import {Indexable} from 'vue-hex-mixins';

  export default {
    name: 'HexTabPanel',

    computed: {
      /**
       * Figure out which component is the controller, `HexTabs` or `HexTabPanels`.
       *
       * This allows `HexTabPanels` to function without `HexTabs`.
       */
      controller() {
        return typeof this.$parent.obeys !== 'undefined'
          ? this.$parent.$parent.$refs[this.$parent.obeys]
          : this.$parent;
      },

      /**
       * Show the panel when appropriate.
       */
      show() {
        return this.controller.activeTab === this.index;
      },
    },

    mixins: [Indexable],
  }
</script>
