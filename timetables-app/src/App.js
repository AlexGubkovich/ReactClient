import './App.css';
import React from 'react';
import { Header } from './componenets/Header';
import { Timetables } from './componenets/Timetables'
import Container from '@mui/material/Container';

function App() {
  return (
    <div>
        <Header/>
        <main>
          <Container fixed>
            <Timetables/>
          </Container>
        </main>
    </div>
  );
}

export default App;
