<template>
  <ol class="tab-panel-list">
    <slot></slot>
  </ol>
</template>

<script>
  export default {
    props: {
      // This gets used for `:transition` in `tab-panel.vue`.
      effect: String,
    },
  }
</script>
