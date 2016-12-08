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
          $('.item').each(function (k,v) {
              $(v).click(function (e) {
                  e.stopPropagation();
                  $('.sidebar').removeClass('toogle');
              })
          })
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
              //console.log(parseInt(that.disPercent))
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
      }
  };
  mainObj.init();

});
