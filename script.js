document.getElementById("juntaNome").addEventListener("click",juntarNomes);
document.getElementById("divButton").addEventListener("click",divisao);

function juntarNomes(){
    let n1 = document.getElementById("nome").value;
    let n2 = document.getElementById("sobrenome").value;

    console.log(n1+ ' '+ n2);
    document.getElementById("nomeCompleto").innerHTML = n1 + n2;
}
function salva(){

    let nomePes = document.getElementById("nome").value;
    let sobrenomePes = document.getElementById("sobrenome").value;

    console.log(nomePes);
    console.log(sobrenomePes);
}

function compara(){
    console.log("nada");
    if ( nomePes == "lala"){
        document.getElementById("funcionou").innerHTML = "Sucesso";
    }
}

function divisao()
{
    let n1 = document.getElementById("priNum").value;

    let n2 = document.getElementById("segNum").value;
    document.getElementById("resultadoDivisao").innerHTML = n1 / n2;
    
}