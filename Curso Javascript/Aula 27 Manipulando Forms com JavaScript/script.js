// var fm = document.forms.item(0).id
// var fm = document.forms.namedItem("curso1").innerHTML


document.write(document.getElementById("curso1").elements[0].value)

var fm = document.forms[0]
var el = fm.elements

for (var i = 0; i < el.length-1; i++){
    el[i].style.backgroundColor = "#ddd"
    el[i].value = "CFBCursos"
}


// document.write(fm)