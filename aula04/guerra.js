// Criação de uma lista com três jogadores;
personagem = ["", "", ""]
viloes = ["", "", ""]
forcaPersonagem = 0
forcaViloes = 0

alert("O array persongem contém: " + personagem)
for(let i=0; i<3; i++){
  escolhaPersonagem = prompt("Digite o nome do seu personagem" + (i + 1))
  personagem[i] = escolhaPersonagem
  //Calcular a força de cada jogador e depois somar para saber a força do time;
  forcaPersonagem = forcaPersonagem + Math.floor(Math.random() * 10) + 1
  // forcaPersonagem += Math.floor(Math.random() * 10) + 1 //Maneira mais avançada de fazer a linha de cima
 }
console.log("Agora, o Array Personagem contém: " + personagem)

console.log("Início vilões: " + viloes)
for(let i=0; i<3; i++) {
  indiceAleatorio = Math.floor(Math.random() * 5)
  viloesPossiveis = ["Nazare Tedesco", "Odete Roitmann", "Flora", "Carminha", "Laura Prudente da Costa"]
  viloes [i] = viloesPossiveis[indiceAleatorio]
  //Calcular a força de cada jogador do time do computador;
  forcaViloes = forcaViloes + Math.floor(Math.random() * 10) + 1
}
console.log(" Final vilões: " + viloes)

//Comparar os dois times e ver quem ganhou.
if(forcaPersonagem > forcaViloes) {
  alert("Seu time venceu pela a MAIOR força!! Sua força foi: " + forcaPersonagem)
} else {
  if(forcaPersonagem < forcaViloes) {
    alert("O computador ganhou o cabo de guerra! Com a força de: " + forcaViloes)
  } else {
    alert("Os dois time tem a mesma força!! Houve um empate.")
  }
}




