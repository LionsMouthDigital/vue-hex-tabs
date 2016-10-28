<template>
  <li v-show="$parent.$parent.$refs[$parent.obeys].activeTab === index">
    <slot></slot>
  </li>
</template>

<script>
  import {Indexable} from 'vue-hex-mixins';

  export default {
    name: 'HexTabPanel',

    data() {
      return {
        show: false,
      };
    },

    mixins: [Indexable],
  }
</script>
