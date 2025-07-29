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
    const htmlElement = document.getElementById('neueSubnetzmasken');
    htmlElement.innerHTML = '';
    let arrReturn = [];

    let ip1 = document.getElementById('sub1').value;
    let ip2 = document.getElementById('sub2').value;
    let ip3 = document.getElementById('sub3').value;
    let ip4 = document.getElementById('sub4').value;
    const anzahl = parseInt(document.getElementById('anzahl').value);
    const subMask = parseInt(document.getElementById('subMask').value);

    if (ip1 === '' || ip2 === '' || ip3 === '' || ip4 === '' || anzahl === '' || subMask === '' || anzahl < 1 || !anzahl) {
        showError('error', 'Bitte überprüfe deine Eingabe');
        return;
    }

   if (subMask === 8 ) {
       for (let i = 0; i < anzahl; i++) {
           if (ip2 !== 255){
               ip2++;
           } else if (ip3 !== 255){
               ip3++;
           } else if (ip4 !== 255){
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
       htmlElement.innerHTML += `<li id="ipAdress">${element}</li>`;
   })
}

function speichern() {
    const htmlElement = document.getElementById('neueSubnetzmasken');

    if(htmlElement.innerHTML !== ''){
        try {
            document.querySelectorAll('#ipAdress').forEach(element => {
                let savedCalculations = JSON.parse(localStorage.getItem('subnetCalculations')) || [];

                const elements = {
                    id: Date.now(),
                    timestamp: new Date().toISOString(),
                    ipCidr: element.innerText,
                };

                savedCalculations.push(elements);

                localStorage.setItem('ipAdresses', JSON.stringify(savedCalculations));
            })
            showError('success', 'IP-Adressen erfolgreich gespeichert!');
        } catch (error) {
            showError('error', 'Fehler beim Speichern der Daten');
            console.error("Error saving data:", error);
        }


    } else {
        showError('info', 'Lasse dir erst IP-Adressen generieren bevor du sie speichern kannst.');
    }
}

async function myIpAdress() {

    if (getCookie() === false){
        showError('error', 'Bitte aktepzieren Sie die Cookies.');
        cookies();
        return;
    }
    const ip = await getIp();

    if (ip !== null) {

        endIp = splitIpAddress(ip)

        if (endIp.success){
            document.getElementById('sub1').value = endIp.arrays.ip1[0];
            document.getElementById('sub2').value = endIp.arrays.ip2[0];
            document.getElementById('sub3').value = endIp.arrays.ip3[0];
            document.getElementById('sub4').value = endIp.arrays.ip4[0];
        } else {
            showError('error', endIp.error.message );
        }
    }
}

function splitIpAddress(text) {
    try {
        const parts = text.split('.');

        // Prüfen ob wir genau 4 Teile haben
        if (parts.length !== 4) {
            throw new Error('Ungültige IP-Adresse');
        }

        const arrays = parts.map(part => {
            const num = parseInt(part, 10);

            if (isNaN(num) || num < 0 || num > 255) {
                throw new Error('Jede Zahl muss zwischen 0 und 255 liegen');
            }
            return [num];
        });

        const [array1, array2, array3, array4] = arrays;

        return {
            success: true,
            arrays: {
                ip1: array1,
                ip2: array2,
                ip3: array3,
                ip4: array4
            }
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
