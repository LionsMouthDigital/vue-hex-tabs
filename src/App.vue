<template>
  <div id="app">
    <hex-tabs>
      <hex-tab-list>
        <hex-tab>One</hex-tab>
        <hex-tab>Two</hex-tab>
        <hex-tab>Three</hex-tab>
      </hex-tab-list>
      <hex-tab-panel-list>
        <hex-tab-panel>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </hex-tab-panel>
        <hex-tab-panel>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        </hex-tab-panel>
        <hex-tab-panel>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
        </hex-tab-panel>
      </hex-tab-panel-list>
    </hex-tabs>


    <hex-tabs :data='[
      {
        "label": "One",
        "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor."
      },
      {
        "label": "Two",
        "content": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."
      },
      {
        "label": "Three",
        "content": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."
      }
    ]'></hex-tabs>
  </div>
</template>

<script>
  import Components from './components';

  export default {
    name:       'app',
    components: Components,
  }
</script>
