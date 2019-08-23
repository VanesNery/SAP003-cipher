function botao1(){
    event.preventDefault();
    let offset=parseInt(document.getElementById("codDeslo").value);
    let string=document.getElementById("Msg").value;
    let Mssg=window.cipher.encode(offset,string);   
    document.getElementById("respostaC").innerHTML+= Mssg;
}

function botao2(){
    event.preventDefault();
    let offset=parseInt(document.getElementById("codDeslo").value);
    let string=document.getElementById("Msg").value;
    let Mssg=window.cipher.decode(offset,string);
    document.getElementById("respostaD").innerHTML+= Mssg;
}
function limparD() {
    document.getElementById("respostaD").innerHTML = "";
}
function limparC() {
    document.getElementById("respostaC").innerHTML = "";
}
