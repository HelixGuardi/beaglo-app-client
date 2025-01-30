import axios from "axios";

const service = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}/api`
})

// config para que el token se pase en todas las llamadas con este service
service.interceptors.request.use((config) => {

  const authToken = localStorage.getItem("authToken")

  if (authToken) {
    config.headers.authorization = `Bearer ${authToken}`
  }

  if (config.data instanceof FormData) {
    config.headers["Content-Type"] = "multipart/form-data";
  }

  return config

})

export default service