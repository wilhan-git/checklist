<?php
        include("conexao.php");

        $recebNome= $_GET["nomeColaborador"];

        mysqli_query($conexao, "insert into dados(nome) values ('$recebNome',)");





?>