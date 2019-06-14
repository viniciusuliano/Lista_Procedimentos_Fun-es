<?php
echo   "=====MESES=====\n";
echo "|1----> Janeiro   |\n";
echo "|2----> Fevereiro |\n";
echo "|3----> Março     |\n";
echo "|4----> Abril     |\n";
echo "|5----> Maio      |\n";
echo "|6----> Junho     |\n";
echo "|7----> Julho     |\n";
echo "|8----> Agosto    |\n";
echo "|9----> Setembro  |\n";
echo "|10----> Outubro  |\n";
echo "|11----> Novembro |\n";
echo "|12----> Dezembro |\n";
echo " ================== \n";
function meses ($mes){
    $meses = array ('Não existe mês 0','Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro');
    $msg = "Mês $mes corresponde a: " . $meses[$mes] . "\n";
    return $msg; 
}
echo "Digite um número correspondente a um mês : \n";
$mes = (int) fgets (STDIN);
$status = meses($mes);
echo $status;