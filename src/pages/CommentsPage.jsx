import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Logo from "../assets/logo-name-icon-removebg.png";
import profileIconPh from "../assets/profile-icon-placeholder.webp";
import like from "../assets/like-btn-icon.png";
import dislike from "../assets/dislike-btn-icon.png";
import activedLike from "../assets/like-active.png";
import activedDislike from "../assets/dislike-active.png";
import dotsConfig from "../assets/dots-confit-icon.png";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import service from "../services/config.services";
import { HashLoader } from "react-spinners";
import backIcon from "../assets/back-icon-btn.png";
import { AuthContext } from "../context/auth.context";

function CommentsPage() {
  const navigate = useNavigate();

  const { loggedUserId } = useContext(AuthContext);

  const dynamicParams = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [content, setContent] = useState("");

  useEffect(() => {
    getData();
  }, [dynamicParams.postId]);

  const getData = () => {
    service
      .get(`/posts/${dynamicParams.postId}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    service
      .get(`/comments/posts/${dynamicParams.postId}`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

  const handleLike = async () => {
    if (!post.likes.includes(loggedUserId)) {
      try {
        await service.patch(`/posts/${post._id}/like`);
        getData();
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await service.patch(`/posts/${post._id}/undo-like`);
        getData();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleDislike = async () => {
    if (!post.dislikes.includes(loggedUserId)) {
      //dar dislike
      try {
        await service.patch(`/posts/${post._id}/dislike`);
        getData();
      } catch (error) {
        console.log(error);
      }
    } else {
      //quitar dislike
      try {
        await service.patch(`/posts/${post._id}/undo-dislike`);
        getData();
      } catch (error) {
        console.log(error);
      }
      try {
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleComment = (e) => {
    setContent(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const newComment = {
      content: content,
    };

    try {
      await service.post(`/comments/posts/${dynamicParams.postId}`, newComment);
      getData();
      setContent("");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComment = async (commentId) => {
    try {
      await service.delete(`/comments/${commentId}`);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header className="header-section">
        <button onClick={() => navigate(-1)} id="back-icon-btn">
          <img src={backIcon} alt="back" id="back-icon-img" />
        </button>
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
              {post.likes.includes(loggedUserId) ? (
                <button
                  id="like-btn"
                  className="toggle-menu-btns-config"
                  onClick={handleLike}
                >
                  <img src={activedLike} alt="like" id="like-btn-img" />
                </button>
              ) : (
                <button
                  id="like-btn"
                  className="toggle-menu-btns-config"
                  onClick={handleLike}
                >
                  <img src={like} alt="like" id="like-btn-img" />
                </button>
              )}

              {post.dislikes.includes(loggedUserId) ? (
                <button
                  id="dislike-btn"
                  className="toggle-menu-btns-config"
                  onClick={handleDislike}
                >
                  <img src={activedDislike} alt="dislike" />
                </button>
              ) : (
                <button
                  id="dislike-btn"
                  className="toggle-menu-btns-config"
                  onClick={handleDislike}
                >
                  <img src={dislike} alt="dislike" />
                </button>
              )}
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
                {post.userCreator._id === loggedUserId ? (
                  <Link to={`/posts/edit/${post._id}`}>
                    <button className="dropdown-item">Edit Post</button>
                  </Link>
                ) : (
                  <button className="dropdwon-item">Report Issue</button>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="comments-list">
          {comments.map((eachComment) => {
            return (
              <div className="comment-container" key={eachComment._id}>
                <div>
                  <span id="comment-content-p">{eachComment.content}</span>
                  <p id="comment-user-p">{eachComment.user.username}</p>
                </div>
                <div className="config-post dropdown">
                  <button
                    id="config-post-btn"
                    className="btn dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <img
                      src={dotsConfig}
                      alt="options"
                      id="comment-config-icon"
                    />
                  </button>
                  <ul className="dropdown-menu custom-dropdown">
                    {eachComment.user._id === loggedUserId ? (
                      <button
                        type="button"
                        className="btn btn-primary dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        onClick={() => deleteComment(eachComment._id)}
                      >
                        Delete Comment
                      </button>
                    ) : (
                      <button className="dropdwon-item">Report Issue</button>
                    )}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        <div className="floating-comment-input-container">
          <form className="form-comment-control" onSubmit={handleFormSubmit}>
            <div className="form-floating mb-3 custom-input">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Your comment here..."
                value={content}
                onChange={handleComment}
              />
              <label forHTML="floatingInput">Your comment here...</label>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              id="submit-comment-btn"
            >
              Comment
            </button>
          </form>
        </div>
        <Navbar />
      </div>
    </>
  );
}

export default CommentsPage;
