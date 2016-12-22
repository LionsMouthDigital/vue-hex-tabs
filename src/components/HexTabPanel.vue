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
  }
</script>
