const cols=["Red","Green","Blue","rgba(133,40,169,1)","#f1f5f8"];
var but=document.getElementById("ClMe");

function getRandomNum(){
	return Math.floor(Math.random()*cols.length);
}

function ChangeBGCol(){
	var randomNo=getRandomNum();
	document.body.style.backgroundColor=cols[randomNo];
	document.getElementById("color").innerHTML=cols[randomNo];
}
