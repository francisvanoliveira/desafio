function inverterPalavra() {
    let palavra = document.getElementById("palavra").value;
    let palavraInvertida = "";
  
    for (let i = palavra.length - 1; i >= 0; i--) {
      palavraInvertida += palavra[i];
    }
  
    document.getElementById("resultado").innerText = "Palavra invertida: " + palavraInvertida;
}