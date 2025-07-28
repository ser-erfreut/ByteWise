function header(){
    fetch('../header/header.html').then(res => res.text())
        .then(data => document.getElementById('header')
        .innerHTML = data)
}
function footer(){
    fetch('../footer/footer.html').then(res => res.text())
        .then(data => document.getElementById('footer')
        .innerHTML = data)
}
function mainLoad(){
    header();
    footer();
}
/**
 * Ermittelt die Anzahl der Unterordner vom Root-Verzeichnis bis zum aktuellen Pfad
 * @returns {number} Anzahl der Unterordner
 */
function getSubfolderCount() {
    try {
        // Hole den aktuellen Pfad und entferne f�hrende/nachfolgende Slashes
        const currentPath = window.location.pathname.replace(/^\/|\/$/g, '');

        // Wenn der Pfad leer ist, sind wir im Root
        if (!currentPath) {
            return 0;
        }

        // Z�hle die Slashes im bereinigten Pfad
        // Jeder Slash repr�sentiert eine Ordnerebene
        const subfolderCount = (currentPath.match(/\//g) || []).length + 1;

        return subfolderCount;

    } catch (error) {
        console.error('Fehler beim Ermitteln der Unterordner-Anzahl:', error);
        return 0;
    }
}
