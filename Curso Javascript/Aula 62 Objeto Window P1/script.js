let minhaJanela1, minhaJanela2;

function abreJanela() {
    minhaJanela1 = window.open("tmp.html", "_blank", "width =300, height=300, top=300, left=300");
    minhaJanela2 = window.open("tmp.html", "_blank", "width =300, height=300, top=350, left=350");
}

function fechaJanela() {
    minhaJanela1.close();
    minhaJanela2.close();
}

