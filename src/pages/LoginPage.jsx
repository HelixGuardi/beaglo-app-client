import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo-name-icon-removebg.png";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

function LoginPage() {

  const { authenticateUser } = useContext(AuthContext)

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [errorMessage, setErrorMessage] = useState(null)

  const handleEmailChange = (e) => setEmail(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)

  const handleLogin = async (e) => {
    e.preventDefault()

    const userCredentials = {
      email,
      password
    }

    try {
      
      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/auth/login`, userCredentials)
      console.log("usuario validado", response.data)

      //1. almacenamos el token en local storage
      localStorage.setItem("authToken", response.data.authToken)

      //2. llamamos al backend para validar el token y extraer la info del usuario
      authenticateUser()

      //3. redireccionar a alguna página privada (puede ser el feed o el profile, por ejemplo)
      navigate("/profile/own")

    } catch (error) {
      if(error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage)
      } else {
        console.log(error)
        // navigate("/error") //! Pendiente de hacer una página de error
      }
      console.log(error)
    }

  }

  return (
    <>
      <div className="all-page-container" id="all-page-container-login">
        <div className="logo-empty-space">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <div className="initial-box" id="initial-box-login">
          <h1>LOGIN</h1> <br />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <form className="form-container" onSubmit={handleLogin}>
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
              ¡Login!
            </button>
          </form>
        </div>

        <div className="simple-page-changer-container">
          <span>¿Aún no tienes una cuenta?</span>
          <Link to="/signup">
            <button type="button" className="btn btn-secondary" id="form-btn">
              signup
            </button>
          </Link>
        </div>

      </div>
    </>
  );
}

export default LoginPage;
