setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()



var color = ["linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(233,159,16,1) 100%)","linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(6,116,187,1) 100%)"]
var i = 0;
document.querySelector("button").addEventListener("click",function(){
    i = i < color.length ? ++i :0;
    document.querySelector("body").style.background = color[i]
})