(function(){
  const NEWS_CHANNELS = ['cnn', 'google-news', 'the-washington-times', 'the-new-york-times', 'national-geographic',
    'fox-news', 'usa-today', 'the-wall-street-journal', 'mtv-news']

  const CHANNELS_LOGO = {
    'cnn': './content/CNN.svg',
    'fox-news': './content/Fox_News.svg',
    'google-news':'./content/Google.svg',
    'mtv-news':'./content/MTV.svg',
    'national-geographic':'./content/National_Geographiс.svg',
    'the-new-york-times':'./content/New_York_Times.svg',
    'the-wall-street-journal': './content/WSJ.svg',
    'the-washington-times': './content/Washington_Times.jpg',
    'usa-today': './content/USA_Today.svg'
  }

  const BODY = document.querySelector('body')

  const getUrl = (filter) => `https://newsapi.org/v2/${filter}apiKey=e3215bd34807454996b9c3b1444aa82a`

  const getAllSources = async () => {
    try {
      const filter = 'sources?'
      let responseSources = await fetch(getUrl(filter))
      let sources = responseSources.json()
      return sources
    } catch (err) {
      console.log(err)
    }
  }

  const makeSourcesList = (sources) => {
    let sourcesList = new Map()
    let i = 0
    while (i < sources.length) {
      if (NEWS_CHANNELS.indexOf(sources[i].id) >= 0) {
        sourcesList.set(sources[i].id, sources[i])
      }
      i++
    }

    return sourcesList
  }

  const getNews = async (source) => {
    try {
      const filter = `top-headlines?sources=${source}&`
      let responseSource = await fetch(getUrl(filter))
      let news = responseSource.json();
      return news
    } catch (err) {
      console.log(err)
    }
  }

  class createNewsPage {
    constructor(news){
      this.news = news
      this.createPage()
      this.articles = ''
    
      if (this.news.totalResults > 0) {
        this.news.articles.forEach((article) => this.addArticle(article))
      }

      document.getElementById('wrapper').innerHTML += this.articles
    }

    createPage() {
      const { id, name } = this.news.source

      BODY.innerHTML = `
        <header class='header-news'>
          <button class='header__button'>Go Back</button>
          <h1 class='header__title'>${name}</h1>
        </header>
        <main>
          <div id='wrapper' class='articles'></div>
        </main>
        <footer class='footer'>
          <img alt='Channel Logo' src=${CHANNELS_LOGO[id]} class='footer__logo'>
        </footer>
      `

      document.querySelector('.header__button').addEventListener('click', () => {init()})
    }

    addArticle(article) {
      this.articles += `
        <article class='article'>
          <div class='article__image'>
            <img alt='Article intro picture' src=${article.urlToImage} class='article__image_img'>
          </div>
          <h2 class='article__title'>${article.title}</h2>
          <p class='article__description'>${article.description || ''}</p>
          <div class='article__info'>
            <p class='article__info_author'><span class='article__info_label'>Author: </span>${article.author || 'Unknown'}</p>
            <time class='article__info_time'><span class='article__info_label'>Published at: </span>${article.publishedAt ? new Date(article.publishedAt).toLocaleString() : 'Unknown'}</time>
            <form action="${article.url}" class='article__info_form'>
                <button type="submit" class='article__info_button'>Read</button>
            </form>
          </div>
        </article>
      `
    }
  }

  class CreateChannels {
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

const init = async () => {
  let allSources = await getAllSources()
  let sources = makeSourcesList(allSources.sources)

  new CreateChannels(sources)

  let checkNews = document.querySelectorAll('.channel__controls_button')
  Array.from(checkNews).forEach(button => {
    button.addEventListener('click', async (e) => {
      let news = await getNews(e.target.dataset.channel)
      new createNewsPage({ ...news, source: { id: e.target.dataset.channel, name:  e.target.dataset.name}})
    })
  })
}

init()

})();
