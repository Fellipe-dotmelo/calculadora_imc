const calcular = document.getElementById("calcular");

function imc() {
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");

  if (nome !== "" && altura !== "" && peso !== "") {
    const valorIMC = (peso / (altura * altura)).toFixed(1);

    let classificacao = "";
    if (valorIMC < 18.5) {
        classificacao = "Abaixo do peso.";
    } else if (valorIMC < 24.9) {
        classificacao = "Peso normal.";
    } else if(valorIMC < 29.9) {
        classificacao = "Sobrepeso.";
    } else if(valorIMC < 34.9) {
        classificacao = "Obesidade grau I.";
    } else if(valorIMC < 39.9) {
        classificacao = "Obesidade grau II.";
    } else if(valorIMC > 40) {
        classificacao = "Obesidade grau III.";
  }


    resultado.textContent = `Olá ${nome}, sua classificação é: ${classificacao}`;
  } else {
    resultado.textContent = "Preencha todos os campos.";
  }
}

calcular.addEventListener("click", imc);
