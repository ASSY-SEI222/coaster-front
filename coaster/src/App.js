import './App.css';
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav';
import CoasterCard from './components/CoasterCard';
import ParkCards from './components/ParkCards';
import Home from './pages/Home';
import About from './pages/About'


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Nav />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About/ >} />
          <Route />
          <Route />
        </Routes>
      </main>
    </div>
  );
}

export default App;
