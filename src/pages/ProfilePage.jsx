import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { Link, useNavigate } from "react-router-dom";
import service from "../services/config.services";
import profileIconPh from "../assets/profile-icon-degrade-blue-color.png";
import Navbar from "../components/Navbar";
import PostList from "../components/PostList";

function ProfilePage() {
  const { authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const userResponse = await service.get("/users/own");
      const postResponse = await service.get("/posts/own");
      setUser(userResponse.data);
      setPosts(postResponse.data);

    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = (event) => {
    event.preventDefault();

    //1. borramos el token de localstorage
    localStorage.removeItem("authToken");

    //2. actualizamos los estados del contexto
    authenticateUser(); // esto intentará validar el token, pero al no existir, cambiará los estados a false y null

    //3. redireccionamos al usuario a alguna página publica
    navigate("/login");
  };


  return (
    <>
      <div className="profile-container">
        <header className="profile-header">
          <img
            src={profileIconPh}
            alt="profile photo here"
            id="profile-photo-img"
          />
          <h2 id="profile-username">{user.username}</h2>
          <h3 id="profile-fullname">
            {user.name} {user.surname}
          </h3>
          <div className="profile-header-btns">
          <Link to="/profile/edit">
            <button type="button" className="btn btn-primary">
              Edit Profile
            </button>
          </Link>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </header>
        <section className="all-user-posts">
          <PostList postsCard={posts} getData={getData}/>
        </section>
        <div className="nav-section">
          <Navbar />
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
