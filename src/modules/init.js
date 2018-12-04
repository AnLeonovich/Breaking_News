import { getAllSources, makeSourcesList, getNews } from './helpers'
import createNewsPage from './news/news'
import createChannelsPage from './channels/channels'
import '../css/header.css'
import '../css/footer.css'

export const init = async () => {
  try {
    let allSources = await getAllSources()
    let sources = makeSourcesList(allSources.sources)

    createChannelsPage(sources)

    let checkNews = document.querySelectorAll('.channel__controls_button')
    Array.from(checkNews).forEach(button => {
      button.addEventListener('click', async (e) => {
        let news = await getNews(e.target.dataset.channel)
        createNewsPage({ ...news, source: { id: e.target.dataset.channel, name:  e.target.dataset.name}})
      })
    })
  } catch (err) {
    console.error(err.message)
  }
}
