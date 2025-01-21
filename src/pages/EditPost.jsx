import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import service from "../services/config.services";

function EditPost() {

  const navigate = useNavigate()

  const dynamicParams = useParams();

  const [post, setPost] = useState("")

  const [description, setDescription] = useState(post.description)
  const handleDescriptionChange = (e) => setDescription(e.target.value)

  useEffect(() => {
    getData()
  }, [])

  const getData = async() => {
    try {
      
      const response = await service.get(`posts/${dynamicParams.postId}`)
      setPost(response.data)

    } catch (error) {
      console.log(error)
    }
  }

  const handleFormSubmit = async(e) => {
    e.preventDefault()

    const editedPost = {
      description: description
    }

    try {
      
      await service.patch(`/posts/${dynamicParams.postId}`, editedPost)
      navigate("/feed")

    } catch (error) {
      console.log(error)
    }

  }



  return(
    <>
      <div className="edit-post-container">
        <h1 className="basic-title-layout">Edit your Post</h1>
        <form className="general-form-app" onSubmit={handleFormSubmit}>
        <div className="no-edit-parts-post">
          <img src={post.image} alt="your image (you can`t edit)" />
          <span>{post.location}</span>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Siempre estás a tiempo de unos arreglos:
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Cambia la descripción de post"
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
        <div className="form-control-btns">
          <button type="submit" className="btn btn-outline-success">
            Edit
          </button>
          <Link to="/feed">
            <button type="button" className="btn btn-outline-danger">
              Cancel
            </button>
          </Link>
        </div>
      </form>
      <Navbar/>
      </div>
    </>
  )
}

export default EditPost;