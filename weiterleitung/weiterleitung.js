function ladeSeite(){
    const urlParams = new URLSearchParams(window.location.search);
    const weiterleitung = urlParams.get('weiterleitung');
    const protokoll = urlParams.get('protokoll');
    const id = urlParams.get('id');
    const link = protokoll + weiterleitung;


    const buttons = document.createElement('div');
    buttons.className = 'flex flex-col sm:flex-row gap-3 w-full';
    buttons.innerHTML = `
    
    <button class="w-full sm:w-auto px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
 id="akzeptieren" onclick="track('${link}', ${id})">Akzeptieren</button>
    <button class="w-full sm:w-auto px-6 py-2.5 bg-white text-gray-700 font-semibold rounded-lg hover:bg-gray-50 border border-gray-300 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
 id="ablehnen" onclick="noTrack('${link}')">Ablehnen</button>
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