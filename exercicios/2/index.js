/* Objetivos:

1. Armazene um botão de salvar em uma variável
2. Capture o valor do campo de digitação
3. Evite o comportamento padrão de envio do formulário
5. Construa dinamicamente cada item da lista com os valores inseridos pelo usuário */

// Selecionar elementos do HTML: campo de input (input-item), lista de compras (lista-de-compras) e botão (adicionar-item)

const inputItem = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item")
let contador = 0; // ele conta os itens da lista, começando pelo 

// 1. Adicionar um ouvinte de eventos ao botão salvar, para que quando ele for clicado, executa uma função. A primeira será evitar da página ser recarregada ao enviar o formulário

// 2. Valide o campo para garantir que o input não será vazio

// 3. No caso do campo estar preenchido, o código deve criar elementos necessários para montar o item da lista: um "li" para representar o item; um "div" com a classe "lista-item-container" para organizar; um "input" tipo checkbox para permitir marcar item; um "p" (innerText) que tem o texto difitado no input 

// 4. Organizar os elementos criados. Checkbox e texto > div; div > li; li > lista de compras

botaoAdicionar.addEventListener("click", (evento) => {
    //evento.preventDefault();
    if (inputItem.value === "") {
        alert("Por favor, insira um item!");
        return;
    }

    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);
    itemDaLista.appendChild(containerItemDaLista);
    listaDeCompras.appendChild(itemDaLista);

})



