// chatBox
'use strict';
Vue.component("component-cbhost", {
    props: ['uid'],
    template: "<div id='chatBox'><widget-cl v-for='cl in data' :info='cl' :uid='uid'></widget-cl></div>",
    data: function() {
        return hostDemo
    }
})

Vue.component("component-cbwonder", {
  props: ['uid'],
    template: "<div id='chatBox'><widget-wl v-for='wl in list' :info='wl' :uid='uid'></widget-wl></div>",
    data:function(){
      return wonderDemo
    }
})

Vue.component("component-cbchat", {
    template: ' <h1>chat</h1>',
})
