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
    template: '<div class="weui-navbar act_rl">\
                   <div class="weui-navbar__item" id="btn_repo" v-if="false"><i class="iconfont icon-fenxiang"></i>引用</div>\
                    <div class="weui-navbar__item" id="btn_star"><i class="iconfont icon-xihuan"></i><span id="hasRetort"></span></div>\
                    <div class="weui-navbar__item" @click="comment"><i class="iconfont icon-pinglun"></i>评论</div>\
               </div>',
    methods:{
      comment:function(){
        this.$emit('tools_off');
        router.push({ path:'sp', query: {'type':false}})
      }
    }
});
