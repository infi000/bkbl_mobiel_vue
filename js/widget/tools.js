//navbar
Vue.component("widget-bn", {
    template: '<div class="weui-navbar act_rl">\
                   <div class="weui-navbar__item" id="btn_repo" style="display:none"><i class="iconfont icon-fenxiang"></i>引用</div>\
                    <div class="weui-navbar__item" id="btn_star"><i class="iconfont icon-xihuan"></i><span id="hasRetort"></span></div>\
                    <div class="weui-navbar__item btn_comment"><i class="iconfont icon-pinglun"></i>评论</div>\
               </div>'
})

//mask
Vue.component("widget-mask",{
	template:"<div class='weui-mask'>";
})