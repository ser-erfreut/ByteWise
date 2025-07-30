function showError(type, message) {
    const existingError = document.getElementById('error-notification');
    if (existingError) {
        existingError.remove();
    }

    const errorDiv = document.createElement('div');
    errorDiv.id = 'error-notification';

    let bgColor, textColor, icon;
    switch(type) {
        case 'error':
            bgColor = 'bg-red-100';
            textColor = 'text-red-700';
            icon = '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>';
            break;
        case 'warning':
            bgColor = 'bg-yellow-100';
            textColor = 'text-yellow-700';
            icon = '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>';
            break;
        case 'info':
            bgColor = 'bg-blue-100';
            textColor = 'text-blue-700';
            icon = '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>';
            break;
        case 'success':
            bgColor = 'bg-green-100';
            textColor = 'text-green-700';
            icon = '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>';
            break;
    }

    errorDiv.className = `z-110 fixed top-20 right-4 flex items-center p-4 mb-4 ${bgColor} ${textColor} rounded-lg shadow-lg transition-all duration-500 transform translate-x-full`;
    errorDiv.innerHTML = `
        <div class="inline-flex flex-shrink-0 mr-3">
            ${icon}
        </div>
        <div class="text-sm font-medium">
            ${message}
        </div>
        <button type="button" class="ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 inline-flex h-8 w-8 ${textColor} hover:${bgColor} focus:outline-none" 
                onclick="this.parentElement.remove()">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
        </button>
    `;

    document.body.appendChild(errorDiv);

    setTimeout(() => {
        errorDiv.classList.remove('translate-x-full');
    }, 100);

    setTimeout(() => {
        errorDiv.classList.add('translate-x-full');
        setTimeout(() => {
            errorDiv.remove();
        }, 500);
    }, 5000);
}
async function getIp() {
    if (getCookie() === true) {
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            return data.ip;
        } catch (error) {
            console.error('Fehler beim Abrufen der IP:', error);
            return null;
        }
    }
}

function cookies(){
    const cookieDiv = document.createElement('div');
    cookieDiv.className = 'fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-6 transform transition-transform duration-500 ease-in-out z-50';
    cookieDiv.innerHTML = `
        <div class="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-4">
                <div class="text-blue-600">
                    <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                    </svg>
                </div>
                <div class="text-gray-800">
                    <h3 class="font-semibold text-lg mb-1">Cookie-Einstellungen</h3>
                    <p class="text-sm text-gray-600">Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Zu unseren <a href="../cookies/cookies.html">Cookies</a>.</p>
                </div>
            </div>
            <div class="flex gap-3">
                <button onclick="this.closest('div.fixed').remove(); setCookieFalse()" 
                        class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300">
                    Ablehnen
                </button>
                <button onclick="this.closest('div.fixed').remove(); setCookieTrue()" 
                        class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300">
                    Akzeptieren
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(cookieDiv);

    requestAnimationFrame(() => {
        cookieDiv.style.transform = 'translateY(0)';
    });

}
function setCookieTrue(){
    localStorage.setItem('cookie', 'true');
    location.reload();
}
function setCookieFalse(){
    localStorage.setItem('cookie', 'false');
    location.reload();
}

function getCookie(){
    const cookie = localStorage.getItem('cookie');
    if (cookie === 'true'){
        return true;
    } else if (cookie === 'false') {
        return false;
    } else {
        cookies();
    }
}