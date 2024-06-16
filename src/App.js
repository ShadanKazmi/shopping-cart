import { Route, Routes } from 'react-router-dom';
import './App.css';
import BestSellers from './Components/BestSellers';
import BottomBar from './Components/BottomBar';
import NavBar from './Components/NavBar';
import ShopNow from './Components/ShopNow';
import HomePage from './Pages/HomePage';  
import Shop from './Pages/Shop';
import About from './Pages/About';

function App() {
  return (
    <div>
      <Routes>
          <Route path = "/" element = {<HomePage/>}/>
          <Route path = "/store" element = {<Shop/>}/>
          <Route path = "/about" element = {<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
