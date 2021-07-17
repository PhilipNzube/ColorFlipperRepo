const hex=["#f1f5f8","#000080","#00008B","#7FFFD4","#E6E6FA","#FFE4B5","#FF0000","#9ACD32","9400D3","#9932CC","#008000","#006400","#0000FF","#FFFFF0","#FFFFFF","#DCDCDC","#C0C0C0",
"#C71585","#CD5C5C","#CD853F","#D2691E","#D2B48C","#D3D3D3","#D8BFD8","#DA70D6","#AFEEEE","#ADD8E6","#A9A9A9","8FBC8F","#A52A2A","#A0522D","#9ACD32","#EEE8AA","#800000","#800080","#808000"];
var but=document.getElementById("ClMe");

function getRandomNum(){
	return Math.floor(Math.random()*hex.length);
}

function ChangeBGCol(){
	var randomNo=getRandomNum();
	document.body.style.backgroundColor=hex[randomNo];
	document.querySelector(".color").innerHTML=hex[randomNo];
}
