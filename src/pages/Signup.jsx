import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo-name-icon-removebg.png";
import { useState } from "react";
import axios from "axios";

function Signup() {

  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [username, setUsername] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState(Date.now())
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleNameChange = (e) => setName(e.target.value)
  const handleSurnameChange = (e) => setSurname(e.target.value)
  const handleUsernameChange = (e) => setUsername(e.target.value)
  const handleDateOfBirthChange = (e) => setDateOfBirth(e.target.value)
  const handleEmailChange = (e) => setEmail(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    const newUser = {
      name: name,
      surname: surname,
      username: username,
      dateOfBirth: dateOfBirth,
      email: email,
      password: password
    }

    try {
      
     await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/auth/signup`, newUser)
     navigate("/login")

    } catch (error) {
      console.log(error) //! PENDIENTE: Redireccionar a una página de error
    }
  }

  return (
    <>
      <div className="all-page-container">
        <div className="logo-empty-space">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <div className="initial-box">
          <h1>REGISTER</h1>
          <form className="form-container" onSubmit={handleFormSubmit}>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" placeholder="Name" value={name} onChange={handleNameChange} />
              <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Surname"
                value={surname} 
                onChange={handleSurnameChange} 
              />
              <label htmlFor="floatingInput">Surname</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={username} 
                onChange={handleUsernameChange} 
              />
              <label htmlFor="floatingInput">Username</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="date"
                className="form-control"
                id="date-input"
                value={dateOfBirth} 
                onChange={handleDateOfBirthChange} 
              />
              <label htmlFor="floatingInput">Date of Birth</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email} 
                onChange={handleEmailChange} 
              />
              <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password} 
                onChange={handlePasswordChange} 
              />
              <label htmlFor="floatingInput">Password</label>
            </div>
            <button type="submit" className="btn btn-primary" id="form-btn">
              ¡Sign Up!
            </button>
          </form>

        </div>
        <div className="simple-page-changer-container">
          <span>¿Ya tiene una cuenta?</span>
          <Link to="/login">
            <button type="button" className="btn btn-secondary" id="form-btn">
              Login
            </button>
          </Link>
        </div>
        
      </div>
    </>
  );
}

export default Signup;
