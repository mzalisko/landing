const burgerBtn = window.document.getElementById('burger')
const navBar = window.document.getElementById('navbar')

burgerBtn.addEventListener('click', function(e) {
    navBar.classList.toggle('active')
})
