import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import { Route, Routes } from "react-router-dom"
import './components/navbar.css'

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>

      </Routes>
        
    </div>
  );
}

export default App;
