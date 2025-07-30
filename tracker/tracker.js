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