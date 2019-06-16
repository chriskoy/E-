$(function () {
    $.ajax({
        url: "../api/php/get_goodsdata.php",
        success: function (data) {
            // data = JSON.parse(data);
            console.log(data);
            var html = data.map(function (item) {
                return `
                        <div class="list_box_glist fl">
                            <img class="gimg" src="${item.imgurl}" alt="">
                            <ul class="gimg_ul">
                                <li><img src="${item.imgurl}" style="width:34px;height:34px" alt=""></li>
                            </ul>
                            <span class="goods_box_name">${item.gname}</span>
                            <p class="goods_box_price"><s>￥47.88</s><span>￥${item.gprice}</span></p>
                            <p class="goods_box_popular"><span>已售20592盒</span><span>20555人互动</span></p>
                        </div>

                        `;
            }).join('');
            $("#goods_list").html(html);

            var goods_list = document.getElementById('goods_list');
            var btns = goods_list.getElementsByClassName('list_box_glist');

            //objToStr() 将对象转成参数
            function objToStr(obj) {
                var html = ''; //用于存拼接好的参数
                //遍历：for in
                for(var key in obj) {
                    //key属性名，obj[key]属性值
                    html += key + '=' + obj[key] + '&';
                }
                //              console.log(html);
                return html.slice(0, -1); //去掉最后的这个&号
            }

            for(var i = 0; i < btns.length; i++) {
                    //绑定索引
                    btns[i].index = i;
                    btns[i].onclick = function() {
                    //console.log('点击了'+ this.index);
                    //点哪个就获取哪个的索引值
                        console.log(data[this.index]);//点击哪条数据就用哪条数据
                        var str = objToStr(data[this.index]);
                        console.log(str);
                        location.href = 'detail.html?' + str;
                    }
                }

        }
    })
})