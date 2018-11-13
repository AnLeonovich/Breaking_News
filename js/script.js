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

  const SOURCES_URL = 'https://newsapi.org/v2/sources?apiKey=e3215bd34807454996b9c3b1444aa82a'

  const getAllSources = async () => {
    let responseSources = await fetch(SOURCES_URL)
    let sources = await responseSources.json()
    return sources
  }

  const makeSourcesList = (sources) => {
    let sourcesList = {}
    let i = 0
    while (i < sources.length) {
      if (NEWS_CHANNELS.indexOf(sources[i].id) >= 0) {
        sourcesList[sources[i].id] = sources[i]
      }
      i++
    }
    return sourcesList
  }

  const getNews = async (source) => {
    let responseSource = await fetch(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=e3215bd34807454996b9c3b1444aa82a`)
    let news = await responseSource.json();
    return news
  }

  class createNewsPage {
    constructor(news){
      this.news = news
      this.createHeader()
    
      if (this.news.totalResults > 0) {
        this.news.articles.forEach((article, i) => this.createArticle(article, i))
      }
    }

    createHeader() {
      const { id, name } = this.news.source
      const body = document.querySelector('body')
      
      body.innerHTML = `
        <header class='header'>
          <h1 class='header__title'>${name}</h1>
        </header>
        <main>
          <div id='articles' class='articles'></div>
        <main>
        <footer class='footer'>
          <img alt='Channel Logo' src=${CHANNELS_LOGO[id]} class='footer__logo'>
        </footer>
      `
      this.wrapper = document.getElementById('articles')  
    }

    createArticle(article, i) {
      this.wrapper.innerHTML += `
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

  class CreateChannel {
    constructor (channel) {
      this.channel = channel
      this.addChannel()
    }

    addChannel() {
      const { name, id, url } = this.channel
      const logo = CHANNELS_LOGO[id]
      const wrapper = document.getElementById('channels')

      wrapper.innerHTML += `
        <section class='channel'>
          <h2 class='channel__title'>${name}</h2>
          <img src=${logo} alt=${name} class='channel__logo'>
          <div class='channel__controls'><a href=${url} class='channel__controls_link'>Go to the website</a></div>
          <button class='channel__controls_button' data-channel=${id} data-name='${name}'>Check news</button>
        </section>
      `
    }
  }

  getAllSources()
    .then(result => {
      let sources = makeSourcesList(result.sources)
      return sources
    })
    .then(sources => {
      for (let channel in sources) {
        new CreateChannel(sources[channel])
      }
    })
    .then(() => {
      let checkNews = document.querySelectorAll('.channel__controls_button')
      checkNews.forEach(button => {
        button.addEventListener('click', (e) => {
          getNews(e.target.dataset.channel)
            .then(news => {
              new createNewsPage({ ...news, source: { id: e.target.dataset.channel, name:  e.target.dataset.name}})
            })
        })
      })
    })

})();
