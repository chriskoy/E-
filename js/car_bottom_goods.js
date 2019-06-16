$(function(){
    $.ajax({
        url:"../api/json/car_bottom_goods.json",
        success:function(data){
            console.log(data);
            var html = data.map(function(item){
                return `
                        <li>
                            <div class="rela">
                            <img class="goods_main" src=${item.imgurl} alt="">
                                <p class="goods_name">${item.goods_name}</p>
                                <div class="rela_bottom">
                                    <p>${item.price}</p>
                                    <p class="fl">E宠价：<s>${item.Eprice}</s></p>
                                    <img class="fr" src="../images/car.png"alt="">
                                </div>
                            </div>
                        </li>
                        `;
            }).join('');
            $(".car_goodslist").html(html);
            


            } 
        })
})