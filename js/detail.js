$(function(){
    
    function addcart(){
        var tprice = $(".gprice").html();
        var tname = $(".gdr_title").html();
        var tnum = $(".gdr_num input").val();
        var timgurl = $(".w_img1").attr("src");
        var tid = $(".goods_number span").html();
        console.log(tprice+"1"+tname+"2"+tnum+"3"+timgurl+"4"+tid);
        $.post(
            '../api/php/addcart.php',
            {
                "id":tid,
                "name":tname,
                "price":tprice,
                "imgurl":timgurl,
                "num":tnum
            },
            // function(res){
                

            // }
        )

    }
    $('.gdr_btn').on('click',function(){addcart()});
})