function moveToNext(currentField, nextFieldID) {
    if (currentField.value.length >= 3) {
        const nextField = document.getElementById(nextFieldID);
        if (nextField) {
            nextField.focus();
        }
    }
}

function validateNumber(input) {
    // Nur Zahlen erlauben
    input.value = input.value.replace(/[^0-9]/g, '');

    // Maximaler Wert 255
    if (parseInt(input.value) > 255) {
        input.value = "255";
    }
}

function calculateSubnet() {
    let arrReturn = [];

    let ip1 = document.getElementById('sub1').value;
    let ip2 = document.getElementById('sub2').value;
    let ip3 = document.getElementById('sub3').value;
    let ip4 = document.getElementById('sub4').value;
    const anzahl = parseInt(document.getElementById('anzahl').value);
    const subMask = parseInt(document.getElementById('subMask').value);

   if (subMask === 8 ) {
       for (let i = 0; i < anzahl; i++) {
           if (ip2 !== 255){
               ip2++;
           } else if (ip3 !== 255){
               ip2 = 0;
               ip3++;
           } else if (ip4 !== 255){
               ip2 = 0;
               ip3 = 0;
               ip4++;
           } else {
               break;
           }
           arrReturn[i] = ip1 + '.' + ip2 + '.' + ip3 + '.' + ip4;
       }
   } else if (subMask === 16 ) {
       for (let i = 0; i < anzahl; i++) {
           if (ip3 !== 255) {
               ip3++;
           } else if (ip4 !== 255) {
               ip3 = 0;
               ip4++;
           } else {
               break;
           }

           arrReturn[i] = ip1 + '.' + ip2 + '.' + ip3 + '.' + ip4;
       }
   }
   else if (subMask === 24 ) {
       for (let i = 0; i < anzahl; i++) {
           if (ip4 !== 255) {
               ip3 = 0;
               ip4++;
           } else {
               break;
           }

           arrReturn[i] = ip1 + '.' + ip2 + '.' + ip3 + '.' + ip4;

       }

   } else {
        showError('error', 'Keine gültige Subnetzmaske');
   }

   arrReturn.forEach(element => {
       const htmlElement = document.getElementById('neueSubnetzmasken');
       htmlElement.innerHTML += `<li>${element}</li>`;
   })
}

function binaryToIP(binary) {
    return binary.match(/.{8}/g)
        .map(byte => parseInt(byte, 2))
        .join('.');
}