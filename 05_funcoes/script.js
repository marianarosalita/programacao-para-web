
function areaQuadrado(lado){
  return lado * lado;
}

console.log(areaQuadrado(5));


function pi(){
  return 3.14;
}

var total= 5 * pi();

console.log(total);

// parâmetros e argumentos
// var, let, const

function calcularImc(peso, altura){
  const imc = peso / (altura ** 2);
  return imc;
}

var valorImc = calcularImc(80, 1.80);

console.log('Imc = ' +valorImc);

//obs: toda função sem retorno aparece o 'undefined'

function suaCorFavorita(corFavorita){
  if(corFavorita === 'azul'){
    return 'Você gosta do mar';
  }
  else{
    if(corFavorita === 'verde'){
      return 'Você gosta do campo';
    }
    else{
      return 'Você não gosta de nenhuma';
    }
  }
}

console.log(suaCorFavorita('azul'));

console.log(suaCorFavorita());



// escopo
var totalPaises = 193;  //escopo global

function visitarPaises(paisesVisitados){
  return `Falta visitar ${totalPaises - paisesVisitados}`
}

console.log(totalPaises);


/* 

function visitarPaises(paisesVisitados){
  var totalPaises = 193;  
  return `Falta visitar ${totalPaises - paisesVisitados}`
}

console.log(visitarPaises(1)); */


var profissao = 'Programador'; //escopo global

function dadosPessoa(){
  var nome = 'Sérgio'; //escopo local
  var idade = 49; //escopo local

  function novosDados(){
    var endereco = "Pedro Cavalo";
    var cep = 16200;

    return `${nome}. ${idade}, ${endereco}, ${profissao}`
  }
  return novosDados()
}

console.log(dadosPessoa());

console.log(novosDados());

