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
      tabs() {
        return this.$parent.$refs[this.target];
      },

      totalTabs() {
        return this.tabs.$children.length;
      },
    },


    methods: {
      /**
       * Go to previous tab.
       */
      previousTab() {
        let activeTab = this.tabs.activeTab - 1;
        activeTab     = activeTab < 1 ? this.totalTabs : activeTab;

        this.tabs.activeTab = activeTab;
      },

      /**
       * Go to next tab.
       */
      nextTab() {
        let activeTab = this.tabs.activeTab + 1;
        activeTab     = activeTab > this.totalTabs ? 1 : activeTab;

        this.tabs.activeTab = activeTab;
      },
    }
  }
</script>
