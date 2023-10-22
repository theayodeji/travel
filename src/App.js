import Home from './pages/Home';
import About from "./pages/About"
import "./css/general.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Packages from './pages/Packages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/packages' element={<Packages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
