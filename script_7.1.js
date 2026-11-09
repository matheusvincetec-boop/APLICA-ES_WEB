function atualizarPerfil() {
  // 1. Declare três variáveis com suas informações (nome, idade e biografia)
  var nome = "Matheus Vince";
  var idade = 41; // Substitua pela sua idade
  var bio = "Estudante de ADS";

  // 2. Atualize os elementos do HTML utilizando o DOM
  document.getElementById("nome").textContent = nome;
  document.getElementById("idade").textContent = "Idade: " + idade;
  document.getElementById("biografia").textContent = bio;
}
