<?php
function numeros ($x, $y){
    if ($x / $y > 0){
        $msg = "\n1";
        return $msg;
    }
    else {
        $msg = "\n0";
        return $msg;
    }
}
echo "Se X divido por Y tiver valor positivo, será exibido na tela '1', se for negativo, será exibido '0' \n";
echo "Digite um valor para X: \n";
$x = (int) fgets (STDIN);
echo "Digite um valor para Y: \n";
$y = (int) fgets (STDIN);
$status = numeros ($x,$y);
echo $status;