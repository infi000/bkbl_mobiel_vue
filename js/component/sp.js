// speakPage
Vue.component('component-speakpage',{
	template: '<div class="page">\
                        <div class="comment">\
                            <div class="weui-cell" v-if="type">\
                                <div class="weui-cell__bd" > \
                                    <div class="weui-uploader__bd">\
                                        <ul class="weui-uploader__files" id="uploaderFiles">\
                                        </ul>\
                                    </div>\
                                </div>\
                            </div>\
                            <div class="weui-cells weui-cells_form">\
                                <div class="weui-cell">\
                                    <div class="weui-cell__bd">\
                                       <textarea class="weui-textarea" placeholder="这一刻你想说的。。" rows="3" id="emoji"></textarea>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="weui-navbar comment_nav" v-if="type">\
                            <div class="weui-navbar__item" id="btn_voice">\
                                <i class="iconfont icon-changge"></i>语音\
                            </div>\
                            <div class="weui-navbar__item" id="btn_picture">\
                                <i class="iconfont icon-paizhao"></i>照片\
                            </div>\
                        </div>\
                        <div class="comment_btnBox">\
                            <a href="javascript:;" class="weui-btn weui-btn_primary" id="btn_send">发布</a>\
                            <a @click="router.go(-1)" class="weui-btn weui-btn_default">返回</a>\
                        </div>\
                    </div>',	
    data:function(){
        return {
            type:this.$route.query.type,
        }
    },


});