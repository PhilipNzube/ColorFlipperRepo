const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
var but=document.getElementById("ClMe");

function getRandomNum(){
	return Math.floor(Math.random()*hex.length);
}

function ChangeBGCol(){
	let ColHex="#";
	for(let i=0; i<6; i++){
	ColHex+=hex[getRandomNum()];
	}
	document.body.style.backgroundColor=hex[randomNo];
	document.getElementById("color").innerHTML=hex[randomNo];
}