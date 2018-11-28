import CNN from '../content/CNN.svg'
import Fox_News from '../content/Fox_News.svg'
import Google from '../content/Google.svg'
import MTV from '../content/MTV.svg'
import National_Geographiс from '../content/National_Geographiс.svg'
import New_York_Times from '../content/New_York_Times.svg'
import WSJ from '../content/WSJ.svg'
import Washington_Times from '../content/Washington_Times.jpg'
import USA_Today from '../content/USA_Today.svg'

const NEWS_CHANNELS = ['cnn', 'google-news', 'the-washington-times', 'the-new-york-times', 'national-geographic',
  'fox-news', 'usa-today', 'the-wall-street-journal', 'mtv-news']

const CHANNELS_LOGO = {
  'cnn': CNN,
  'fox-news': Fox_News,
  'google-news': Google,
  'mtv-news': MTV,
  'national-geographic': National_Geographiс,
  'the-new-york-times': New_York_Times,
  'the-wall-street-journal': WSJ,
  'the-washington-times': Washington_Times,
  'usa-today': USA_Today
}

const BODY = document.querySelector('body')

export { NEWS_CHANNELS, CHANNELS_LOGO, BODY }