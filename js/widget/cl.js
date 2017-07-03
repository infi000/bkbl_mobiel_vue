// chatLine
/*asdf*/
Vue.component('widget-cl', {
    props: ['info', 'uid'],
    template: '<div class="weui-media-box weui-media-box_appmsg weui-media-box_appmsg_1" :dataType="info">\
                                <div class="weui-media-box__hd">\
                                    <img class="weui-media-box__thumb" :src="info.head" alt="">\
                                </div>\
                                <div class="weui-media-box__bd">\
                                    <span class="rep_city" v-if="info.province" >{{info.province}}</span>\
                                    <h4 class="weui-media-box__title" >{{info.nickname}}</h4>\
                                    <p class="weui-media-box__desc  btn_chatMsg"><span class="weui-badge badge-top" v-if="info.top">置顶</span>{{info.message}}</p>\
                                    <div class="viewType"  v-if="info.type&&parseInt(info.type)==3">\
                                        <div class="viewBox">\
                                            <img :src="info.image" style="height:200px;max-width:100%" onerror="imgError(this,\'./static/logo2.png\')">\
                                            <span class="btn_playView" @click="router.push({path:\'video\',query:{source:info.video,msg:info.message}})" ><i class="iconfont icon-bofang1"></i></span>\
                                        </div>\
                                    </div>\
                                    <p class="weui-media-box__desc  btn_chatMsg" v-if="info.type&&parseInt(info.type)==1&&info.image">\
                                        <img :src="info.image" @click="router.push({path:\'img\',query:{style:false,src:info.image,msg:info.message}})" onerror="imgError(this,\'./static/overtime.png\',{width:80,height:40})">\
                                    </p>\
                                    <div class="viewType" v-if="info.type&&parseInt(info.type)==4">\
                                        <a :href="info.video"><i class="iconfont icon-lianjie"></i>{{info.image}}</a>\
                                    </div>\
                                    <div class="rep_info">\
                                        <p class="rep_time">{{info.date}}</p>\
                                        <a class="rep_del" v-if="info.uid==uid">删除</a>\
                                        <div class="rep_tag btn_getTools" @click="toggleTools"><i class="iconfont icon-gengduo"></i></div>\
                                        <widget-toolsbar v-if="tools_on" @tools_off="toggleTools" @onRetort="reloadRetort" :info="info" :uid="uid" ></widget-toolsbar>\
                                        <widget-mask v-if="tools_on" @tools_off="toggleTools"></widget-mask>\
                                    </div>\
                                    <widget-retort v-if="info.retort" :info="info.retort.list" ></widget-retort>\
                                    <div class="rep_box rep_box_repo" v-if="info.comment">\
                                        <div class="rep_tag">\
                                           <i class="iconfont icon-pinglun"></i>\
                                        </div>\
                                        <widget-repo v-for="comment in info.comment.list" :info="comment" ></widget-repo>\
                                    </div>\
                                </div>\
                            </div>',
    data: function() {
        return {
            tools_on: false,
        };
    },
    methods: {
        toggleTools: function() {
            this.tools_on = !this.tools_on;
        },
        reloadRetort: function(d) {
            var id = d[0],
                type = d[1] || "",
                uid=demo.userInfo.uid;
            if (type) {
                //添加点赞
                var i = { head: demo.userInfo.head, id: id, uid: uid };
                if(this.info.retort.list){
                   this.info.retort.list.push(i); 
               }else{
                this.info.retort.list=[i];
               }
                
            } else {
                //删除点赞
                for (var key in this.info.retort.list) {
                    var info = this.info.retort.list[key];
                    if (info.uid == uid) {
                        this.info.retort.list.splice(key, 1);
                        if(this.info.retort.list.length==0){
                            this.info.retort=""
                        }
                        return
                    }
                }
            }
        }
    },
});

//回复框chatRepo
Vue.component('widget-repo', {
    props: ['info'],
    template: '<div class="rep_item">\
                 <div class="weui-media-box weui-media-box_appmsg" :dataType="info">\
                     <div class="weui-media-box__hd">\
                         <img class="weui-media-box__thumb" :src="info.head" alt="">\
                     </div>\
                     <div class="weui-media-box__bd btn_reComment">\
                         <h4 class="weui-media-box__title">{{info.nickname}}<a class="rep_del" :style="delStyle">删除</a>\</h4>\
                         <p class="weui-media-box__desc">\
                            <span style="margin-right: 0.2em;color: #999;font-weight: 400;display:inline-block;margin-left: -0.2em;" v-if="info.rnickname">回复{{info.rnickname}}:</span>\
                         {{info.message}}</p>\
                     </div>\
                 </div>\
              </div>',
    data: function() {
        var style = (this.info.uid == app.userInfo.uid) ? "inline-block" : "none";
        delStyle = {
            marginLeft: '10px',
            color: '#999',
            fontWight: '400',
            display: style
        }
        return {
            delStyle: delStyle
        }
    }

});

//点赞domw idget-retort
Vue.component('widget-retort', {
    props: ["info"],
    template: '<div class="rep_box rep_box_retort">\
                            <div class="rep_tag">\
                                <i class="iconfont icon-xihuan"></i>\
                            </div>\
                            <div class="rep_item" style="padding:4px 4px 0;">\
                               <img class="rep_head" v-for="i in info" :src="i.head" > \
                            </div>\
                    </div>'
})
