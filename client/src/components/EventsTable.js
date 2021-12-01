import { Table, Pagination, Spinner, Pane } from 'evergreen-ui'
import { useState } from 'react'
import useEvents from '../hooks/useEvents'
import EventsTableRow from './EventsTableRow'
import EventsTableHeader from './EventsTableHeader'

function EventsTable() {
  const SORTING_FIELDS = {
    created: 'createdAt',
    clientIP: 'client.ip',
    type: 'type',
    reporterEmail: 'reporter.email'
  }
  const [sorting, setSortingState] = useState({
    field: SORTING_FIELDS.created,
    order: 'asc'
  })

  const {events, loading, pageInfo, loadEvents} = useEvents(1, sorting.field, sorting.order)

  function getSortDirection (field) {
    return field === sorting.field ? sorting.order : ''
  }

  function getEvents(page) {
    loadEvents(page, sorting.field, sorting.order)
  }

  function setSorting (field, order) {
    setSortingState({field, order})
  }

  return (
    <>
      <Table>
        <Table.Head>
          <EventsTableHeader>Id</EventsTableHeader>
          <EventsTableHeader
            sortable
            sortDirection={getSortDirection(SORTING_FIELDS.created)}
            onClickSort={dir => setSorting(SORTING_FIELDS.created, dir)}
          >
            Created at
          </EventsTableHeader>
          <EventsTableHeader
            sortable
            sortDirection={getSortDirection(SORTING_FIELDS.clientIP)}
            onClickSort={dir => setSorting(SORTING_FIELDS.clientIP, dir)}
          >
            Client IP
          </EventsTableHeader>
          <EventsTableHeader
            sortable
            sortDirection={getSortDirection(SORTING_FIELDS.type)}
            onClickSort={dir => setSorting(SORTING_FIELDS.type, dir)}
          >
            Event type
          </EventsTableHeader>
          <EventsTableHeader
            sortable
            sortDirection={getSortDirection(SORTING_FIELDS.reporterEmail)}
            onClickSort={dir => setSorting(SORTING_FIELDS.reporterEmail, dir)}
          >
            Reporter email
          </EventsTableHeader>
        </Table.Head>
        <Table.Body height={600}>
          {loading ?
            <Pane display="flex" alignItems="center" justifyContent="center" height={600}>
            <Spinner />
          </Pane> :
            events.map((event) => <EventsTableRow key={event.id} event={event}/>)}
        </Table.Body>
      </Table>
      <Pagination
        page={pageInfo.current}
        totalPages={pageInfo.total}
        onNextPage={() => getEvents(pageInfo.current + 1)}
        onPreviousPage={() => getEvents(pageInfo.current - 1)}
        onPageChange={(p) => getEvents(p)}
      />
    </>
  )
}

export default EventsTable;