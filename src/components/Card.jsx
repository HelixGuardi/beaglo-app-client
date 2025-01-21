import like from "../assets/like-btn-icon.png";
import dislike from "../assets/dislike-btn-icon.png";
import commentIcon from "../assets/add-comment-icon.webp";
import dotsConfig from "../assets/dots-confit-icon.png";
import profileIconPh from "../assets/profile-icon-placeholder.webp";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Card(props) {
  const { eachPost, setPostToDelete } = props;
  // console.log(eachPost.userCreator._id)

  const { loggedUserId } = useContext(AuthContext)

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="post-card-container">
        <header className="post-card-header">
          <img src={profileIconPh} alt="profile icon" id="profile-icon" />
          <h3 id="user-name-header">{eachPost.userCreator.username}</h3>
        </header>
        <div className="post-card-image">
          <img src={eachPost.image} alt="Img" />
        </div>
        <div className="post-card-description">
          <p>
            {isExpanded
              ? eachPost.description
              : `${eachPost.description.substring(0, 101)}...`}
          </p>
          {eachPost.description.length > 100 && (
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
            <Link to={`/feed/${eachPost._id}`}>
              <button id="comment-btn" className="toggle-menu-btns-config">
                <img src={commentIcon} alt="comment" />
              </button>
            </Link>
          </div>
          <div className="config-post dropdown">
            <button
              id="config-post-btn"
              className="btn dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <img src={dotsConfig} alt="config" />
            </button>
            <ul className="dropdown-menu custom-dropdown">
            {eachPost.userCreator._id === loggedUserId 
            ? <div>
               <button
                type="button"
                className="btn btn-primary dropdown-item"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                onClick={() => setPostToDelete(eachPost._id)}
              >
                Delete Post
              </button>
              <Link to={`/posts/edit/${eachPost._id}`}>
                <button className="dropdwon-item">Edit Post</button>
              </Link>
            </div>
            : <button className="dropdwon-item">Report Issue</button>
            }
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
