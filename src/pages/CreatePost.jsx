import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";

function CreatePost() {

  const navigate = useNavigate()

  const [image, setImage] = useState("")
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")

  const handleImageChange = (e) => {e.target.value}
  const handleLocationChange = (e) => {e.target.value}
  const handleDescriptionChange = (e) => {e.target.value}

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      image: image,
      location: location,
      description: description
    }

    axios.post(`${import.meta.env.VITE_SERVER_URL}/api/posts/create-post`, newPost)
    .then(() => {
      navigate("/feed")
    })
    .catch((error) => {
      console.log(error)
    })
  }
  
  return (
    <div className="create-post-container">
      <h1 className="basic-title-layout">Create your Post</h1>
      <form className="general-form-app">
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            ¡Sube aqui la imagen que deseas compartir!
          </label>
          <input className="form-control" type="file" id="formFile" />
        </div>
        <div className="location-input-container">
          <label htmlFor="exampleDataList" className="form-label">
            Localización:
          </label>
          <input
            className="form-control"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Type to search..."
          />
          <datalist id="datalistOptions">
            <option value="Mallorca, España" />
            <option value="Madrid, España" />
            <option value="Barcelona, España" />
            <option value="Bournemouth, Inglaterra" />
            <option value="Rio de Janeiro, Brasil" />
          </datalist>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Comparte tus ideas con una descripción:
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="form-control-btns">
          <button type="submit" className="btn btn-outline-success">
            ¡Create!
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
  );
}

export default CreatePost;
