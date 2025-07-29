async function willkommen() {
        try {
            const ip = await getIp();

            if (ip) {
                document.getElementById('willkommen').innerHTML = `Willkommen ${ip}`;
            }
        } catch (error) {
            console.error('Fehler beim Abrufen der IP:', error);
        }

}