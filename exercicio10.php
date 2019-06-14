<?php
function maioremenor ($x, $y){
    if ($x > $y){
        $msg = " o valor de X ($x) é maior que o valor de Y ($y) \n";
        return $msg;
    }
    elseif ($y > $x) {
        $msg = "o valor de Y ($y) é maior que o valor de X ($x) \n";
        return $msg;
    }
    else {
        $msg = "os valores são iguais. \n";
        return $msg;
    }
}
echo "Digite um valor para X: \n";
$x = (int) fgets (STDIN);
echo "Digite um valor para Y: \n";
$y = (int) fgets (STDIN);
$status = maioremenor ($x,$y);
echo $status;