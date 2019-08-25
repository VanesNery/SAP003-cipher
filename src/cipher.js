window.cipher = {
  encode: encode,
  decode: decode,
};
//Cifra (((codigodaletra - cod1letra + deslo)%tamanhodoalfabeto) +cod1letra)
function encode(offset, string) {
  let Mssg = [];
  for (let i = 0; i < string.length; i++) {
    let letra = string.charCodeAt([i]);

    if (letra >= 65 && letra <= 90) {
      let message = (((letra - 65 + offset) % 26) + 65);
      let msg = String.fromCharCode(message);
      Mssg.push(msg);
    }

    else if (letra >= 97 && letra <= 122) {
      let message = ((letra - 97 + offset) % 26) + 97;
      let msg = String.fromCharCode(message);
      Mssg.push(msg);
    }
    else if (letra >= 48 && letra <= 57) {
      let message = ((letra - 48 + offset) % 10) + 48;
      let msg = String.fromCharCode(message);
      Mssg.push(msg);
    }
    else if (letra >= 0 && letra <= 47 || letra >= 56 && letra <= 64 || letra >= 91 && letra <= 96 || letra >= 123 && letra <= 255) {
      let message = letra;
      let msg = String.fromCharCode(message);
      Mssg.push(msg);
    }
  }
  return Mssg.join("");
}

function decode(offset, string) {
  let Mssg = [];
  for (let i = 0; i < string.length; i++) {
    let letra = string.charCodeAt([i]);

    if (letra >= 65 && letra <= 90) {
      let message = ((letra - 90 - offset) % 26) + 90;
      let msg = String.fromCharCode(message);
      Mssg.push(msg);
    }

    else if (letra >= 97 && letra <= 122) {
      let message = ((letra - 122 - offset) % 26) + 122;
      let msg = String.fromCharCode(message);
      Mssg.push(msg);
    }

    else if (letra >= 48 && letra <= 57) {
      let message = ((letra - 57 - offset) % 10) + 57;
      let msg = String.fromCharCode(message);
      Mssg.push(msg);
    }

    else if (letra >= 0 && letra <= 64 || letra >= 91 && letra <= 96 || letra >= 123 && letra <= 255) {
      let message = letra;
      let msg = String.fromCharCode(message);
      Mssg.push(msg);
    }
  }
  return Mssg.join("");
}
//Decifra (((codigoasc - cod1letra- deslo) %tamanhoDOalfabeto) + cod1letra)
//testando git