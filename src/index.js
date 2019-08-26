let btn_cifra = document.getElementById("btn_cifra");
btn_cifra.addEventListener("click", botao1); //função js que escuta o evento da variavel referente ao botão
function botao1() {
  event.preventDefault();
  let offset = parseInt(document.getElementById("codDeslo").value);
  let string = document.getElementById("Msg").value;
  let Mssg = window.cipher.encode(offset, string);
  document.getElementById("respostaC").innerHTML += Mssg;
}

let btn_decifra = document.getElementById("btn_decifra");
btn_decifra.addEventListener("click", botao2);
function botao2() {
  event.preventDefault();
  let offset = parseInt(document.getElementById("codDeslo").value);
  let string = document.getElementById("Msg").value;
  let Mssg = window.cipher.decode(offset, string);
  document.getElementById("respostaD").innerHTML += Mssg;
}
function limparD() {
  document.getElementById("respostaD").innerHTML = "";
}
function limparC() {
  document.getElementById("respostaC").innerHTML = "";
}
