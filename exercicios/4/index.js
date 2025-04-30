/* 2) Criando um checkbox dinâmico com JavaScript

Você está trabalhando em um projeto de lista de tarefas e sua tarefa é adicionar checkboxes dinamicamente para cada item que o usuário inclui na lista. Cada checkbox deve ter um ID único que aumenta automaticamente conforme novos itens são adicionados. Use seu conhecimento em JavaScript para criar uma função que gera esses elementos e os insere no DOM conforme descrito.
*/

// Crie um novo elemento div que será o container para o checkbox:

const containerCheckbox = document.createElement("div");
containerCheckbox.classList.add("container", "checkbox");

// Crie o elemento input para o checkbox:

const inputCheckbox = document.createElement("input");
inputCheckbox.type = "checkbox";
inputCheckbox.classList.add("input", "fintcheckbox");

// Implemente uma lógica para gerar um ID único para cada checkbox, utilizando uma variável contador que é incrementada cada vez que um novo item é adicionado:

let contador = 0;
inputCheckbox.id = `checkbox_${++contador}`;

// Insira o inputCheckbox dentro de um label, e adicione o label ao containerCheckbox:

const checkboxLabel = document.createElement("label");
checkboxLabel.appendChild(inputCheckbox);
containerCheckbox.appendChild(checkboxLabel);

// Finalmente, adicione o containerCheckbox ao elemento principal da lista no DOM:

document.querySelector("#mainListContainer").appendChild(ContentVisibilityAutoStateChangeEvent);

