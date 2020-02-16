<?php
$T = array();
 
$q['question'] = "quel est l\'intrus ?";
$q['choix'] = array('nez', 'yeux', 'oneilles' );
$q['reponse'] = 0;
$T[]=$q;

$q['question'] = "Quel est le fruit ?";
$q['choix'] = array('patate', 'figue', 'carotte');
$q['reponse'] = 1;
$T[]=$q;

$q['question'] = "Quel musicien ne jouait pas de trompette ?";
$q['choix'] = array( 'Miles Davis', 'Dave Brubeck', 'Boris Vian');
$q['reponse'] = 1;
$T[]=$q;


$E = json_encode($T);
echo $E;

?>