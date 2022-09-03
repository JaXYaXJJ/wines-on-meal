import "./Header.css";
import { Link } from 'react-router-dom';

function Header(props) {
    function logoClickReset() {
      // alert("header" + wineTypeHeader);
      props.resetChdToPerents('All', "Category");
    }

    return (
      <nav className="navbar">
        <div className="container">
          <Link to='/' className="navbar-brand text-light" onClick={() => logoClickReset()}>
            <i className="bi bi-droplet-half"></i>
            {props.name}
          </Link>

          <ul className="navbar-nav flex-row">
            <li className="nav-item me-3">
              <Link to='/pricing' className='nav-link text-light'>
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/orders' className='nav-link text-light'>
                View Orders
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Header;