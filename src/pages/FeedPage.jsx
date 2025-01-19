import Logo from '../assets/logo-name-icon-removebg.png'
import Navbar from '../components/Navbar';
import PostList from '../components/PostList';
import axios from "axios";
import { useEffect, useState } from "react"

function FeedPage() {

  const [postsCard, setPostsCard] = useState([]);

  useEffect(() => {
    getData()
  }, []);

  const getData = async() => {

    try {

      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/posts`)
      setPostsCard(response.data)

    } catch (error) {
      console.log(error)
    }

  }

  if(postsCard.length === 0) {
    return(
      <div className="loading-container">
        <p>Loading...</p>
      </div>
    )
  }

  return (
      <div className="feed-page-container">
        <header className="header-section">
          <img src={Logo} alt="Beaglo logo" id="header-logo"/>
        </header>
        <section className='posts-list'>
          <div className='post-container'>
            <PostList postsCard={postsCard}/>
          </div>
        </section>
          <div className='nav-section'>
            <Navbar/>
          </div>
      </div>
  );
}

export default FeedPage;
