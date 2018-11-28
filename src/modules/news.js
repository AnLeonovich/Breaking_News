import { CHANNELS_LOGO, BODY } from './constants'
import { init } from './init'

export default class CreateNewsPage {
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