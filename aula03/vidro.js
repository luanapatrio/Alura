ganhou = 0 // se for 1, perdeu e se for 0, ganhou.
for(let rodada = 1; rodada <= 3; rodada++) {
  escolhaJogador = prompt("Rodada " +rodada+ ", escolha vidro: 1, 2 ou 3 ?")
  pisoQuebrado = Math.floor(Math.random()*3) + 1;
  
  if(escolhaJogador == pisoQuebrado) {
    alert("O piso quebrou!!! Acabou o jogo para você.")
    rodada = 1000;
    ganhou = 1
  } else {
    alert("Passou para o próximo nível !! O piso quebrado estava na ponte: " + pisoQuebrado)
  }
  rodada = rodada + 1
}

if(ganhou == 0) {
  alert("Você venceu o jogo!! Parabéns.")
}