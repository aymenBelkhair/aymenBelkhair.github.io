<?php

$str="Plage rose marae, Kasbah, Imarat, Belkhir, Autre secteur, Al fath, Ain Laatris, Ain Errouz, Ain el Hayat";
$arr=explode(',',$str);
$i=1;
foreach($arr as $element){
    echo "{\"id\":\"$i\" ,\"secteurName\":\"".trim($element)."\"},";
    $i++;
}

?>