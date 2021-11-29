import { Pane, Heading, majorScale } from 'evergreen-ui'
import EventsTable from './components/EventsTable'

function App() {
  return (
    <>
      <header>
        <Pane padding={majorScale(2)} background="blueTint">
          <Heading is="h1" size={800}>Abuse events</Heading>
        </Pane>
      </header>
      <main>
        <Pane padding={majorScale(2)}>
          <EventsTable />
        </Pane>
      </main>
    </>
  );
}

export default App;
