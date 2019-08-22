// const alphabetMai=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

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
