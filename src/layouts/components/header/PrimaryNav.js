import {
  FaSearch,
  FaUserCircle,
  FaUserCog,
  FaAngleDown,
  FaPhoneVolume,
  FaEnvelope,
} from 'react-icons/fa';
import logo from '../../../assets/images/logo/logo-1.png';

function PrimaryNav() {
  return (
    <nav className="primary-nav primary-nav-wrapper--border">
      <div className="container">
        {/*====== Primary Nav ======*/}
        <div className="primary-nav">
          {/*====== Main Logo ======*/}
          <a className="main-logo">
            <img src={logo} alt="" />
          </a>
          {/*====== End - Main Logo ======*/}
          {/*====== Search Form ======*/}
          <form className="main-form">
            <label htmlFor="main-search" />
            <input
              className="input-text input-text--border-radius input-text--style-1"
              type="text"
              id="main-search"
              placeholder="Search"
            />
            <FaSearch className="btn btn--icon main-search-button" />
          </form>
          {/*====== End - Search Form ======*/}
          {/*====== Dropdown Main plugin ======*/}
          <div
            className="menu-init"
            id="navigation"
            style={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <button
              className="btn btn--icon toggle-button fas fa-cogs"
              type="button"
            />
            {/*====== Menu ======*/}
            <div className="ah-lg-mode">
              <span className="ah-close">✕ Close</span>
              {/*====== List ======*/}
              <ul className="ah-list ah-list--design1 ah-list--link-color-secondary">
                <li
                  className="has-dropdown"
                  data-tooltip="tooltip"
                  data-placement="left"
                  title="Account"
                >
                  <a>
                    <FaUserCircle />
                  </a>
                  {/*====== Dropdown ======*/}
                  <span className="js-menu-toggle" />
                  <ul style={{ width: '120px' }}>
                    <li>
                      <a hrefLang="dashboard.html">
                        <i className="fas fa-user-circle u-s-m-r-6" />
                        <span>Account</span>
                      </a>
                    </li>
                    <li>
                      <a hrefLang="signup.html">
                        <i className="fas fa-user-plus u-s-m-r-6" />
                        <span>Signup</span>
                      </a>
                    </li>
                    <li>
                      <a hrefLang="signin.html">
                        <i className="fas fa-lock u-s-m-r-6" />
                        <span>Signin</span>
                      </a>
                    </li>
                    <li>
                      <a hrefLang="signup.html">
                        <i className="fas fa-lock-open u-s-m-r-6" />
                        <span>Signout</span>
                      </a>
                    </li>
                  </ul>
                  {/*====== End - Dropdown ======*/}
                </li>
                <li
                  className="has-dropdown"
                  data-tooltip="tooltip"
                  data-placement="left"
                  title="Settings"
                >
                  <a>
                    <FaUserCog />
                  </a>
                  {/*====== Dropdown ======*/}
                  <span className="js-menu-toggle" />
                  <ul style={{ width: '120px' }}>
                    <li className="has-dropdown has-dropdown--ul-right-100">
                      <a>
                        Language
                        <FaAngleDown className="u-s-m-l-6" />
                      </a>
                      {/*====== Dropdown ======*/}
                      <span className="js-menu-toggle" />
                      <ul style={{ width: '120px' }}>
                        <li>
                          <a className="u-c-brand">ENGLISH</a>
                        </li>
                        <li>
                          <a>ARABIC</a>
                        </li>
                        <li>
                          <a>FRANCAIS</a>
                        </li>
                        <li>
                          <a>ESPANOL</a>
                        </li>
                      </ul>
                      {/*====== End - Dropdown ======*/}
                    </li>
                    <li className="has-dropdown has-dropdown--ul-right-100">
                      <a>
                        Currency
                        <FaAngleDown className="u-s-m-l-6" />
                      </a>
                      {/*====== Dropdown ======*/}
                      <span className="js-menu-toggle" />
                      <ul style={{ width: '225px' }}>
                        <li>
                          <a className="u-c-brand">$ - US DOLLAR</a>
                        </li>
                        <li>
                          <a>£ - BRITISH POUND STERLING</a>
                        </li>
                        <li>
                          <a>€ - EURO</a>
                        </li>
                      </ul>
                      {/*====== End - Dropdown ======*/}
                    </li>
                  </ul>
                  {/*====== End - Dropdown ======*/}
                </li>
                <li
                  data-tooltip="tooltip"
                  data-placement="left"
                  title="Contact"
                >
                  <a hrefLang="tel:+0900901904"></a>
                  <FaPhoneVolume />
                </li>
                <li data-tooltip="tooltip" data-placement="left" title="Mail">
                  <a hrefLang="mailto:contact@domain.com">
                    <FaEnvelope />
                  </a>
                </li>
              </ul>
              {/*====== End - List ======*/}
            </div>
            {/*====== End - Menu ======*/}
          </div>
          {/*====== End - Dropdown Main plugin ======*/}
        </div>
        {/*====== End - Primary Nav ======*/}
      </div>
    </nav>
  );
}
export default PrimaryNav;
