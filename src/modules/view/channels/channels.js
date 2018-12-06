import { CHANNELS_LOGO, BODY } from '../../constants'
import './channels.css'



const createChannelsPage = (sources) => {
  createPage()
  let channelsHTML = addChannels(sources)

  document.getElementById('wrapper').innerHTML = channelsHTML
}

const createPage = () => {
  BODY.innerHTML = `
    <header class='header-channels'>
      <h1 class='header__title'>Breaking news</h1>
    </header>
    <main>
      <div id='wrapper' class='channels'></div>
    </main>
    <footer class='footer'>
      <span class='footer__link'>Powered by <a href='https://newsapi.org/'>NewsAPI.org</a></span>
    </footer>
  `
}

const addChannels = (sources) => {
  let channels = ''

  for (let channel of sources.values()) {
    const { name, id, url } = channel
    const logo = CHANNELS_LOGO[id]

    channels += `
    <section class='channel'>
      <h2 class='channel__title'>${name}</h2>
      <img src=${logo} alt=${name} class='channel__logo'>
      <div class='channel__controls'><a href=${url} class='channel__controls_link'>Go to the website</a></div>
      <button class='channel__controls_button' data-channel=${id} data-name='${name}'>Check news</button>
    </section>
  `
  }

  return channels
}

export default createChannelsPage
