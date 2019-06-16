$(function() {
    function create() {
        $.ajax({
            url: "../api/php/get_cart_goods.php",
            success: function(data) {
                // data = JSON.parse(data);
                console.log(data);
                var html = data.map(function(item) {
                    return `
                <ul class="goods_size" data-id="${item.gid}">
                    <li class="goods_select"><input type="checkbox" name=""></li>
                    <li class="goods_name"><img src=${item.gimgurl} alt=""><span>${item.gname}</span></li>
                    <li class="goods_num">
                        <span class="add_sub clear">
                            <span class="sub" style="cursor:pointer">-</span>
                            <input type="text" name="" value=${item.gnum}>
                            <span class="add" style="cursor:pointer">+</span>
                        </span>
                        <p>有货</p>
                    </li>
                    <li data-num="${item.gprice}" class="goods_price">
                        <p>￥${item.gprice*item.gnum}</p>
                        <!-- <p>273</p> -->
                    </li>
                    <li class="goods_del">
                        <a href="javascript:;">[收藏]</a><a href="javascript:;" class="del">[删除]</a>
                    </li>
                </ul>
                 `;
                }).join('');
                $(".goods_car").html(html);
            }
        })
    }

    create();
    function cal() {
        var goodsum = 0; //总价
        // console.log($('body').find('.goods_select input'));
        // .attr("checked");
        $('body').find('.goods_select input').each(function(i, item) {
            if ($(item).is(':checked')) {
                goodsum += $(item).parent().parent().find('.goods_price p').text().slice(1) * 1;
            }
        });
        // console.log(goodsum);
        $('.goods_max strong').html('￥' + goodsum.toFixed(2));
    }


    function single(ele, addOrOpp) {
        var eachsum = 0;
        var num = ele.find('input').val();
        if (addOrOpp == 'add') {
            num++;
        } else {
            num--;
        }
        if (num < 1) {
            num = 1;
        }
        if (num > 6) {
            num = 6;
        }
        eachsum = ele.parent().parent().find('.goods_price').data('num') * num;
        ele.find('input').val(num);
        ele.parent().parent().find('.goods_price p').html('￥' + eachsum);
        cal();
    }

    $('.goods_car').on('click', '.sub', function() {
        single($(this).parent());
    });

    $('.goods_car').on('click', '.add', function() {
        single($(this).parent(), 'add');
    });

    $('.goods_car').on('click', '.goods_select input', () => {
        cal();
    });

    $('.goods_car').on('click', '.del', function() {
        var id = $(this).parent().parent().data('id');
        console.log(id);
        $.ajax({
            type: 'post',
            url: '../api/php/delshop.php',
            data: {
                id: id
            },
            success: function(str) {
                if (str == 'yes') {
                    alert('删除成功！');
                    create();
                } else {
                    alert('cuowu');
                }
            }
        });
    });
})