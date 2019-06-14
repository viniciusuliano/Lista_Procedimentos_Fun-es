<?php
   
   function calcm ($n1, $n2) {
       $media = ($n1+$n2)/2;
   
       if($media>6){
       $msg= "PARABÉNS! Você foi aprovado!";
       return $msg;}
       }

$media= calcm(7,7);
print "$media";