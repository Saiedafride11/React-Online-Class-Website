import React from "react";
import './Header.css';
import BannerImg from '../../img/banner-img.jpeg'

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          SHINE <span className="text-success">CODERS</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">

            <li className="nav-item active mr-2">
            <input className="form-control mr-sm-2 search-box" type="search" placeholder="What you want to learn..."></input>
            </li>

            <li className="nav-item active mr-2">
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </li>

            <li className="nav-item active mr-2">
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Log In</button>
            </li>

            <li className="nav-item mr-2">
            <button className="btn btn-success my-2 my-sm-0" type="submit">Sign Up</button>
            </li>
          </ul>
        </div>
      </nav>

      <div className="banner-img">
      <img src={BannerImg} alt=""/>
      </div>
        
      
    </div>
  );
};

export default Header;
