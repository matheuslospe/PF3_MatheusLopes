let calcular = document.getElementById('calcular');


function pneu () {
    let nome = document.getElementById('nome').value;
    let mensais = parseFloat(document.getElementById('mensais').value);
    let numeros = parseFloat(document.getElementById('numeros').value);
    let juros = parseFloat(document.getElementById('juros').value/100);
    let resultado = document.getElementById('total');

    if (nome !== '' && mensais !== '' && numeros !== '') {
        let vf = (mensais*((((1+ juros)**numeros) - 1) / juros)).toFixed(2);
        var CalculoPorcentagem = (juros * 100);
        resultado.textContent = `Olá ${nome}! Poupando R$
         ${mensais} por ${numeros} meses, com o juros de ${CalculoPorcentagem}%, você irá ter um valor futuro poupado de R$ ${vf} por mês. `;
    }
    else
    {
        resultado.textContent = `Para calcular o resultado, preencha todos os campos em branco!`;

    }

}

calcular.addEventListener('click', pneu);
       
        
        

        
        