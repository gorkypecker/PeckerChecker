var results = document.getElementById("peck-results");
var submit = document.getElementById("submit");
var indexInput = document.getElementById("index");
var ringInput = document.getElementById("ring");
submit.addEventListener("click", checkPeck);
function checkPeck() {
	if(checkInputValid()) {
		  function play(){
       var audio = document.getElementById("audio");
       audio.play();
                 }
		var i = parseFloat(indexInput.value).toFixed(2);
		var r = parseFloat(ringInput.value).toFixed(2);
		var divided = i / r;
		// alert("i = " + i + " and r = " + r);
		// alert("divided is " + divided);
		var a = (-9.207 * divided + 20.577) * 0.394;
		var b = a * 1.429;
		results.innerHTML = "Your peck is <b>" + a.toFixed(2) + "in.</b> flaccid, <b>" + b.toFixed(2) + "in.</b> erect.";
		
	}
	else {
		results.innerHTML = "Not valid input.";
	}
}
function checkInputValid() {
	if (indexInput.value == null || indexInput.value == ""
	|| ringInput.value == null || ringInput.value == "") {
		return false;
	}
	else if (!(parseFloat(indexInput.value) > 0) || !(parseFloat(ringInput.value) > 0)) {
		return false;
	}
	return true;
}
