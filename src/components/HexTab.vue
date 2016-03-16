<template>
  <li
    :class        = "{ active: active }"
    id            = "{{ tabId }}"
    role          = "tab"
    aria-controls = "{{ tabPanelId }}"
    aria-selected = "{{ active }}"
    tabindex      = "0"
    @click        = "changeTab"
  >
    <slot></slot>
  </li>
</template>

<script>
  export default {
    props: {
      active:       Boolean,
      ariaControls: String,
      id:           String,
    },

    computed: {
      // Set the index by looping through all children of the parent (this and its siblings).
      index() {
        for (var i in this.$parent.$children) {
          if (this.$parent.$children[i].$el === this.$el) {
            return i;
          }
        }
      },

      tabId() {
        // Allow the dev to override the `id`.
        if (typeof this.id !== 'undefined') {
          return this.id;
        }

        return this.$parent.tabs + '-' + this.index;
      },

      tabPanelId() {
        // Allow the dev to override the `aria-controls`.
        if (typeof this.ariaControls !== 'undefined') {
          return this.ariaControls;
        }

        return this.$parent.tabPanels + '-' + this.index;
      },
    },

    methods: {
      /**
       * Change the active tab.
       *
       * @author Curtis Blackwell
       * @return {void}
       */
      changeTab() {
        // Tabs
        // Set currently active tab to inactive.
        for (var i in this.$parent.$children) {
          this.$parent.$children[i].active = false;
        }
        // Set clicked tab to active.
        this.active = true;

        // Tab Panels
        var tabPanel = this.$root.$refs[this.tabPanelId];
        // Set currently active tab-panel to inactive.
        for (var i in tabPanel.$parent.$children) {
          tabPanel.$parent.$children[i].active = false;
        }

        // Set clicked tab's tab-panel to active.
        tabPanel.active = true;
      },
    },
  }
</script>
