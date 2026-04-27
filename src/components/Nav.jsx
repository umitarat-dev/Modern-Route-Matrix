// import logo from '../img/logo.png';
import designv from '../assets/designv.svg';
import { Link, NavLink } from 'react-router-dom';
function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-light custom-nav">
      {/* <div className="container-fluid"> */}
      <div className="container">

        <Link to="/" className="navbar-brand d-flex align-items-center">
          {/* <img src={logo} alt="" /> */}
          <img src={designv} alt="" className="brand-logo" />
          <span className="brand-text ms-2">UmitDev</span>
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0">
            
            <li className="nav-item ms-auto">
              <NavLink
                to="/"
                // style={({ isActive }) => ({ color: isActive && 'red' })}
                // className="nav-link active"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item ms-auto">
              <NavLink
                style={({ isActive }) => ({ color: isActive && 'red' })}
                to="/instructors"
                className="nav-link"
                aria-current="page"
              >
                Instructors
              </NavLink>
            </li>

            <li className="nav-item ms-auto">
              <NavLink
                style={({ isActive }) => ({ color: isActive && 'red' })}
                to="/paths"
                className="nav-link"
                aria-current="page"
              >
                Paths
              </NavLink>
            </li>
            
            <li className="nav-item ms-auto">
              <NavLink
                style={({ isActive }) => ({ color: isActive && 'red' })}
                to="/contact"
                className="nav-link"
                aria-current="page"
              >
                Contact
              </NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
