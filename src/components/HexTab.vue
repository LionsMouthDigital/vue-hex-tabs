<template>
  <li @click="activateTabPanel(index)" :class="{ 'active': isActive }">
    <slot></slot>
  </li>
</template>


<script>
  import {Indexable} from 'vue-hex-mixins';

  export default {
    name: 'HexTab',


    mixins: [Indexable],


    computed: {
      /**
       * Check whether this tab is active.
       *
       * @return {Boolean}
       */
      isActive() {
        return this.$parent.activeTab === this.index;
      },
    },


    methods: {
      /**
       * Activate the associated tab panel.
       */
      activateTabPanel(index) {
        let tabPanels = this.$parent.$parent.$refs[this.$parent.target];
        HexBus.$emit('HexTabPanel:activated', tabPanels._uid, index);
      }
    }
  }
</script>
