import { GetRequest, PostRequest, DeleteRequest, PutRequest } from './requests'
import { GET, POST, DELETE, PUT } from '../constants'

class CreateRequest {
  constructor (type, filter) {
    switch (type) {
      case GET:
        return new GetRequest(filter)
        break
      case POST:
        return new PostRequest(article)
        break
      case DELETE:
        return new DeleteRequest(articleId)
        break
      case PUT:
        return new PutRequest(articleId, field, value)
        break
      default:
        alert ('Unknown request type.')
        return new Error()
        break
    }
  }
}

const server = new Proxy(CreateRequest, {
  construct: function(target, argumentsList) {
    console.log(`New '${argumentsList[0]}' request`);
    return new target(...argumentsList);
  }
})

export default server