<?php

include_once "autoload.php";


$listador = new listador();



if(isset($_GET['id'])) {
    echo json_encode($listador->verAsistentes($_GET["id"]));
} else {
    echo "ERROR";
}




?>