<?php
    $phone_number = trim($_POST['phone_number']);
    $password = trim($_POST['password']);
    $conn = mysqli_connect('localhost','root','root');

    if(mysqli_errno($conn)){
        echo mysqli_erro($conn);
        exit;
    }

    mysqli_select_db($conn,'dbtest');//选择数据库

    mysqli_set_charset($conn,'utf8');

    $sql = "insert into user (phone_number,password) values('$phone_number','$password')";

    $result = mysqli_query($conn,$sql);

    if($result){
        echo "<script>alert('注册成功！')</script>";
        echo "<script>window.location='../../index.html';</script>";
    }else{
        echo "<script>alert('注册失败！')</script>";
        echo "<script>window.location='../../index.html';</script>";

    }
    mysqli_close($conn);