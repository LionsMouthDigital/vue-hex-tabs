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
      return typeof this.id !== 'undefined' ? this.id : this.$parent.$parent.tabs + '-' + this.index;
    },
    tabPanelId: function tabPanelId() {
      return typeof this.ariaControls !== 'undefined' ? this.ariaControls : this.$parent.$parent.tabPanels + '-' + this.index;
    }
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<li :class=\"{ active: this.$parent.$parent.activeTab === this.index }\" id=\"{{ tabId }}\" role=\"tab\" aria-controls=\"{{ tabPanelId }}\" aria-selected=\"{{ active }}\" tabindex=\"0\" @click=\"this.$parent.$parent.activeTab = this.index\">\n  <slot></slot>\n</li>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = _dereq_("vue-hot-reload-api")
  hotAPI.install(_dereq_("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-53b3d47f", module.exports)
  } else {
    hotAPI.update("_v-53b3d47f", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":undefined,"vue-hot-reload-api":undefined}],3:[function(_dereq_,module,exports){
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<ol class=\"tab-list\" role=\"tablist\">\n  <slot></slot>\n</ol>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = _dereq_("vue-hot-reload-api")
  hotAPI.install(_dereq_("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-6eda1ebd", module.exports)
  } else {
    hotAPI.update("_v-6eda1ebd", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
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
      return typeof this.ariaLabelledby !== 'undefined' ? this.ariaLabelledby : this.$parent.$parent.tabs + '-' + this.index;
    },
    tabPanelId: function tabPanelId() {
      return typeof this.id !== 'undefined' ? this.id : this.$parent.$parent.tabPanels + '-' + this.index;
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
  if (!module.hot.data) {
    hotAPI.createRecord("_v-5fa330f5", module.exports)
  } else {
    hotAPI.update("_v-5fa330f5", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":undefined,"vue-hot-reload-api":undefined}],5:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    effect: String
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"tab-panel-list\">\n  <ol>\n    <slot></slot>\n  </ol>\n\n  <div class=\"carousel-pager\" v-if=\"$parent.carousel\">\n    <button @click=\"$parent.activeTab--\">Previous</button>\n    <button @click=\"$parent.activeTab++\">Next</button>\n  </div>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = _dereq_("vue-hot-reload-api")
  hotAPI.install(_dereq_("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-023a5033", module.exports)
  } else {
    hotAPI.update("_v-023a5033", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":undefined,"vue-hot-reload-api":undefined}],6:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    active: {
      type: Number,
      default: 1
    },

    carousel: Boolean,

    tabPanels: {
      type: String,
      required: true
    },

    tabs: {
      type: String,
      required: true
    }
  },

  data: function data() {
    return {
      activeTab: this.active
    };
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
    }
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"tabs\">\n  <slot></slot>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = _dereq_("vue-hot-reload-api")
  hotAPI.install(_dereq_("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-26725c84", module.exports)
  } else {
    hotAPI.update("_v-26725c84", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":undefined,"vue-hot-reload-api":undefined}]},{},[1])(1)
});