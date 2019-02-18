var difficultyArray = [["+1 ", "+1 ", "0", "0", "0", "-1 ", "-1 ", "-1 ", "-2 ","-2 ", "k", "k", "l", "q", "m", "o"], 
["+1 ", "0", "0", "-1 ", "-1 ", "-1 ", "-2 ", "-2 ", "-3 ", "-4 ", "k", "k", "l", "q", "m", "o"], 
["0", "0", "0", "-1 ", "-1 ", "-2 ", "-2 ", "-3 ", "-3 ", "-4 ", "-5 ", "k", "k", "l", "q", "m", "o"], 
["0", "-1 ", "-1 ", "-2 ", "-2 ", "-3 ", "-3 ", "-4 ", "-4 ", "-5 ", "-6 ", "-8 ", "k", "k", "l", "q", "m", "o"]];
var token;
var historyArray = [];
function generateToken()
{
	var formValue = document.getElementById("difficulty");
	var currentSet = difficultyArray[Number(formValue.options[formValue.selectedIndex].value)];

	var length = currentSet.length;
	var i = Math.floor(Math.random() * length);
	token = currentSet[i]
		if (/[k-q]/.test(token) == true) {
			document.getElementById("token").innerHTML = token;
			document.getElementById("token").className = token;
		} else {
			document.getElementById("token").innerHTML = token;
			document.getElementById("token").className = "text";
		}
}