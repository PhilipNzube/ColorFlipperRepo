const cols=["Red","Green","Blue","Silver","Grey","Darkblue","Brown","Black","Orange","Purple","White","Darkgreen","Darkred","Lightsalmon","Beige","LavenderBlush","Midnightblue","Lightgrey",
"MediumSlateBlue","Cadetblue","Lightcyan","FireBrick","Mintcream","Palevioletred","Turquoise","Tan","Thistle","Limegreen","Darkgoldenrod","Lightblue","Mistyrose","Goldenrod","Whitesmoke"];
var but=document.getElementById("ClMe");

function getRandomNum(){
	return Math.floor(Math.random()*cols.length);
}

function ChangeBGCol(){
	var randomNo=getRandomNum();
	document.body.style.backgroundColor=cols[randomNo];
	document.getElementById("color").innerHTML=cols[randomNo];
}
