//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Criação de um array que armazenará os nomes dos amigos
let amigos = [];
// Desenvolvimento de uma função que permita ao usuário inserir um nome no campo de texto e adicioná-lo à lista de amigos
function adicionar() {
    // Criação de captura do valor do campo de entrada para obter o texto inserido pelo usuário 
        let nomeInput = document.getElementById("campoamigo");
        let nome = nomeInput.value;
      // Implementação de validação para garantir que o campo não esteja vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }   // Adicionar o nome ao array de amigos 
    amigos.push(nome);
    atualizarLista(); 
 // Limpar o campo de entrada
    nomeInput.value = "";
}