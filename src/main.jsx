import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthWrapper } from './context/auth.context.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


createRoot(document.getElementById('root')).render(
 <AuthWrapper>
   <BrowserRouter>
    <App />
  </BrowserRouter>
 </AuthWrapper>
)
