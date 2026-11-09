// Base de dados em memória
const personagens = [
  { id: 1, nome: "Fred Flintstone", idade: 41, foto: "https://wikimedia.org" },
  { id: 2, nome: "Bob Pai", idade: 55, foto: "https://wikimedia.org" },
  { id: 3, nome: "Rabugento", idade: 19, foto: "https://wikimedia.org" },
  { id: 4, nome: "Penélope Charmosa", idade: 25, foto: "https://wikimedia.org" },
  { id: 5, nome: "Zé Colméia", idade: 36, foto: "https://wikimedia.org" },
  { id: 6, nome: "Dom Pixote", idade: 32, foto: "https://wikimedia.org" },
  { id: 7, nome: "Manda-Chuva", idade: 28, foto: "https://wikimedia.org" },
  { id: 8, nome: "Scooby-Doo", idade: 16, foto: "https://wikimedia.org" }
];

// Estado da aplicação
let candidatoSelecionado = null;
let podeSerVotado = false;

// Inicializa a listbox de candidatos com segurança
function carregarSelectPersonagens() {
  const select = document.getElementById("selectPersonagem");
  if (!select) return; // Proteção caso o select não exista no HTML
  
  // Limpa opções antigas mantendo apenas a primeira padrão se houver
  select.innerHTML = '<option value="">-- Escolha um personagem --</option>';

  personagens.forEach(personagem => {
    const opcao = document.createElement("option");
    opcao.value = personagem.id;
    opcao.textContent = personagem.nome;
    select.appendChild(opcao);
  });
}

function selecionarPersonagem() {
  const select = document.getElementById("selectPersonagem");
  if (!select) return;

  const idEscolhido = Number(select.value);
  candidatoSelecionado = personagens.find(p => p.id === idEscolhido);

  const painel = document.getElementById("painelDetalhes");

  if (candidatoSelecionado) {
    // Validações individuais para evitar quebras caso um dos elementos falte no HTML
    const foto = document.getElementById("fotoCandidato");
    const nome = document.getElementById("nomeCandidato");
    const idade = document.getElementById("idadeCandidato");

    if (foto) foto.src = candidatoSelecionado.foto;
    if (nome) nome.textContent = candidatoSelecionado.nome;
    if (idade) idade.textContent = candidatoSelecionado.idade;

    if (painel) painel.style.display = "block";
  } else {
    if (painel) painel.style.display = "none";
  }

  validarElegibilidade();
}

function validarElegibilidade() {
  const selectCargo = document.getElementById("selectCargo");
  const statusEl = document.getElementById("mensagemStatus");
  const btnVotar = document.getElementById("btnVotar");

  if (!selectCargo) return;

  const cargo = selectCargo.value;
  podeSerVotado = false;
  if (btnVotar) btnVotar.disabled = true;

  if (!candidatoSelecionado || !cargo) {
    if (statusEl) statusEl.style.display = "none";
    return;
  }

  const idade = candidatoSelecionado.idade;
  let idadeMinima = 0;

  switch (cargo) {
    case "Presidente":
    case "Senador(a)":
      idadeMinima = 35;
      break;
    case "Deputado(a) Federal":
    case "Deputado(a) Estadual":
      idadeMinima = 21;
      break;
    default:
      idadeMinima = 0;
  }

  if (statusEl) {
    if (idade >= idadeMinima) {
      podeSerVotado = true;
      statusEl.textContent = `Elegível para o cargo de ${cargo}!`;
      statusEl.className = "status elegivel";
      if (btnVotar) btnVotar.disabled = false;
    } else {
      podeSerVotado = false;
      statusEl.textContent = `Inelegível! Idade mínima necessária: ${idadeMinima} anos.`;
      statusEl.className = "status inelegivel";
    }
    statusEl.style.display = "block";
  }
}

function registrarVoto() {
  if (!podeSerVotado || !candidatoSelecionado) return;

  const selectCargo = document.getElementById("selectCargo");
  const jsonResult = document.getElementById("jsonResult");
  if (!selectCargo || !jsonResult) return;

  const cargo = selectCargo.value;

  const comprovanteVoto = {
    dataHora: new Date().toISOString(),
    candidato: candidatoSelecionado.nome,
    cargo: cargo,
    protocolo: Math.floor(Math.random() * 1000000)
  };

  const jsonVoto = JSON.stringify(comprovanteVoto, null, 2);
  jsonResult.textContent = jsonVoto;
}

// Inicialização segura dos ouvintes de eventos
document.addEventListener("DOMContentLoaded", () => {
  carregarSelectPersonagens();
  
  const selectItem = document.getElementById("selectPersonagem");
  if (selectItem) {
    selectItem.addEventListener("change", selecionarPersonagem);
  }
  
  const selectCargo = document.getElementById("selectCargo");
  if (selectCargo) {
    selectCargo.addEventListener("change", validarElegibilidade);
  }

  const btnVotar = document.getElementById("btnVotar");
  if (btnVotar) {
    btnVotar.addEventListener("click", registrarVoto);
  }
});
