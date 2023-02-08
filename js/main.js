import { Router } from './router.js'

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html",)
router.add("/exploration", "/pages/exploration.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

//background change 
const backgroundImage = document.getElementById('body')
const homeLink = document.getElementById('home')
const universeLink = document.getElementById('universe')
const explorationLink = document.getElementById('exploration')

homeLink.addEventListener('click', function() {
    backgroundImage.style.backgroundImage = 'url(./assets/home.png)';
})

universeLink.addEventListener('click', function() {
    backgroundImage.style.backgroundImage = 'url(./assets/universe.png)';
})

explorationLink.addEventListener('click', function() {
    backgroundImage.style.backgroundImage = 'url(./assets/exploration.png)';
})