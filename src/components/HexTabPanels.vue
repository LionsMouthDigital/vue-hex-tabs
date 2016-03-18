<template>
  <ol class="tab-panels">
    <slot></slot>
  </ol>
</template>

<script>
  export default {
    ready() {
      // Check to see if there's an active tab panel.
      var hasActiveTabPanel = false;
      for (var i in this.$children) {
        if (this.$children[i].active) {
          hasActiveTabPanel = true;
          break;
        }
      }

      // If there's no active tab panel, make the first one active.
      if (!hasActiveTabPanel) {
        this.$children[0].active = true;
      }
    },

    props: {
      // This gets used for `:transition` in `tab-panel.vue`.
      effect: String,
      // This gets used for `tabPanelId` in `tab-panel.vue`.
      tabPanels: {
        type:     String,
        required: true,
      },
      // This gets used for `tabId` in `tab-panel.vue`.
      tabs: {
        type:     String,
        required: true,
      },
    },
  }
</script>
