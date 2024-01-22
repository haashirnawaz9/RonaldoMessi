import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Ronaldo from './pages/Ronaldo';
import Messi from './pages/Messi';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import { useEffect } from 'react';

function App() {
  useEffect(()=> {
    document.title = "Ronaldo & Messi"
  },[])
  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path = '/' element={<Ronaldo></Ronaldo>}></Route>
        <Route path = '/Messi' element = {<Messi></Messi>}></Route>
        <Route path = '/Login' element={<Login></Login>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
