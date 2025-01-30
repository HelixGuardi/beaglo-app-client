import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import service from "../services/config.services";
import { PropagateLoader } from "react-spinners";

function EditProfilePage() {

  const { authenticateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNameChange = (e) => setName(e.target.value)
  const handleSurnameChange = (e) => setSurname(e.target.value)
  const handleUsernameChange = (e) => setUsername(e.target.value)

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


  const handleFormSubmit = async(e) => {
    e.preventDefault()

    const editedProfile = {
      name: name,
      surname: surname,
      username: username,
      profileImg: image
    }

    try {

      await service.patch("/users/own/user-info", editedProfile)
      navigate("/profile/own")

    } catch (error) {
      console.log(error)
    }

  } 


  return (
    <div className="edit-profile-page-container">
      <form className="edit-profile-page-form" onSubmit={handleFormSubmit}>
        <div className="profile-picture-section">
        {loading ? (
            <div className="loading-container">
              <PropagateLoader color="#6997fc" />
            </div>
          ) : (
           <> 
            <div className="profile-photo-rounded-container">
              <img
                src={image}
                alt="imagen subida"
                className="img-fluid custom-prev-img"
                id="profile-img"
                />
            </div>
          </>
          )}
          <button type="button" className="btn btn-outline-primary" onChange={(e) => uploadImage(e)}>
            <input 
              type="file"
              id="formFile"
              onChange={(e) => uploadImage(e)}
            />
          </button>
        </div>

        <h2>Change your details</h2>
        <div className="edit-profile-main-form">
          <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">
              Name
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              aria-label="Name"
              aria-describedby="addon-wrapping"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">
              Surname
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Surname"
              aria-label="Surname"
              aria-describedby="addon-wrapping"
              value={surname}
              onChange={handleSurnameChange}
            />
          </div>
          <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">
              Username
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="edit-profile-btn-section">
            <button type="submit" className="btn btn-success">
              Edit Profile
            </button>
          <Link to="/profile/own">
            <button type="button" className="btn btn-outline-danger">
              Cancel
            </button>
          </Link>

          </div>
        </div>
      </form>
      <Navbar/>
    </div>
  );
}

export default EditProfilePage;
