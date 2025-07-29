async function geolocate(ownIp = false){
    let inputValueIP
    if (ownIp) {
        if (getCookie() === false){
            showError('error', 'Bitte Akzeptiere die Cookies.');
            cookies();
            return;
        }

        inputValueIP = await getIp()
        document.getElementById("InputIP").value = inputValueIP;
    } else {
        inputValueIP = document.getElementById("InputIP").value;
    }
    if (inputValueIP) {
        fetch(`http://ip-api.com/json/${inputValueIP}`)
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    document.getElementById("result-ip").textContent = data.query || '-';
                    document.getElementById("result-country").textContent = data.country || '-';
                    document.getElementById("result-region").textContent = data.regionName || '-';
                    document.getElementById("result-city").textContent = data.city || '-';
                    document.getElementById("result-zip").textContent = data.zip || '-';
                    document.getElementById("result-isp").textContent = data.isp || '-';
                    copyInDatabase(data.query, data.country, data.regionName, data.city, data.isp);
                } else {
                    document.getElementById("result-ip").textContent = '-';
                    document.getElementById("result-country").textContent = '-';
                    document.getElementById("result-region").textContent = '-';
                    document.getElementById("result-city").textContent = '-';
                    document.getElementById("result-zip").textContent = '-';
                    document.getElementById("result-isp").textContent = '-';
                }
            })
            .catch(error => {
                showError('error', 'Fehler beim Abrufen der IP-Daten: ' + error);
                document.getElementById("result-ip").textContent = '-';
                document.getElementById("result-country").textContent = '-';
                document.getElementById("result-region").textContent = '-';
                document.getElementById("result-city").textContent = '-';
                document.getElementById("result-zip").textContent = '-';
                document.getElementById("result-isp").textContent = '-';
            });
    } else {
        document.getElementById("result-ip").textContent = '-';
        document.getElementById("result-country").textContent = '-';
        document.getElementById("result-region").textContent = '-';
        document.getElementById("result-city").textContent = '-';
        document.getElementById("result-zip").textContent = '-';
        document.getElementById("result-isp").textContent = '-';
    }
}

function copyInDatabase(ip, land, region, stadt, internet_anbieter){
    fetch('toDatabase.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ip: ip,
            stadt: stadt,
            land: land,
            region: region,
            internet_anbieter: internet_anbieter,
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                showError('info', 'Die IP wurde erfolgreich in der Datenbank gespeichert.');
            } else {
                showError('error', 'Fehler beim Speichern der IP in der Datenbank: ' + data.error);
            }
        })
    .catch(error => {
        showError('error', 'Fehler beim Speichern der IP in der Datenbank: ' + error);
    });
}