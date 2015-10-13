var cmdline = document.getElementById("command");

var expression = [];

var memNum = null;

var result = 0;

var exButtons = document.getElementsByClassName('btn-ex');

var opButtons = document.getElementsByClassName('btn-op');

function appendToCommand() {
	expression.push(this.innerHTML);
	cmdline.innerHTML = expression.join('');
}

function evaluateExpression(expression) {
	alert('ran');
	if (expression != null) {
		alert('iniff');
		var splitter = /(\+|\-|\/|\*)/g;
		console.log(expression.join('').split(splitter));
	}
}

function operation() {
	switch (this.innerHTML) {
		case '<small>MC</small>':
			cmdline.innerHTML = expression = [];
			break;
		case '<small>MR</small>':
			if (!isNaN(memNum)) {
				expression.push(memNum);
				cmdline.innerHTML = expression.join('');
			} else {
				cmdline.innerHTML = "ERR";
			}
			break;
		case '<small>MS</small>':
			if (!isNaN(expression.join(''))) {
				memNum = parseInt(expression.join(''));
				cmdline.innerHTML = expression = [];
				console.log(memNum);
			} else {
				cmdline.innerHTML = "ERR";
			}
			break;
		case '<small>M+</small>':
			console.log(expression.join(''));
			if (!isNaN(memNum) && !isNaN(expression.join(''))) {
				cmdline.innerHTML = expression = [];
				memNum = memNum + parseInt(expression.join(''));
			} else {
				cmdline.innerHTML = "ERR";
			}
			break;
		case '<small>M-</small>':
			if (!isNaN(memNum) && !isNaN(expression.join(''))) {
				cmdline.innerHTML = expression = []
				memNum = memNum - parseInt(expression.join(''));
			} else {
				cmdline.innerHTML = "ERR";
			}
			break;
		case '%':
			if (!isNaN(expression.join(''))) {
				cmdline.innerHTML = parseInt(expression.join(''))/100;
			} else {
				cmdline.innerHTML = "ERR";
			}
			break;
		case '<small>1/<em>x</em></small>':
			if (!isNaN(expression.join(''))) {
				cmdline.innerHTML = 1/parseInt(expression.join(''));
			} else {
				cmdline.innerHTML = "ERR";
			}
			break;
		case '<br>=<br>&nbsp;':
			alert('clicked');
			evaluateExpression(expression);
			break;
		default:
	}
}

for (var i = 0; i < exButtons.length; i++){
	exButtons[i].addEventListener('click', appendToCommand);
}

for (var i = 0; i < opButtons.length; i++){
	opButtons[i].addEventListener('click', operation);
}