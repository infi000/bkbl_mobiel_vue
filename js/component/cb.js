// chatBox
'use strict';
Vue.component('component-cbhost', {
    props: ['uid'],
    template: '<div id=\'chatBox\'>\
                    <widget-cl v-for=\'cl in listData\' :info=\'cl\' :uid=\'uid\'></widget-cl>\
                    <widget-loading v-if="loading"></widget-loading>\
                    <div class="weui-loadmore weui-loadmore_line" v-if="noData"><span class="weui-loadmore__tips">暂无数据</span></div>\
                </div>',
    data: function() {
        return {
            loading: true,
            noData: true,
            top: 99,
            lastId: 0,
            listData: [],
        }
    },
    mounted: function() {
        this.get_presideList({ o: this});

    },
});

Vue.component('component-cbwonder', {
    props: ['uid'],
    template: '<div id=\'chatBox\'>\
                    <widget-wl v-for=\'wl in listData\' :info=\'wl\' :uid=\'uid\'></widget-wl>\
                    <widget-loading v-if="loading"></widget-loading>\
                    <div class="weui-loadmore weui-loadmore_line" v-if="noData"><span class="weui-loadmore__tips">暂无数据</span></div>\
                </div>',
    data: function() {
        return {
            loading: true,
            noData: true,
            page: 1,
            listData: [],
        }
    },
    mounted: function() {
        this.get_wonderList({ o: this });
    },
});

Vue.component('component-cbchat', {
    template: ' <h1>chat</h1>',
});
