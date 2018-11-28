import { CHANNELS_LOGO, BODY } from './constants'

export default class CreateChannels {
  constructor (sources) {
    this.channels = ''
    this.createPage()

    for (let channel of sources.values()) {
      this.addChannel(channel)
    }

    document.getElementById('wrapper').innerHTML = this.channels
  }

  createPage() {
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

  addChannel(channel) {
    const { name, id, url } = channel
    const logo = CHANNELS_LOGO[id]
    
    this.channels += `
      <section class='channel'>
        <h2 class='channel__title'>${name}</h2>
        <img src=${logo} alt=${name} class='channel__logo'>
        <div class='channel__controls'><a href=${url} class='channel__controls_link'>Go to the website</a></div>
        <button class='channel__controls_button' data-channel=${id} data-name='${name}'>Check news</button>
      </section>
    `
  }
}