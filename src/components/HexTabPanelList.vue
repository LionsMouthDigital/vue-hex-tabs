<template>
  <ol class="tab-panel-list" v-if="json.length">
    <hex-tab-panel v-for="item in jsonData">
      {{{ item.markup }}}
    </hex-tab-panel>
  </ol>

  <ol class="tab-panel-list" v-else>
    <slot></slot>
  </ol>
</template>

<script>
  var HexTabPanel = require('./HexTabPanel.vue');

  export default {
    components: {
      HexTabPanel,
    },

    props: {
      // This gets used for `:transition` in `tab-panel.vue`.
      effect: String,
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
