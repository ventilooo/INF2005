/**
 * @author adelallave
 */

function validate() {
	addadmin();
	var username = document.login.name.value;
	var pdw = document.login.pdw.value;
	if (username  == localStorage.getItem('user') && pdw == localStorage.getItem('pdw')) {
		alert('Connexion réussie');
	}else{
		alert('Information Invalide');
	}
}

function addadmin () {
	localStorage.setItem("user","admin");
	localStorage.setItem("pdw","INF2005");
}

function addname() {
	nom = document.getElementById("nomid").value;

	if (nom.length <= 1) {
		alert("trop court");
	} else {
		indexe = localStorage.getItem("indexe");
		if ((indexe == null)||isNaN(indexe) || (indexe < 1)) {
			indexe = 1;
		}
		//enregistrement avec simulation de clé automatique
		localStorage.setItem(indexe, nom);
		//valeur de l'indexe comme clé
		indexe++;
		localStorage.setItem("indexe", indexe);
		//chaine "indexe" comme clé
		contenu = "";
		for ( i = 1; i < indexe; i++) {
			elem = localStorage.getItem(i);
			//lire la valeur de la clé i
			contenu += "<li>" + elem + "</li>";
		}
		document.getElementById("liste").innerHTML = contenu;
	}
}
/*----suprime les donéées enregistrées --*/
function deleteall(){
	indexe = localStorage.getItem("indexe");
		if ((indexe == null) || (indexe < 1)) {
			indexe = 1;
		}
	  for(i=1;i<indexe;i++){
	  	localStorage.setItem(i,null);//effacer
	  }
	  localStorage.setItem("indexe",0);
	  document.getElementById("liste").innerHTML="";
}

function adminSession() {
	
}
