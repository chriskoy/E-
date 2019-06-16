<?php
    session_start();
    $phone_number = trim($_POST['phone_number']);
    $password = trim($_POST['password']);
    $conn = mysqli_connect('localhost','root','root');
    if(mysqli_errno($conn)){
        echo mysqli_erro($conn);
        exit;
    }
    mysqli_select_db($conn,'dbtest');//选择数据库

    $sql="select * from user where phone_number='{$phone_number}' and password='{$password}'";
    mysqli_set_charset($conn,'utf8');
    $result = mysqli_query($conn,$sql);
    $row=mysqli_fetch_array($result,$result_type=MYSQLI_ASSOC);
    if ($row){
        $_SESSION['id']=$row['id'];
        setCookie("userphone",$_POST['phone_number'],time()+3600*24*30);
        //如果验证成功跳转到登陆后的页面；
        echo "<script>alert('登录成功！')</script>";
        echo "<script>window.location='../../index.html';</script>";


    }else{
        echo "$phone_number,$password";
        echo "<script>alert('用户名或密码错误！')</script>";
        //如果验证失败则返回首页；
        echo "<script>window.location='../../index.html';</script>";
    }

     mysqli_close($conn);





