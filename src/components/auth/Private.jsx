import { useContext } from "react"
import { AuthContext } from "../../context/auth.context"
import { Navigate } from "react-router-dom"

function Private(props) {

  // este componente va a verificar si el usuario puede o no ver la página que está envolviendo

  const { isLoggedIn } = useContext(AuthContext)

  if(isLoggedIn) {
    return props.children // estas logeado, adelante con la página
  } else {
    return <Navigate to={"/login"} />
  }

  return(
    props.children
  )
}

export default Private