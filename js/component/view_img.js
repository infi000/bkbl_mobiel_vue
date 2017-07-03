// view_img
Vue.component('component-viewimg', {
    template: '<div class="weui-gallery" style="display:block" @click="router.go(-1)">\
                        <span class="weui-gallery__img" id="previewImg" :style="imgStyle"></span>\
                        <div class="weui-gallery__opr">\
                            <a href="javascript:" class="weui-gallery__del" id="btn_delImg" v-if="delStyle">\
                                <i class="weui-icon-delete weui-icon_gallery-delete"></i>\
                            </a>\
                            <p v-if="!delStyle&&imgMsg" style="font-size:12px;line-height:1.7;padding:1.5em; text-align:left">{{imgMsg}}</p>\
                        </div>\
                    </div>',
    data: function() {
        return {
            imgStyle: {},
            delStyle: false,
            imgMsg:""
        }
    },
    mounted: function() {
        var src = this.$route.query.src;
        var delStyle = this.$route.query.style;
        var msg = this.$route.query.msg||"";
        console.log(src)
        console.log(delStyle)
        console.log(msg)
        this.imgStyle = { backgroundImage: 'url(' + src + ')' };
        this.delStyle = delStyle;
        this.imgMsg=msg;
    },
});
