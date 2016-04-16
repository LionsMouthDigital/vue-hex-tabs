var Vue     = require('vue');
var HexTabs = require('./src/component.js');

new Vue({
  el: 'body',

  components: {
    HexTabs:         HexTabs.HexTabs,
    HexTabList:      HexTabs.HexTabList,
    HexTab:          HexTabs.HexTab,
    HexTabPanelList: HexTabs.HexTabPanelList,
    HexTabPanel:     HexTabs.HexTabPanel,
  },
});
