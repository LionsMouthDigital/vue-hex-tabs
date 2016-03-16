<template>
  <ol class="tabs" role="tablist">
    <slot></slot>
  </ol>
</template>

<script>
  export default {
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
