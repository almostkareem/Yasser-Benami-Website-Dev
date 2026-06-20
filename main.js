import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.start()

import { animate, scroll } from "motion"

const video = document.getElementById('myVideo')
document.addEventListener('click', () => {
  if (video && video.paused) video.play()
}, { once: true })