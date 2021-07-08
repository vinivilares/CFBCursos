var dt = new Date()

var ndt = new Date()

ndt.setDate(dt.getDate()) // Ano, Mes, Dia, Hora, Min, Seg, Mil

var diasem = ndt.getDay()
var dia = ndt.getDate()
var mes = ndt.getMonth()
var ano = ndt.getFullYear()

var horas = ndt.getHours()
var minutos = ndt.getMinutes()
var segundos = ndt.getSeconds()

var meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro")
var semanas = new Array("Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado")

document.write(semanas[diasem], ", ", dia, " de ", meses[mes], " de ", ano,"<br>")
document.write(horas,':', minutos, ':', segundos)