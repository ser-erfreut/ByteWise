function ipToLong(ip){
    return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet, 10), 0) >>> 0;
}

function longToIp(long){
    return[
        (long >>> 24) & 255,
        (long >>> 16) & 255,
        (long >>> 8) & 255,
        long & 255
    ].join('.');
}

function calculateSubnet(ipCidr){
    try{
        const [ip, cidrStr] = ipCidr.split('/');
        const cidr = parseInt(cidrStr, 10);

        if(isNaN(cidr) || cidr < 0 || cidr > 32){
            throw new Error("Ungültige CIDR-Notation.");
        }
        if(!/^((\d{1,3}\.){3}\d{1,3})$/.test(ip) || ip.split('.').some(octet => parseInt(octet) > 255)) {
            throw new Error("Ungültige IP-Adresse.");
        }
        if(ip.split('.').length !== 4){
            throw new Error("IP-Adresse muss vier Oktette enthalten.");
        }
        if(!cidrStr || cidrStr.trim() === ''){
            throw new Error("CIDR-Notation fehlt.");
        }

        const ipLong = ipToLong(ip);
        const subnetMaskLong = (0xFFFFFFFF << (32 - cidr)) >>> 0;
        const networkAddressLong = (ipLong & subnetMaskLong) >>> 0;
        const broadcastAddressLong = (networkAddressLong | ~subnetMaskLong) >>> 0;
        
        const firstHostLong = networkAddressLong + 1;
        const lastHostLong = broadcastAddressLong - 1;

        const totalHosts = Math.pow(2, 32 - cidr);
        const usableHosts = totalHosts > 2 ? totalHosts - 2 : 0;

        return{
            ipAddress: ip,
            subnetMask: longToIp(subnetMaskLong),
            networkAddress: longToIp(networkAddressLong),
            broadcastAddress: longToIp(broadcastAddressLong),
            hostRange: `${longToIp(firstHostLong)} - ${longToIp(lastHostLong)}`,
            totalHosts: totalHosts,
            usableHosts: usableHosts
        };
    } 
    catch(error){
        return { error: error.message };
    }
}

function calculate(){
    const ipCidr = document.getElementById('ipAddress').value;
    const results = calculateSubnet(ipCidr);
    const resultsDiv = document.getElementById('results');
            
    if(results.error){
        showError('error',`Fehler: ${results.error}`);
    } 
    else{
        resultsDiv.innerHTML = `<pre>${JSON.stringify(results, null, 2)}</pre>`;
    }
}
function speichern() {
    const ipCidr = document.getElementById('ipAddress').value;
    const results = calculateSubnet(ipCidr);

    if (results.error) {
        showError('error', 'Die Daten konnten nicht gespeichert werden.');
        console.error("Error saving subnet data:", results.error);
        return;
    }

    try {
        let savedCalculations = JSON.parse(localStorage.getItem('subnetCalculations')) || [];

        const entry = {
            id: Date.now(),
            brodcastAddress: results.broadcastAddress,
            networkAddress: results.networkAddress,
            timestamp: new Date().toISOString(),
            ipCidr: ipCidr,
            data: results
        };

        savedCalculations.push(entry);

        localStorage.setItem('subnetCalculations', JSON.stringify(savedCalculations));

        showError('success', 'Subnet-Daten erfolgreich gespeichert!');
    } catch (error) {
        showError('error', 'Fehler beim Speichern der Daten');
        console.error("Error saving data:", error);
    }
}

async function myIpAdress() {
    const ip = await getIp();

    if (ip != null) {
        document.getElementById('ipAddress').value = ip;
    } else {
        showError('warning', 'Bitte akzeptiere erst die Cookies.');
        cookies();
    }
}