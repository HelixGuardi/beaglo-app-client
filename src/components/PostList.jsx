import Card from "./Card";


function PostList (props) {

  const { postsCard } = props

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