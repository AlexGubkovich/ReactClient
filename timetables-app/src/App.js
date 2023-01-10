import logo from './logo.svg';
import './App.css';
import { Header } from './componenets/Header';
import { Timetables } from './componenets/Timetables'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>

      <main>
        <Timetables/>
      </main>
    </div>
  );
}

export default App;
