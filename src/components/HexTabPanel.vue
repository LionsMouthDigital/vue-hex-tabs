<template>
  <li
    class            = "tab-panel"
    :id              = "tabPanelId"
    role             = "tabpanel"
    :aria-labelledby = "tabId"
    :aria-hidden     = "(!active).toString()"
    v-show           = "active"
    :transition      = "transition"
  >
    <slot></slot>
  </li>
</template>

<script>
  export default {
    ready() {
      // Add a ref to easily access this component elsewhere.
      this.$root.$refs[this.tabPanelId] = this;
    },

    props: {
      // This shows/hides the tab panel.
      active:         Boolean,
      ariaLabelledBy: String,
      id:             String,
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
        // Allow the dev to override the `aria-labelledby`.
        if (typeof this.ariaLabelledBy !== 'undefined') {
          return this.ariaLabelledBy;
        }

        return this.$parent.tabPanels + '-' + this.index;
      },

      transition() {
        return this.$parent.effect;
      }
    },
  }
</script>
