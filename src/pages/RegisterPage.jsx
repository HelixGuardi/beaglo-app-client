import Logo from '../assets/logo-name-icon-removebg.png'
import Footer from '../components/Footer';

function RegisterPage() {
  return (
    <>
      <div className="all-page-container">
      <div className='logo-empty-space'>
        <img src={Logo} alt="Logo" className='logo'/>
      </div>
        <div className="initial-box">
          <h1>REGISTER</h1>
          <form className="form-container">
            <div className="form-floating mb-3">
              <input type="text" className="form-control" placeholder="Name" />
              <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Surname"
              />
              <label htmlFor="floatingInput">Surname</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
              />
              <label htmlFor="floatingInput">Username</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="date"
                className="form-control"
                id="date-input"
                placeholder="Date Of Birth"
              />
              <label htmlFor="floatingInput">Date of Birth</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
              <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <label htmlFor="floatingInput">Password</label>
            </div>
            <button type="button" className="btn btn-primary" id="form-btn">
              ¡Sign Up!
            </button>
          </form>
        </div>
        <div className="simple-page-changer-container">
          <span>¿Ya tiene una cuenta?</span>
          <button type="button" className="btn btn-secondary" id="form-btn">
            Login
          </button>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default RegisterPage;
