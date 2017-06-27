/*
 * @Author: 张驰阳
 * @Date:   2017-06-23 11:35:52
 * @Last Modified by:   张驰阳
 * @Last Modified time: 2017-06-27 15:42:01
 */

'use strict';
Vue.component('component-bn', {
  template: '<div class="page_bn">\
          <template v-if="bnList!=0">\
            <div class="swiper-container">\
              <div class="swiper-wrapper">\
                <div class="swiper-slide"  v-for="bn in bnList" >\
                  <div class="swiper-slide-a" :dataType="encodeURIComponent(JSON.stringify(bn))" v-bind:style="url(bn.image)"><a :href="bn.url"></a></div>\
                </div>\
              </div>\
            <div>\
          </template>\
          <template v-else>\
             <div class="swiper-container">\
                            <div class="swiper-wrapper">\
                                <div class="swiper-slide"><a class="swiper-slide-a"></a></div>\
                            </div>\
                         </div>\
          </template>\
           </div>',
  data: function() {
    return {
      bnList: demo.data_bn,
    };
  },
  methods: {
    url: function(e) {
      return { 'background-image': 'url(' + e + ')' };
    },
  },
  updated: function() {
    if (this.bnList != 0) {
      var mySwiper = new Swiper('.swiper-container', { autoplay: 5000 });
    }
  },
  mounted: function() {
    if (this.bnList != 0) {
      var mySwiper = new Swiper('.swiper-container', { autoplay: 5000 });
    }
  },
});

var app_bn = new Vue({
  el: '.page_bn',
  data: {
    bnList: demo.data_bn,
    title: '你好世界',
  },
});
