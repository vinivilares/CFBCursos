var tabela = document.getElementById("tbnotas") 
        var nota

        for(i = 1;i<tabela.rows.length;i++){ //for para percorrer a tabela 
            nota = parseFloat(tabela.rows[i].cells[1].innerHTML)+ parseFloat(tabela.rows[i].cells[2].innerHTML)//somando nota 1 com nota 2
            tabela.rows[i].cells[3].innerHTML = nota // colocando o resultado da soma
            
        }

        //colocando a nota no array
        var n = []
        n[0]= document.getElementById("n1")
        n[1]= document.getElementById("n2")
        n[2]= document.getElementById("n3")
        n[3]= document.getElementById("n4")

        //for para colocar a nota em vermelho ou azul
        for(i =0; i<4;i++){
            if( n[i]. innerHTML < 70){
                n[i].style.color = "#f00"
            } else {
                n[i].style.color = "#00f"
            }
        }