const EVENTS_URL = `${process.env.REACT_APP_API_ENDPOINT}/events`

function getTotalPages (respHeaders) {
  const link = respHeaders.get('Link')
  const [, last] = link.match(/.*_page=(\d*).*>; rel="last"/)
  return parseInt(last)
}
function eventDecorator (event) {
  event.createdDate = new Date(event.createdAt).toLocaleString()
  return event
}
const eventsService = {
  getEvents: (page = 1) => {
    return fetch(`${EVENTS_URL}?_page=${page}&_limit=20`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error('Something went wrong fetching /events')
      }
      const total = getTotalPages(resp.headers)
      return resp.json()
        .then(resp => ({
          pagination: {
            current: page,
            total
          },
          data: resp.map(eventDecorator)
        }))
    })
  }
}

export default eventsService