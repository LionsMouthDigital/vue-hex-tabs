<template>
  <div id="app">
    <hex-tabs tabs="tabs-sample" tab-panels="panels-sample">
      <hex-tab active>One</hex-tab>
      <hex-tab>Two</hex-tab>
      <hex-tab>Three</hex-tab>
    </hex-tabs>

    <hex-tab-panels tabs="tabs-sample" tab-panels="panels-sample">
      <hex-tab-panel active>
        <h3>One</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </hex-tab-panel>

      <hex-tab-panel>
        <h3>Two</h3>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </p>
      </hex-tab-panel>

      <hex-tab-panel>
        <h3>Three</h3>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur.
        </p>
      </hex-tab-panel>
    </hex-tab-panels>
  </div>
</template>

<script>
  import HexTabs      from './components/HexTabs.vue';
  import HexTab       from './components/HexTab.vue';
  import HexTabPanels from './components/HexTabPanels.vue';
  import HexTabPanel  from './components/HexTabPanel.vue';

  export default {
    components: {
      HexTabs,
      HexTab,
      HexTabPanels,
      HexTabPanel
    }
  }
</script>
