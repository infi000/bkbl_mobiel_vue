//wonderList
Vue.component('widget-wl', {
    props: ['info'],
    template: '<div class="weui-cell btn_wonder" :dataType="info" @click="router.push({ path: \'wp\', query: { id: info.id }})">\
                        <div class="weui-cell__hd" style="margin-right:8px;height:50px;"><img :src="info.image"  onerror="imgError(this,\'./static/nopic2.jpg\')" style="width: 80px;height:50px;"></div>\
                        <div class="weui-cell__bd">\
                            <p class="wonder_p">{{badge_top}}{{info.title}}</p>\
                            <p style="font-size: 12px;color: #888;text-indent:0.2em">{{info.date}}</p>\
                        </div>\
                        <div class="weui-cell__ft "><a class="btn_wonderRet"><i class="iconfont icon-xihuan"></i><span>{{(info.retort) ? info.retort.total : 0}}</span></a></div>\
                    </div>',
    computed: {
        badge_top: function() {
            var html = '<span class="weui-badge badge-top">置顶</span>';
            if (this.info.top) {
                return html;
            }
            return '';
        },
    },
});
