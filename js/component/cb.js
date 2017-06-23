/*
 * @Author: 张驰阳
 * @Date:   2017-06-23 11:36:06
 * @Last Modified by:   张驰阳
 * @Last Modified time: 2017-06-23 18:07:05
 */

'use strict';
Vue.component("component-chat", {
	props:['cbstyle'],
    template: '<div class="weui-panel__bd" id="chatBox">\
   					<template v-if="cbstyle==\'host\'">\
						\
   					</template>\
   					<template v-if="cbstyle==\'wonder\'">\
						\
   					</template>\
   					<template v-if="cbstyle==\'chat\'">\
						\
   					</template>\
   					\
   				</div>',
});
