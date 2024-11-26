function exer6() {
  // Obtém o valor do campo de entrada 
  const valorEntrada = document.querySelector("#entrada").value;

  // Cria um elemento <p>
  const elementoP = document.createElement("p");

  // Define o texto do elemento <p> 
  elementoP.innerText = valorEntrada;

  // Define o atributo 'title' com o valor "Nome fornecido"
  elementoP.setAttribute("title", "Nome fornecido");

  // Obtém o elemento <div> 
  const divSaida = document.querySelector("#saida");

  // Adiciona o elemento <p>
  divSaida.appendChild(elementoP);
}
