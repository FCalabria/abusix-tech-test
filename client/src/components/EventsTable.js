import { Table, Pagination, Spinner, Pane } from 'evergreen-ui'
import useEvents from '../hooks/useEvents'
import EventsTableRow from './EventsTableRow'

function EventsTable() {
  const {events, loading, pageInfo, loadEvents} = useEvents()
  return (
    <>
      <Table>
        <Table.Head>
          <Table.TextHeaderCell>Id</Table.TextHeaderCell>
          <Table.TextHeaderCell>Created at</Table.TextHeaderCell>
          <Table.TextHeaderCell>Client IP</Table.TextHeaderCell>
          <Table.TextHeaderCell>Event type</Table.TextHeaderCell>
          <Table.TextHeaderCell>Reporter email</Table.TextHeaderCell>
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
        onNextPage={() => loadEvents(pageInfo.current + 1)}
        onPreviousPage={() => loadEvents(pageInfo.current - 1)}
        onPageChange={(p) => loadEvents(p)}
      />
    </>
  )
}

export default EventsTable;