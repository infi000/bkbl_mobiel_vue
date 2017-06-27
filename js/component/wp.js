/*
wonderPage
*/

Vue.component('component-wonderpage', {
  template: '<div class="page"  id="wonderBd">\
                    <div class="page__bd">\
                            <div id="wonderVideo" class="viewType"><img :src="info.image" onerror="imgError(this,\'./static/nopic2.jpg\')" alt="" style="width:100%" >\
                            <span class="btn_playView" :dataType="info.video"><i class="iconfont icon-bofang1"></i></span></div>\
                            <article class="weui-article">\
                                    <section>\
                                        <section style=" border-bottom: 1px  groove #ddd;">\
                                            <h2 style="overflow:hidden">标题：{{info.title}}<a @click="router.go(-1)" id="wonderBack">返回</a></h2>\
                                            <h3>{{info.date}} <i class="iconfont icon-xihuan ">{{(info.retort) ? info.retort.total : "0"}}</i><i class="iconfont icon-pinglun">{{(info.comment) ? info.comment.total : "0"}}</i></h3>\
                                            <p id="wonderMsg" class="btn_chatMsg">简介：{{info.message}}</p>\
                                        </section>\
                                        <section>\
                                            <h3>留言板：</h3>\
                                            <div style="zoom:0.8" id="wonderChat">\
                                            <div v-if="info.comment">有评论</div>\
                                           <div  v-else class="weui-loadmore weui-loadmore_line"><span class="weui-loadmore__tips">暂无评论</span></div>\
                                            </div>\
                                        </section>\
                                    </section>\
                            </article>\
                        </div>\
                        <widget-speak :type="false"></widget-speak>\
                    </div>',
  data: function() {
    return { info: '' };
  },
  methods: {},
  mounted: function() {
    var that = this;
    var id = this.$route.query.id;
        // var url = 'http://www.xiaomaizhibo.com/cloudtest/?m=7259&id=10174&talk_id=8cbcb492db658e619d838af310da6ef6&xopenid=oXhPVvmTMDsrjcD0eb9yltn9N4Z4&author=qTBwlkMlUOyMK-FWO6zxzLmgpTOeDkEoxc-F5-4m3O1SdbujJjvGFj0iuKlqVJB54b-9RZmcxcQ-Spr1jqMnVw';
    var app = $.ajax({
      url: URL_dev,
      data: {
        m: params.getWonder,
        id: id,
        talk_id: '17ef7347ed49cce3680d93de46200ff4',
        xopenid: 'oXhPVvmTMDsrjcD0eb9yltn9N4Z4',
        author: 'Fw6RLKFKLAbQjvj3O3QVucIKob-NDtyJ4giwFWgHP_tsWgTMgaFYRSehVI0vCAnoVIedN4upeh9SfnitMp2VIw',
      },
      dataType: 'JSONP',
      success: function(e) {
        if (e.status == 1) {
          that.info = e.data;
          console.log(that.info);
        }

      },
    });
  },
});
