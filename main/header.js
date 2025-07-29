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