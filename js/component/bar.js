/*
* @Author: 张驰阳
* @Date:   2017-06-23 11:36:00
* @Last Modified by:   张驰阳
* @Last Modified time: 2017-06-23 17:49:53
*/

'use strict';

Vue.component("component-bar", {
	props:["barhost","barwonder","barstyle"],
    template: '<div class="weui-navbar" id="main_navbar">\
    			<a :class="[barstyle==\'host\'?\'weui-bar__item_on\':\'\',\'weui-navbar__item\']" v-if="barhost==1" dataType="host">主持</a>\
    			<a :class="[barstyle==\'wonder\'?\'weui-bar__item_on\':\'\',\'weui-navbar__item\']" v-if="barwonder==1" dataType="wonder">精彩</a>\
    			<a :class="[barstyle==\'chat\'?\'weui-bar__item_on\':\'\',\'weui-navbar__item\']" dataType="chat">聊天</a>\
    			\
    			</div>',
});