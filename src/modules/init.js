import { getAllSources, makeSourcesList, getNews } from './helpers'
import CreateNewsPage from './news/news'
import CreateChannels from './channels/channels'
import '../css/header.css'
import '../css/footer.css'

export const init = async () => {
  let allSources = await getAllSources()
  let sources = makeSourcesList(allSources.sources)

  new CreateChannels(sources)

  let checkNews = document.querySelectorAll('.channel__controls_button')
  Array.from(checkNews).forEach(button => {
    button.addEventListener('click', async (e) => {
      let news = await getNews(e.target.dataset.channel)
      new CreateNewsPage({ ...news, source: { id: e.target.dataset.channel, name:  e.target.dataset.name}})
    })
  })
}