$(function(){
  var mainObj = {
      main:$('.main .main-abs'),
      mainInner:$('.main .main-mod-sub ul'),
      index:0,
      num:0,
      items:$('.sidebar .item'),
      init:function(){
          this.clickBar();
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
      }
  };
  mainObj.init();

});
