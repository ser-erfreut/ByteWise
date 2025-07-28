function getVerlauf(){
    let data = localStorage.getItem('subnetCalculations');
    data = JSON.parse(data);


    const container = document.getElementById('verlauf');
    container.innerHTML = '<h3 class="text-lg font-bold mb-4">Gespeicherte Berechnungen:</h3>';

    data.forEach(entry => {
        const entryDiv = document.createElement('div');
        entryDiv.className = 'mb-4 p-4 bg-gray-50 rounded-lg shadow';
        entryDiv.innerHTML = `
                <div class="flex justify-between items-center mb-2">
                    <span class="font-medium">${entry.ipCidr}</span>
                    <span class="text-sm text-gray-500">${entry.timestamp}</span>
                </div>
                <div class="text-sm">
                    <div>Netzwerk: ${entry.data.networkAddress}</div>
                    <div>Broadcast: ${entry.data.broadcastAddress}</div>
                    <div>Nutzbare Hosts: ${entry.data.usableHosts}</div>
                </div>
                <button onclick="copyText('${entry.ipCidr}')"
                class="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition duration-300 mt-5">
                    Kopieren <i class="fa-regular fa-copy"></i>
                </button>
                <button onclick="deleteEntry(${entry.id})" 
                    class="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-800 transition duration-300 mt-5">
                   Löschen  <i class="fa-regular fa-trash-can"></i>
                </button>
            `;
        container.appendChild(entryDiv);
    })
}

async function copyText(text) {
    try {
        await navigator.clipboard.writeText(text);
        showError('success','Text wurde kopiert!');
    } catch (err) {
        console.error('Fehler beim Kopieren:', err);
        showError('error', 'Kopieren fehlgeschlagen');
    }
}


function deleteEntry(id) {
    try {
        let savedCalculations = JSON.parse(localStorage.getItem('subnetCalculations')) || [];
        savedCalculations = savedCalculations.filter(entry => entry.id !== id);
        localStorage.setItem('subnetCalculations', JSON.stringify(savedCalculations));

        showError('info', 'Eintrag wurde gelöscht');
        location.reload();
    } catch (error) {
        showError('error', 'Fehler beim Löschen des Eintrags');
        console.error("Error deleting entry:", error);
    }
}
