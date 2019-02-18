var difficultyArray = [["+1 ", "+1 ", " 0 ", " 0 ", " 0 ", "-1 ", "-1 ", "-1 ", "-2 ","-2 ", "k", "k", "l", "q", "m", "o"], 
["+1 ", " 0 ", " 0 ", "-1 ", "-1 ", "-1 ", "-2 ", "-2 ", "-3 ", "-4 ", "k", "k", "l", "q", "m", "o"], 
[" 0 ", " 0 ", " 0 ", "-1 ", "-1 ", "-2 ", "-2 ", "-3 ", "-3 ", "-4 ", "-5 ", "k", "k", "l", "q", "m", "o"], 
[" 0 ", "-1 ", "-1 ", "-2 ", "-2 ", "-3 ", "-3 ", "-4 ", "-4 ", "-5 ", "-6 ", "-8 ", "k", "k", "l", "q", "m", "o"]];
var token;
var num = 0;

function addElement(parentId, elementTag, elementId, html, elementClass) {
        // Adds an element to the document
        var p = document.getElementById(parentId);
        var newElement = document.createElement(elementTag);
        newElement.setAttribute('id', elementId);
        newElement.setAttribute('class', elementClass);
        newElement.setAttribute('style', 'background-image: url("./src/sign.png"); background-color: #efd3aa; background-size: contain; border-radius: 100%; height: 7vmin; width: 7vmin; margin-left: 0.25vw; margin-right: 0.25vw; margin-bottom: 1vw; font-size: 5vmin; white-space: pre; order: ' + num);
        newElement.innerHTML = html;
        p.appendChild(newElement);
    }

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

	var oldCointainer = document.getElementById("cointainer");
	oldCointainer.removeAttribute("style");
	oldCointainer.style.animation = 'slit-in-horizontal 1s ease-in both';
	var newCointainer = oldCointainer.cloneNode(true);
	var html = document.getElementById("token").innerHTML;
	var styleFont = document.getElementById("token").className;
	addElement('history', 'div', num, html, styleFont);
	num = num - 1;
	oldCointainer.parentNode.replaceChild(newCointainer, oldCointainer);
}