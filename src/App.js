import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <>
    <Navbar />
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/home' exact element={<Home/>}/>
        <Route path='/about' exact element={<About/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
