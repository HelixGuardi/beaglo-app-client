import Logo from '../assets/logo-name-icon-removebg.png'
import Footer from '../components/Footer';

function LoginPage() {
  return (
    <>
      <div className="all-page-container">
        <div className="logo-empty-space">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <div className="initial-box">
          <h1>LOGIN</h1>
          <form className="form-container">
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
              ¡Login!
            </button>
          </form>
        </div>
        <div className="simple-page-changer-container">
          <span>¿Aún no tienes una cuenta?</span>
          <button type="button" className="btn btn-secondary" id="form-btn">
            signup
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default LoginPage;
