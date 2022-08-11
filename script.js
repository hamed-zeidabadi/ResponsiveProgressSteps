'use strict'
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const progress = document.getElementById('progress')
const circles = document.querySelectorAll('.circle')
let currentActive = 1;
const checkDisable = () => {
    if (currentActive === 1) {
        prev.disabled = true;
        prev.style.cursor = 'not-allowed'
    }
    else if (currentActive === circles.length) {
        next.disabled = true;
        next.style.cursor = 'not-allowed'


    } else {
        prev.style.cursor = 'pointer'
        next.style.cursor = 'pointer'
        prev.disabled = false
        next.disabled = false

    }
}
checkDisable();

const update = () => {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active')
        }
        else {
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';


}

next.addEventListener('click', () => {
    currentActive++
    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    update();
    checkDisable();

})
prev.addEventListener('click', () => {
    currentActive--
    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    update();
    checkDisable();

})


