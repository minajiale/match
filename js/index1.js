window.onload = function(){
	var smallcircle = document.getElementById("back").getElementsByTagName("img");
	for(var i=0;i<smallcircle.length;i++){
		smallcircle [i].onMouseover = change(smallcircle,i);
		smallcircle [i].onMouseout = old(smallcircle,i);
	}

}

function change(smallcircle,i){
smallcircle [i].src= "./img/icon.gif";
}

function old(smallcircle,i){
smallcircle [i].src= "./img/index0.gif" ;
}