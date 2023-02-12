var name = prompt("Olá, investidor! Apresente-se e digite seu nome ");
var currency = prompt("Escolha a moeda a ser convertida para reais: \n 1. Dólar Americano \n 2. Dólar Canadense \n 3. Euro \n 4. Iene \n 5. Dogecoin \n 6. Bitcoin");

var value = prompt("Digite um valor:");

var cotacaoDolar = 5.12;
var cotacaoDolarCanada = 3.82;
var cotacaoEuro = 5.55;
var cotacaoIene = 0.039;
var cotacaoDogecoin = 0.44;
var cotacaoBitcoin = 116459.66;

if ((currency === "1")) var valorEmReal = cotacaoDolar * value;
else if ((currency === "2")) var valorEmReal = cotacaoDolarCanada * value;
else if ((currency === "3")) var valorEmReal = cotacaoEuro * value;
else if ((currency === "4")) var valorEmReal = cotacaoIene * value;
else if ((currency === "5")) var valorEmReal = cotacaoDogecoin * value;
else if ((currency === "6")) var valorEmReal = cotacaoBitcoin * value;

valorEmReal = valorEmReal.toFixed(2);
alert(name + ", o valor em real é de R$" + valorEmReal + ".");