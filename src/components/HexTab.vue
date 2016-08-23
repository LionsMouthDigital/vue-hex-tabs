<template>
  <li
    :class        = "{ active: this.$parent.$parent.activeTab === this.index }"
    id            = "{{ tabId }}"
    role          = "tab"
    aria-controls = "{{ tabPanelId }}"
    aria-selected = "{{ active }}"
    tabindex      = "0"
    @click        = "this.$parent.$parent.activeTab = this.index"
  >
    <slot></slot>
  </li>
</template>

<script>
  export default {
    props: {
      ariaControls: String,
      id:           String,
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
        return (typeof this.id !== 'undefined')
          ? this.id
          : this.$parent.$parent.tabs + '-' + this.index;
      },

      tabPanelId() {
        // Allow the dev to override the `aria-controls`.
        return (typeof this.ariaControls !== 'undefined')
          ? this.ariaControls
          : this.$parent.$parent.tabPanels + '-' + this.index;
      },
    },
  }
</script>
