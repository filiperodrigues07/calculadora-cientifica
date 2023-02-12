var astronaut = prompt("Olá, astronauta! Apresente-se e digite seu nome :)");
var anosLuz = prompt("Digite o total desejado de anos-luz: ");

var valueAnosLuz = 9.51 * 10 ** 12;
var distanciaEmKM = anosLuz * valueAnosLuz;
var anosLuz = valueAnosLuz / distanciaEmKM;

alert( "Astronauta a distância e o tempo percorrido de uma estrela para a outra foram, respectivamente " + distanciaEmKM + " KM e " + anosLuz + " anos-luz.");