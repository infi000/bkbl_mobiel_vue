/*
 * @Author: 张驰阳
 * @Date:   2017-06-23 10:50:38
 * @Last Modified by:   张驰阳
 * @Last Modified time: 2017-06-29 18:29:41
 */

'use strict';
Vue.prototype.pullMore = function(opt) {

}

Vue.prototype.get_presideList = function(opt) {
    // opt={
    //     id:0,
    //     num:5,
    //     o:this
    // }
    var vue_proto = this,
        $opt = opt || {},
        id = $opt.id || 0,
        num = $opt.num || 5,
        that = $opt.o,
        top = that.$data.top,
        info = {
            talk_id: TID,
            xopenid: XID,
            author: AU,
            id: id,
            num: num,
            m: params.presideList,
            top: top
        };
    invoke({
        url: "",
        data: info,
        fun: function(d) {
            //websocket
            // var badge = $("#main_navbar a[dataType='host']").find("span");
            // if (typeOf(badge[0]) == "dom") {
            //     var res = badge.html();
            //     console.log(res);
            //     WSnum.host = parseInt(WSnum.host) + parseInt(res);
            // }
            // badge.remove();
            if (d) {
                //加载数据
                that.$data.listData.push.apply(that.$data.listData, d);
                // that.refresh_chat(d);
            }
            if (d && d.length >= num) {
                //删除loadin
                //删除暂无数据
                that.noData = false
                that.loading = false;
            } else {
                if (top == "") {
                    //显示暂无数据
                    //删除loading
                    that.noData = true;
                    that.loading = false;
                    return
                } else {
                    //设置top为空
                    //删除暂无数据
                    //继续执行方法加载没有置顶的数据
                    that.noData = false
                    that.$data.top = 0;
                    $opt.num = num - d.length;
                    $opt.id = "0";
                    vue_proto.get_presideList($opt)
                }
            }
        }
    })


};

Vue.component('component-wrap', {
    props: [''],
    template: '<div class="wrap">\
                <div class="page">\
                    <slot name="page_hd"></slot>\
                    <div class="page_bd" id="scroll">\
                            <slot name="page_bn"></slot>\
                            <div class="weui-tab">\
                                <slot name="main_navbar"></slot>\
                                <div class="weui-tab__panel showBox" id="container">\
                                    <slot name="chat_box"></slot>\
                                </div>\
                            </div>\
                    </div>\
                    <slot name="speak"></slot>\
                </div>\
              </div>',
    data: function() {
        return {};
    },
    mounted: function() {
        //加载iscroll

    },
});

var app = new Vue({
    el: '#app',
    data: {
        demo: demo.data1,
        userInfo: demo.userInfo,
        changebarStyle: '',
    },
    computed: {
        barStyle: function() {
            var h = this.demo.subject,
                w = this.demo.special,
                _ = this.changebarStyle;
            if (_) {
                return _;
            }
            if (h == 1) {
                return 'host';
            }
            if (h != 1 && w == 1) {
                return 'wonder';
            }
            if (h != 1 && w !== 1) {
                return 'chat';
            }
        },
    },
    methods: {
        showChat: function(e) {
            this.changebarStyle = e;
        }
    },
    router,
});
