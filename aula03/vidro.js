rodada = 1
while (rodada <=3) {
  console.log("Rodada é a: " + rodada)
  
  escolhaJogador = prompt("Rodada " +rodada+ ", escolha vidro: 1, 2 ou 3 ?")
  pisoQuebrado = Math.floor(Math.random()*3) + 1;
  
  if(escolhaJogador == pisoQuebrado) {
    alert("O piso quebrou!!! Acabou o jogo para você.")
    rodada = 1000;
  } else {
    alert("Passou para o próximo nível !! O piso quebrado estava na ponte: " + pisoQuebrado)
  }
  rodada = rodada + 1
}

if(rodada == 4) {
  alert("Você venceu o jogo!! Parabéns.")
}