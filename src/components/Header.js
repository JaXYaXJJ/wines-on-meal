import "./Header.css";

function Header(props) {
    return (
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand text-light mx-5" href="#">
            <i className="bi bi-droplet-half"></i>
            {props.name}
          </a>
        </div>
      </nav>
    );
  }
  
  export default Header;