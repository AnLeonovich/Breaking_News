import { NEWS_CHANNELS, GET } from './constants'
import Server from './server/server'

const getAllSources = async () => {
  try {
    const filter = 'sources?'
    let request = new Server(GET, filter)
    let responseSources = await request.send()
    let sources = await responseSources.json()

    if (sources.status === 'error') {
      throw new Error(sources.message)
    }

    return sources
  } catch (err) {
    showError(err.message)
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
    let request = new Server(GET, filter)
    let responseSources = await request.send()
    let news = await responseSources.json()

    if (news.status === 'error') {
      throw new Error(sources.message)
    }

    return news
  } catch (err) {
    showError(err.message)
  }
}

const showError = (message) => {
  import( /* webpackChunkName: "errorHandler" */ './server/errorHandler').then((module) => {
    let ErrorHandler = module.default
    new ErrorHandler().showError(message)
  })
}

export { getAllSources, makeSourcesList, getNews }
