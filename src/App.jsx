import { Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/signup" element={ <Signup /> }/>
        <Route path="/login" element={ <LoginPage/> }/>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App