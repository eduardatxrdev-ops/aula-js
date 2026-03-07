function calcular(){

let nome = document.getElementById("nome").value
let nota1 = Number(document.getElementById("nota1").value)
let nota2 = Number(document.getElementById("nota2").value)

let media = (nota1 + nota2) / 2

let resultado = document.getElementById("resultado")

if(media >= 7){
    resultado.innerHTML = nome + ", sua média é " + media.toFixed(2) + " - APROVADO"
}
else{
    resultado.innerHTML = nome + ", sua média é " + media.toFixed(2) + " - REPROVADO"
}

}