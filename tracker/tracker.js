async function erstelleLink() {
    const weiterleitung = document.getElementById('weiterleitung').value;
    const protokoll = parseInt(document.getElementById('protokoll').value);
    let protokollLink = '';

    switch (protokoll) {
        case 1:
             protokollLink = 'http://';
            break;
        case 2:
            protokollLink += 'https://';
            break;
    }

    const id = await toDatabase(weiterleitung, protokollLink);

    let link = 'http://localhost:63342/htdocs/weiterleitung/weiterleitung.html?weiterleitung=' + weiterleitung + '&protokoll=' + protokollLink + '&id=' + id;

    document.getElementById('erstellterLink').innerHTML = link;

    document.getElementById('erstellterLinkContainer').style.display = 'block';
}
function getIdIp(){
    const id = document.getElementById('id').value;

    fetch('tracker.php?id=' + id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        response.json().then(data => {
            if (data.success) {
                buildIp(data.data);
            } else {
                showError('error', 'Fehler beim Laden: ' + data.error);
            }
        })
    }).catch(error => {
        showError('error', 'Fehler beim Laden: ' + error)
        console.log(error);
    })
}

function buildIp(data){
    const statsTable = document.getElementById('tableBody');
    statsTable.innerHTML = '';

    data.forEach(ip => {
        const entryDiv = document.createElement('tr');
        entryDiv.className = 'hover:bg-gray-50';
        entryDiv.innerHTML = `
<td class="px-6 py-4">
                            <div class="text-sm text-gray-900">
                                ${ip.stadt}
                            </div>
                        </td>
                    <tr class="hover:bg-gray-50">
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center">
                                <div class="text-sm font-medium text-gray-900">
                                    ${ip.land}
                                </div>
                            </div>
                        </td>
                        
                        
                        <td class="px-6 py-4">
                            <div class="text-sm text-gray-900">
                                ${ip.internet_anbieter}
                            </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">${ip.created_at}</div>
                        </td>
                    </tr>
                `;
        statsTable.appendChild(entryDiv);
    })
}

async function toDatabase(weiterleitung, protokoll) {
    const response = await fetch('tracker.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            weiterleitung: weiterleitung,
            protokoll: protokoll
        })
    });
    const data = await response.json();
    return data.success.lastval;

}