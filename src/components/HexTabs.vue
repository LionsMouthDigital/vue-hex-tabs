<template>
  <ol class="tabs" role="tablist">
    <slot></slot>
  </ol>
</template>

<script>
  export default {
    ready() {
      // Check to see if there's an active tab.
      var hasActiveTab = false;
      for (var i in this.$children) {
        if (this.$children[i].active) {
          hasActiveTab = true;
          break;
        }
      }

      // If there's no active tab, make the first one active.
      if (!hasActiveTab) {
        this.$children[0].active = true;
      }
    },

    props: {
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
  }
</script>
