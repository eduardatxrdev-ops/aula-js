function verificarvoto(){

let idade = Number(document.getElementById("idade").value)
let resultado = document.getElementById("resultado")

if (idade < 16){
    resultado.innerHTML = "Não pode votar!"
}
else if (idade >= 16 && idade <= 17){
    resultado.innerHTML = "Seu voto é opcional!"
}
else if (idade >= 18 && idade < 65){
    resultado.innerHTML = "Seu voto é obrigatório!"
}
else{
    resultado.innerHTML = "Não são obrigados a votar!"
}

}