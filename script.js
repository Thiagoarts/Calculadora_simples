function pegarValores(){
    const n1 = Number(document.getElementById("num1").value);
    const n2 = Number(document.getElementById("num2").value);
    return [n1, n2];
}

function mostrarResultado(texto){
    document.getElementById("resultado").innerText = texto;
}

function somar(){
    const [n1, n2] = pegarValores();    
    mostrarResultado(`Resultado: ${n1 + n2}`);
}

function subtrair(){
    const [n1, n2] = pegarValores();    
    mostrarResultado(`Resultado: ${n1 - n2}`);
}

function multiplicar(){
    const [n1, n2] = pegarValores();    
    mostrarResultado(`Resultado: ${n1 * n2}`);
}

function dividir(){
    const [n1, n2] = pegarValores();
    if (n2 === 0) {
        mostrarResultado("Erro: Divisão por zero não é permitida.");
    } else {
        mostrarResultado(`Resultado: ${n1 / n2}`);
    }
}

 function limparCampos(){
    const limparBtn = document.getElementById("limparBtn");
    limparBtn.addEventListener("click", function() {
        document.getElementById("num1").value = "";
        document.getElementById("num2").value = "";
        mostrarResultado("");
    });
}
limparCampos();