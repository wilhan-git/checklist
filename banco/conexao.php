<?php
$hostname ="localhost";
$bancodedados = "checklist";
$usuario ="root";
$senha ="mwwznfsmwu2";

$mysql =new mysql($hostname, $usuario,$senha, $bancodedados){
    if($mysql -> connect_errno){
        echo "Falha ao conectar: (" . $mysql->connect_errno .") " . $mysql->connect_errno;
    }
}