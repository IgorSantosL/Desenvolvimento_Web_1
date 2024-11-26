function exer4() {
  // Obtém o valor 
  const nome = document.querySelector("#entrada").value;

  // Cria um elemento <p>
  const elementoP = document.createElement("p");

  const texto = document.createTextNode(nome);

  // Adiciona o texto ao elemento <p>
  elementoP.appendChild(texto);

  // Obtém o elemento <div> 
  const divSaida = document.querySelector("#saida");

  // Adiciona o elemento <p>
  divSaida.appendChild(elementoP);
}
