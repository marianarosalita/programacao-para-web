//Objeto - composto por variáveis e funções
//Objeto tem propriedades e métodos, é a representação de algo do mundo real

var pessoa = {
  nome: 'Francisco',
  idade: 59,
  profissao: 'Professor',
  temFaculdade: true,

  mostrarNome(){
    return this.nome;
  },
}

//objeto definido nesse caso é pessoa

console.log(pessoa.nome);
console.log(pessoa.mostrarNome)
