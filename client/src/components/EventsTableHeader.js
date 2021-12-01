import { Table, IconButton, Text, CaretUpIcon, CaretDownIcon, majorScale } from 'evergreen-ui'

function EventsTableHeader({ sortable, children, sortDirection, onClickSort }) {
  const buttonAppearance = (dir) => sortDirection === dir ? 'primary' : 'minimal'
  return (
    <Table.TextHeaderCell>
      <Text marginRight={sortable && majorScale(1)}>{children}</Text>{
        sortable && <>
          <IconButton appearance={buttonAppearance('asc')} icon={CaretUpIcon} onClick={() => onClickSort('asc')}/>
          <IconButton appearance={buttonAppearance('desc')} icon={CaretDownIcon} onClick={() => onClickSort('desc')}/>
        </>
      }</Table.TextHeaderCell>
  )
}

export default EventsTableHeader