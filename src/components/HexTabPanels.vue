<template>
  <ol class="tab-panels">
    <slot></slot>
  </ol>
</template>

<script>
  export default {
    name: 'HexTabPanelList',

    props: {
      obeys: String,
    },
  }
</script>
