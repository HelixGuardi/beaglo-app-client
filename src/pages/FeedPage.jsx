import Logo from '../assets/logo-name-icon-removebg.png'
import Navbar from '../components/Navbar';
import PostList from '../components/PostList';

function FeedPage() {



  return (
      <div className="feed-page-container">
        <header className="header-section">
          <img src={Logo} alt="Beaglo logo" id="header-logo"/>
        </header>
        <section className='posts-list'>
          <div className='post-container'>
            <PostList/>
          </div>
        </section>
          <div className='nav-section'>
            <Navbar/>
          </div>
      </div>
  );
}

export default FeedPage;
