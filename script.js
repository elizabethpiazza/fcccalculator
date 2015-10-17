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

function doIfPossible(test, func) {
	if (test) {
		func(cmdline.innerHTML);
	} else {
		cmdline.innerHTML = "ERR";
		expression = [];
	}
}

function operation() {
	switch (this.innerHTML) {
		case '<small>MC</small>':
			memNum = null;
			cmdline.innerHTML = expression = [];
			break;
		case '<small>MR</small>':
			doIfPossible(!isNaN(memNum) && memNum != null, function(){
				cmdline.innerHTML = 'M' + memNum;
			});
			break;
		case '<small>MS</small>':
			doIfPossible(!isNaN(expression.join('')), function(){
					memNum = parseFloat(expression.join(''));
					cmdline.innerHTML = expression = [];
			});
			break;
		case '<small>M+</small>':
			doIfPossible(!isNaN(memNum) && !isNaN(expression.join('')), function(){
					memNum = memNum + parseFloat(expression.join(''));
					cmdline.innerHTML = expression = [];
			});
			break;
		case '<small>M-</small>':
			doIfPossible(!isNaN(memNum) && !isNaN(expression.join('')), function(){
					memNum = memNum - parseFloat(expression.join(''));
					cmdline.innerHTML = expression = [];
			});
			break;
		case '%':
			doIfPossible(!isNaN(expression.join('')), function(){
					cmdline.innerHTML = expression = [parseFloat(expression.join(''))/100];
			});
			break;
		case '<small>1/<em>x</em></small>':
			doIfPossible(!isNaN(expression.join('')), function(){
					cmdline.innerHTML = expression = [1/parseFloat(expression.join(''))];
			});
			break;
		case '<br>=<br>&nbsp;':
		try {
			cmdline.innerHTML = eval(expression.join(''));
				expression = [];
			} catch (e) {
				cmdline.innerHTML = "ERR";
				expression = [];
			}	
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