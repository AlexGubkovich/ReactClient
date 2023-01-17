import './App.css';
import React from 'react';
import { Header } from './componenets/Header';
import { Footer } from './componenets/Footer'
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
        <Footer/>
    </div>
  );
}

export default App;
