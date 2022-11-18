<?php
$hostname ="localhost";
$bancodedados = "checklist";
$dbusuario ="root";
$dbsenha ="mwwznfsmwu2";

$mysqli =new mysqli($hostname, $dbusuario,$dbsenha, $bancodedados){
    if($mysqli -> connect_errno){
        echo "Falha ao conectar: (" . $mysqli->connect_errno .") " . $mysqli->connect_errno;
    }
}
?>