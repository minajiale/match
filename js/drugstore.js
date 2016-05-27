window.onload = function(){
	waterfall('main','box');//父元素的ID"main"和要取得盒子的class box作为参数传过去
	//加载函数
	//模拟后台数据   dataInt 是一个对象 其中data属性 data为一个数组
	var dataInt = {"data":[{"src":'1.jpg'},{"src":'1.jpg'},{"src":'1.jpg'},{"src":'1.jpg'}]}
	window.onscroll = function(){
		if (checkScrollSlide) {//checkScrollSlide函数结果为真则调用函数
			var oParent = document.getElementById('main');
			//将数据块渲染到页面的尾部
			for(var i = 0;i<dataInt.data.length;i++){
				var obox = document.createElement('div')
				obox.className = "box";
				oParent.appendChild('obox');
				var oPic = document.createElement('div');
				oPic.className = "pic";
				obox.appendChild('oPic');
				var oImg = document.createElement('img');
				oImg.src="./img/"+dataInt.data[i].src;
				oPic.appendChild('oImg');
			}
			waterfall('main','box');
		};
	} 
}

function waterfall(parent,box){
	//将main下的所有class为box的元素取出
	var oParent = document.getElementById(parent);//将父元素取出
	var oboxs= getByClass(oParent,box);
	//计算整个页面显示的列数（页面宽/box的宽）
	var oboxw = oboxs[0].offsetWidth;
	var cols = Math.floor(document.documentElement.clientWidth/oboxsw)// 获取页面宽度
	oParent.style.cssText = 'width:' + oboxsw*cols +'px; margin:0 auto;'
	//计算一行图片中高度最矮的一个
	var hArr = [];//存放每一列高度的数组
	for(var i = 0;i<oboxs.length;i++){
		if(i<cols){
		hArr.push(oboxs[i].offsetHeight);
	}else{
		var minH = Math.min.apply(null,hArr);//Math.min只能求一组数据而不是一个数组。applyde 方法改变this的指向。
		var index = getMinHIndex(hArr,minH)//求最小值在数组中的索引。
		oboxs[i].style.position = 'absolute';
		oboxs[i].style.top = minH+'px';
		oboxs[i].style.left = oboxs[index].offsetleft + 'px';
		hArr[index] +=oboxs[i].offsetHeight;
	}

	}
}

//将main下的所有元素取出，然后遍历每个元素判断他的classname若为box加到数组的后面。
function getByClass(parent,classNm){
	var boxArr = new Array(); //用来存储所有class为box的元素
	oElements = parent.getElementsByTagName('*');  //取出父元素下的所有元素。
	for( var i=0;i <= oElements.length;i++){
		if(oElements[i].className == classNm){
			boxArr.push(oElements[i]);
		}
	}
	return boxArr; //返回数组boxArr 到调用处用oboxs接收。

}
function getMinHIndex(arr,val){
	for(var i in arr){
		if (arr[i] == val) {
			return i;
		};
	}
}
//判断是否加载。
function  checkScrollSlide(){
	var oParent = document.getElementById('main');
	var oboxs = getByClass(oParent,'box');
	var lastBoxH = oboxs[oboxs.length-1].offsetTop + Math.floor(oboxs[oboxs.length-1].offsetHeight/2);
	//滚走的距离兼容问题 标准模式html元素  混杂模式通过body元素监测
	var scrollheight = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.body.clientHeight || document.documentElement.clientHeight;
	return (lastBoxH<scrollTop+height)?true :false;   //可以不用if else
}