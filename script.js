
// const btn = document.createElement("button");
// btn.textContent = "Clique";
// btn.addEventListener("click", () => alert("Oi, Botão adicionado no JS!"));
// document.body.appendChild(btn);

const btn = document.querySelector(".btn");

btn.addEventListener("click",()=>{
const valor = document.querySelector(".valor-entrada").value;
const valor_moeda = document.querySelector(".valor-moeda");

valor_moeda.innerHTML = valor;





// console.log(`Botão Clicado com Sucesso!", ${valor.value}`);
console.log(`Botão Clicado com Sucesso!", ${valor}`);

});
