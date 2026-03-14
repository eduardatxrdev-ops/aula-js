function calcular(){

let quantidade = Number(document.getElementById("quantidade").value)
let resultado = document.getElementById("resultado")

let preco
let total

if(quantidade < 12){
    preco = 1.30
}else{
    preco = 1.00
}

total = quantidade * preco

resultado.innerHTML = "Total da compra: R$ " + total.toFixed(2)

}