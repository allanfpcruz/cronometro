//variáveis e constantes
const minuteEL = document.querySelector('#minutes')
const secondEl = document.querySelector('#seconds')
const milisecondEl = document.querySelector('#miliseconds')
const startBtn = document.querySelector('#startbtn')
const pauseBtn = document.querySelector('#pausebtn')
const continueBtn = document.querySelector('#continuebtn')
const restartBtn = document.querySelector('#restartbtn')

let interval 
let minutes = 0
let seconds = 0
let miliseconds = 0
let isPaused = false

//eventos
startBtn.addEventListener('click', startTimer)

pauseBtn.addEventListener('click', pauseTimer)


//funções
function startTimer() {
    interval = setInterval(() => {

        if(!isPaused) {

            miliseconds += 10

            if(miliseconds == 1000) {
                seconds++
                miliseconds = 0
            }

            if(seconds == 60) {
                minutes++
                seconds = 0
            }

        }

        milisecondEl.innerHTML = formatMiliseconds(miliseconds)
        secondEl.innerHTML = formatTime(seconds)
        minuteEL.innerHTML = formatTime(minutes)

        startBtn.classList.add('hide')
        pauseBtn.classList.remove('hide')
    }, 10)

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time
}

function formatMiliseconds(time) {
    return time < 10 ? `${time}`.padStart(3, '0') : time
}

function pauseTimer() {
    isPaused = true
    pauseBtn.classList.add('hide')
    continueBtn.classList.remove('hide')
}