var num

num = 0
while (num < 10) {
    document.write("CFB Cursos<br>")
    num++
}

document.write("<hr>")

num = 10
while (num--) {
    document.write("CFB Cursos<br>")
}

document.write("<hr>")

num = true
cont = 0
while (num) {
    document.write("CFB Cursos<br>")
    cont++
    if (cont > 9) {
        num = false
    }
}