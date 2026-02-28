const listaDeAlunos = [
    {nome: 'Ana', nota: 5.0 },
    {nome: 'Bruno', nota: 10.0},
    {nome: 'Carla', nota: 2.0},
    {nome: 'Andrea', nota:7.0},
    {nome: 'Marta', nota:6.0},
];

console.log("Encontre a aluna Marta e mostre o nome e a nota dela.")
    const alunoEncontrado = listaDeAlunos.find( u=> u.nome ==="Marta")
console.log(`Nome: ${alunoEncontrado.nome} \nnota: ${alunoEncontrado.nota}`)

console.log ("Mostre a média geral da turma. ")
const mediaNotas = listaDeAlunos.reduce ((total, u) => total + u.nota / 5 , 0)
console.log(mediaNotas)

console.log("Mostre o nome e a nota dos alunos com nota abaixo de 7.0")
const abaixoDaMedia = listaDeAlunos.filter(
    listaDeAlunos => listaDeAlunos.nota <= 7.0
)