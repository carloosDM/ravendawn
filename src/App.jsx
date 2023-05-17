import './App.css'
import Footer from './components/Footer'
import Sidebar from './components/SideBar'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Cadastro/Cadastro'
import Hunts from './pages/Hunts/Hunts'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Sidebar/>
      <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cadastro' element={<Register />} />
            <Route path='/hunts' element={<Hunts />} />
          </Routes>
        </Router>
      <Footer/>
    </>
  )
}

export default App
