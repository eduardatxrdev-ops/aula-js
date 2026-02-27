// Vetor de objetos

const usuarios = [
    {nome:"Ana", idade:25},
    {nome:"Bruno", idade:22},
    {nome:"carla", idade:30},
    {nome:"Daniela", idade:15},

]
//EXIBINDO TODOS OS ELEMENTOS DO VETOR
console.log ("Exibindo todos os usuários de vetor: ")
usuarios.forEach (usuario => {
    console.log(`${usuario.nome}tem ${usuario.idade} anos.`)
})

console.log("\n Filtrando idade maior que 18 anos: ")
//ADICIONANDO EM NOVA LISTA APENAS MAIORES DE 18 ANOS.
const maioresDe18 = usuarios.filter(
    usuario => usuario.idade >18
)
//EXIBINDO TODOS OS ELEMENTOS DO VETOR.
maioresDe18.forEach(usuario => 
    console.log(`${usuario.nome} tem${usuario.idade}`)
)