import ButtonText from './json/textForButton.json'
import './css/style.css'

let button = document.getElementById('seeNews')
button.innerHTML = ButtonText

button.addEventListener('click', () => {
  seeNews()
})

function seeNews() {
  import( /* webpackChunkName: "init" */ './modules/init').then((module) => {
    module.init()
  })
}
