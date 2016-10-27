<template>
  <!-- If rendering via passed JSON data. -->
  <div v-if="data" class="tabs">
    <hex-tab-list>
      <hex-tab v-for="tab in tabs">{{ tab }}</hex-tab>
    </hex-tab-list>

    <hex-tab-panel-list>
      <hex-tab-panel v-for="panel in panels">{{ panel }}</hex-tab-panel>
    </hex-tab-panel-list>
  </div>

  <!-- If explicitly typing out all the markup. -->
  <div v-else class="tabs">
    <slot></slot>
  </div>
</template>


<script>
  import Components from './index';
  // Just say no to recursive HexTabs.
  delete Components.HexTabs;

  export default {
    name: 'HexTabs',

    components: Components,

    props: {
      data: Array,
    },


    data() {
      return {
        activeTab: 1,
      };
    },


    computed: {
      tabs() {
        return this.extractData('label');
      },

      panels() {
        return this.extractData('content');
      }
    },


    methods: {
      /**
       * Set the index of a `HexTab` or `HexTabPanel`.
       *
       * Only `HexTab.vue` and `HexTabPanel.vue` should call this.
       *
       * @param {Object} self Vue component object.
       * @return {void}
       */
      setIndex(self) {
        self.$parent.$children.forEach((item, i) => {
          if (item._uid === self._uid) {
            self.index = i + 1;
          }
        });
      },

      /**
       * Extract data from JSON.
       *
       * This sets the data on tabs and panels.
       *
       * @param {String} key Key to pull from each index in `this.data`.
       * @return {Array}
       */
      extractData(key) {
        let items = [];

        if (this.data) {
          this.data.forEach((item, i) => {
            items.push(item[key]);
          });
        }

        return items;
      },
    },
  }
</script>
