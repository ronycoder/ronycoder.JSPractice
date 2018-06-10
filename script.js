var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button");
	btn.addEventListener("click", bindDelItem);
	btn.appendChild(document.createTextNode("Delete"));
	li.appendChild(document.createTextNode(input.value + " "));
	li.appendChild(btn);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

function toggleDone() {
	this.classList.toggle("done");
}

var lis = document.querySelectorAll("li");

for(var i=0;i<lis.length;i++) {
	lis[i].addEventListener("click", function() {
		toggleDone.bind(this)();
	});
}

var listButtons = document.getElementsByClassName("lbtn");

function deleteListElement() {
	var delItem = this.parentNode.remove();
}


function bindDelItem() {
	deleteListElement.bind(this)();
}

for(var i = 0; i<listButtons.length; i++) {
	listButtons[i].addEventListener("click", bindDelItem);
}
