export function Controls({
    currentAudio,
    audioForest,
    audioRain,
    audioCoffeeShop,
    audioFirePlace,
    buttonForest,
    buttonRain,
    buttonCoffeeShop,
    buttonFirePlace,
}) {
  function toggleColor(button) {
    let paths = button.querySelectorAll("path")
    let path1 = paths[0]
    let path2 = paths[1]
    let currentColor1 = path1.getAttribute("fill")
    let currentColor2 = path2.getAttribute("fill")
  
    if (currentColor1 === "#E1E1E6" && currentColor2 === "#323238") {
      path1.setAttribute("fill", "#02799D")
      path2.setAttribute("fill", "#FFFFFF")
    } else {
      path1.setAttribute("fill", "#E1E1E6")
      path2.setAttribute("fill", "#323238")
    }
  }
  
  function playAudio(audio, button) {
    if (currentAudio === audio) {
      audio.pause()
      currentAudio = null
      toggleColor(button)
    } else {
      if (currentAudio) {
        currentAudio.pause()
        toggleColor(button)
      }
      audio.loop = true
      audio.currentTime = 0
      audio.play()
      currentAudio = audio
      toggleColor(button)
    }
  }
  
  function playAudioForest() {
    toggleColor(buttonForest)
    playAudio(audioForest, buttonForest)
  }
  
  function playAudioRain() {
    toggleColor(buttonRain)
    playAudio(audioRain, buttonRain)
  }
  
  function playAudioCoffeeShop() {
    toggleColor(buttonCoffeeShop)
    playAudio(audioCoffeeShop, buttonCoffeeShop)
  }
  
  function playAudioFirePlace() {
    toggleColor(buttonFirePlace)
    playAudio(audioFirePlace, buttonFirePlace)
  }

  return {
    toggleColor,
    playAudio,
    playAudioForest,
    playAudioRain,
    playAudioCoffeeShop,
    playAudioFirePlace,
  }

}

