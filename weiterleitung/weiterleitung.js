function ladeSeite(){
    const urlParams = new URLSearchParams(window.location.search);
    const weiterleitung = urlParams.get('weiterleitung');
    const protokoll = urlParams.get('protokoll');
    const id = urlParams.get('id');
    const link = protokoll + weiterleitung;


    const buttons = document.createElement('div');
    buttons.classList.add('flex', 'justify-center', 'mt-4');
    buttons.innerHTML = `
    
    <button id="akzeptieren" onclick="track('${link}', ${id})">Akzeptieren</button>
    <button id="ablehnen" onclick="noTrack('${link}')">Ablehnen</button>
    `;

    document.getElementById('cookies').appendChild(buttons);
}

function track(url, id){
    geolocate(true, id).then(r =>
    {
        window.location.href = url;
    });
}

function noTrack(url){
    window.location.href = url;
}