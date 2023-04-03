fetch("dados.json").then((response) => {
    response.json().then((dados) => {
        const vetor = [];
        let soma = 0;
        let cont = 0;

        for(let i=0; i < dados.length; i++){
            if(dados[i].valor > 0){
                vetor.push(dados[i].valor);
                soma += dados[i].valor;
            }
            
        }

        const maior = Math.max(...vetor);
        const menor = Math.min(...vetor);
        const media = soma / vetor.length;
                    
        
        for(let i=0; i < dados.length; i++){
            if(dados[i].valor > media){
                cont++;
            }            
        }

        const menorDiv = document.getElementById("menor");
        menorDiv.textContent = "Menor valor de faturamento em um dia do mês: R$ " + menor.toFixed(2);
        console.log(parseFloat(menor.toFixed(2)));  
        
        const maiorDiv = document.getElementById("maior");
        maiorDiv.textContent = "Maior valor de faturamento em um dia do mês: R$ " + maior.toFixed(2);
        console.log(parseFloat(maior.toFixed(2)));

        const mediaDiv = document.getElementById("media");
        mediaDiv.textContent = "Média de faturamento do mês: R$ " + media.toFixed(2);
        console.log(parseFloat(media.toFixed(2)));

        const resultadoDiv = document.getElementById("resultado");
        resultadoDiv.textContent = "Dias com faturamento maior que o mensal: " + cont;
        console.log(cont); 
    })
})