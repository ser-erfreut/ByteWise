async function loadStatistics() {
    try {
        const response = await fetch('getStatistics.php', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();

        if (!data.success) {
            showError('error', data.message);
            return;
        }

        const totalVisitors = data.laender.reduce((sum, land) => sum + parseInt(land.anzahl), 0);
        document.getElementById('totalVisitors').textContent = `Gesamt: ${totalVisitors} Besucher`;

        const countryData = {
            labels: data.laender.map(item => item.land),
            datasets: [{
                data: data.laender.map(item => item.anzahl),
                backgroundColor: generateColors(data.laender.length)
            }]
        };

        new Chart(document.getElementById('countryChart'), {
            type: 'doughnut',
            data: countryData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right'
                    }
                }
            }
        });

        const cityData = {
            labels: data.staedte.map(item => item.stadt),
            datasets: [{
                label: 'Besucher',
                data: data.staedte.map(item => item.anzahl),
                backgroundColor: '#4F46E5',
                borderColor: '#4338CA',
                borderWidth: 1
            }]
        };

        new Chart(document.getElementById('cityChart'), {
            type: 'bar',
            data: cityData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                    }
                }
            }
        });

        const statsTable = document.getElementById('detailedStats');

        data.laender.forEach(land => {
            const entryDiv = document.createElement('tr');
            entryDiv.className = 'hover:bg-gray-50';
            entryDiv.innerHTML = `
                    <tr class="hover:bg-gray-50">
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center">
                                <div class="text-sm font-medium text-gray-900">
                                    ${land.land}
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">${land.anzahl}</div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="text-sm text-gray-900">
                                ${land.staedte}
                            </div>
                        </td>
                    </tr>
                `;
            statsTable.appendChild(entryDiv);
        });


    } catch (error) {
        showError('error', 'Fehler beim Laden der Statistiken');
        console.error('Fehler:', error);
    }
}

function generateColors(count) {
    const colors = [];
    for (let i = 0; i < count; i++) {
        colors.push(`hsl(${(i * 360) / count}, 70%, 60%)`);
    }
    return colors;
}