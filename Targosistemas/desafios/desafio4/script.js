const mySelect = document.getElementById("mySelect");
const myButton = document.getElementById("myButton");
const resultado = document.getElementById("resultado");

myButton.addEventListener("click", () => {
  const valorSelecionado =  mySelect.value;
  if( mySelect.value == "sp"){
    resultado.innerHTML = `Percentual de representação é ${saoPaulo}%`;
  }
  if( mySelect.value == "rj"){
    resultado.innerHTML = `Percentual de representação é ${rioDeJaneiro}%`;
  }
  if( mySelect.value == "mg"){
    resultado.innerHTML = `Percentual de representação é ${minas}%`;
  }
  if( mySelect.value == "es"){
    resultado.innerHTML = `Percentual de representação é ${espiritoSanto}%`;
  }
  if( mySelect.value == "ou"){
    resultado.innerHTML = `Percentual de representação é ${outros}%`;
  }
    
});


let sp = 67836.43;
let rj = 36687.66;
let mg = 29229.88;
let es = 27165.48;
let ou = 19849.53;

let total = (sp + rj + mg + es + ou);

let saoPaulo = ((sp/total)*100).toFixed(2);
let rioDeJaneiro = ((rj/total)*100).toFixed(2);
let minas = ((mg/total)*100).toFixed(2);
let espiritoSanto = ((es/total)*100).toFixed(2);
let outros = ((ou/total)*100).toFixed(2);