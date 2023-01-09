function compareTrue(first, second) {
  return first && second;
}

function dividirEmListaDePalavras(frase) {
  // O método split divide uma string em uma array de strings
  // utilizando o argumento passado como separador. No caso,
  // utilizamos o espaço em branco como separador para dividir
  // a frase em palavras.
  var listaDePalavras = frase.split(" ");

  return listaDePalavras;
}
function concatName(listaDePalavras) {
  // O método join concatena todos os elementos de uma array em
  // uma única string, utilizando o argumento passado como separador.
  // No caso, utilizamos o espaço em branco como separador para juntar
  // as palavras de volta em uma frase.
  var frase = listaDePalavras.join(" ");

  return frase;
}

function contarElementoMaior(array) {
  // Encontramos o maior elemento do array utilizando o método
  // Math.max e passando o array como argumento.
  // Utilizando o operador ... em array para desmembrar em elementos individuais, que é o que a função Math.max recebe.
  var maiorElemento = Math.max(...array);

  // Inicializamos a variável contagem com o valor 0.
  var contagem = 0;

  // Percorremos todos os elementos do array utilizando um laço for.
  for (var i = 0; i < array.length; i++) {
    // Verificamos se o elemento atual é igual ao maior elemento.
    // Se for, incrementamos a variável contagem em 1.
    if (array[i] === maiorElemento) {
      contagem++;
    }
  }

  // Retornamos a contagem de elementos iguais ao maior elemento.
  return contagem;
}

function footballPoints(vitorias, empates) {
  // Cada vitória vale 3 pontos
  var pontosPorVitoria = 3;

  // Cada empate vale 1 ponto
  var pontosPorEmpate = 1;

  // Calculamos a pontuação do time multiplicando o número de
  // vitórias pelos pontos por vitória e o número de empates
  // pelos pontos por empate.
  var pontuacao = vitorias * pontosPorVitoria + empates * pontosPorEmpate;

  return pontuacao;
}

function catAndMouse(matriz) {
  var posRato = null;
  var posGatos = null;

  for (let i = 0; i < matriz.length; i++) {
    const element = matriz[i];
    for (let j = 0; j < element.length; j++) {
      const element = element[j];

      if (matriz[i][j] === "R") {
        posRato = { linha: i, coluna: j };
      }

      if (matriz[i][j] === "G") {
        posGatos = { linha: i, coluna: j };
      }
    }
  }

  gatoPerto = null;
  menorDistancia = Number.maxValue;
  posGatos.forEach((element) => {
    var distancia = sqrt((x2 - x1) ^ (2 + (y2 - y1)) ^ 2);
    if (distancia < menorDistancia) {
      menorDistancia = distancia;
      gatoPerto = element;
    }
  });

  return gatoPerto;
}

function fizzBuzz(numbers) {
  // Create an empty array to store the results
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];

    if (num % 15 === 0) {
      result.push("FizzBuzz");
    } else if (num % 3 === 0) {
      result.push("Fizz");
    } else if (num % 5 === 0) {
      result.push("Buzz");
    }

    // Skip the number if it's not divisible by 3, 5, or 15
  }

  return result;
}

function codificarFrase(frase) {
  // Definimos as vogais e números que serão usados na codificação
  const vogais = "aeiou";
  const numeros = "12345";

  // Inicializamos uma variável para armazenar a frase codificada
  let fraseCodificada = "";

  // Percorremos cada caractere da frase
  for (let i = 0; i < frase.length; i++) {
    // Verificamos se o caractere é uma vogal
    const indiceVogal = vogais.indexOf(frase[i]);
    if (indiceVogal !== -1) {
      // Se for uma vogal, adicionamos o número correspondente na frase codificada
      fraseCodificada += numeros[indiceVogal];
    } else {
      // Se não for uma vogal, verificamos se é um número
      const indiceNumero = numeros.indexOf(frase[i]);
      if (indiceNumero !== -1) {
        // Se for um número, adicionamos a vogal correspondente na frase codificada
        fraseCodificada += vogais[indiceNumero];
      } else {
        // Se não for nem uma vogal nem um número, adicionamos o caractere na frase codificada sem modificação
        fraseCodificada += frase[i];
      }
    }
  }

  // Retornamos a frase codificada
  return fraseCodificada;
}
