const redLight = document.querySelector(".light-red")
const yellowLight = document.querySelector(".light-yellow")
const greenLight = document.querySelector(".light-green")

function trafficLight() {
    setTimeout(() => {
        redLight.style.backgroundColor = 'red'
        yellowLight.style.backgroundColor = 'black'
    }, 500)

    setTimeout(() => {
        yellowLight.style.backgroundColor = 'yellow'
        redLight.style.backgroundColor = 'red'
    }, 5000)

    setTimeout(() => {
        yellowLight.style.backgroundColor = 'black'
        redLight.style.backgroundColor = 'red'
    }, 5500)

    setTimeout(() => {
        yellowLight.style.backgroundColor = 'yellow'
        redLight.style.backgroundColor = 'red'
    }, 6000)

    setTimeout(() => {
        yellowLight.style.backgroundColor = 'black'
        redLight.style.backgroundColor = 'black'
    }, 6500)

    setTimeout(() => {
        yellowLight.style.backgroundColor = 'yellow'
        redLight.style.backgroundColor = 'black'
    }, 7000)

    setTimeout(() => {
        yellowLight.style.backgroundColor = 'black'
        redLight.style.backgroundColor = 'black'
    }, 7500)

    setTimeout(() => {
        yellowLight.style.backgroundColor = 'yellow'
        redLight.style.backgroundColor = 'black'
    }, 8000)

    setTimeout(() => {
        greenLight.style.backgroundColor = 'lime'
        redLight.style.backgroundColor = 'black'
        yellowLight.style.backgroundColor = 'black'
    }, 8500)

    setTimeout(() => {
        yellowLight.style.backgroundColor = 'yellow'
        greenLight.style.backgroundColor = 'black'
        redLight.style.backgroundColor = 'black'
    }, 13500)

    setTimeout(() => {
        yellowLight.style.backgroundColor = 'black'
        greenLight.style.backgroundColor = 'black'
        redLight.style.backgroundColor = 'black'
    }, 13000)

    setTimeout(() => {
        yellowLight.style.backgroundColor = 'yellow'
        greenLight.style.backgroundColor = 'black'
        redLight.style.backgroundColor = 'black'
    }, 13500)

    setTimeout(() => {
        yellowLight.style.backgroundColor = 'black'
        greenLight.style.backgroundColor = 'black'
        redLight.style.backgroundColor = 'black'
    }, 14000)

    setTimeout(() => {
        yellowLight.style.backgroundColor = 'yellow'
        greenLight.style.backgroundColor = 'black'
        redLight.style.backgroundColor = 'black'
    }, 14500)

    setTimeout(() => {
        yellowLight.style.backgroundColor = 'black'
        greenLight.style.backgroundColor = 'black'
        redLight.style.backgroundColor = 'black'
    }, 15000)

    setTimeout(() => {
        yellowLight.style.backgroundColor = 'yellow'
        greenLight.style.backgroundColor = 'black'
        redLight.style.backgroundColor = 'black'
    }, 15500)
}
trafficLight()

setInterval(() => {
    trafficLight()
}, 15500);