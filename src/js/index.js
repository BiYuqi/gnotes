$(function(){
  var mainObj = {
      main:$('.main .main-abs'),
      mainInner:$('.main .main-mod-sub ul'),
      index:0,
      num:0,
      items:$('.sidebar .item'),
      init:function(){
          this.clickBar();
          this.disBlock();
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
          $('.btn').on('click',function () {
              $('.sidebar').toggleClass('toogle');
          });
          $('.item').each(function (k,v) {
              $(v).click(function (e) {
                  e.stopPropagation();
                  $('.sidebar').removeClass('toogle');
              })
          })
      }
  };
  mainObj.init();

});
