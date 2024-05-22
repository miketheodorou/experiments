import { TicketHeader } from '../components/TicketHeader';

export function App() {
  return (
    <div className="flex items-center justify-center w-screen p-2">
      <TicketHeader
        title="Guardians of the Galaxy Vol.2"
        location="Cineplex Entertainment, Toronto ON"
      />
    </div>
  );
}

export default App;
