import "./Header.css";
import { Link } from 'react-router-dom';

function Header(props) {
    return (
      <nav className="navbar">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand text-light mx-5" href="#">
            <i className="bi bi-droplet-half"></i>
            {props.name}
          </Link>

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to='/pricing' className='nav-link'>
                Pricing
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Header;