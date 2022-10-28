<?php
$hostname ="localhost";
$bancodedados = "checklist";
$usuario ="root";
$senha ="mwwznfsmwu2";

$mysqli =new mysqli($hostname, $usuario,$senha, $bancodedados){
    if($mysqli -> connect_errno){
        echo "Falha ao conectar: (" . $mysqli->connect_errno .") " . $mysqli->connect_errno;
    }
}