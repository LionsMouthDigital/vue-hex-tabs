<template>
  <div>
    <div class="tabs" v-if="tabPanels.length">
      <hex-tab-list v-if="tabs.length">
        <hex-tab v-for="tab in tabsData">{{{ tab.markup }}}</hex-tab>
      </hex-tab-list>

      <hex-tab-panel-list>
        <hex-tab-panel v-for="tabPanel in tabPanelsData">{{{ tabPanel.markup }}}</hex-tab-panel>
      </hex-panel-list>
    </div>

    <div class="tabs" v-else>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  var HexTabList      = require('./HexTabList.vue');
  var HexTab          = require('./HexTab.vue');
  var HexTabPanelList = require('./HexTabPanelList.vue');
  var HexTabPanel     = require('./HexTabPanel.vue');

  export default {
    components: {
      HexTabList,
      HexTab,
      HexTabPanelList,
      HexTabPanel,
    },

    props: {
      active: {
        type:    Number,
        default: 1,
      },

      // Optionally build via JSON.
      tabs: {
        type:    String,
        default: '',
      },
      tabPanels: {
        type:    String,
        default: '',
      },
    },

    data() {
      return {
        activeTab: this.active,
      };
    },

    computed: {
      // Parse all dat JSON.
      tabsData() {
        return this.parseJSON(this.tabs);
      },
      tabPanelsData() {
        return this.parseJSON(this.tabPanels);
      },
    },

    watch: {
      activeTab() {
        this.activateTab(this.activeTab);
      },
    },

    methods: {
      /**
       * Set the active tab.
       *
       * Don't call this method directly. Doing so would end up calling it twice.
       * Instead, update `this.activeTab`.
       *
       * @author Curtis Blackwell
       * @param  {integer|string} i Tab's index.
       * @return {integer}
       */
      activateTab(i) {
        i = parseInt(i);

        // Loop through the children to find the tab list and get the last tab's index.
        for (var j = 0; j < this.$children.length; j++) {
          if (this.$children[j].$options.name === 'hex-tab-list' ||
              this.$children[j].$options.name === 'hex-tab-panel-list'
          ) {
            var last = this.$children[j].$children.length;
            break;
          }
        }
        // Loops back to
        // the first tab if the index is too high or
        // the last  tab if the index is too low.
        i = (i > last) ? 1    : i;
        i = (i < 1)    ? last : i;

        this.activeTab = i;
      },

      /**
       * Parse JSON into an array of objects.
       *
       * This method supports JSON with newlines.
       *
       * @author Curtis Blackwell
       * @param  {string} json
       * @return {array}
       */
      parseJSON(json) {
        return json.length ? JSON.parse(json.replace(/\n/g, '')) : [];
      },
    },
  }
</script>
