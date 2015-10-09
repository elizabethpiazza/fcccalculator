var cmdString = ""
var cmdline = document.getElementById("command");
cmdline.innerHTML = cmdString;

var numButtons = document.getElementsByClassName('btn-num');

var opButtons = document.getElementsByClassName('btn-op');

function appendToCommand() {
	cmdString = cmdString.concat(this.innerHTML);
	console.log(cmdString);
}


for (var i = 0; i < numButtons.length; i++){
	numButtons[i].addEventListener('click', appendToCommand);
}