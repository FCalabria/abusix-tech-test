import { useState, useEffect } from 'react'
import { Table } from 'evergreen-ui'
import eventsService from '../services/events'
import EventsTableRow from './EventsTableRow'

function EventsTable() {
  const [events, setEvents] = useState([])
  useEffect(() => {
    eventsService.getEvents()
      .then(ev => setEvents(ev))
      .catch(error => {
        console.error(error)
      })
  }, [])
  return (
    <Table>
      <Table.Head>
        <Table.TextHeaderCell>Id</Table.TextHeaderCell>
        <Table.TextHeaderCell>Created at</Table.TextHeaderCell>
        <Table.TextHeaderCell>Client IP</Table.TextHeaderCell>
        <Table.TextHeaderCell>Event type</Table.TextHeaderCell>
        <Table.TextHeaderCell>Reporter email</Table.TextHeaderCell>
      </Table.Head>
      <Table.Body height={600}>
        {events.map((event) => <EventsTableRow key={event.id} event={event}/>)}
      </Table.Body>
    </Table>
  )
}

export default EventsTable;