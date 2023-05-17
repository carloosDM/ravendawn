import './App.css'
import Footer from './components/Footer'
import Sidebar from './components/SideBar'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Cadastro/Cadastro'
import Hunts from './pages/Hunts/Hunts'
import Events from './pages/Events/Events'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastro' element={<Register />} />
          <Route path='/hunts' element={<Hunts />} />
          <Route path='/events' element={<Events />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
