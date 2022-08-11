import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Home from './pages/Home';
import About from './pages/About';
import DishesMenuScreen from './pages/DishesMenuScreen';
import LocationScreen from './pages/LocationScreen';
import DeliveryScreen from './pages/DeliveryScreen';
import MenuScreen from './pages/MenuScreen'

function App() {
  return (
    <>
    <Navbar />
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/home' exact element={<Home/>}/>
        <Route path='/DishesMenuScreen' exact element={<DishesMenuScreen/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/LocationScreen' exact element={<LocationScreen/>}/>
        <Route path='/delivery' exact element={< DeliveryScreen/>}/>
        <Route path='/MenuScreen' exact element={< MenuScreen/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
