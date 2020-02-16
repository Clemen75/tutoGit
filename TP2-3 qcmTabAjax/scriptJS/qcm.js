/*Contrairement à la version du qcm simple, avec une seule question,
un tableau de questions est défini au format JSON.
- La fonction question() est modifiée pour tirer au sort une des questions du tableau
- La fonction reponse() est modifiée avec désormais un paramètre supplémentaire, la réponse attendue
- 2 fonctions supplémentaires permettent de produire le code HTML à partir d'informations issu du tableau
- La fonction() init est éliminée car on peut mettre son contenu dans onload()
*/

var timer;  //variable référençant un objet temporisateur
var  temps_imparti =  10000;  //temps imparti pour donner la réponse (10s)
var q; //référence au bloc div d'affichage (<div "id=QUEST"></div>)


var repOK = "Bonne r\351ponse !";
var repKO = "'D\351sol\351\n Mauvaise R\351ponse'";
var repNO = "d\351sol\351";

var invite = "Vous avez une minute pour r\351pondre";
	invite += " apr\350s avoir d\351marr\351 le test <br/>";
	invite += "<a href='' onclick='question(temps_imparti); return false'>d\351marrer</a>";

//tableau au format JSON représentant un ensemble de questions
//avec pour chaque question, 3 attributs : question (intitulé de la question), différents choix indicés, index de la réponse
var tabObject; 



//****************************************************************//
//A FAIRE : à la place de la déclaration de la fonction init() et de <body onload="init()">, 
//  récriture de la fonction onload() de window
//	- pour initialisation de q comme référence de la div QUEST
//  - pour initialiser tabOject, à partir d'une requète AJAX vers qcm.php
//	- et invoquer lancer() pour lancer le jeu 


//****************************************************************//
function lancer() {
	q.innerHTML = invite;	//affichage de l'invite
	}


function abandon () {	//message d'alerte repNO indiquant l'abandon
	alert(repNO);
	lancer();
}

function question (temps_imparti)  {
	var numQ=Math.floor(Math.random()*tabObject.length); //indice de la question dans le tableau tabObject, tiré aléatoirement 
	q.innerHTML = htmlQuestion(numQ);//affichage de la question dans le bloc QUEST
	timer= setTimeout("abandon()", temps_imparti);  //définit "timer" pour lancer abandon() après le temps imparti	
}

//****************************************************************//
//Fonctions à développer

function reponse(rep, repGood)  {
	clearTimeout(timer); 	//stoppe le timer
	// A FAIRE : Test de l'indice de la réponse cliquée (rep) avec celui de la bonne réponse (repGood)
	// A FAIRE : Affichage d'un message d'alerte repKO ou repOK, suivant la réponse cliquée
	lancer();
}

function htmlQuestion(numQ) {
	var quest;
	//	A FAIRE : initialiser quest avec une chaine de caractères html, 
	//	   correspondant aux différents choix de la question d'indice numQ.
	// 	   Afficher les choix possibles sous forme d'un liste à puces <ul>.
	// 	   S'aider de la fonction htmlLiInput() - à écrire -, servant à l'affichage d'un des éléments de liste.
	return quest;
}

function htmlLiInput(numQ,val,texte) {
	var prop; 
	// A FAIRE : initialiser prop avec une chaine de caractères html, 
		// correspondant à un des choix affiché sous forme d'un élément de liste <li>	
		// Cet élément contient un champ de type bouton radio,	dont la valeur est l'indice de la réponse à afficher (val),
		// suivi du texte correspondant à la réponse (texte). 
		// La fonction réponse() devra être lancée si le bouton est coché par l'utilisateur.
	return prop;
}




