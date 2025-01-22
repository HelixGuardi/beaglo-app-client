import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";
import service from "../services/config.services";
import Cloudinary from "../components/Cloudinary";

function CreatePost() {

  const navigate = useNavigate()

  const [image, setImage] = useState("")
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")

  const handleLocationChange = (e) => setLocation(e.target.value)
  const handleDescriptionChange = (e) => setDescription(e.target.value)

  const handleFormSubmit = async(e) => {
    e.preventDefault();

    const newPost = {
      image: image,
      location: location,
      description: description
    }

    try {

     await service.post("/posts/create-post", newPost)
     navigate("/feed")
      
    } catch (error) {
      console.log(error)
    }
    
  }
  
  return (
    <div className="create-post-container">
      <h1 className="basic-title-layout">Create your Post</h1>
      <form className="general-form-app" onSubmit={handleFormSubmit}>

        <Cloudinary setImage={setImage} image={image} />

        <div className="location-input-container">
          <label htmlFor="exampleDataList" className="form-label">
            Localización:
          </label>
          <input
            className="form-control"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Type to search..."
            value={location}
            onChange={handleLocationChange}
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
            value={description}
            onChange={handleDescriptionChange}
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
