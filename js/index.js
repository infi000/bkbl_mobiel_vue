/*
 * @Author: 张驰阳
 * @Date:   2017-06-23 10:50:38
 * @Last Modified by:   张驰阳
 * @Last Modified time: 2017-07-03 19:10:46
 */

'use strict';
//获取主持列表
Vue.prototype.get_presideList = function(opt) {
    var vue_proto = this,
        $opt = opt || {},
        num = $opt.num || 5,
        that = $opt.o,
        id = that.$data.lastId,
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
                var arr = d[d.length - 1];
                that.$data.lastId = arr.id;
            }
            if (d && d.length >= num) {
                //删除loadin
                //删除暂无数据
                that.noData = false
                that.loading = false;
            } else {
                if (top == 0) {
                    //显示暂无数据
                    //删除loading
                    that.noData = true;
                    that.loading = false;
                } else {
                    //设置top为空
                    //删除暂无数据
                    //继续执行方法加载没有置顶的数据
                    that.noData = false
                    that.$data.top = 0;
                    that.$data.lastId = 0;
                    $opt.num = num - d.length;
                    vue_proto.get_presideList($opt)
                }
            }
        }
    })
};
//获取精彩列表
Vue.prototype.get_wonderList = function(opt) {
    var $opt = opt || {},
        that = $opt.o,
        num = $opt.num || 6,
        page = that.$data.page || 1,
        info = {
            m: params.wonderList,
            type: 1,
            num: num,
            page: page,
            talk_id: TID,
            xopenid: XID,
            author: AU,
        };
    invoke({
        data: info,
        fun: function(d) {
            // WSnum.wonder = NUM.special;
            // var badge = $("#main_navbar a[dataType='wonder']").find("span");
            // if (typeOf(badge[0]) == "dom") {
            //     var res = badge.html();
            //     console.log(res);
            //     WSnum.wonder = parseInt(WSnum.wonder) + parseInt(res);
            // }
            // badge.remove();

            var t = Math.ceil(d.total / num), //总页数
                c = d.curr; //当前页
            that.$data.page += 1;
            that.$data.loading = false;
            that.$data.listData.push.apply(that.$data.listData, d.list);
            that.$data.noData = (t == c);
        }
    });
};
//点赞
Vue.prototype.retort = function(opt) {
    var $opt = opt || {},
        id = $opt.id,
        m = $opt.m,
        fun1=$opt.fun1,
        info = {
            m: m,
            id: id,
            cid:id,
            talk_id: TID,
            xopenid: XID,
            author: AU,
        };
        invoke({
            data:info,
            fun:function(d){
                fun1(d);
            }
        })
};
Vue.component('component-wrap', {
    props: [''],
    template: '<div class="wrap">\
                <div class="page">\
                    <slot name="page_hd"></slot>\
                    <div class="page_bd" id="scroll" @scroll="isScroll">\
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
    methods: {
        isScroll: function(e) {
            var el = e.target,
                el_h = $(el).height(),
                el_oh = el.offsetHeight,
                el_sh = el.scrollHeight,
                el_st = el.scrollTop,
                sum = el_sh - el_oh,
                nowTag = app.barStyle;
            if (app.$refs[nowTag].$data.noData || app.$refs[nowTag].$data.loading) {
                return
            }
            if (sum - el_st <= 50) {
                app.$refs[nowTag].$data.loading = true;
                setTimeout(function() {
                    switch (nowTag) {
                        case "host":
                            Vue.prototype.get_presideList({ o: app.$refs[nowTag] });
                            break;
                        case "wonder":
                            Vue.prototype.get_wonderList({ o: app.$refs[nowTag] });
                            break;
                        case "chat":
                            Vue.prototype.get_wonderList({ o: app.$refs[nowTag] });
                            break;
                    }
                }, 1000);
            };
        }
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
        },
        retort: function() {
            invoke({
                data: {

                }
            })
        },
    },
    router,
});
