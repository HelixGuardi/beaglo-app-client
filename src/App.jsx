import { Route, Routes } from 'react-router-dom'
import './App.css'
import RegisterPage from './pages/RegisterPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/signup" element={ <RegisterPage /> }/>
      </Routes>
    </>
  )
}

export default App
