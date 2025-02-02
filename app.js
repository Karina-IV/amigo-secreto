// Criação de um array que armazenará os nomes dos amigos
let amigos = [];

// Desenvolvimento de uma função que permita ao usuário inserir um nome no campo de texto e adicioná-lo à lista de amigos
function adicionarAmigo() {
// Criação de captura do valor do campo de entrada para obter o texto inserido pelo usuário 
    let nomeInput = document.getElementById("amigo");
    let nome = nomeInput.value; 

// Implementação de validação para garantir que o campo não esteja vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }
// Evitar nomes duplicados
    if (amigos.includes(nome)) {
        alert("Esse nome já está na lista.");
        return;
    }
// Adicionar o nome ao array de amigos 
    amigos.push(nome);
    atualizarLista(); 
 // Limpar o campo de entrada
    nomeInput.value = "";
}
// Implementação de uma função para atualizar a lista de amigos
function atualizarLista() {
// Obter o elemento da lista 
    let lista = document.getElementById("listaAmigos");
// Limpar a lista existente
    lista.innerHTML = "";
// Percorrer o array de amigos e adicionar cada nome como elemento
    amigos.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}
// Implementação de uma função para selecionar aleatoriamente um amigo
function sortearAmigo() {
// Verificação se o array de amigos não está vazio
    if (amigos.length === 0) {
        alert('A lista de amigos está vazia. Adicione amigos antes de sortear.');
        return;
    }
// Geração de um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
// Obtenção do nome do amigo sorteado
    let amigoSorteado = amigos[indiceAleatorio];
// Exibição de amigo sorteado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}