var raden = document.getElementById("raden");
var check = document.getElementById("checkKnop");
var antwoord = document.getElementById("antwoord-container");
var random = Math.floor(Math.random() * words.length);
var directword = words[random]
var woordje = directword.split("");
var row = 0;



for(i=0; i<=4; i++){
	for(t=0; t<=4; t++){
		var letterknop = document.createElement("button");

		antwoord.appendChild(letterknop);
		letterknop.id = "row" + i + "knop" + t;

	}
}

document.getElementById("row0knop0").innerHTML = woordje[0];
check.onclick = function(){
var woord = directword.split("");
var raad = raden.value.split("");


	for(i=0; i<=4; i++){
		var knop = document.getElementById("row" + row + "knop" + i);
		knop.innerHTML = raad[i];
		knop.style.backgroundColor = "red";
		if(woord[i] == raad[i]){
			knop.style.backgroundColor = "green";
			woord[i] = null;
		}
	}
	for(i=0; i<=4; i++){
		if(woord.includes(raad[i])){
			document.getElementById("row" + row + "knop" + i).style.backgroundColor = "yellow";
			var index = woord.indexOf(raad[i]);
			woord[index] = null;
		}
	}
	row++;
}