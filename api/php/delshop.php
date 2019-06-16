<?php
    include 'conn.php';

    $gid = isset($_POST['id']) ? $_POST['id'] : '';

    $sql = "DELETE FROM cart WHERE gid=$gid;";
    $res = $conn->query($sql);
    if($res){
        echo 'yes';
    }else{
        echo 'no';
    }
?>