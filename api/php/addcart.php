<?php
    // $phone_number = trim($_POST['phone_number']);
    $id = $_POST['id'];
    $name = $_POST['name'];
    $price = $_POST['price'];
    $num = $_POST['num'];
    $imgurl = $_POST['imgurl'];
    $conn = mysqli_connect('localhost','root','root');

    if(mysqli_errno($conn)){
        echo mysqli_erro($conn);
        exit;
    }

    mysqli_select_db($conn,'dbtest');//选择数据库

    mysqli_set_charset($conn,'utf8');

    $sql = "insert into cart (gid,gname,gprice,gimgurl,gnum) values ('$id','$name','$price','$imgurl','$num')";

    // $sql = "select '$id' as count from cart group by gid having count > '0'";

    $result = mysqli_query($conn,$sql);

    // if($result){
    //     mysqli_query($conn,"update cart set gnum = gnum + '1' where gid='$id'");
    // }else{
    //     mysqli_query($conn,"insert into cart (gid,gname,gprice,gimgurl,gnum) values ('$id','$name','$price','$imgurl','$num')");
    // }
    mysqli_close($conn);
