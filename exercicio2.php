<?php
 
 function hipot ($catA,$catB)
{ 
    $hipot= sqrt($catA**2 + $catB**2 );
   
    return $hipot;

}

$hipot= hipot(4,3);
print "$hipot";