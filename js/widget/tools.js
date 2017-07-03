//navbar
Vue.component('widget-bn', {
    template: '<div class="weui-navbar act_rl">\
                   <div class="weui-navbar__item" id="btn_repo" style="display:none"><i class="iconfont icon-fenxiang"></i>引用</div>\
                    <div class="weui-navbar__item" id="btn_star"><i class="iconfont icon-xihuan"></i><span id="hasRetort"></span></div>\
                    <div class="weui-navbar__item btn_comment"><i class="iconfont icon-pinglun"></i>评论</div>\
               </div>',
});

//mask
Vue.component('widget-mask', {
    template: '<div class=\'weui-mask\' @click="closeMask"></div>',
    methods: {
        closeMask: function() {
            this.$emit('tools_off');
        }
    },
});

//speak
Vue.component('widget-speak', {
    props: ['type'],
    template: '<div class="speak">\
                   <a @click="router.push({ path: \'sp\', query: {\'type\':type}})" class="weui-btn weui-btn_primary btn_comment">发言</a>\
                 </div>',
});

//toolsBar
Vue.component('widget-toolsbar', {
    props: ['uid', 'info'],
    template: '<div class="weui-navbar act_rl">\
                   <div class="weui-navbar__item" id="btn_repo" v-if="false"><i class="iconfont icon-fenxiang"></i>引用</div>\
                    <div class="weui-navbar__item" @click="toRetort"><i class="iconfont icon-xihuan"></i><span id="hasRetort">{{isRetort?"取消":"点赞"}}</span></div>\
                    <div class="weui-navbar__item" @click="comment"><i class="iconfont icon-pinglun"></i>评论</div>\
               </div>',
    data: function() {
        return {
            isRetort: false,
        }
    },
    methods: {
        comment: function() {
            this.$emit('tools_off');
            router.push({ path: 'sp', query: { 'type': false } })
        },
        toRetort: function() {

            var m = (this.isRetort) ? params.presideDelReto : params.presideRetort;
            var that = this;
            that.retort({
                id: that.info.id,
                m: m,
                // fun1: function() { // 从新刷新函数
                //     app.$refs.host.$data.top=99;
                //     app.$refs.host.$data.lastId=0;
                //     app.$refs.host.$data.listData=[];
                //     app.$refs.host.$data.loading=true;
                //     app.$refs.host.$data.noData=true;
                //     Vue.prototype.get_presideList({ o: app.$refs.host })
                // }
                fun1: function(d) {
                    // app.$refs.hostRetort.$data.
                    
                    //返回点赞的ID，点赞还是删除
                    that.$emit("onRetort", [d || that.info.id, !that.isRetort]);
                    setTimeout(function(){
                       that.$emit('tools_off');
                    },300)
                   
                }
            })
        },
        hasRetort: function() {
            var arr = this.info.retort.list;
            for (var key in arr) {
                var _arr = arr[key];
                if (_arr.uid == this.uid) {
                    this.isRetort = true;
                    return
                }
            }
        },
    },
    mounted: function() {
        this.hasRetort();
    }
});

//loading
Vue.component('widget-loading', {
    template: '<div class="weui-loadmore">\
                    <i class="weui-loading"></i>\
                    <span class="weui-loadmore__tips">正在加载</span>\
                </div>',
})
