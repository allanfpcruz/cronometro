//variáveis e constantes
const minuteEL = document.querySelector('#minutes')
const secondEl = document.querySelector('#seconds')
const milisecondEl = document.querySelector('#miliseconds')
const startBtn = document.querySelector('#startbtn')
const pauseBtn = document.querySelector('#pausebtn')
const continueBtn = document.querySelector('#continuebtn')
const restartBtn = document.querySelector('#restartbtn')

let interval 
let listTime = []
let minutes = 0
let seconds = 0
let miliseconds = 0
let isPaused = false

//eventos
startBtn.addEventListener('click', startTimer)

pauseBtn.addEventListener('click', pauseTimer)

continueBtn.addEventListener('click', continueTimer)

restartBtn.addEventListener('click', restartTimer)

//classe
class Time {
    constructor(min, sec, milisec) {
    this.min = min
    this.sec = sec
    this.milisec = milisec
    }
}


//funções
function startTimer() {
    isPaused = false
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

            startBtn.style.display = 'none'
            pauseBtn.style.display = 'block'
        }

        milisecondEl.innerHTML = formatMiliseconds(miliseconds)
        secondEl.innerHTML = formatTime(seconds)
        minuteEL.innerHTML = formatTime(minutes)

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
    pauseBtn.style.display = 'none'
    continueBtn.style.display = 'block'
}

function continueTimer() {
    isPaused = false
    continueBtn.style.display = 'none'
    pauseBtn.style.display = 'block'
}

function restartTimer() {
    clearInterval(interval)

    let time = new Time(minutes, seconds, miliseconds)
    listTime.push(time)
    console.log(listTime)

    minutes = 0
    seconds = 0
    miliseconds = 0

    minuteEL.innerHTML = '00'
    secondEl.innerHTML = '00'
    milisecondEl.innerHTML = '000'

    startBtn.style.display = 'block'
    pauseBtn.style.display = 'none'
    continueBtn.style.display = 'none'
}