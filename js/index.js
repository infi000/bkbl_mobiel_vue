/*
 * @Author: 张驰阳
 * @Date:   2017-06-23 10:50:38
 * @Last Modified by:   张驰阳
 * @Last Modified time: 2017-06-26 17:20:43
 */

'use strict';

Vue.component("component-wrap", {
    props: [""],
    template: '<div class="wrap">\
                <div class="page">\
                    <slot name="page_hd"></slot>\
                    <div class="page_bd">\
                        <slot name="page_bn"></slot>\
                        <div class="weui-tab">\
                            <slot name="main_navbar"></slot>\
                            <div class="weui-tab__panel showBox" id="container">\
                            <slot name="chat_box"></slot>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
              </div>',
    data: function() {
        return {};
    }
});

var app = new Vue({
    el: "#app",
    data: {
        demo: demo.data1,
        userInfo: demo.userInfo,
        changebarStyle: ""
    },
    computed: {
        barStyle: function() {
            var h = this.demo.subject,
                w = this.demo.special,
                _ = this.changebarStyle;
            if (_) {
                return _
            }
            if (h == 1) {
                return "host"
            };
            if (h != 1 && w == 1) {
                return "wonder"
            };
            if (h != 1 && w !== 1) {
                return "chat"
            }
        }
    },
<<<<<<< HEAD
    methods: {
        showChat: function(e) {
            this.changebarStyle = e;
        },


=======
    router,
    computed:{
    	barStyle:function(){
    		var h=this.demo.subject,
    			w=this.demo.special;
    			
    		if(h==1){
    		return "host"
    		};
    		if(h!=1&&w==1){
    			return "wonder"
    		};
    		if(h!=1&&w!==1){
    			return "chat"
    		}
    	}
>>>>>>> b2ef4ae2a0f3542941a52c02845add45caca0bff
    }
})
