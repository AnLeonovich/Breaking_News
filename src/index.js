import ButtonText from './json/textForButton.json'
import './css/style.css'

let button = document.getElementById('seeNews')
button.innerHTML = ButtonText

button.addEventListener('click', () => {
  seeNews()
})

function seeNews() {
  import( /* webpackChunkName: "presenter" */ './modules/presenter/presenter').then((module) => {
    module.init()
  })
}
