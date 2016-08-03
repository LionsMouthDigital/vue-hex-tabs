<template>
  <li
    class           = "tab-panel"
    id              = "{{ tabPanelId }}"
    role            = "tabpanel"
    aria-labelledby = "{{ tabId }}"
    :aria-hidden    = "(this.$parent.$parent.activeTab !== this.index).toString()"
    v-show          = "this.$parent.$parent.activeTab === this.index"
    :transition     = "transition"
  >
    <slot></slot>
  </li>
</template>

<script>
  export default {
    props: {
      ariaLabelledby: String,
      id:             String,
    },

    computed: {
      // Set the index by looping through all children of the parent (this and its siblings).
      index() {
        for (var i in this.$parent.$children) {
          if (this.$parent.$children[i].$el === this.$el) {
            return +i + 1;
          }
        }
      },

      tabId() {
        // Allow the dev to override the `id`.
        return (typeof this.ariaLabelledby !== 'undefined')
          ? this.ariaLabelledby
          : 'tab-' + this.$parent.$parent._uid + '-' + this.index;
      },

      tabPanelId() {
        // Allow the dev to override the `aria-labelledby`.
        return (typeof this.id !== 'undefined')
          ? this.id
          : 'panel-' + this.$parent.$parent._uid + '-' + this.index;
      },

      transition() {
        return this.$parent.effect;
      },
    },
  }
</script>
