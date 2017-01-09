$(function(){
  var mainObj = {
      main:$('.main .main-abs'),
      mainInner:$('.main .main-mod-sub ul'),
      index:0,
      num:0,
      items:$('.sidebar .item'),
      siderBar:$('.sidebar'),
      disX:0,//touchstart 的位置
      disMoveX:0,//touchmove 的实时位置
      disPercent:0,//移动百分比
      speed:0,
      flag:false,
      init:function(){
          this.clickBar();
          this.disBlock();
          this.touchMovey();
          this.happyNewYear();
          this.mobileTouch();
      },
      //选项卡切换
      clickBar:function(){
          var that = this;
          this.items.each(function(k,v){
              $(v).on('click',function(){
                $(this).addClass('clicked').siblings().removeClass('clicked');
                that.main.eq(k).addClass('first-main-abs').siblings().removeClass('first-main-abs');
              })
          })
      },
      disBlock:function(){
          var that = this;
          $('.btn').on('click',function () {
              $('.sidebar').animate({
                  'left':'0'
              },500);
          });
          if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))
              || $('body').width() <= 1080) {
            //移动端
              $('.item').each(function (k,v) {
                  $(v).click(function (e) {
                      e.stopPropagation();
                      that.siderBar.animate({
                          'left':'-45%'
                      },300);
                  })
              });
          }else {
            //PC端
          }
      },
      touchMovey:function(){
          var that = this;
          this.siderBar.on('touchstart',function(){
              that.disX = event.touches[0].clientX;
          });
          this.siderBar.on('touchmove',function(){
              that.disMoveX = event.touches[0].clientX;
              that.disPercent = (that.disMoveX - that.disX)/640*100;
              that.speed = that.disPercent + '%';
              if(parseInt(that.speed) < 0){
                  that.siderBar.css({
                      'left':that.speed
                  });
              }
              that.flag = true;
              // console.log(parseInt(that.disPercent))
          });
          this.siderBar.on('touchend',function(){
                if(that.flag && parseInt(that.disPercent) < -17){
                    that.siderBar.animate({
                        'left':'-45%'
                    },350);
                }
              if(that.flag && parseInt(that.disPercent) > -17 && parseInt(that.disPercent) < 0){
                  that.siderBar.animate({
                      'left':'0'
                  },500);
              }
          })
      },
      happyNewYear:function(){
        var nowDate = new Date();
      	if(nowDate.getMonth() == 0 && nowDate.getDate() == 1){
      		$('.new-year').show();
      	}else{
          $('.new-year').hide();
        }
      },
      //下面为插件
      mobileTouch:function(){
          var that = this;
          etouch('#forTouch',function(e,touch) {
              e.clock = true;  //给div加锁,完全阻止默认事件
              // console.log('我仅仅只是一个tap啊！');
              // console.log(touch);
              }).on('swiper',function(e,touch) {

              }).on('up',function(e,touch) {
                  //console.log('上滑回调');
              }).on('down',function(e,touch) {
                  //console.log('下滑回调');
              }).on('left',function(e,touch) {
                  //console.log('左滑回调');
              }).on('right',function(e,touch) {
                  that.siderBar.animate({
                      'left':'0'
                  },300);
          });
      }
  };
  mainObj.init();
});
