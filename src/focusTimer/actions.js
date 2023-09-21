import state from "./state.js"
import * as el from "./elements.js"
import * as timer from "./timer.js"
import * as sounds from "./sounds.js"

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')

  sounds.buttonPressAudio.play()
  timer.countdown()
}

export function reset() {
  timer.updateDisplay()
}

export function add5min(minutes) {
  minutes = state.minutes += 5

  if(minutes > 60) {
    minutes = state.minutes -= 5
    return
  }

  sounds.buttonPressAudio.play()
  el.minutes.textContent = String(minutes).padStart(2, "0")
}

export function sub5min(minutes) {
  minutes = state.minutes -= 5

  if(minutes < 0) {
    minutes = state.minutes += 5
    return
  }

  sounds.buttonPressAudio.play()
  el.minutes.textContent = String(minutes).padStart(2, "0")
}

export function forestSound() {
  state.forestSound = document.documentElement.classList.toggle('forest-sound-on')


  if(state.forestSound) {
    document.documentElement.classList.add('bgForest')
    sounds.forestSound.play()
    sounds.rainSound.pause()
    document.documentElement.classList.remove('bgRain')
    sounds.bonfireSound.pause()
    document.documentElement.classList.remove('bgFire')
    sounds.cafeSound.pause()
    document.documentElement.classList.remove('bgCafe')
    return
  }
  document.documentElement.classList.remove('bgForest')
  sounds.forestSound.pause()
}

export function rainSound() {
  state.rainSound = document.documentElement.classList.toggle('rain-sound-on')

  if(state.rainSound) {
    document.documentElement.classList.add('bgRain')
    sounds.rainSound.play()
    sounds.bonfireSound.pause()
    document.documentElement.classList.remove('bgFire')
    sounds.cafeSound.pause()
    document.documentElement.classList.remove('bgCafe')
    sounds.forestSound.pause()
    document.documentElement.classList.remove('bgForest')
    return
  }
  document.documentElement.classList.remove('bgRain')
  sounds.rainSound.pause()
}

export function cafeSound() {
  state.cafeSound = document.documentElement.classList.toggle('cafe-sound-on')

  if(state.cafeSound) {
    document.documentElement.classList.add('bgCafe')
    sounds.cafeSound.play()
    sounds.forestSound.pause()
    document.documentElement.classList.remove('bgForest')
    sounds.rainSound.pause()
    document.documentElement.classList.remove('bgRain')
    sounds.bonfireSound.pause()
    document.documentElement.classList.remove('bgFire')
    return
  }
  document.documentElement.classList.remove('bgCafe')
  sounds.cafeSound.pause()
}

export function bonfireSound() {
  state.bonfireSound = document.documentElement.classList.toggle('bonfire-sound-on')

  if(state.bonfireSound) {
    document.documentElement.classList.add('bgFire')
    sounds.bonfireSound.play()
    sounds.cafeSound.pause()
    document.documentElement.classList.remove('bgCafe')
    sounds.forestSound.pause()
    document.documentElement.classList.remove('bgForest')
    sounds.rainSound.pause()
    document.documentElement.classList.remove('bgRain')
    return
  }
  document.documentElement.classList.remove('bgFire')
  sounds.bonfireSound.pause()
}
