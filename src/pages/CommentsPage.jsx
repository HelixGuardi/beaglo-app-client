import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Logo from "../assets/logo-name-icon-removebg.png";
import profileIconPh from "../assets/profile-icon-placeholder.webp";
import like from "../assets/like-btn-icon.png";
import dislike from "../assets/dislike-btn-icon.png";
import dotsConfig from "../assets/dots-confit-icon.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import service from "../services/config.services";
import { HashLoader } from "react-spinners";

function CommentsPage() {
  const dynamicParams = useParams();
  const [post, setPost] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    service
      .get(`/posts/${dynamicParams.postId}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dynamicParams.postId]);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  if (!post) {
    return (
      <div className="loading-container">
        <HashLoader color="#6997fc" />
      </div>
    );
  }

  return (
    <>
      <header className="header-section">
        <img src={Logo} alt="logo" id="header-logo" />
      </header>
      <div className="comment-page-container">
        <div className="post-card-container">
          <header className="post-card-header">
            <img src={profileIconPh} alt="profile-icon" id="profile-icon" />
            <h3 id="user-name-header">{post.userCreator.username}</h3>
          </header>
          <div className="post-card-image">
            <img src={post.image} alt="Problemas al renderizar imagen" />
          </div>
          <div className="post-card-description">
            <p>
              {isExpanded
                ? post.description
                : `${post.description.substring(0, 101)}...`}
            </p>
            {post.description.length > 100 && (
              <button onClick={toggleDescription} id="description-toggle-btn">
                {isExpanded ? "Ver menos" : "Ver más"}
              </button>
            )}
          </div>
          <div className="post-interaction">
            <div className="main-post-btn">
              <button id="like-btn" className="toggle-menu-btns-config">
                <img src={like} alt="like" />
              </button>
              <button id="dislike-btn" className="toggle-menu-btns-config">
                <img src={dislike} alt="dislike" />
              </button>
            </div>
            <div className="config-post dropdown">
              <button
                id="config-post-btn"
                className="btn dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <img src={dotsConfig} alt="options" />
              </button>
              <ul className="dropdown-menu custom-dropdown">
                <button
                  type="button"
                  className="btn btn-primary dropdown-item"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  onClick={() => setPostToDelete()}
                >
                  Delete Post
                </button>
                <Link to={`/posts/edit/:postId`}>
                  <button className="dropdown-item">Edit Post</button>
                </Link>
                <button className="dropdwon-item">Report Issue</button>
              </ul>
            </div>
          </div>
        </div>
        <Navbar />
      </div>
    </>
  );
}

export default CommentsPage;
