<template>
  <li
    @click = "$parent.activeTab = index"
    :class = "{ 'active': $parent.activeTab === index }"
  >
    <slot></slot>
  </li>
</template>

<script>
  import {Indexable} from 'vue-hex-mixins';

  export default {
    name: 'HexTab',

    mixins: [Indexable],
  }
</script>
