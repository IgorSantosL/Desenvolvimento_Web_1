function exer7() {
  // Obtém o valor do campo de entrada
  const nome = document.querySelector("#entrada").value;

  // Cria um elemento <li>
  const elementoLI = document.createElement("li");

  // Define o texto do elemento <li> 
  elementoLI.innerText = nome;
  
  // Adiciona o atributo title com o mesmo valor do nome
  elementoLI.setAttribute("title", nome);

  // Obtém o elemento <ol> 
  const listaSaida = document.querySelector("#saida");

  // Adiciona o elemento <li> 
  listaSaida.appendChild(elementoLI);
}