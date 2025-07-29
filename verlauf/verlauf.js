function getVerlauf(ipAdressen) {
    try {
        showRight(ipAdressen);
        let data = [];
        if (ipAdressen) {
            data = localStorage.getItem('ipAdresses');
        } else {
            data = localStorage.getItem('subnetCalculations');
        }

        if (!data || data === 'null') {
            document.getElementById('verlauf').innerHTML = '<p class="text-gray-500 text-center p-4">Keine Einträge vorhanden</p>';
            return;
        }

        data = JSON.parse(data);

        const container = document.getElementById('verlauf');
        if (!container) {
            console.error('Container-Element nicht gefunden');
            return;
        }
        container.innerHTML = '';

        if (data.length === 0) {
            container.innerHTML = '<p class="text-gray-500 text-center p-4">Keine Einträge vorhanden</p>';
            return;
        }

        data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

        data.forEach(entry => {
            try {
                const entryDiv = document.createElement('div');
                entryDiv.className = 'mb-4 p-4 bg-gray-50 rounded-lg shadow';
                if (ipAdressen){
                    entryDiv.innerHTML = `
                    <div class="flex justify-between items-center mb-2">
                        <span class="font-medium">${entry.ipCidr || 'Keine IP'}</span>
                        <span class="text-sm text-gray-500">${new Date(entry.timestamp).toLocaleString('de-DE')}</span>
                    </div>
                    <div class="flex gap-2 mt-4">
                        <button onclick="copyText('${entry.ipCidr}')"
                            class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                            Kopieren <i class="fa-regular fa-copy ml-2"></i>
                        </button>
                        <button onclick="deleteEntry(${entry.id}, true)" 
                            class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300">
                            Löschen <i class="fa-regular fa-trash-can ml-2"></i>
                        </button>
                    </div>
                    `;

                } else {
                    entryDiv.innerHTML = `
                    <div class="flex justify-between items-center mb-2">
                        <span class="font-medium">${entry.ipCidr || 'Keine IP'}</span>
                        <span class="text-sm text-gray-500">${new Date(entry.timestamp).toLocaleString('de-DE')}</span>
                    </div>
                    <div class="text-sm">
                        <div>Netzwerk: ${entry.data?.networkAddress || 'N/A'}</div>
                        <div>Broadcast: ${entry.data?.broadcastAddress || 'N/A'}</div>
                        <div>Nutzbare Hosts: ${entry.data?.usableHosts || 'N/A'}</div>
                    </div>
                    <div class="flex gap-2 mt-4">
                        <button onclick="copyText('${entry.ipCidr}')"
                            class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                            Kopieren <i class="fa-regular fa-copy ml-2"></i>
                        </button>
                        <button onclick="deleteEntry(${entry.id})" 
                            class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300">
                            Löschen <i class="fa-regular fa-trash-can ml-2"></i>
                        </button>
                    </div>
                `;
                }

                container.appendChild(entryDiv);
            } catch (error) {
                console.error('Fehler beim Erstellen des Eintrags:', error);
            }
        });
    } catch (error) {
        console.error('Fehler beim Laden des Verlaufs:', error);
        document.getElementById('verlauf').innerHTML = '<p class="text-red-500 text-center p-4">Fehler beim Laden der Daten</p>';
    }
}

function showRight(ipAdressen) {
    const subnetsButton = document.querySelector('#subnetsButton');
    const ipAddressButton = document.querySelector('#ipAdressenButton');
    const text = document.querySelector('#verlaufText');

    const activeClasses = 'text-blue-600 hover:text-blue-800 font-medium border-b-2 border-blue-600';
    const inactiveClasses = 'text-gray-500 hover:text-gray-700 font-medium border-b-2 border-transparent';
    if (ipAdressen) {
        text.innerHTML = 'Gespeicherte IP Adressen';
        subnetsButton.classList.remove(...activeClasses.split(' '));
        subnetsButton.classList.add(...inactiveClasses.split(' '));

        ipAddressButton.classList.remove(...inactiveClasses.split(' '));
        ipAddressButton.classList.add(...activeClasses.split(' '));

        document.getElementById('verlaufLoeschen').style.display = 'none';
        document.getElementById('ipAdressenLoeschen').style.display = 'block';
    } else {
        text.innerHTML = 'Gespeicherte Subnetz-Berechnungen';
        subnetsButton.classList.remove(...inactiveClasses.split(' '));
        subnetsButton.classList.add(...activeClasses.split(' '));

        ipAddressButton.classList.remove(...activeClasses.split(' '));
        ipAddressButton.classList.add(...inactiveClasses.split(' '));


        document.getElementById('verlaufLoeschen').style.display = 'block';
        document.getElementById('ipAdressenLoeschen').style.display = 'none';
    }
}

function copyText(text) {
    navigator.clipboard.writeText(text)
        .then(() => showError('success', 'Text wurde kopiert!'))
        .catch(() => showError('error', 'Fehler beim Kopieren'));
}

function deleteEntry(id, ipAdressen = false) {
    try {
        let data = [];

        if (ipAdressen) {
            data = JSON.parse(localStorage.getItem('ipAdresses'));
        } else {
            data = JSON.parse(localStorage.getItem('subnetCalculations'));
        }

        data = data.filter(entry => entry.id !== id);

        if (ipAdressen) {
            localStorage.setItem('ipAdresses', JSON.stringify(data));
        } else {
            localStorage.setItem('subnetCalculations', JSON.stringify(data));
        }
        getVerlauf(ipAdressen);
        showError('success', 'Eintrag wurde gelöscht');
    } catch (error) {
        console.error('Fehler beim Löschen:', error);
        showError('error', 'Fehler beim Löschen des Eintrags');
    }
}
function deleteAllEntries(ipAdressen = false) {
    try {
        if (ipAdressen){
            localStorage.setItem('ipAdresses', JSON.stringify(null));
        } else {
            localStorage.setItem('subnetCalculations', JSON.stringify(null));
        }
        showError('success', 'Alle Einträge wurden gelöscht.')
        getVerlauf(ipAdressen);
    } catch (e) {
        showError('error', e)
    }
}