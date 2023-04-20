import { Link } from "react-router-dom";


const Navbar = (props) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark `} style={{background : props.mode === 'light' ? '#087308' : '#bb1919'}}>
      <div className="container">
        <Link className="navbar-brand  fw-bold" to="/">
          Text Utils
        </Link>
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
              <Link className="nav-link active " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/about">
                About
              </Link>
            </li>
          </ul>
          <div className="d-flex gap-2 me-3 my-3">
            <div className="bg-warning rounded-circle"onClick={() => props.click('warning')} style={{height: "30px", width: "30px"}}></div>
            <div className="bg-success rounded-circle"onClick={() => props.click('success')} style={{height: "30px", width: "30px"}}></div>
            <div className="bg-primary rounded-circle"onClick={() => props.click('primary')} style={{height: "30px", width: "30px"}}></div>
            <div className="bg-danger rounded-circle"onClick={() => props.click('danger')} style={{height: "30px", width: "30px"}}></div>
          </div>
        </div>
        <div className={`form-check form-switch text-white`} onClick={() => props.click(null)}>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label text-white" htmlFor="flexSwitchCheckDefault">
            {props.modeName}
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

