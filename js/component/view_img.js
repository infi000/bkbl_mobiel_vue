// view_img
Vue.component('component-viewimg', {
    // template: '<div class="weui-gallery" style="display:block">\
    //                     <span class="weui-gallery__img" id="previewImg" :style="background-image:url(src)"></span>\
    //                     <div class="weui-gallery__opr">\
    //                         <a href="javascript:" class="weui-gallery__del" id="btn_delImg" v-if="style">\
    //                             <i class="weui-icon-delete weui-icon_gallery-delete"></i>\
    //                         </a>\
    //                     </div>\
    //                 </div>',
    template:'<div class="weui-gallery">\
    <span class="weui-gallery__img" id="previewImg" :style="{backgroundImage:url(123)}"></span>\
    </div>',
    data: function() {
        return {
            src: "",
            delStyle: false,
        }
    },
    mounted: function() {
        var src = this.$route.query.src;
        var delStyle = this.$route.query.style;
        this.imgStyle = background-image:url(src);
        this.delStyle = delStyle;
    },
});
