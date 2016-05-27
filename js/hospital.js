window.onload = function(){
	showicon();
}

function showicon(){
	var Diva = document.getElementById("uli").getElementsByTagName("a");
	for(var i=0;i<Diva.length;i++){
		Diva[i].style.backgroundImage = "url(./img/m" + i +".gif)";
		/*document.body.style.backgroundImage="url(./img/m1.gif)";*/
	}
}