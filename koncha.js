var img = document.getElementById('penic');
var text = document.getElementById('count');
var toptext = document.getElementById('toptext');
var raz = 30;

img.onmouseover = function () {
	raz--;
	text.innerHTML = "Осталось - " + raz + ".";

	if (raz == 0) {
		img.src = "pos.png";
		toptext.innerHTML = "Молодец!";
	}
	if (raz <= 0) {
		raz = 1;
	}
}