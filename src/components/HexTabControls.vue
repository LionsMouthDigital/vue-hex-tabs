<template>
  <div class="tab-controls">
    <button @click="previousTab()">Previous</button>
    <button @click="nextTab()">Next</button>
  </div>
</template>


<script>
  export default {
    name: 'HexTabControls',


    props: {
      target: String,
    },


    computed: {
      tabPanels() {
        return this.$parent.$refs[this.target];
      },

      totalTabPanels() {
        return this.tabPanels.$children.length;
      },
    },


    methods: {
      /**
       * Go to previous tab panel.
       */
      previousTab() {
        let activeTabPanel = this.tabPanels.activeTabPanel - 1;
        activeTabPanel     = activeTabPanel < 1 ? this.totalTabPanels : activeTabPanel;

        HexBus.$emit('HexTabPanel:activated', this.tabPanels._uid, activeTabPanel);
      },

      /**
       * Go to next tab panel.
       */
      nextTab() {
        let activeTabPanel = this.tabPanels.activeTabPanel + 1;
        activeTabPanel     = activeTabPanel > this.totalTabPanels ? 1 : activeTabPanel;

        HexBus.$emit('HexTabPanel:activated', this.tabPanels._uid, activeTabPanel);
      },
    }
  }
</script>
