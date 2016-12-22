<template>
  <ol class="tabs">
    <slot></slot>
  </ol>
</template>


<script>
  export default {
    name: 'HexTabs',


    props: {
      target: String,
    },


    data() {
      return {
        activeTab: 1,
      };
    },


    created() {
      HexBus.$on('HexTabPanel:activated', (uid, index) => {
        // If this targets the activated tab's parent, update `activeTab`.
        let target = this.$parent.$refs[this.target];
        if (uid === target._uid) {
          this.activeTab = index;
        }
      });
    },
  };
</script>
