import { createContext, useEffect, useState } from "react";
import service from "../services/config.services";
import { RingLoader } from "react-spinners";

// componente contexto (transmite el contexto por la app)
const AuthContext = createContext();

// componente envoltorio (almacena los contextos)
function AuthWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false); //estado para saber si el usuario está loggeado o no
  const [loggedUserId, setLoggedUserId] = useState(null); //estado para saber quien es el usuario
  // opcionalmente estados de roles

  const [isAuthenticating, setIsAuthenticating] = useState(true);

  const authenticateUser = async () => {
    //función para validar el token cuando sea necesario // valida el token y actualiza los estados acorde
    setIsAuthenticating(true); // forzar la carga del spinner al momento de validar el token

    try {
      const response = await service.get("/auth/verify");

      setIsLoggedIn(true);
      setLoggedUserId(response.data.payload._id);
      setIsAuthenticating(false);
    } catch (error) {
      console.log("token no validado");

      setIsLoggedIn(false);
      setLoggedUserId(null);
      setIsAuthenticating(false);
    }
  };

  const passContext = {
    isLoggedIn,
    loggedUserId,
    authenticateUser,
  };

  useEffect(() => {
    // al inicio de que el usuario navega por la app, intentaremos validar su token
    authenticateUser();
  }, []);

  if (isAuthenticating) {
    return (
      <div className="loading-container">
        <RingLoader color="#6997fc" />
      </div>
    );
  }

  return (
    <AuthContext.Provider value={passContext}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthWrapper };
