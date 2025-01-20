import Logo from '../assets/logo-name-icon-removebg.png'
import Navbar from '../components/Navbar';
import PostList from '../components/PostList';
import { useEffect, useState } from "react";
import service from "../services/config.services";

function FeedPage() {

  const [postsCard, setPostsCard] = useState([]);

  useEffect(() => {
    getData()
  }, []);

  const getData = async() => {

    try {

      const response = await service.get('/posts')
      setPostsCard(response.data)

    } catch (error) {
      console.log(error)
    }

  }

  return (
      <div className="feed-page-container">
        <header className="header-section">
          <img src={Logo} alt="Beaglo logo" id="header-logo"/>
        </header>
        <section className='posts-list'>
          <div className='post-container'>
            <PostList postsCard={postsCard} getData={getData}/>
          </div>
        </section>
          <div className='nav-section'>
            <Navbar/>
          </div>
      </div>
  );
}

export default FeedPage;
