$(function(){
  var localSto = {
    sideItems:$('.sidebar .item'),
    arrDisplay:[],
    main:$('.main .main-abs'),
    init:function(){
      this.readData();
      this.clickData();
    },
    localData:function(){
      var that = this;
      this.sideItems.each(function(k,v){
          that.arrDisplay[k] = $(v).hasClass('clicked') === true ? 1:0;
      });
      localStorage.setItem("arrData",this.arrDisplay);
    },
    clickData:function(){
      var that = this;
      this.sideItems.each(function(k,v){
        $(v).click(function(){
          that.localData();
        })
      })
    },
    readData:function(){
      var storeData = localStorage.getItem('arrData');
      if(storeData){
        storeData = storeData.split(',');
        for(var i=0;i<storeData.length;i++){
          if(storeData[i] == 1){
            this.sideItems.eq(i).addClass('clicked').siblings().removeClass('clicked');
            this.main.eq(i).addClass('first-main-abs').siblings().removeClass('first-main-abs');
          }
        }
      }
    }
  }
  localSto.init();
})
