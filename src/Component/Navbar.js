import { useState } from "react";
import { Link } from "react-router-dom";
import Clock from "react-digital-clock";
import "./nav.css";
function Navbar(props) {
  let t = new Date().toLocaleTimeString();
  const [time, setTime] = useState(t);

  const updateTime = () => {
    t = new Date().toLocaleTimeString();
    setTime(t);
  };

  setInterval(updateTime, 1000);
  let myStyle = {    
    color: props.mode === 'dark' ? 'white' : "black",
    font: 15,
  };
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-inverse navbar-fixed-top bg-${props.mode} text-${props.mode}`}
      >
        <div className="container-fluid">
          {/* <Link className="navbar-brand" href="/">MR.D</Link> */}
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item" style={myStyle}>
                {/* <h4>{time}</h4> */}
                <Clock />
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/">Home</Link>
                {/* <a className="nav-link active" aria-current="page" href="/home">Home</a> */}
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="nav-item">
                <button className="btn btn-success">
                  <Link to="/login">
                    <span>Login</span>
                  </Link>
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-success mx-3" type="submit">
                  <Link to="/signup">
                    <span>Sign Up</span>
                  </Link>
                </button>
              </li>
              <li className="nav-item pt-2">
                <div
                  className={`form-check form-switch text-${
                    props.mode === "light" ? "dark" : "light"
                  }`}
                >
                  <input
                    className="form-check-input"
                    onClick={() => {
                      props.toggleMode(null);
                    }}
                    type="checkbox"
                    id="switch"
                  />
                  <label className="form-check-label" htmlFor="switch">
                    {`${props.mode}`} Mode
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
