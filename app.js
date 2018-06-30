// Add event listener to button that calls the getColor function

$(document).ready(getColor1)

$('#run').click(getColor1)



// Generate two random colors

// An array of all possible hex characters
var choices = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
var color1 = "#";
var color2 = "#";

function getColor1(){
	for (var i = 0;i<6;i++){
		var char = Math.floor(Math.random()*choices.length)
		color1 += choices[char]
	}
	$('#color1').css({
		background:color1
	})
	getColor2()
}


function getColor2(){
	for(var i = 0;i<6;i++){
		var char = Math.floor(Math.random()*choices.length)
		color2 += choices[char]
	}
	$('#color2').css({
		background:color2
	})
	changeBg()

}

function changeBg(){
	var bg = 'linear-gradient(' + color1 + ", " + color2 + ")"
	$('body').css({
		background:bg,
		backgroundRepeat:'no repeat'
	});
	$('#outcome').text(bg)
	color1 = "#"
	color2 = "#"
}




// Set the colors of the boxes to those random colors






// Change the background color of the page to a gradient of the two random colors