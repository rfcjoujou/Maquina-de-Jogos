function verificar() {
	var n1 = document.getElementById("n1").innerHTML;
	var n2 = document.getElementById("n2").value;
	if (n1 == n2) {
		alert("VOC� ACERTOU O N�MERO!");
	}else {
		alert("VOC� ERROU O N�MERO");
	}

	reseta();
}
function reseta() {
	document.getElementById("n2").value = "" ;

	var r = Math.floor(Math.random() * 100);
	document.getElementById("n1").innerHTML = r;
}