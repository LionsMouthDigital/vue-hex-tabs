<template>
  <div class="tab-panel-list">
    <ol>
      <slot></slot>
    </ol>

    <div class="carousel-pager" v-if="$parent.carousel">
      <button @click="$parent.activeTab--">Previous</button>
      <button @click="$parent.activeTab++">Next</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      // This gets used for `:transition` in `tab-panel.vue`.
      effect: String,
    },
  }
</script>
