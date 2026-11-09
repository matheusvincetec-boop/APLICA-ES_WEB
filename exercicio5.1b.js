        // 5 Arrays paralelos com informações da Wikipédia
        const siglas    = ["SINTOMAS", "MEDICAÇÃO", "COMPORTAMENTO", "SÍMBOLO", "INHAE"];
        const sintomas  = ["Hiperatividade", "Antidepressivos", "Repetição de ações", "Inquietação", "Dificuldade de concentração"];
        const medicação = ["Methylphenidate", "Sertralina", "Clonazepam", "Sertralina", "Símbolo de Identidade"];
        const comportamento = ["Hiperatividade", "Antidepressivos", "Repetição de ações", "Dificuldade de concentração","Falta de Ar"];
        
        // Mapeamento dos elementos da DOM
        const selectNeurodivergentes = document.getElementById("selectNeurodivergentes");
        const btnSintomas = document.getElementById("btnSintomas");
        const divMedicacao = document.getElementById("divMedicacao");
        const divComportamento = document.getElementById("divComportamento");
            

        // EventListener para o evento onclick do botão
        btnSintomas.addEventListener("click", function() {
            // Pega o índice selecionado na listbox (0 a 3)
            const index = selectNeurodivergentes.value;

            // Se houver seleção válida
            if (index !== "") {
                // Preenche as divs usando o mesmo índice nos arrays paralelos
                divSintomas.textContent = sintomas[index];
                divMedicacao.textContent = medicação[index];
                divComportamento.textContent = comportamento[index];
                
                // Exibe a imagem da bandeira no quarto quadro
                divBandeira.innerHTML = `<img src="${simbolos[index]}" alt="Símbolo de ${siglas[index]}">`;
            }
        });