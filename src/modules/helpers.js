import { NEWS_CHANNELS } from './constants'

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

export { getAllSources, makeSourcesList, getNews }