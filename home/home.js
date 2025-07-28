function willkommen(){
    ip = getIp();

    if (ip){
        document.getElementById('willkommen').innerHTML = `Willkommen ${ip}`;

    }
}