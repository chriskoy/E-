<?php
header("Content-type: application/json;charset=utf-8"); //字符编码设置
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "dbtest";
// 创建连接
$con = mysqli_connect($servername, $username, $password, $dbname);
$con->set_charset("utf-8");

// 检测连接
$sql = "SELECT * FROM goods";
$result = mysqli_query($con, $sql);
if (!$result) {
    printf( mysqli_error($con));
    exit();
}

$jarr = array();
while ($rows = mysqli_fetch_array($result)) {
    $count = count($rows); //不能在循环语句中，由于每次删除 row数组长度都减小
    for ($i = 0; $i < $count; $i++) {
        unset($rows[$i]); //删除冗余数据
    }
    array_push($jarr, $rows);
}

// echo $str = json_encode($jarr);//将数组进行json编码

echo $str = json_encode($jarr,JSON_UNESCAPED_UNICODE);

?>





