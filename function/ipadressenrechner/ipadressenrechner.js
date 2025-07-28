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
    // IP-Adresse zusammenbauen
    const ip1 = document.getElementById('ip1').value;
    const ip2 = document.getElementById('ip2').value;
    const ip3 = document.getElementById('ip3').value;
    const ip4 = document.getElementById('ip4').value;

    // Subnetzmaske zusammenbauen
    const sub1 = document.getElementById('sub1').value;
    const sub2 = document.getElementById('sub2').value;
    const sub3 = document.getElementById('sub3').value;
    const sub4 = document.getElementById('sub4').value;

    // Berechnung durchführen
    const ipBinary = [ip1, ip2, ip3, ip4].map(x => parseInt(x))
        .map(x => x.toString(2).padStart(8, '0')).join('');
    const subnetBinary = [sub1, sub2, sub3, sub4].map(x => parseInt(x))
        .map(x => x.toString(2).padStart(8, '0')).join('');

    // Netzwerk-ID berechnen
    const networkBinary = ipBinary.split('').map((bit, index) =>
        bit & subnetBinary[index]).join('');

    // Broadcast-Adresse berechnen
    const broadcastBinary = networkBinary.split('').map((bit, index) =>
        index < subnetBinary.indexOf('0') ? bit : '1').join('');

    // Binär zu Dezimal konvertieren
    const networkIP = binaryToIP(networkBinary);
    const broadcastIP = binaryToIP(broadcastBinary);

    // Ergebnisse anzeigen
    document.getElementById('networkResult').textContent = networkIP;
    document.getElementById('broadcastResult').textContent = broadcastIP;
}

function binaryToIP(binary) {
    return binary.match(/.{8}/g)
        .map(byte => parseInt(byte, 2))
        .join('.');
}