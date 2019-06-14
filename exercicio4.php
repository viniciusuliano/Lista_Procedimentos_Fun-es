<?php
function pesoidealH ($altura){
$pesoidealH = (72.7*$altura) - 58;
$msg = "o peso ideal para sua altura ( " . $altura . " ) é " . $pesoidealH . " kg. \n";
return $msg;
}
function pesoidealM ($altura){
    $pesoidealM = (62.1*$altura) - 44.7;
    $msg = "o peso ideal para sua altura ( " . $altura . " ) é " . $pesoidealM . " kg. \n";
    
    return $msg;
    }
        echo "Digite seu sexo [1-Feminino | 2-Masculino] \n";
        $sexo = fgets (STDIN);
            if ($sexo == 1){
            echo "Digite sua altura[ex.: 1.60]: \n";
            $altura = (float) fgets (STDIN);
            $status = pesoidealM ($altura);
            echo $status;
    }
            elseif ($sexo == 2) {
            echo "Digite sua altura[ex.: 1.60]: \n";
            $altura = (float) fgets (STDIN);
            $status = pesoidealH ($altura);
            echo $status;
    }

