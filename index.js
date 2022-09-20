
import dogs from "./data.js"
import {Dog} from "./Dog.js"


let currentDogIndex = 0;
let currentDog = new Dog(dogs[currentDogIndex])

function getNewDog() {
    currentDogIndex += 1
    if(currentDogIndex === 3) {
        document.getElementById('main-container').innerHTML = `<div class='no-more-dogs'>No more dogs. Try again later.</div>`
    } else {
    currentDog = new Dog(dogs[currentDogIndex])
    document.getElementById('nope-icon').style.display = 'none'
    document.getElementById('like-icon').style.display = 'none'
    renderDog()
    }
    
}

function nope() {
    document.getElementById('nope-icon').style.display = 'block'
    document.getElementById('like-icon').style.display = 'none'
    setTimeout(() => getNewDog(), 1000);
}
function like() {
    document.getElementById('like-icon').style.display = 'block'
    document.getElementById('nope-icon').style.display = 'none'
    setTimeout(() => getNewDog(), 1000);
}

document.getElementById('btn-cross').addEventListener('click', nope)
document.getElementById('btn-heart').addEventListener('click', like)

function renderDog() {
    document.getElementById('dog-info').innerHTML = currentDog.renderDogHtml()
}

renderDog()
