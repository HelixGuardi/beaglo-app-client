import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";
import service from "../services/config.services";
import { PropagateLoader } from "react-spinners";
import imgPlaceHolder from "../assets/img-general-place-holder.jpeg"

function CreatePost() {
  const navigate = useNavigate();

  const [image, setImage] = useState(imgPlaceHolder);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
  
    setLoading(true);
  
    try {
      const response = await service.post("/upload", data, {
        headers: {
          "Content-Type": "multipart/form-data", // Importante para enviar FormData
        },
      });
      setImage(response.data.secure_url);
      // console.log("file secure desde el lado correcto: ", response.data.secure_url);
      setLoading(false);
    } catch (error) {
      console.log("Error uploading image: ", error);
      setLoading(false);
    }
  };


  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      image: image,
      location: location,
      description: description,
    };

    try {
      await service.post("/posts/create-post", newPost);
      navigate("/feed");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="create-post-container">
      <h1 className="basic-title-layout">Create your Post</h1>
      <form className="general-form-app" onSubmit={handleFormSubmit}>


        <div className="cloudinary-container">
          <div className="mb-3">
            <label for="formFile" className="form-label">
              Upload Image
            </label>
            <input
              className="form-control" 
              type="file"
              id="formFile"
              onChange={(e) => uploadImage(e)}
            />
          </div>
          {loading ? (
            <div className="loading-container">
              <PropagateLoader color="#6997fc" />
            </div>
          ) : (
            <img
              src={image}
              alt="imagen subida"
              className="img-fluid custom-prev-img"
            />
          )}
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
      <Navbar />
    </div>
  );
}

export default CreatePost;
