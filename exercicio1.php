<?php

function transcelsius($tf)

{  
    $c= ($tf-32)*(5/9); //conversão da temperatura
    return $c;

}
 $c= transcelsius(90);
print "$c";