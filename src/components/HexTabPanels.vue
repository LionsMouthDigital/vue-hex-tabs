<template>
  <ol class="tab-panels">
    <slot></slot>
  </ol>
</template>


<script>
  export default {
    name: 'HexTabPanels',


    data() {
      return {
        activeTabPanel: 1,
      };
    },


    created() {
      HexBus.$on('HexTabPanel:activated', (uid, index) => {
        // If this is the activated tab panel's parent, update `activeTabPanel`.
        if (uid === this._uid) {
          this.activeTabPanel = index;
        }
      });
    },
  }
</script>
