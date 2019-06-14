<?php
	
function polegada ($pol){
	$cen = $pol * 2.54;
	$msg = "$pol polegadas convertidas em centímetros é igual a: $cen centímetros. \n";
	return $msg;
}
echo "Digite quantas polegadas você quer converter em centímetros: \n";
$pol = (int) fgets (STDIN);
$status = polegada ($pol);
echo $status;