import './styles/footerScreen.css'

const FooterScreen = () => {
  return (
    <footer className="footer">
      <p className='footer__text'>Universidad Europea | 2022</p>
      <ul className="redes">
        <li className="redes__items">
          <a href="https://www.facebook.com/UniversidadEuropeaIztapalapa" className="redes__links" target={'__blank'}>
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li>
        <li className="redes__items">
          <a href="https://universidadeuropea.edu.mx/" className="redes__links" target={'__blank'}>
            <i className="fa-solid fa-globe"></i>
          </a>
        </li>
        <li className="redes__items">
          <a href="https://www.instagram.com/universidadeuropeamexico/?igshid=1mw6pq80iiacw" className="redes__links" target={'__blank'}>
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default FooterScreen;
