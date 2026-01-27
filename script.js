
// const btn = document.createElement("button");
// btn.textContent = "Clique";
// btn.addEventListener("click", () => alert("Oi, Botão adicionado no JS!"));
// document.body.appendChild(btn);

const btn = document.querySelector(".btn");

btn.addEventListener("click",()=>{
const valor = document.querySelector(".valor-entrada").value;

const valor_moeda = document.querySelector(".valor-moeda");
const valor2_moeda_dolar = document.querySelector(".valor_moeda_dolar");

const convers = 5.28;
const dolar = 6.2;
const covertido = valor/convers;

// USANDO FUNÇÃO DE NUMBER FORMAT PARA FORMATAR VALOR EM REAIS
valor_moeda.innerHTML = new Intl.NumberFormat("pt-BR", {
style: "currency",
currency: "BR"
}).format(valor);

// USANDO FUNÇÃO DE NUMBER FORMAT PARA FORMATAR VALOR EM DOLAR
valor2_moeda_dolar.innerHTML = new Intl.NumberFormat("ne-US", {
style: "currency",
currency: "US"
}).format(covertido);
 
// console.log(`Botão Clicado com Sucesso!", ${valor.value}`);
    console.log(`Botão Clicado com Sucesso!", ${valor}`);

});
