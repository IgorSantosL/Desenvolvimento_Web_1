function exer5() {
  // Obtém o valor digitado no campo de entrada
  const nome = document.querySelector("#entrada").value;

  // Cria um elemento <p>
  const elementoP = document.createElement("p");

   // Define o texto do elemento <p> 
   elementoP.innerText = nome;

  // Obtém o elemento <div> 
  const divSaida = document.querySelector("#saida");

  // Adiciona o elemento <p> 
  divSaida.appendChild(elementoP);
}