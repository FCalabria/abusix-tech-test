import { Table } from 'evergreen-ui'

function EventsTableRow ({event}) {
  return (
    <Table.Row>
      <Table.TextCell isNumber>{event.id}</Table.TextCell>
      <Table.TextCell>{event.createdDate}</Table.TextCell>
      <Table.TextCell isNumber>{event.client?.ip}</Table.TextCell>
      <Table.TextCell>{event.type}</Table.TextCell>
      <Table.TextCell>{event.reporter?.email}</Table.TextCell>
    </Table.Row>
  )
}

export default EventsTableRow