/*
 * @Author: 张驰阳
 * @Date:   2017-06-23 11:36:00
 * @Last Modified by:   张驰阳
 * @Last Modified time: 2017-06-27 15:40:47
 */

'use strict';

Vue.component('component-bar', {
    props: ['barhost', 'barwonder', 'barstyle'],
    template: '<div class="weui-navbar" id="main_navbar">\
              <a @click="show(\'host\')" :class="[barstyle==\'host\'?\'weui-bar__item_on\':\'\',\'weui-navbar__item\']" v-if="barhost==1" dataType="host">主持</a>\
              <a @click="show(\'wonder\')"   :class="[barstyle==\'wonder\'?\'weui-bar__item_on\':\'\',\'weui-navbar__item\']" v-if="barwonder==1" dataType="wonder">精彩</a>\
              <a @click="show(\'chat\')" :class="[barstyle==\'chat\'?\'weui-bar__item_on\':\'\',\'weui-navbar__item\']" dataType="chat">聊天</a>\
            </div>',
    methods: {
        show: function(e) {
            this.barstyle = e;
            this.$emit('sc', e);
        },
    },
});
