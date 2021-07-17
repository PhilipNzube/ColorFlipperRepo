const cols=["rgba(133,40,169,1)","rgba(136,40,11,1)","rgba(17,26,246,1)","rgba(190,164,160,1)","rgba(215,242,206,1)","rgba(13,11,24,1)","rgba(53,66,245,1)","rgba(122,221,80,1)",
"rgba(141,18,107,1)","rgba(195,65,3,1)","rgba(15,171,18,1)","rgba(142,193,179,1)","rgba(194,214,26,1)","rgba(231,232,22,1)","rgba(67,222,229,1)","rgba(187,35,239,1)","rgba(252,206,27,1)",
"rgba(40,97,7,1)","rgba(190,205,206,1)","rgba(112,174,98,1)","rgba(4,120,169,1)","rgba(37,42,105,1)","rgba(83,214,195,1)","rgba(66,163,29,1)","rgba(206,220,9,1)","rgba(205,98,252,1)"];
var but=document.getElementById("ClMe");

function getRandomNum(){
	return Math.floor(Math.random()*cols.length);
}

function ChangeBGCol(){
	var randomNo=getRandomNum();
	document.body.style.backgroundColor=cols[randomNo];
	document.querySelector(".color").innerHTML=cols[randomNo];
}
