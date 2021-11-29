const EVENTS_URL = `${process.env.REACT_APP_API_ENDPOINT}/events`
let linkParams = {
  first: '',
  prev: '',
  next: '',
  last: ''
};
function setLinkParams (respHeaders) {
  const link = respHeaders.get('Link').split(', ')
  linkParams = link.reduce((params, param) => {
    const [, value, key] = param.match(/<(.*)>; rel="(.*)"/)
    params[key] = value
    return params
  }, {})
}
function eventDecorator (event) {
  event.createdDate = new Date(event.createdAt).toLocaleString()
  return event
}
const eventsService = {
  getEvents: () => {
    return fetch(`${EVENTS_URL}?_page=1&_limit=20`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error('Something went wrong fetching /events')
      }
      setLinkParams(resp.headers)
      return resp.json()
        .then(resp => resp.map(eventDecorator))
    })
  }
}

export default eventsService