// Array inicial de tarefas
const tarefas = ["Estudar JavaScript", "Fazer os exercícios", "Comprar café", "Revisar o código"];

function renderizarTarefas() {
  const listaEl = document.getElementById("listaTarefas");
  listaEl.innerHTML = ""; // Limpa a lista antes de renderizar

  // Laço de repetição que percorre cada tarefa do array
  tarefas.forEach(function(tarefa) {
    // 1. Crie um novo elemento 'li'
    const novoItem = document.createElement('li');
    
    // 2. Defina o textContent do 'li' com o texto da tarefa atual
    novoItem.textContent = tarefa;
    
    // 3. Adicione o 'li' dentro de 'listaEl'
    listaEl.appendChild(novoItem);
  });
}

// Executa a função ao carregar a página
renderizarTarefas();
