let btn = document.getElementById("btnDestaque").addEventListener("click", () => {
    let num = document.getElementById("fnum").value;
    let p = document.getElementsByTagName("p");

    for (let i = 0; i < p.length; i++) {
        p[i].removeAttribute("style");
    }

    let at = document.createAttribute("style");

    at.value = "color: #f00;";

    p[num-1].setAttributeNode(at);
});