$(function(){
    $(".title_right li").hover(function(){
        $(this).addClass("now");
        var i = $(this).index();
        $.ajax({
        url:"../api/json/tab_goods.json",
        success:function(data){
            var data_goods = data[i].remen;
            var html = data_goods.map(function(item){
                return `
                        <div class="tab_list_goods fl">
                            <img src=${item.imgurl} alt="">
                            <p>${item.goodsname}</p>
                            <span>${item.price}</span>
                        </div>
                        `;
            }).join('');
            $(".tab_list").html(html);
            


        }
    })
    },function(){
        $(this).removeClass("now");
    })
    
})