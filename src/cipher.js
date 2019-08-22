window.cipher={
   encode:encode,
   decode:decode,
};
//Cifra (((codigodaletra + cod1letra + deslo)%tamanhodoalfabeto) +cod1letra)
function encode(offset,string){
   let Mssg=[];
       for(let i=0; i<string.length;i++){
       let letra=string.charCodeAt([i]);
       
            if (letra>=65 && letra<=90){
            let message=(((letra -65 + offset)%26) +65);
            let msg=String.fromCharCode(message); 
            Mssg.push(msg);
            }
               else if(letra>=97 && letra<=122){
               let message=((letra -97 + offset)%26) +97;
               let msg=String.fromCharCode(message); 
               Mssg.push(msg);
               }
                  else if(letra>=128 && letra<=237){
                  let message=((letra -128 + offset)%110) +128;
                  let msg=String.fromCharCode(message); 
                  Mssg.push(msg);
                  }
                     else if(letra>=32 && letra<=64){
                     let message=((letra -32 + offset)%33) +32;
                     let msg=String.fromCharCode(message); 
                     Mssg.push(msg);
                     }
                        else if(letra>=238 && letra<=255){
                        let message=((letra -238 + offset)%18) +238;
                        let msg=String.fromCharCode(message); 
                        Mssg.push(msg);
                        }
            }
                  return Mssg.join("");
 }
   
   function decode(offset,string){
      let Mssg=[];
         for(let i=0; i<string.length;i++){
         let letra=string.charCodeAt([i]);
            
            if(letra>=65 && letra<=90){
            let message=((letra -90 - offset)%26) +90;
            let msg=String.fromCharCode(message); 
            Mssg.push(msg);
            }
               else if(letra>=97 && letra<=122){
               let message=((letra -122 - offset)%26) +122;
               let msg=String.fromCharCode(message); 
               Mssg.push(msg);
               }
                  else if(letra>=128 && letra<=237){
                  let message=((letra -237 - offset)%110) +237;
                  let msg=String.fromCharCode(message); 
                  Mssg.push(msg);
                  }
                     else if(letra>=32 && letra<=47){
                     let message=((letra -47 - offset)%33) +47;
                     let msg=String.fromCharCode(message); 
                     Mssg.push(msg);
                     }
                        else if(letra>=238 && letra<=255){
                        let message=((letra -255 - offset)%18) +255;
                        let msg=String.fromCharCode(message); 
                        Mssg.push(msg);
                        }
         }
            return Mssg.join("");
   }
   //Decifra (((codigoasc - cod1letra- deslo) %tamanhoDOalfabeto) + cod1letra)