import { Controls } from'./controls.js'
import { Timer } from './timer.js'

const buttonTimer = document.querySelector('#timer')
const buttonPlay = document.querySelector('.play');
const buttonStop = document.querySelector('.stop');
const buttonPlusFive = document.querySelector('.plusfive');
const buttonMinusFive = document.querySelector('.minusfive');
const buttonForest = document.querySelector('.forest');
const audioForest = new Audio('./assets/forest.wav')
const buttonRain = document.querySelector('.rain');
const audioRain = new Audio('./assets/rain.wav')
const buttonCoffeeShop = document.querySelector('.coffeeshop');
const audioCoffeeShop = new Audio('./assets/coffeeshop.wav')
const buttonFirePlace = document.querySelector('.fireplace');
const audioFirePlace = new Audio('./assets/fireplace.wav');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
let currentAudio = null;

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
})

const control = Controls({
  currentAudio,
  audioForest,
  audioRain,
  audioCoffeeShop,
  audioFirePlace,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFirePlace,
})

buttonTimer.addEventListener('click', function() {
  let minutesInput = prompt("Enter the minutes of the timer:");
  if (minutesInput) {
  minutesDisplay.textContent = String(minutesInput).padStart(2, "0");
  secondsDisplay.textContent = String("00")
  }
});

buttonPlay.addEventListener('click', function(){
  timer.countdown();
});

buttonStop.addEventListener('click', function() {
  timer.hold();
});

buttonPlusFive.addEventListener('click', function() {
  timer.plusFive();
});

buttonMinusFive.addEventListener('click', function () {
  timer.minusFive()
});

buttonForest.addEventListener('click', function () {
  control.toggleColor(buttonForest);
  control.playAudioForest(audioForest);
});

buttonRain.addEventListener('click', function () {
  control.toggleColor(buttonRain);
  control.playAudioRain(audioRain);
});

buttonCoffeeShop.addEventListener('click', function () {
  control.toggleColor(buttonCoffeeShop);
  control.playAudioCoffeeShop(audioCoffeeShop)
});

buttonFirePlace.addEventListener('click', function () {
  control.toggleColor(buttonFirePlace);
  control.playAudioFirePlace(audioFirePlace);
});

