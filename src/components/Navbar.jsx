import homeIcon from '../assets/home-icon.webp'
import messageIcon from '../assets/message-icon.png'
import createNewIcon from '../assets/create-new-post-icon.png'
import magnifyingGlassIcon from '../assets/magnifying-glass.png'
import profileIcon from '../assets/profile-icon-degrade-blue-color.png'

function Navbar () {
  return(
    <>
      <nav className="nav-container">
        <button id="home-icon-btn" className="btn-basic-config">
          <img src={homeIcon} alt="home icon" className="icon-basic-config"/>
        </button>

        <button id="message-icon-btn" className="btn-basic-config">
          <img src={messageIcon} alt="message icon" className="icon-basic-config"/>
        </button>

        <button id="create-post-icon-btn" className="btn-basic-config">
          <img src={createNewIcon} alt="new post icon" className="icon-basic-config"/>
        </button>

        <button id="maginifying-glass-icon-btn" className="btn-basic-config">
          <img src={magnifyingGlassIcon} alt="magnifying glass icon" className="icon-basic-config"/>
        </button>

        <button id="profile-icon-btn" className="btn-basic-config">
          <img src={profileIcon} alt="profile icon" className="icon-basic-config"/>
        </button>
      </nav>
    </>
  )
}

export default Navbar;