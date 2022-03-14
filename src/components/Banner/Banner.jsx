import React from "react";
import Pin from "../../assets/iconos/ic_pin.png";
import Slider from "../../assets/iconos/Nav_slider.svg";
import SliderDesktop from "../../assets/iconos/nav_slider_desktop.svg";
import "./Banner.scss";

const Banner = () => {
  return (
    <header id="home" className="banner">
      <div className="banner-ctn">
        <div className="banner-info">
          <img className="banner-pin-icon" src={Pin} alt="Location Pin" />
          <h1 className="banner-title">America del Sur</h1>
        </div>
        <hr className="banner-line" />
        <div className="banner-desc">
          <h4>
            <span>Lugares maravillosos por </span>
            <span className="break-line"> America del sur</span>
          </h4>
          <p className="banner-paragraph">
            <span>
              Estos son algunos de los lugares que eligen la mayoria de los
              turistas
            </span>
            <span className="break"> que visitan America del sur</span>
          </p>
        </div>
      </div>
      <img className="banner-img" src={Slider} alt="1" />
      <img className="banner-img-desktop" src={SliderDesktop} alt="1" />
      <div className="banner-box">
        <h4>Próxima Aventura</h4>
        <p>Europa Meridional</p>
        <p>Forman parte veinte países, ej. España, Francia, etc.</p>
      </div>
    </header>
  );
};

export default Banner;
