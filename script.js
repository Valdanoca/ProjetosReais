
// const btn = document.createElement("button");
// btn.textContent = "Clique";
// btn.addEventListener("click", () => alert("Oi, Botão adicionado no JS!"));
// document.body.appendChild(btn);

const btn = document.querySelector(".btn");

btn.addEventListener("click",()=>{
const valor = document.querySelector(".valor-entrada").value;

const valor_moeda = document.querySelector(".valor-moeda");
const valor_moeda_dolar = document.querySelector(".valor_moeda_dolar");

const dolarHoje = 5.2;
const euroHoje = 6.2;
const fcfaHoje = 0.0095;

const currencys = document.querySelector(".currencys").value;

if(currencys === "dolar"){
  // USANDO FUNÇÃO DE NUMBER FORMAT PARA FORMATAR VALOR EM DOLAR
    const covertido1 = valor/dolarHoje;
    valor_moeda_dolar.innerHTML = new Intl.NumberFormat("ne-US", {
    style: "currency",
    currency: "USD"
    }).format(covertido1);
   }

if(currencys === "euro"){
// USANDO FUNÇÃO DE NUMBER FORMAT PARA FORMATAR VALOR EM DOLAR
    const covertido2 = valor/euroHoje;
    valor_moeda_dolar.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR"
    }).format(covertido2);
    }

 if(currencys === "fcfa"){
 // USANDO FUNÇÃO DE NUMBER FORMAT PARA FORMATAR VALOR EM DOLAR
    const covertido3 = valor/fcfaHoje;
    valor_moeda_dolar.innerHTML = new Intl.NumberFormat("fr-FR", {
     style: "currency",
    currency: "XOF"
    }).format(covertido3);
    }


// USANDO FUNÇÃO DE NUMBER FORMAT PARA FORMATAR VALOR EM REAIS
    const covertido2 = valor/euroHoje;
    valor_moeda.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
    }).format(valor);
   
// console.log(`Botão Clicado com Sucesso!", ${valor.value}`);
    console.log(`Botão Clicado com Sucesso!", ${valor}`);
});
