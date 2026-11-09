    // Seleção dos elementos do DOM
    const campoBusca = document.getElementById('campoBusca');
    
    // 3. Associando o evento oninput ao campo de busca
    campoBusca.addEventListener('input', function() {
        // 4.a Capturando o termo buscado e convertendo para minúsculas
        const termoBuscado = campoBusca.value.toLowerCase();
        
        // 4.b Obtendo todos os elementos <li> da lista
        const itensTecnologia = document.querySelectorAll('#listaTecnologias li');

        // 4.c Percorrendo cada <li> com um laço de repetição
        itensTecnologia.forEach(function(item) {
            // Convertendo o texto do item atual para minúsculas para uma comparação justa
            const textoTecnologia = item.textContent.toLowerCase();

            // Verificando se o texto do item contém o termo buscado (.includes())
            if (textoTecnologia.includes(termoBuscado)) {
                // 4.d Mantém visível se houver correspondência
                item.style.display = 'block';
            } else {
                // 4.e Oculta o elemento se não corresponder
                item.style.display = 'none';
            }
        });
    });
