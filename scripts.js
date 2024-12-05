//variaveis declaradas
const button = document.getElementById("addBlock");
const containerMain = document.getElementById("containerMain");
let changeText = document.getElementById("addTextListInput");

function addNewBlock() {
  const currentValue = changeText.value;

  // Cria os novos elementos
  const newBlock = document.createElement("div");
  newBlock.className = "form";
  const newBlockInput = document.createElement("div");
  const newInput = document.createElement("input");
  newInput.type = "radio";
  const newLabel = document.createElement("label");
  newLabel.textContent = currentValue; // Adiciona o texto dinamicamente
  const divImg = document.createElement("div");
  const buttonImg = document.createElement("button");
  buttonImg.className = "deletItem";

  // Adiciona o evento de clique ao botão dinamicamente
  buttonImg.onclick = function () {
    deleteProduct(newBlock); // Passa o bloco atual como parâmetro
  };

  const imgIcon = document.createElement("img");
  imgIcon.src = "/img/icon delete.png";

  // Adiciona os elementos ao DOM
  containerMain.appendChild(newBlock);
  newBlock.appendChild(newBlockInput);
  newBlockInput.appendChild(newInput);
  newBlockInput.appendChild(newLabel);
  newBlock.appendChild(divImg);
  divImg.appendChild(buttonImg);
  buttonImg.appendChild(imgIcon);
}

function addItem() {
  addNewBlock();
}

// Função para remover o bloco
function deleteProduct(block) {
  block.remove(); // Remove o elemento passado como parâmetro
}

// Limpa o campo de texto ao focar nelee
function addTextList() {
  const addTextListInput = document.getElementById("addTextListInput");
  addTextListInput.value = "";
}