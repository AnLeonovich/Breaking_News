const getUrl = (filter) => `https://newsapi.org/v2/${filter}apiKey=e3215bd34807454996b9c3b1444aa82a`

class GetRequest {
  constructor (filter) {
    this.filter = filter
  }
  send = async () => {
    return await fetch (getUrl(this.filter))
  } 
}

class PostRequest {
  constructor (article) {
    this.article = article
  }
  send = async () => {
    return await fetch ('url to post new article', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.article)
    })
  } 
}

class DeleteRequest {
  constructor (articleId) {
    this.articleId = articleId
  }
  send = async () => {
    return await fetch ('url to delete article by Id', {
      method: 'DELETE',
      body: JSON.stringify(this.articleId)
    })
  } 
}

class PutRequest {
  constructor (articleId, field, value) {
    this.newValue = {
      id: articleId,
      field: value
    }
  }
  send = async () => {
    return await fetch ('url to update article by Id with new data', {
      method: 'PUT',
      body: JSON.stringify(this.newValue)
    })
  } 
}

export { GetRequest, PostRequest, DeleteRequest, PutRequest }