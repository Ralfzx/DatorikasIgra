var rez = localStorage.getItem("score");
var tema = localStorage.getItem("spelestema");
if (rez != 0) {
    rez++;
}

document.getElementById("score").innerHTML = "Tu ieguvi " + rez + "/5 punktus " + tema + " tēmā";


function atgriezties() {
    window.location.href = 'index.html';
}