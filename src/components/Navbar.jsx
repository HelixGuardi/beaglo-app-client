import homeIcon from "../assets/home-icon.webp";
import messageIcon from "../assets/message-icon.png";
import createNewIcon from "../assets/create-new-post-icon.png";
import magnifyingGlassIcon from "../assets/magnifying-glass.png";
import { Link } from "react-router-dom";
import service from "../services/config.services";
import { useEffect, useState } from "react";
import profileIconPlaceHolder from "../assets/profile-icon-degrade-blue-color.png"

function Navbar() {

  const [user, setUser] = useState("");

  useEffect(() => {
    getUser()
  }, [])

  const getUser = async() => {
    try {
      
      const response = await service.get("/users/own")
      setUser(response.data)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <nav className="nav-container">
        <Link to="/feed">
          <button id="home-icon-btn" className="btn-basic-config">
            <img src={homeIcon} alt="home icon" className="icon-basic-config" />
          </button>
        </Link>

        <Link>
          <button id="message-icon-btn" className="btn-basic-config">
            <img
              src={messageIcon}
              alt="message icon"
              className="icon-basic-config"
            />
          </button>
        </Link>

        <Link to="/create-post">
          <button id="create-post-icon-btn" className="btn-basic-config">
            <img
              src={createNewIcon}
              alt="new post icon"
              className="icon-basic-config"
            />
          </button>
        </Link>

        <Link to="/search">
          <button id="maginifying-glass-icon-btn" className="btn-basic-config">
            <img
              src={magnifyingGlassIcon}
              alt="magnifying glass icon"
              className="icon-basic-config"
            />
          </button>
        </Link>

        <Link to='/profile/own'>
          <button id="profile-icon-btn" className="btn-basic-config">
            <img
              src={user.profileImg ? user.profileImg : profileIconPlaceHolder}
              alt="profile icon"
              className="icon-basic-config"
              id="nav-profile-icon"
            />
          </button>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
