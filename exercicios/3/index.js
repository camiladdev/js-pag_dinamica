/* 1) Adicionando funcionalidade ao botão de salvar

Imagine que você está trabalhando no desenvolvimento de uma aplicação web para uma lista de tarefas. Você já tem o layout pronto e agora precisa fazer a parte funcional do botão de salvar. 

Quando alguém digita um item no campo de texto e clica em "Salvar", o item deve ser adicionado à lista abaixo do campo de entrada. Vamos criar essa funcionalidade usando JavaScript.  */

// 1. Crie constantes para acessar o campo de entrada (input) e o de salvar
// 2. Adicione um ouvinte de eventos ao botão de salvar com addEventListener, configurando para escutar o evento de clique. Dentro do manipulador do evento, crie uma função que:
// Obtenha o valor atual do campo de entrada.
// Crie um novo elemento HTML (como um <li>) e defina seu texto para o valor obtido.
// Anexe este novo elemento à lista de compras existente na página.

const input = document.getElementById("input_item");
const botaoSalvar = document.getElementById("salvar_item");

botaoSalvar.addEventListener("click", function() {
    console.log(input.value)
})