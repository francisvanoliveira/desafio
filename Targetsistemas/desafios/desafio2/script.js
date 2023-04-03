function fibonacci(n) {
    // Inicializa a sequência com os valores 0 e 1
    let seq = [0, 1];
  
    // Calcula a sequência até o número informado pelo usuário
    while (seq[seq.length - 1] < n) {
      let proximo = seq[seq.length - 1] + seq[seq.length - 2];
      seq.push(proximo);
    }
  
    // Verifica se o número informado pertence à sequência
    if (seq.includes(n)) {
        console.log(`O número ${n} pertence à sequência de Fibonacci.`);
        document.getElementById("resultado").innerText = `O número ${n} pertence à sequência de Fibonacci.`;
    } else {
        console.log(`O número ${n} não pertence à sequência de Fibonacci.`);
        document.getElementById("resultado").innerText = `O número ${n} não pertence à sequência de Fibonacci.`;
    }
}

function verificarValor() {
    let n = parseInt(document.getElementById("valor").value);
    
    fibonacci(n);
  
}

  