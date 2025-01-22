import { Link } from "react-router-dom";
import logo from "../assets/Logo-removebg.png";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <div className="home-page-container">
        <nav class="navbar navbar-expand-lg bg-info">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Beaglo
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/login">
                    Login
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/signup">
                    Signup
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="first-section">
          <img src={logo} alt="Logo" id="main-logo" />
        </section>
        <section className="second-section">
          <h2>Haz parte de la familia de viajeros de Beaglo</h2>
          <h3>Y conectate con el mundo</h3>
          <div class="d-grid gap-2 col-6 mx-auto">
            <Link to="/login">
              <button class="btn btn-outline-light" type="button">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button class="btn btn-outline-light" type="button">
                Signup
              </button>
            </Link>
          </div>
        </section>
        <div className="footer-section">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default HomePage;
