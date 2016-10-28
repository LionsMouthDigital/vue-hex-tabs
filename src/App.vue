<template>
  <div id="app">
    <h1>Hex Tabs</h1>
    <hex-tabs ref="myTabs">
      <hex-tab>One</hex-tab>
      <hex-tab>Two</hex-tab>
      <hex-tab>Three</hex-tab>
    </hex-tabs>

    <hex-tab-panels obeys="myTabs">
      <hex-tab-panel>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </hex-tab-panel>
      <hex-tab-panel>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
      </hex-tab-panel>
      <hex-tab-panel>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
      </hex-tab-panel>
    </hex-tab-panels>


    <h2>Carousel</h2>
    <hex-tab-panels ref="tabless-wonder">
      <hex-tab-panel>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </hex-tab-panel>
      <hex-tab-panel>
        <p>Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
      </hex-tab-panel>
      <hex-tab-panel>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
      </hex-tab-panel>
    </hex-tab-panels>

    <hex-tab-controls target="tabless-wonder"></hex-tab-controls>
  </div>
</template>

<script>
  import Components from './HexTabs.vue';

  export default {
    name:       'app',
    components: Components,
  }
</script>
