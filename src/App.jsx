import { Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import FeedPage from './pages/FeedPage'
import ProfilePage from './pages/ProfilePage'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import Private from './components/auth/Private'

function App() {

  return (
    <>
      <Routes>
        {/* rutas publicas */}
        <Route path="/signup" element={ <Signup /> }/>
        <Route path="/login" element={ <LoginPage/> }/>ç

        {/* rutas privadas */}
        <Route path="/feed" element={ <Private> <FeedPage/> </Private> } />
        <Route path="/profile/:userId" element={ <ProfilePage/> } />
        <Route path="/create-post" element={ <CreatePost/> } />
        <Route path="/posts/edit/:postId" element={ <EditPost/> } />
        <Route path="/profile/own" element={ <ProfilePage/> } />


        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App