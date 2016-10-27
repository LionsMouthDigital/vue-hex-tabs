<template>
  <li
    @click = "$parent.$parent.activeTab = index"
    :class = "{ 'active': $parent.$parent.activeTab === index }"
  >
    <slot></slot>
  </li>
</template>

<script>
  export default {
    name: 'HexTab',

    created() {
      this.$parent.$parent.setIndex(this);
    },
  }
</script>
