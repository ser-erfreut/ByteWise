function getVerlauf(ipAdressen) {
    try {
        let data = [];
        if (ipAdressen) {
            data = localStorage.getItem('ipAdressen');
        } else {
            data = localStorage.getItem('subnetCalculations');
        }

        if (!data) {
            console.log('Keine Daten im LocalStorage gefunden');
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
                    <div class="text-sm">
                        <div>Netzwerk: ${entry.data?.networkAddress || 'N/A'}</div>
                        <div>Broadcast: ${entry.data?.broadcastAddress || 'N/A'}</div>
                        <div>Nutzbare Hosts: ${entry.data?.usableHosts || 'N/A'}</div>
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

function copyText(text) {
    navigator.clipboard.writeText(text)
        .then(() => showError('success', 'Text wurde kopiert!'))
        .catch(() => showError('error', 'Fehler beim Kopieren'));
}

function deleteEntry(id) {
    try {
        let data = JSON.parse(localStorage.getItem('subnetCalculations')) || [];
        data = data.filter(entry => entry.id !== id);
        localStorage.setItem('subnetCalculations', JSON.stringify(data));
        getVerlauf(); // Neu laden
        showError('success', 'Eintrag wurde gelöscht');
    } catch (error) {
        console.error('Fehler beim Löschen:', error);
        showError('error', 'Fehler beim Löschen des Eintrags');
    }
}