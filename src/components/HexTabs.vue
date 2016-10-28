<template>
  <ol class="tabs">
    <slot></slot>
  </ol>
</template>


<script>
  export default {
    name: 'HexTabs',

    data() {
      return {
        activeTab: 1,
      };
    },
  };
</script>
