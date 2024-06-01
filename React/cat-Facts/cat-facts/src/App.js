import {BrowserRouter, Routes, Route} from 'react-router-dom'
import IndexApp from './components/Index.jsx'
import CatsApp from './components/Cats.jsx'


function App() {
  return (
    <div className="contenedor">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<IndexApp></IndexApp>} ></Route>
          <Route path="/Cats/:id" element={<CatsApp></CatsApp>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
