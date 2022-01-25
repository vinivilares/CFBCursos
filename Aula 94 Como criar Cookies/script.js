function criarCookie(nome, valor, expira) {
    let dtExipra = "expires = " + expira;
    document.cookie = nome + "=" + valor + ";" + dtExipra;
}

function lerCookie(nome) {
    let vnome = nome + "=";
    let ca = document.cookie.split(";");

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];

        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }

        if (c.indexOf(vnome) == 0) {
            return c.substring(vnome.length, c.length);
        }

        return "";
    }
}

function verificarCookie() {
    let username = lerCookie("username");

    if (username != "") {
        alert("Bem vindo novamente " + username);
    } else {
        username = prompt("Digite seu nome: ", "");
        if (username != "" && username != null) {
            criarCookie("username", username, " Tue, 01 Jan 2115 12:00:00 UTC");
        }
    }
}

verificarCookie()
