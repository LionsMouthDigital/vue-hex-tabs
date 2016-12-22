<template>
  <div id="app">
    <h1>Hex Tabs</h1>
    <hex-tabs target="myTabs">
      <hex-tab>One</hex-tab>
      <hex-tab>Two</hex-tab>
      <hex-tab>Three</hex-tab>
    </hex-tabs>

    <hex-tab-panels ref="myTabs">
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


    <h2>Tourniquet</h2>
    <p>These tabs are here to ensure data doesn't bleed over into like component instances.</p>
    <hex-tab-panels ref="yourTabs">
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

    <hex-tabs target="yourTabs">
      <hex-tab>One</hex-tab>
      <hex-tab>Two</hex-tab>
      <hex-tab>Three</hex-tab>
    </hex-tabs>


    <h2>Carousel</h2>
    <hex-tab-panels ref="carousel">
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

    <hex-tab-controls target="carousel"></hex-tab-controls>


    <h3>Carousel with tabs</h3>
    <hex-tab-panels ref="carouselTabbed">
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

    <hex-tabs target="carouselTabbed">
      <hex-tab>One</hex-tab>
      <hex-tab>Two</hex-tab>
      <hex-tab>Three</hex-tab>
    </hex-tabs>

    <hex-tab-controls target="carouselTabbed"></hex-tab-controls>
  </div>
</template>


<script>
  import Components from './HexTabs.js';

  export default {
    name:       'app',
    components: Components,
  }
</script>


<style>
  .tabs li:hover {
    cursor: pointer;
  }

  .active {
    font-weight: bold;
  }
</style>
