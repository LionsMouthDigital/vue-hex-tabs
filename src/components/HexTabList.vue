<template>
  <ol class="tab-list" role="tablist" v-if="json.length">
    <hex-tab v-for="item in jsonData">
      {{{ item.markup }}}
    </hex-tab>
  </ol>

  <ol class="tab-list" role="tablist" v-else>
    <slot></slot>
  </ol>
</template>

<script>
  var HexTab = require('./HexTab.vue');

  export default {
    components: {
      HexTab,
    },

    props: {
      json:   {
        type:    String,
        default: '',
      },
    },

    computed: {
      jsonData() {
        return this.json.length ? JSON.parse(this.json.replace(/\n/g, '')) : '';
      }
    },
  }
</script>
