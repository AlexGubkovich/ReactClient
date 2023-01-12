import './App.css';
import React from 'react';
import { Header } from './componenets/Header';
import { Timetables } from './componenets/Timetables'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>

      <br/>

      <main>
        <Timetables/>
      </main>
    </div>
  );
}

export default App;
