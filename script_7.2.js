function verificarAcesso() {
  const input = document.getElementById("inputEntrada");
  const resultado = document.getElementById("resultado");
  
  // Obter o valor digitado e converter para Número
  const idade = Number(input.value);

  // Regra: Se idade for maior ou igual a 18:
  if (idade >= 18) {
    // Escreva o código para acesso permitido
    resultado.textContent = "Acesso Permitido!";
    resultado.classList.add("permitido");
    resultado.classList.remove("negado");
  } else {
    // Escreva o código para acesso negado
    resultado.textContent = "Acesso Negado: Apenas para maiores de 18 anos.";
    resultado.classList.add("negado");
    resultado.classList.remove("permitido");
  }
}
