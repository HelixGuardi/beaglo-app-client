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
import CommentsPage from './pages/CommentsPage'
import EditProfilePage from './pages/EditProfilePage'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import UsersProfilePage from './pages/UsersProfilePage'

function App() {

  return (
    <>
      <Routes>
        {/* rutas publicas */}
        <Route path="/" element={ <HomePage/> }/>
        <Route path="/signup" element={ <Signup /> }/>
        <Route path="/login" element={ <LoginPage/> }/>

        {/* rutas privadas */}
        <Route path="/feed" element={ <Private> <FeedPage/> </Private> } />
        <Route path="/create-post" element={ <Private> <CreatePost/> </Private> } />
        <Route path="/posts/edit/:postId" element={ <Private> <EditPost/> </Private> } />
        <Route path="/profile/own" element={ <Private> <ProfilePage/> </Private> } />
        <Route path="/feed/:postId" element={ <Private> <CommentsPage/> </Private> } />
        <Route path="/profile/edit" element={ <Private> <EditProfilePage/> </Private> } />
        <Route path="/search" element={ <Private> <SearchPage/> </Private> } />
        <Route path="/profile/:userId/:userName" element={ <Private> <UsersProfilePage/> </Private> } />


        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App