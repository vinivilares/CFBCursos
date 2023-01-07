var num = 10

document.write(num+"<br>")

if (num == 10) {
    let num = 5
    document.write(num+"<br>") // num dentro do escopo do if
}

document.write(num+"<br>") // num dentro do escopo global