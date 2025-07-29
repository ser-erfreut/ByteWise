function geolocate(){
    document.getElementById("search-btn").addEventListener("click", function() {
        var inputValueIP = document.getElementById("InputIP").value;
        if (inputValueIP) {
            
            fetch(`http://ip-api.com/json/${inputValueIP}`)
                .then(response => response.json())
                .then(data => {
                    if (data.status === 'success') {
                        alert(`IP Address: ${data.query}\nCountry: ${data.country}\nRegion: ${data.regionName}\nCity: ${data.city}\nISP: ${data.isp}`);
                    } else {
                        alert('Error retrieving data for the provided IP address.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('An error occurred while fetching the IP address information.');
                });
        } else {
            alert('No IP address entered.');
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
                            alert(`Your IP Address: ${data.query}\nCountry: ${data.country}\nRegion: ${data.regionName}\nCity: ${data.city}\nISP: ${data.isp}`);
                        } else {
                            alert('Error retrieving data for your IP address.');
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        alert('An error occurred while fetching your IP address information.');
                    });
            } else {
                alert('Could not retrieve your IP address.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while fetching your IP address.');
        }
    });
}