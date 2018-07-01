var choices = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
var styles = ['', 'to right', 'to bottom right', '-90deg']
var color1 = "#";
var color2 = "#";
var bg = ""


$(document).ready(getColor1)
$(document).keyup(function(event){
	if(event.keyCode == 32){
		getColor1()
	}
});

function getColor1(){
	color1 = "#"
	for (var i = 0;i<6;i++){
		var char = Math.floor(Math.random()*choices.length)
		color1 += choices[char]
	}
	getColor2()
}

function getColor2(){
	color2 = "#"
	for(var i = 0;i<6;i++){
		var char = Math.floor(Math.random()*choices.length)
		color2 += choices[char]
	}
	changeBg()
}



function changeBg(){
	bg = ""
	var style = Math.floor(Math.random() * styles.length)
	if(style >0){
	bg = 'linear-gradient('+ styles[style] + ", " + color1 + ", " + color2 + ")"
	}else {
		bg = 'linear-gradient('+ color1 + ", " + color2 + ")"
	}
	$('body').css('background',bg);
	$('#myInput').text(bg)
	console.log($('#myInput').html())
}