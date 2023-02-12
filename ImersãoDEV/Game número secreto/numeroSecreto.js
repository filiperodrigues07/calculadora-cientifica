var numeroSecreto = parseInt((Math.random() * 1001) + 1);
var numeroDeChutes = 0;
var numeroDeTentativas = 10;

alert('Bem vindo ao Game!! Acerte o número secreto entre 1 e 1000, você terá 10 chances!')

while(chute != numeroSecreto && numeroDeChutes != numeroDeTentativas) {

  var chute = prompt('Digite um número entre 1 e 1000');
  numeroDeChutes++;
  
  if (numeroDeChutes == numeroDeTentativas && chute!= numeroSecreto) {
      alert('Não foi desta vez, acabaram suas chances... \n\nO número secreto era: ' + numeroSecreto + '\n\nTentativas:' + numeroDeChutes + '/' + numeroDeTentativas);
    break;
    }
    if (chute == numeroSecreto) {
    alert('Parabéns! Você acertou o número secreto!'+ '\n\nNúmero secreto: ' + numeroSecreto + '\n\nNúmero de tentativas: ' + numeroDeChutes + '/' + numeroDeTentativas);
  } else if (chute > numeroSecreto) {
    alert('Errou... O número secreto é menor do que ' + chute + '. \n\nTente novamente.' + '\n\nNúmero de tentativas: ' + numeroDeChutes + '/' + numeroDeTentativas);
  } else if (chute < numeroSecreto) {
    alert('Errou... O número secreto é maior do que ' + chute + '. \n\nTente novamente.'+ '\n\nNúmero de tentativas: ' + numeroDeChutes + '/' + numeroDeTentativas);
  }
}
