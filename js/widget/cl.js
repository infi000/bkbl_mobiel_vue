// chatLine
Vue.component('widget-cl', {
    props: ['info', 'uid'],
    template: '<div class="weui-media-box weui-media-box_appmsg weui-media-box_appmsg_1" :dataType="info">\
                                <div class="weui-media-box__hd">\
                                    <img class="weui-media-box__thumb" :src="info.head" alt="">\
                                </div>\
                                <div class="weui-media-box__bd">\
                                    <span class="rep_city" v-if="info.province" >{{info.province}}</span>\
                                    <h4 class="weui-media-box__title">{{info.nickname}}</h4>\
                                    {{info.message}}\
                                    <div class="rep_info">\
                                        <p class="rep_time">{{info.date}}</p>\
                                        <a class="rep_del" v-if="info.uid==uid">删除</a>\
                                        <div class="rep_tag btn_getTools" @click="toggleTools"><i class="iconfont icon-gengduo"></i></div>\
                                        <widget-toolsbar v-if="tools_on" @tools_off="toggleTools"></widget-toolsbar>\
                                        <widget-mask v-if="tools_on" @tools_off="toggleTools"></widget-mask>\
                                    </div>\
                                    <widget-retort></widget-retort>\
                                    <widget-repo></widget-repo>\
                                </div>\
                            </div>',
    data:function(){
        return {
            tools_on:false,
        };
    },
    methods:{
        toggleTools:function(){
            this.tools_on=!this.tools_on;
        },
    },
});
