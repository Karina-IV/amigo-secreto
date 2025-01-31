//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Criação de um array que armazenará os nomes dos amigos
let amigos = [];
// Desenvolvimento de uma função que permita ao usuário inserir um nome no campo de texto e adicioná-lo à lista de amigos
function adicionar() {
    // Criação de captura do valor do campo de entrada para obter o texto inserido pelo usuário 
        let nomeInput = document.getElementById("campoamigo");
        let nome = nomeInput.value; 