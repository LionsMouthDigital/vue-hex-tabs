<template>
  <ol class="tab-panels">
    <slot></slot>
  </ol>
</template>

<script>
  export default {
    name: 'HexTabPanels',

    props: {
      obeys: String,
    },

    data() {
      return {
        activeTab: false,
      };
    },

    created() {
      if (typeof this.obeys === 'undefined') {
        this.activeTab = 1;
      }
    },
  }
</script>
