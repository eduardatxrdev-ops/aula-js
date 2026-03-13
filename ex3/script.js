function calcular(){

let number1 = Number(document.getElementById("numero1").value)
let number2 = Number(document.getElementById("numero2").value)


let media = (number1 + number2 ) / 2
let addition = (number1 + number2 )
let product = (number1 * number2 )

let resultado = document.getElementById("resultado")

if (number1>number2 ) {
    maior =  number1
}
else if (number2>number1){
        maior =  number2
    }
else {
        maior = "The numbers are the same"
    }

resultado.innerHTML = "Biggest Number: " + maior + "<br>" +
"Media: " + media + "<br>" +
"Addition: " + addition + "<br>" +
"Product: " + product
}
