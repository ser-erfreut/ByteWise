async function geolocate(ownIp = false, id= null){
    let dataValue = []
    if (id === null){
        dataValue = [
            {id: "result-ip", value: "-"},
            {id: "result-country", value: "-"},
            {id: "result-region", value: "-"},
            {id: "result-city", value: "-"},
            {id: "result-zip", value: "-"},
            {id: "result-isp", value: "-"}
        ]
    }

    let inputValueIP
    if (ownIp) {
        if (getCookie() === false){
            showError('error', 'Bitte Akzeptiere die Cookies.');
            cookies();
            return;
        }

        inputValueIP = await getIp()

        if (id === null){
            document.getElementById("InputIP").value = inputValueIP;
        }
    } else {
        inputValueIP = document.getElementById("InputIP").value;
    }
    if (inputValueIP) {
        fetch(`http://ip-api.com/json/${inputValueIP}`)
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    if (id === null){
                        dataValue = [
                            {id: "result-ip", value: data.query},
                            {id: 'result-country', value: data.country},
                            {id: 'result-region', value: data.regionName},
                            {id: 'result-city', value: data.city},
                            {id: 'result-zip', value: data.zip},
                            {id: 'result-isp', value: data.isp},
                        ];
                        setValue(dataValue);
                    }
                    copyInDatabase(data.query, data.country, data.regionName, data.city, data.isp, id);
                } else {
                    setValue(dataValue);
                    showError('error', 'Fehler beim Laden der IP-Adresse: ' + data.status);
                }
            })
            .catch(error => {
                setValue(dataValue);
                showError('error', 'Fehler beim Laden der IP-Adresse: ' + error)
            });
    } else {
        setValue(dataValue);
    }}

function setValue(data){
    data.forEach(element => {
        document.getElementById(element.id).textContent = element.value;
    })
}

function copyInDatabase(ip, land, region, stadt, internet_anbieter, id = null){
    fetch('../ipgeolocator/toDatabase.php', {
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
            tracked_id: id,
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