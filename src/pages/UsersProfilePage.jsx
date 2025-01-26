import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import service from "../services/config.services";
import profileIconPh from "../assets/profile-icon-degrade-blue-color.png"
import PostList from "../components/PostList";
import Navbar from "../components/Navbar";


function UsersProfilePage() {

    const dynamicParams = useParams();

    const [user, setUser] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      getData();
    }, [])

    const getData = async() => {
      try {
        const userResponse = await service.get(`/users/${dynamicParams.userId}`)
        const postResponse = await service.get(`/posts/user/${dynamicParams.userId}`)
        setUser(userResponse.data)
        setPosts(postResponse.data)
      } catch (error) {
        console.log(error)
      }
    }

  return(
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
        </header>
        <section className="all-user-posts">
          <PostList postsCard={posts} getData={getData}/>
        </section>
        <div className="nav-section">
          <Navbar />
        </div>
      </div>
    </>
  )
}

export default UsersProfilePage;