import { Route, Routes } from 'react-router-dom';
import './App.css'
import Homepage from './components/Homepage';
import MatrixGamePage from './components/game/MatrixGamePage';
import ShopingPage from './components/shop/ShopingPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/game' element={<MatrixGamePage />} />
        <Route path='/shop' element={<ShopingPage/>} />
      </Routes>
    </div>
  )
}

export default App
