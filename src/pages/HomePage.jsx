import { Link } from "react-router-dom";
import Footer from "../components/Footer"
import logo from "../assets/Logo-removebg.png";
import smartPhonePrev from "../assets/smartphone-prev-removebg-preview.png"

function HomePage() {
  return (
    <>
      <div className="home-page-container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Beaglo
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/login">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/signup">
                    Signup
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-primary" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>

        <section className="first-section">
          <img src={logo} alt="Logo" id="main-logo" />
        </section>
        <section className="second-section">
          <div className="smartphone-img-prev-container">
            <img src={smartPhonePrev} alt="smartphone preview" />
          </div>
          <div className="join-us-container">
            <h2>Forma parte de una comunidad que viaja, conecta e inspira al mundo.</h2>
            <div className="join-us-btn-container">
            <Link to="/signup">
              <button type="button" className="btn btn-primary">¡Crea tu cuenta!</button>
            </Link>
            <Link to="/login">
              <button type="button" className="btn btn-secondary">¿Ya tienes cuenta?</button>
            </Link>
            </div>
          </div>
        </section>
        <footer>
          <Footer/>
        </footer>
      </div>
    </>
  );
}

export default HomePage;
