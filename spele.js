var tema = localStorage.getItem("spelestema");
document.getElementById("tema").innerHTML = tema;

tema = tema.toLowerCase()

switch(tema) {
    case "filmas":
        jaut = ["cik maksā suņa desa tuziks?", "cik maksā pelmeņi?", "pelmeni", "desa"];
        atb = ["2eur", "4eur", "5eur", "1eur", "56eur", "12eur", "12eur", "12eur", "1123eur"];
        paratb = ["2", "4", "1", "3"];
        break;
    case "speles":
        jaut = ["speles jaut 1", "speles jaut 2 "];
        atb = ["2eur", "4eur", "5eur", "1eur", "56eur", "12eur",];
        paratb = ["2", "4"];
        break;
    case "datori":
        jaut = ["datori jaut 1", "datori jaut 3"];
        atb = ["2eur", "4eur", "5eur", "1eur", "56eur", "12eur",];
        paratb = ["2", "4"];
        break;
}



var counter = 0;
var count = 0;
var paratbcounter = 0;
var score = 0;
function generjaut() {
    document.getElementById("jautajums").innerHTML = jaut[counter];
    generateatb()
    if (counter < jaut.length) {
        counter++
    } else {
        document.getElementById("jautajums").innerHTML = "";
        //alert("beigas")
        localStorage.setItem("score", score);
        counter, count  = 0;
        counter1 = 1;
        window.location.href = 'rezultati.html';
        
    }
}


generjaut()

function iesniegt() {
    generjaut()
    var form = document.getElementById("atbildes");
    atb1 = form.elements["atbilde"].value;
    paratb1 = paratb[paratbcounter];
    if (atb1 == paratb1) {
        score++
        
        console.log("pareizi")
    } else {
        console.log("nepareizi")
    }
    paratbcounter++
}



function parbauditatb() {
}


function generateatb() {
    counter1 = 1;
    for (var i = 0; i < 4; i++) {
        nos = "atb" + counter1;
        document.getElementById(nos).innerHTML = atb[count]
        count++
        counter1++
    }
}

