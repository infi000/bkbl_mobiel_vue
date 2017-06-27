/*
 * @Author: 张驰阳
 * @Date:   2017-06-23 11:35:22
 * @Last Modified by:   张驰阳
 * @Last Modified time: 2017-06-27 15:56:30
 */

'use strict';
var vm = Vue.component('component-hd', {
    props: ['hdmodel', 'hdimg', 'hdsource'],
    template: '<div class="page_hd">\
            <div id="video">\
              <template v-if="hdmodel==1">\
                <img v-bind:src="hdimg" style="height:100%;margin: 0 auto;display: block;">\
                <span id="btn_playVideo"><i class="iconfont icon-bofang1"></i></span>\
              </template>\
              <template v-if="hdmodel==2">\
                <div  class="swiper-container2">\
                  <div class="swiper-wrapper">\
                    <div class="swiper-slide"   v-for="source in hdsource"><a class="swiper2-slide-a" v-bind:href="source.url"><img v-bind:src="source.image"></a></div>\
                  </div>\
                </div>\
              </template>\
            </div>\
          </div>',
    updated: function() {
        if (parseInt(this.hdmodel) == 2) {
            var mySwiper2 = new Swiper('.swiper-container2', { autoplay: 5000 });
        }
    },
    mounted: function() {
        if (parseInt(this.hdmodel) == 2) {
            var mySwiper2 = new Swiper('.swiper-container2', { autoplay: 5000 });
        }
    },
});
