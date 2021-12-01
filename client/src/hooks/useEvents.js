import { useState, useEffect } from 'react'
import eventsService from '../services/events'
import { toaster } from 'evergreen-ui'

function useEvents(page, sortingField, sortingOrder) {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(false)
  const [pageInfo, setPageInfo] = useState({
    current: 1,
    total: NaN
  })

  function loadEvents(page, sortBy, sortOrder) {
    setLoading(true)
    eventsService.getEvents(page, sortBy, sortOrder)
      .then(ev => {
        setEvents(ev.data)
        setPageInfo(ev.pagination)
        setLoading(false)
      })
      .catch(error => {
        setLoading(false)
        setEvents([])
        toaster.danger('Could not load events', {
          description: error.message
        })
        console.error(error)
      })
  }
  useEffect(
    () => loadEvents(page, sortingField, sortingOrder),
    [page, sortingField, sortingOrder]
  )
  return {
    events,
    loading,
    pageInfo,
    loadEvents
  }
}

export default useEvents