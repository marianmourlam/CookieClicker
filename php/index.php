<?php


$handle = fopen('upgrade.csv', "r");

$reponse = fgets($handle);

while ($reponse !== false) {
    echo $reponse;
    $reponse = fgets($handle);
}

    //while( $i < 5 )
    //{
     //   echo $i . '<br />'; // affichage
   //     $i++; // incrémentation
  //  }
//