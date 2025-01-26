import React from "react";
import { useState } from "react";
import { PropagateLoader } from "react-spinners";

const Cloudinary = (props) => {
  const { setImage, image } = props;

  const preset_name = "beaglo_preset"; //nombre temporario para presentación del proyecto (más tarde se cambiará)
  const cloud_name = "dwuey8hq9"; //nombre temporario para presentación del proyecto (más tarde se cambiará)

  //const [ image, setImage ] = useState('');
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", preset_name);

    setLoading(true);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );

      const file = await response.json();
      setImage(file.secure_url);
      setLoading(false);
    } catch (error) {
      console.error("Error uploading image:", error);
      setLoading(false);
    }
  };

  return (
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
        <img src={image} alt="imagen subida" className="img-fluid custom-prev-img" />
      )}
    </div>
  );
};

export default Cloudinary;
