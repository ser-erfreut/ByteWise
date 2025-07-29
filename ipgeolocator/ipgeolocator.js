function geolocate(){
    document.getElementById("search-btn").addEventListener("click", function() {
        var inputValueIP = document.getElementById("InputIP").value;
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
    });
}
function geolocateOwnIP(){
    document.getElementById("search-own-ip-btn").addEventListener("click", async function() {
        try {
            const ip = await getIp();
            if (ip) {
                fetch(`http://ip-api.com/json/${ip}`)
                    .then(response => response.json())
                    .then(data => {
                        if (data.status === 'success') {
                            document.getElementById("result-ip").textContent = data.query || '-';
                            document.getElementById("result-country").textContent = data.country || '-';
                            document.getElementById("result-region").textContent = data.regionName || '-';
                            document.getElementById("result-city").textContent = data.city || '-';
                            document.getElementById("result-zip").textContent = data.zip || '-';
                            document.getElementById("result-isp").textContent = data.isp || '-';
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
                        showError('error', 'Fehler beim Abrufen der eigenen IP-Daten: ' + error);
                        document.getElementById("result-ip").textContent = '-';
                        document.getElementById("result-country").textContent = '-';
                        document.getElementById("result-region").textContent = '-';
                        document.getElementById("result-city").textContent = '-';
                        document.getElementById("result-zip").textContent = '-';
                        document.getElementById("result-isp").textContent = '-';
                    });
            } else {
                showError('error', 'Eigene IP konnte nicht abgerufen werden.');
                document.getElementById("result-ip").textContent = '-';
                document.getElementById("result-country").textContent = '-';
                document.getElementById("result-region").textContent = '-';
                document.getElementById("result-city").textContent = '-';
                document.getElementById("result-zip").textContent = '-';
                document.getElementById("result-isp").textContent = '-';
            }
        } catch (error) {
            showError('error', 'Fehler beim Abrufen der eigenen IP: ' + error);
            document.getElementById("result-ip").textContent = '-';
            document.getElementById("result-country").textContent = '-';
            document.getElementById("result-region").textContent = '-';
            document.getElementById("result-city").textContent = '-';
            document.getElementById("result-zip").textContent = '-';
            document.getElementById("result-isp").textContent = '-';
        }
    });
}