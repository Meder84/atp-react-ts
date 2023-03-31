import './header.css';
import logo from '../../images/logo.png';

function Header() {
  return (
    <header className="header">
        <a href="#">
          <img
            src={logo}
            alt="Герб Кыргызской Республики"
            className="logo header__logo header__logo_type_desktop"
          />
          <img
            // src={logoMobile}
            alt="Герб Кыргызской Республики"
            className="logo header__logo header__logo_type_mobile"
          />
        </a>
        <nav className="header__nav">
          <ul className="header__list">
            <li>
              <a href="/#chatbot" className="header__link">
                Домой
              </a>
            </li>
            <li>
              <a href="/#vacancy" className="header__link">
                О нас
              </a>
            </li>
            <li>
              <a href="/#description" className="header__link">
                Аренда авто
              </a>
            </li>
            <li>
              <a href="/#faq" className="header__link">
                Ремонт авто
              </a>
            </li>
            <li>
              <a href="/#faq" className="header__link">
                Галерея
              </a>
            </li>
            <li>
              <a href="/#faq" className="header__link">
                Контакты
              </a>
            </li>
          </ul>
        </nav>
    </header>
  );
}







export default Header;
