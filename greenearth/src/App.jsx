import React,{ useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}></Route >
  <Route path="/home" element={<Home/>}></Route>
      </Routes >
     </BrowserRouter >
      
    </>
  )
}

export default App
