import like from "../assets/like-btn-icon.png";
import dislike from "../assets/dislike-btn-icon.png";
import commentIcon from "../assets/add-comment-icon.webp";
import dotsConfig from "../assets/dots-confit-icon.png";
import profileIconPh from "../assets/profile-icon-placeholder.webp";
import { useState } from "react";
import { Link } from "react-router-dom";
import service from "../services/config.services";

function Card(props) {
  const { eachPost, username, getData } = props;

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const handleDeletePost = async() => {
    try {
      await service.delete(`/posts/${eachPost._id}`)

      // función para actualizar el estado local del componente padre
      getData()

    } catch(error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="post-card-container">
        <header className="post-card-header">
          <img src={profileIconPh} alt="profile icon" id="profile-icon" />
          <h3 id="user-name-header">{username}</h3>
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
            <button id="comment-btn" className="toggle-menu-btns-config">
              <img src={commentIcon} alt="comment" />
            </button>
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
              <button
                type="button"
                className="btn btn-primary dropdown-item"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Delete Post
              </button>
              <Link to={`/posts/edit/${eachPost._id}`}>
                <button className="dropdwon-item">Edit Post</button>
              </Link>
              <Link>
                <button className="dropdwon-item">Report Issue</button>
              </Link>
            </ul>
            {/* <!-- Modal --> */}
          </div>
          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
                    ¿Are you sure?
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">...</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button className="btn btn-danger" onClick={handleDeletePost} data-bs-dismiss="modal" >
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
