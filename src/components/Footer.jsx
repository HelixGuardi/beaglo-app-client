import GitHub from "../assets/github-icon.svg"
import Linkedin from "../assets/linkedin-logo.png"

function Footer() {
  return (
    <div className="footer-container">
      <h5 id="reserved-rights-txt">© 2025 Beaglo. Todos los derechos reservados.</h5>
      <span>Síguenos en nuestras redes sociales para más actualizaciones y conecta con otros viajeros. ¿Interesado en cómo construimos Beaglo? Explora nuestro código fuente en el repositorio oficial.</span>
      <div className="auth-link">
          <a href="https://github.com/HelixGuardi"><img src={GitHub} alt="GitHub Icon" id="github-icon-link" /></a>
          <a href="https://linkedin.com/in/victorhugo-dev"><img src={Linkedin} alt="Linkedin Icon" id="linkedin-icon-link"/></a>
      </div>
    </div>
  );
}

export default Footer;
