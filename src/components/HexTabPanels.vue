<template>
  <ol class="tab-panels">
    <slot></slot>
  </ol>
</template>

<script>
  export default {
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
