window.onload = function(){
	var main = document.getElementById('main');
	var list = document.getElementById('picture-list');
	var buttons = document.getElementById('button') . getElementsByTagName('span');/*注意那个小点*//*这是一个类数组有4个元素*/
	var next = document.getElementById('next');
	var prev = document.getElementById('prev');
	var index = 1;
	var timer;

	function showButton(){
		for (var i = 0; i < buttons.length; i++) {
			if (buttons[i].className == 'on') {
				buttons[i].className = "";
				break;
			}
		}
		buttons[index - 1 ].className = 'on';
	}



	function animate(offset){  /*offset是每次点击的偏移量*/
		var newleft = parseInt(list.style.left)+ offset;
		var time = 1000;//位移总的时间；
		var interval = 100;//位移间隔时间 单位是毫秒
		var speed = offset/(time/interval);//offset是总的位移量 speed是每次位移的长度。

		function go(){
			if((speed<0 && newleft < parseInt(list.style.left)) || (speed > 0 && newleft > parseInt(list.style.left))){
				list.style.left = parseInt(list.style.left)  + speed + "px";
				setTimeout(go,interval);
			}
			else{
				list.style.left = newleft  +  'px'; //把left值变成新的值
		if (newleft > -300) {  //判断是否移动到辅助图上；
			list.style.left = -1200 + 'px';
		}
		if (newleft < -1200) {
			list.style.left  = -300 + 'px';
		}
			}

		}
		go();
	}



	function play(){
		timer = setInterval( function(){
			next.onclick();  //定时器每隔三秒钟点击一下右箭头
		},3000);
	}
	function stop(){
		clearInterval(timer);
	}

	next.onclick = function(){
		if (index == 1) {
			index = 5;
		};
		index-= 1;
		showButton();
		animate(300);
	}
	prev.onclick = function(){
		if (index == 4) {
			index= 0;
		}
		index+= 1;
		showButton();
		animate(-300);
	}
	for (var i = 0; i <=buttons.length; i++) {
		if (this.className == "on") {
			return;  //如果当前的class=on （点的是当前正处于的按钮）退出循环
		}
		else{
		buttons[i].onclick = function(){     //给每个按钮都添加一个点击事件
			var mydex = parseInt(this.getAttribute("index"));
			offset = (mydex - index) * (-300) ;   //主要是算offset的值
			animate(offset);
			index = mydex;
			showButton();
			}
		}
	}


	main.onmouseover = stop;//只需要写函数名就可以 不用括号
	main.onmouseout = play;
	play();
}