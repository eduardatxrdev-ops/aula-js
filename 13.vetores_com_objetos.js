// Vetor de objetos

const listaDeUsuarios = [
    {nome:"Ana", idade: 25},
    {nome:"Bruno", idade: 22},
    {nome:"Carla", idade: 30},
    {nome:"Daniela", idade: 15},

]
//EXIBINDO TODOS OS ELEMENTOS DO VETOR
console.log ("Exibindo todos os usuários de vetor: ")
listaDeUsuarios.forEach (usuario => {
    console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
})

console.log("\nFiltrando idade maior que 18 anos: ")
//ADICIONANDO EM NOVA LISTA APENAS MAIORES DE 18 ANOS.
const maioresDe18 = listaDeUsuarios.filter(
    usuario => usuario.idade >18
)
//EXIBINDO TODOS OS ELEMENTOS DO VETOR.
maioresDe18.forEach(usuario => 
    console.log(`${usuario.nome} tem ${usuario.idade}`)
)

console.log("\nMostrando apenas nomes:")
const listaDeNomes = listaDeUsuarios.map (u=> u.nome)
listaDeNomes.forEach(nome => console.log(`${nome}`))

console.log("\nEncontrar um usuário: ")
const usuarioEncontrado = listaDeUsuarios.find(u => u.nome === "Carla")

console.log(usuarioEncontrado)
console.log(`Nome: ${usuarioEncontrado.nome} \nIdade: ${usuarioEncontrado.idade}`)

//Total acumula a soma das idades
// 0 é o valor inicial da contagem
//u é o onjeto para acessar a variável que contém a idade
console.log ("\nSoma as idades de todos os usuários: ")
const somaIdades = listaDeUsuarios.reduce ((total, u) => total + u.idade, 0)
console.log(somaIdades)