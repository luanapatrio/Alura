idade = prompt("Quanto anos você tem?");
if (idade < 18) {
  alert("Você NÃO pode jogar!!!!");
}
if (idade >= 18) {
  escolhaJogador = prompt("Digite 1-Pedra, 2-papel ou 3-tesoura?");
  escolhaComputador = Math.floor(Math.random() * 3) + 1;
  // Se jogador jogar pedra, computador jogar pedra -> empate
  // Se jogador jogar tesoura, computador jogar tesoura -> empate
  // Se jogador jogar papel, computador jogar papel -> empate
  alert("Escolha do computador foi :" + escolhaComputador);
  if (escolhaJogador == escolhaComputador) {
    alert("Empate!!!");
  }
  //Se jogador escolher pedra, computador tesoura -> jogador vence
  // Se jogador jogar pedra, computador jogar papel -> computador vence
  if (escolhaJogador == 1) {
    if (escolhaComputador == 2) {
      alert("Computador venceu!!!!");
    }
    if (escolhaComputador == 3) alert("Jogador venceu!!!!");
  }
  /// Se jogador jogar tesoura, computador jogar pedra -> computador vence
  // Se jogador jogar tesoura, computador jogar papel -> jogador vence
  if (escolhaJogador == 3)
    if (escolhaJogador == 1) {
      alert("Jogador venceu!!");
    }
  if (escolhaComputador == 2) {
    alert("Computador venceu!!");
  }
  // Se jogador jogar papel, computador jogar pedra -> jogador vence
  // Se jogador jogar papel, computador jogar tesoura -> computador vence
  if (escolhaJogador == 2)
    if (escolhaComputador == 1) {
      alert("Jogador venceu!!");
    }
  if (escolhaComptador == 3) {
    alert("Comptador venceu!!");
  }
}




