function header(){
    fetch('../header/header.html').then(res => res.text())
        .then(data =>
            document.getElementById('header').innerHTML = data
        )
}
function footer(){
    fetch('../footer/footer.html').then(res => res.text())
        .then(data =>
            document.getElementById('footer').innerHTML = data
        )
}
function mainLoad(){
    header();
    footer();
    print()
}

function print(){
    console.log('  ____            _                       _              \n' +
        ' |  _ \\          | |                     (_)             \n' +
        ' | |_) |  _   _  | |_    ___  __      __  _   ___    ___ \n' +
        ' |  _ <  | | | | | __|  / _ \\ \\ \\ /\\ / / | | / __|  / _ \\\n' +
        ' | |_) | | |_| | | |_  |  __/  \\ V  V /  | | \\__ \\ |  __/\n' +
        ' |____/   \\__, |  \\__|  \\___|   \\_/\\_/   |_| |___/  \\___|\n' +
        '           __/ |                                         \n' +
        '          |___/                                          \n' +
        '                                                         ');
}