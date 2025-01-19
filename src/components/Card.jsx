import like from '../assets/like-btn-icon.png'
import dislike from '../assets/dislike-btn-icon.png'
import commentIcon from '../assets/add-comment-icon.webp'
import dotsConfig from '../assets/dots-confit-icon.png'
import profileIconPh from '../assets/profile-icon-placeholder.webp'
import { useState } from 'react'

function Card (props) {

  const { eachPost } = props

  const [isExpanded, setIsExpanded] = useState(false)

  const toggleDescription = () => {
    setIsExpanded(!isExpanded)
  }

  return(
    <>
      <div className="post-card-container">
          <header className="post-card-header">
              <img src={profileIconPh} alt="profile icon" id="profile-icon" />
              <h3 id="user-name-header">USER_NAME</h3>
          </header>
          <div className="post-card-image">
            <img src={eachPost.image} alt="Img" />
          </div>
          <div className='post-card-description'>
            <p>
            {isExpanded ? eachPost.description : `${eachPost.description.substring(0, 101)}...`}
            </p>
            {eachPost.description.length > 100 && (
              <button onClick={toggleDescription} id="description-toggle-btn">
              {isExpanded ? 'Ver menos' : 'Ver más'}
              </button>
            )}
          </div>
          <div className="post-interaction">
            <div className="main-post-btn">
              <button id="like-btn">
                <img src={like} alt="like" />
              </button>
              <button id="dislike-btn">
                <img src={dislike} alt="dislike" />
              </button>
              <button id="comment-btn">
                <img src={commentIcon} alt="comment" />
              </button>
            </div>
            <div className="config-post">
                <button id="config-post-btn">
                  <img src={dotsConfig} alt="config" />
                </button>
            </div>
          </div>
      </div>
    </>
  )
}

export default Card