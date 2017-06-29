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
            top:99,
            listData:[],
            // listData: [{
            //         'uid': '1000050016',
            //         'nickname': '的凤飞飞',
            //         'head': 'http:\/\/www.xiaomaizhibo.com\/cloudtest\/download\/bkbl\/nick\/u1496280996971839346772.jpg',
            //         'type': '3',
            //         'id': '10368',
            //         'message': '是多少圣达菲咚咚咚2017-05-17 18:06:01',
            //         'image': 'http:\/\/www.xiaomaizhibo.com\/cloudtest\/download\/bkbl\/share\/201706\/20170612\/u149725104450135392674.jpg',
            //         'video': 'http:\/\/video.mobile.tvm.cn\/mov\/5c\/45\/2473ba608915cfce08e451ec531a9d3b.mp4',
            //         'date': '2017-06-13 17:02:02',
            //         'timestamp': 1497344522,
            //         'top': 0,
            //         'retort': '',
            //         'comment': '',
            //     },
            //     { 'uid': '1000050016', 'nickname': '的凤飞飞', 'head': 'http:\/\/www.xiaomaizhibo.com\/cloudtest\/download\/bkbl\/nick\/u1496280996971839346772.jpg', 'type': '4', 'id': '10367', 'message': '555', 'image': '555', 'video': '555', 'date': '2017-06-13 17:01:55', 'timestamp': 1497344515, 'top': 0, 'retort': '', 'comment': '' }, { 'uid': '1000050016', 'nickname': '的凤飞飞', 'head': 'http:\/\/www.xiaomaizhibo.com\/cloudtest\/download\/bkbl\/nick\/u1496280996971839346772.jpg', 'type': '3', 'id': '10366', 'message': '4444', 'image': '43344', 'video': '4444', 'date': '2017-06-13 17:01:48', 'timestamp': 1497344508, 'top': 0, 'retort': '', 'comment': '' },
            //     { 'uid': '1000050016', 'nickname': '的凤飞飞', 'head': 'http:\/\/www.xiaomaizhibo.com\/cloudtest\/download\/bkbl\/nick\/u1496280996971839346772.jpg', 'type': '1', 'id': '10365', 'message': '123', 'image': 'http:\/\/www.xiaomaizhibo.com\/cloudtest\/download\/bkbl\/share\/201706\/20170613\/u1497344467876704234573.png', 'video': '', 'date': '2017-06-13 17:01:07', 'timestamp': 1497344467, 'top': 0, 'retort': '', 'comment': '' },
            //     { 'uid': '1000050016', 'nickname': '的凤飞飞', 'head': 'http:\/\/www.xiaomaizhibo.com\/cloudtest\/download\/bkbl\/nick\/u1496280996971839346772.jpg', 'type': '1', 'id': '10365', 'message': '123', 'image': 'http:\/\/www.xiaomaizhibo.com\/cloudtest\/download\/bkbl\/share\/201706\/20170613\/u1497344467876704234573.png', 'video': '', 'date': '2017-06-13 17:01:07', 'timestamp': 1497344467, 'top': 0, 'retort': '', 'comment': '' },
            //     { 'uid': '1000050016', 'nickname': '的凤飞飞', 'head': 'http:\/\/www.xiaomaizhibo.com\/cloudtest\/download\/bkbl\/nick\/u1496280996971839346772.jpg', 'type': '1', 'id': '10365', 'message': '123', 'image': 'http:\/\/www.xiaomaizhibo.com\/cloudtest\/download\/bkbl\/share\/201706\/20170613\/u1497344467876704234573.png', 'video': '', 'date': '2017-06-13 17:01:07', 'timestamp': 1497344467, 'top': 0, 'retort': '', 'comment': '' },
            //     { 'uid': '1000050016', 'nickname': '的凤飞飞', 'head': 'http:\/\/www.xiaomaizhibo.com\/cloudtest\/download\/bkbl\/nick\/u1496280996971839346772.jpg', 'type': '1', 'id': '10365', 'message': '123', 'image': 'http:\/\/www.xiaomaizhibo.com\/cloudtest\/download\/bkbl\/share\/201706\/20170613\/u1497344467876704234573.png', 'video': '', 'date': '2017-06-13 17:01:07', 'timestamp': 1497344467, 'top': 0, 'retort': '', 'comment': '' },
            //     { 'uid': '1000050016', 'nickname': '的凤飞飞', 'head': 'http:\/\/www.xiaomaizhibo.com\/cloudtest\/download\/bkbl\/nick\/u1496280996971839346772.jpg', 'type': '1', 'id': '10365', 'message': '123', 'image': 'http:\/\/www.xiaomaizhibo.com\/cloudtest\/download\/bkbl\/share\/201706\/20170613\/u1497344467876704234573.png', 'video': '', 'date': '2017-06-13 17:01:07', 'timestamp': 1497344467, 'top': 0, 'retort': '', 'comment': '' },
            //     { 'uid': '1000050016', 'nickname': '的凤飞飞', 'head': 'http:\/\/www.xiaomaizhibo.com\/cloudtest\/download\/bkbl\/nick\/u1496280996971839346772.jpg', 'type': '1', 'id': '10365', 'message': '123', 'image': 'http:\/\/www.xiaomaizhibo.com\/cloudtest\/download\/bkbl\/share\/201706\/20170613\/u1497344467876704234573.png', 'video': '', 'date': '2017-06-13 17:01:07', 'timestamp': 1497344467, 'top': 0, 'retort': '', 'comment': '' },
            // ],
        }
    },
    mounted: function() {
        this.get_presideList({ o: this });

    },
});

Vue.component('component-cbwonder', {
    props: ['uid'],
    template: '<div id=\'chatBox\'><widget-wl v-for=\'wl in list\' :info=\'wl\' :uid=\'uid\'></widget-wl></div>',
    data: function() {
        return wonderDemo;
    },
});

Vue.component('component-cbchat', {
    template: ' <h1>chat</h1>',
});
