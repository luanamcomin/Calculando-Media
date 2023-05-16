// var nome = "Luana"

// var nota1 = 9.519
// var nota2 = 7.984
// var nota3 = 4.9884
// var nota4 = 2.2684

// var notaFinal = (nota1 + nota2 + nota3 + nota4) / 4
// var notaArredondada = notaFinal.toFixed(1)

// console.log("Olá " + nome + ", sua nota final foi: " + notaArredondada )

//revisão: variáveis (var), string, console.log, toFixed(), operações matemáticas, concatenação


const verificarNota = (notaAtiv, notaRedac) => {
  let media = (notaAtiv + notaRedac) / 2;
  
  return(notaAtiv > 5 || notaRedac > 5 ? 
              "Suas notas devem ser maior que 5" : "Sua média de português é: " + media )
}
console.log(verificarNota(7, 2))