function processarJSON() {
  const jsonTexto = document.getElementById("jsonInput").value;
  const output = document.getElementById("output");

  try {
    // 1. Converte a string 'jsonTexto' em um Objeto/Array JavaScript
    const dados = JSON.parse(jsonTexto);

    // Limpa o output
    output.textContent = "";

    // 2. Verifica se 'dados' é um Array e exiba o nome de cada item no elemento 'output'
    if (Array.isArray(dados)) {
      dados.forEach(item => {
        // Verifica se o item possui a propriedade 'nome' antes de exibir
        if (item.nome) {
          output.textContent += `Nome do produto: ${item.nome}\n`;
        }
      });
    } else {
      // Caso seja um objeto JSON válido, mas não um array
      output.textContent = dados.nome ? `Produto: ${dados.nome}` : "JSON válido, mas não contém uma lista de produtos.";
    }
    
  } catch (erro) {
    output.textContent = "Erro: O formato inserido não é um JSON válido!";
  }
}

function exportarNovoJSON() {
  const output = document.getElementById("output");

  // Objeto JS de exemplo
  const novoProduto = {
    id: 101,
    nome: "Monitor Gamer 144Hz",
    categoria: "Eletrônicos",
    emEstoque: true
  };

  // 3. Converte o objeto 'novoProduto' para uma string JSON formatada com 2 espaços de recuo
  const jsonFormatado = JSON.stringify(novoProduto, null, 2);

  // Exibe na tela
  output.textContent = jsonFormatado;
}
