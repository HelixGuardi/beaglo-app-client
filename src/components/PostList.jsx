import axios from "axios";
import { useEffect, useState } from "react"
import Card from "./Card";


function PostList () {

  const [postsCard, setPostsCard] = useState([]);

  useEffect(() => {
    getData()
  }, []);

  const getData = async() => {

    try {

      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/posts`)
      console.log(response)
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
    <>
      <div className="posts-list-container">
        {postsCard.map((eachPost) => {
          return(
            <Card id={eachPost._id} eachPost={eachPost}/>
          )
        })}
      </div>
    </>
  )
}

export default PostList