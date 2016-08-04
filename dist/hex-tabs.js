(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.hexTabs = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
module.exports = {
  HexTabs:         _dereq_('./components/HexTabs.vue'),
  HexTabList:      _dereq_('./components/HexTabList.vue'),
  HexTab:          _dereq_('./components/HexTab.vue'),
  HexTabPanelList: _dereq_('./components/HexTabPanelList.vue'),
  HexTabPanel:     _dereq_('./components/HexTabPanel.vue'),
};

},{"./components/HexTab.vue":2,"./components/HexTabList.vue":3,"./components/HexTabPanel.vue":4,"./components/HexTabPanelList.vue":5,"./components/HexTabs.vue":6}],2:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    ariaControls: String,
    id: String
  },

  computed: {
    index: function index() {
      for (var i in this.$parent.$children) {
        if (this.$parent.$children[i].$el === this.$el) {
          return +i + 1;
        }
      }
    },
    tabId: function tabId() {
      return typeof this.id !== 'undefined' ? this.id : 'tab-' + this.$parent.$parent._uid + '-' + this.index;
    },
    tabPanelId: function tabPanelId() {
      return typeof this.ariaControls !== 'undefined' ? this.ariaControls : 'panel-' + this.$parent.$parent._uid + '-' + this.index;
    }
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<li :class=\"{ active: this.$parent.$parent.activeTab === this.index }\" id=\"{{ tabId }}\" role=\"tab\" aria-controls=\"{{ tabPanelId }}\" aria-selected=\"{{ active }}\" tabindex=\"0\" @click=\"this.$parent.$parent.activeTab = this.index\">\n  <slot></slot>\n</li>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = _dereq_("vue-hot-reload-api")
  hotAPI.install(_dereq_("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/curtisblackwell/Sites/hex/vue-hex-tabs/src/components/HexTab.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":undefined,"vue-hot-reload-api":undefined}],3:[function(_dereq_,module,exports){
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<ol class=\"tab-list\" role=\"tablist\">\n  <slot></slot>\n</ol>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = _dereq_("vue-hot-reload-api")
  hotAPI.install(_dereq_("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/curtisblackwell/Sites/hex/vue-hex-tabs/src/components/HexTabList.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":undefined,"vue-hot-reload-api":undefined}],4:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    ariaLabelledby: String,
    id: String
  },

  computed: {
    index: function index() {
      for (var i in this.$parent.$children) {
        if (this.$parent.$children[i].$el === this.$el) {
          return +i + 1;
        }
      }
    },
    tabId: function tabId() {
      return typeof this.ariaLabelledby !== 'undefined' ? this.ariaLabelledby : 'tab-' + this.$parent.$parent._uid + '-' + this.index;
    },
    tabPanelId: function tabPanelId() {
      return typeof this.id !== 'undefined' ? this.id : 'panel-' + this.$parent.$parent._uid + '-' + this.index;
    },
    transition: function transition() {
      return this.$parent.effect;
    }
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<li class=\"tab-panel\" id=\"{{ tabPanelId }}\" role=\"tabpanel\" aria-labelledby=\"{{ tabId }}\" :aria-hidden=\"(this.$parent.$parent.activeTab !== this.index).toString()\" v-show=\"this.$parent.$parent.activeTab === this.index\" :transition=\"transition\">\n  <slot></slot>\n</li>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = _dereq_("vue-hot-reload-api")
  hotAPI.install(_dereq_("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/curtisblackwell/Sites/hex/vue-hex-tabs/src/components/HexTabPanel.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":undefined,"vue-hot-reload-api":undefined}],5:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var HexTabPanel = _dereq_('./HexTabPanel.vue');

exports.default = {
  components: {
    HexTabPanel: HexTabPanel
  },

  props: {
    effect: String,
    json: {
      type: String,
      default: ''
    }
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div>\n  <ol class=\"tab-panel-list\" v-if=\"json.length\">\n    <hex-tab-panel v-for=\"item in jsonData\">\n      {{{ item.markup }}}\n    </hex-tab-panel>\n  </ol>\n\n  <ol class=\"tab-panel-list\" v-else=\"\">\n    <slot></slot>\n  </ol>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = _dereq_("vue-hot-reload-api")
  hotAPI.install(_dereq_("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/curtisblackwell/Sites/hex/vue-hex-tabs/src/components/HexTabPanelList.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"./HexTabPanel.vue":4,"vue":undefined,"vue-hot-reload-api":undefined}],6:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var HexTabList = _dereq_('./HexTabList.vue');
var HexTab = _dereq_('./HexTab.vue');
var HexTabPanelList = _dereq_('./HexTabPanelList.vue');
var HexTabPanel = _dereq_('./HexTabPanel.vue');

exports.default = {
  components: {
    HexTabList: HexTabList,
    HexTab: HexTab,
    HexTabPanelList: HexTabPanelList,
    HexTabPanel: HexTabPanel
  },

  props: {
    active: {
      type: Number,
      default: 1
    },

    tabs: {
      type: String,
      default: ''
    },
    tabPanels: {
      type: String,
      default: ''
    }
  },

  data: function data() {
    return {
      activeTab: this.active
    };
  },


  computed: {
    tabsData: function tabsData() {
      return this.parseJSON(this.tabs);
    },
    tabPanelsData: function tabPanelsData() {
      return this.parseJSON(this.tabPanels);
    }
  },

  watch: {
    activeTab: function activeTab() {
      this.activateTab(this.activeTab);
    }
  },

  methods: {
    activateTab: function activateTab(i) {
      i = parseInt(i);

      for (var j = 0; j < this.$children.length; j++) {
        if (this.$children[j].$options.name === 'hex-tab-list' || this.$children[j].$options.name === 'hex-tab-panel-list') {
          var last = this.$children[j].$children.length;
          break;
        }
      }

      i = i > last ? 1 : i;
      i = i < 1 ? last : i;

      this.activeTab = i;
    },
    parseJSON: function parseJSON(json) {
      return json.length ? JSON.parse(json.replace(/\n/g, '')) : [];
    }
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div>\n  <div class=\"tabs\" v-if=\"tabPanels.length\">\n    <hex-tab-list v-if=\"tabs.length\">\n      <hex-tab v-for=\"tab in tabsData\">{{{ tab.markup }}}</hex-tab>\n    </hex-tab-list>\n\n    <hex-tab-panel-list>\n      <hex-tab-panel v-for=\"tabPanel in tabPanelsData\">{{{ tabPanel.markup }}}</hex-tab-panel>\n    \n  </hex-tab-panel-list></div>\n\n  <div class=\"tabs\" v-else=\"\">\n    <slot></slot>\n  </div>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = _dereq_("vue-hot-reload-api")
  hotAPI.install(_dereq_("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/curtisblackwell/Sites/hex/vue-hex-tabs/src/components/HexTabs.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"./HexTab.vue":2,"./HexTabList.vue":3,"./HexTabPanel.vue":4,"./HexTabPanelList.vue":5,"vue":undefined,"vue-hot-reload-api":undefined}]},{},[1])(1)
});