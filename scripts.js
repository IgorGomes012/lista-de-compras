const button = document.getElementById("addBlock");
const containerMain = document.getElementById("containerMain");
let changeText = document.getElementById("addTextListInput");


function addNewBlock() {
  const currentValue = changeText.value;
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
  const imgIcon = document.createElement("img");
  imgIcon.src = "/img/icon delete.png";

  //adiciona os elementos no html, pai primeiro depois filho em ()
  containerMain.appendChild(newBlock);
  newBlock.appendChild(newBlockInput);
  newBlockInput.appendChild(newInput);
  newBlockInput.appendChild(newLabel);
  newBlock.appendChild(divImg);
  divImg.appendChild(buttonImg);
  buttonImg.appendChild(imgIcon);
}

function addItem(){
  addNewBlock();
}

// Botao remove list
const deleteItem = document.querySelector(".form");

function deleteProduct() {
  deleteItem.classList.add("formNone");
}

function addTextList(){
  const addTextListInput = document.getElementById("addTextListInput");
  addTextListInput.value = "";
}
