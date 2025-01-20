import { useEffect, useState } from "react";
import Card from "./Card";
import service from "../services/config.services";

function PostList () {

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
            <Card key={eachPost._id} eachPost={eachPost}/>
          )
        })}
      </div>
    </>
  )
}

export default PostList