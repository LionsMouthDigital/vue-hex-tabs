<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeTab: this.active,
      };
    },

    watch: {
      activeTab() {
        this.activateTab(this.activeTab);
      },
    },

    props: {
      active: {
        type:    Number,
        default: 1,
      },

      // This gets used in `tabPanelId` in `tab.vue`.
      tabPanels: {
        type:     String,
        required: true,
      },

      // This gets used in `tabId` in `tab.vue`.
      tabs: {
        type:     String,
        required: true,
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
      }
    },
  }
</script>
