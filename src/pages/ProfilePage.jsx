import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";

function ProfilePage() {

  const { authenticateUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = (event) => {
    event.preventDefault()

    //1. borramos el token de localstorage
    localStorage.removeItem("authToken")

    //2. actualizamos los estados del contexto
    authenticateUser() // esto intentará validar el token, pero al no existir, cambiará los estados a false y null

    //3. redireccionamos al usuario a alguna página publica
    navigate("/login")
  }
  return(
    <>
      <h1>PROFILE PAGE (ruta privada)</h1>
      <button onClick={handleLogout}>LOGOUT</button>
    </>
  )
}

export default ProfilePage;