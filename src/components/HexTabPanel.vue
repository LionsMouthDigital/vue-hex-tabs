<template>
  <li v-show="$parent.$parent.activeTab === index">
    <slot></slot>
  </li>
</template>

<script>
  export default {
    name: 'HexTabPanel',

    data() {
      return {
        show: false,
      };
    },

    created() {
      this.$parent.$parent.setIndex(this);
    },
  }
</script>
