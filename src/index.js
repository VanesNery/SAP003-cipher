document.getElementById("btn_cifra").addEventListener("click", botao1); //função js que escuta o evento da variavel referente ao botão
function botao1() {
  event.preventDefault();
  let offset = parseInt(document.getElementById("codDeslo").value);
  let string = document.getElementById("Msg").value;
  let Mssg = window.cipher.encode(offset, string);
  document.getElementById("respostaC").innerHTML = "";
  document.getElementById("respostaC").innerHTML += Mssg;
}

document.getElementById("btn_decifra").addEventListener("click", botao2);
function botao2() {
  event.preventDefault();
  let offset = parseInt(document.getElementById("codDeslo").value);
  let string = document.getElementById("Msg").value;
  let Mssg = window.cipher.decode(offset, string);
  document.getElementById("respostaD").innerHTML = "";
  document.getElementById("respostaD").innerHTML += Mssg;
}
