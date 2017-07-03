// view_video
Vue.component('component-viewvideo', {
    template: '<div class="weui-gallery" style="display:block" @click.self="router.go(-1)">\
                       <div style="position: relative;top: 20%;"><video :src="src" width="100%;" controls="controls"></video></div>\
                        <div class="weui-gallery__opr">\
                            <p v-if="videoMsg" style="font-size:12px;line-height:1.7;padding:1.5em; text-align:left">{{videoMsg}}</p>\
                        </div>\
                    </div>',
    data: function() {
        return {
            src: "",
            videoMsg:""
        }
    },
    mounted: function() {
        var src = this.$route.query.source;
        var msg = this.$route.query.msg||"";
        this.src = src;
        this.videoMsg=msg;
    }
});
