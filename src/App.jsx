import { Route, Routes } from 'react-router-dom'
import './App.css'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/signup" element={ <RegisterPage /> }/>
        <Route path="/login" element={ <LoginPage/> }/>
      </Routes>
    </>
  )
}

export default App
