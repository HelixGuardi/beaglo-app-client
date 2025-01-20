import { Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import FeedPage from './pages/FeedPage'
import ProfilePage from './pages/ProfilePage'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'

function App() {

  return (
    <>
      <Routes>
        <Route path="/signup" element={ <Signup /> }/>
        <Route path="/login" element={ <LoginPage/> }/>
        <Route path="/feed" element={ <FeedPage/> } />
        <Route path="/profile/:userId" element={ <ProfilePage/> } />
        <Route path="/create-post" element={ <CreatePost/> } />
        <Route path="/posts/edit/:postId" element={ <EditPost/> } />
        <Route path="/profile/own" element={ <ProfilePage/> } />
    
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App