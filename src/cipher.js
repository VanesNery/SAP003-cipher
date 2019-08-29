window.cipher ={
  encode: encode,
  decode: decode,
};
//Cifra (((codigodaletra - cod1letra + deslo)%tamanhodoalfabeto) +cod1letra)
function encode(offset, string) {
  let Mssg =[];
  for (let i = 0; i < string.length; i++) {
    let letra = string.charCodeAt([i]);

    if (letra >= 65 && letra <= 90) {
      let message = (((letra - 65 + offset) % 26) + 65);
      let msg = String.fromCharCode(message);
      Mssg.push(msg);
    }

    else if (letra >= 97 && letra <= 122) {
      let message = (((letra - 97 + offset) % 26) + 97);
      let msg = String.fromCharCode(message);
      Mssg.push(msg);
    }
    else {
      Mssg.push(string[i]);
    }
  }
  return Mssg.join("");
}

function decode(offset, string) {
  let Mssg = [];
  for (let i = 0; i < string.length; i++) {
    let letra = string.charCodeAt([i]);

    if (letra >= 65 && letra <= 90) {
      let message = (((letra - 90 - offset) % 26) + 90);
      let msg = String.fromCharCode(message);
      Mssg.push(msg);
    }

    else if (letra >= 97 && letra <= 122) {
      let message = (((letra - 122 - offset) % 26) + 122);
      let msg = String.fromCharCode(message);
      Mssg.push(msg);
    }
    else {
      Mssg.push(string[i]);
    }
  }
  return Mssg.join("");
}
//Decifra (((codigoasc - cod1letra- deslo) %tamanhoDOalfabeto) + cod1letra)