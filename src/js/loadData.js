$(function(){
    var loadObj = {
        init:function(){
            for(var i=0;i<3;i++){
                this.loadData(i);
            }
            for(var i=0;i<1;i++){
                this.loadAngular(i);
            }
            for(var i=0;i<1;i++){
                this.loadNodeJs(i);
            }
            for(var i=0;i<1;i++){
                this.loadVueJs(i);
            }
            for(var i=0;i<1;i++){
                this.loadJs(i);
            }
            for(var i=0;i<3;i++){
                this.loadMake(i);
            }
            for(var i=0;i<1;i++){
                this.loadArticle(i);
            }
        },
        //加载数据 个人博客 tech-blog
        loadData:function (index) {
            var that = this;
            var url = "data/bloger.json";
            var str = '';
            $.ajax({
                url:url,
                success:function(data){
                    for(i in data.techBlog[index]){
                        str += '<li class="main-mod-con">'
                            +     '<a href="'+data.techBlog[index][i].link+'" target="_blank">'+data.techBlog[index][i].name+'</a>'
                            +   '</li>'

                    }
                    $('.main .tech-blog ul').eq(index).append(str);

                }

            })
        },
        loadAngular:function(index){
            var that = this;
            var url = "data/bloger.json";
            var str = '';
            $.ajax({
                url:url,
                success:function(data){
                    for(i in data.angularBlog[index]){
                        str += '<li class="main-mod-con">'
                            +     '<a href="'+data.angularBlog[index][i].link+'" target="_blank">'+data.angularBlog[index][i].name+'</a>'
                            +   '</li>'

                    }
                    $('.main .angular-blog ul').eq(index).append(str);

                }

            })
        },
        loadNodeJs:function (index) {
            var that = this;
            var url = "data/bloger.json";
            var str = '';
            $.ajax({
                url:url,
                success:function(data){
                    for(i in data.nodeJsBlog[index]){
                        str += '<li class="main-mod-con">'
                            +     '<a href="'+data.nodeJsBlog[index][i].link+'" target="_blank">'+data.nodeJsBlog[index][i].name+'</a>'
                            +   '</li>'

                    }
                    $('.main .nodejs-blog ul').eq(index).append(str);

                }

            })
        },
        loadVueJs:function (index) {
            var that = this;
            var url = "data/bloger.json";
            var str = '';
            $.ajax({
                url:url,
                success:function(data){
                    for(i in data.vueBlog[index]){
                        str += '<li class="main-mod-con">'
                            +     '<a href="'+data.vueBlog[index][i].link+'" target="_blank">'+data.vueBlog[index][i].name+'</a>'
                            +   '</li>'

                    }
                    $('.main .vue-blog ul').eq(index).append(str);

                }

            })
        },
        loadJs:function (index) {
            var that = this;
            var url = "data/bloger.json";
            var str = '';
            $.ajax({
                url:url,
                success:function(data){
                    for(i in data.jsBlog[index]){
                        str += '<li class="main-mod-con">'
                            +     '<a href="'+data.jsBlog[index][i].link+'" target="_blank">'+data.jsBlog[index][i].name+'</a>'
                            +   '</li>'

                    }
                    $('.main .js-blog ul').eq(index).append(str);

                }

            })
        },
        loadMake:function (index) {
            var that = this;
            var url = "data/bloger.json";
            var str = '';
            $.ajax({
                url:url,
                success:function(data){
                    for(i in data.makeBlog[index]){
                        str += '<li class="main-mod-con">'
                            +     '<a href="'+data.makeBlog[index][i].link+'" target="_blank">'+data.makeBlog[index][i].name+'</a>'
                            +   '</li>'

                    }
                    $('.main .make-blog ul').eq(index).append(str);

                }

            })
        },
        loadArticle:function (index) {
            var that = this;
            var url = "data/bloger.json";
            var str = '';
            $.ajax({
                url:url,
                success:function(data){
                    for(i in data.articleBlog[index]){
                        str += '<li class="main-mod-con">'
                            +     '<a href="'+data.articleBlog[index][i].link+'" target="_blank">'+data.articleBlog[index][i].name+'</a>'
                            +   '</li>'

                    }
                    $('.main .article-blog ul').eq(index).append(str);

                }

            })
        }
    };
    loadObj.init();
});
