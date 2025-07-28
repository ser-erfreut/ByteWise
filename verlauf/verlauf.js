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
                <button onclick="deleteEntry(${entry.id})" 
                        class="mt-2 text-red-600 text-sm hover:text-red-800">
                    Löschen<i class="fa-solid fa-trash"></i>
                </button>
            `;
        container.appendChild(entryDiv);
    })
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
