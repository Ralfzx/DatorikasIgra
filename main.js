var tema;
function izveleties() {
    var izvele = document.getElementById("tema");
    var tema = izvele.value;
    localStorage.setItem("spelestema", tema);
}

function sakt() {
    izveleties()
    window.location.href = 'pumabota.html';
    
}



