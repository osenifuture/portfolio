import { Link } from "react-scroll";
import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Download from "../Routes/Download";


export default class Fade extends Component {
    render() {
      const settings = {
        dots: false,
        fade: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div className="homeslider-container">
          
          <Slider {...settings} className="home-slide">
            <div className="home-slider">
        <h4><span>HELLO,</span> THIS IS WASIU </h4>
            <h1><span>CRE</span>ATIVE <span>SOFTWARE ENG</span>INEER</h1>
        <div className="home-button">

          <button onClick={Download}>DOWNLOAD RESUME</button>
        </div>
            </div>
            
            <div className="home-slider">
            <h4><span>WEB DESI</span>GN AND DEVELOPMENT</h4>
        <h1><span>Hi </span>,  am <span>Wasiu</span>, <span>th</span>is is my <span>fa</span>vourite work </h1>
        <div className="home-button">
            <button onClick={Download}>DOWNLOAD RESUME</button>
          <Link to="contact" >Hire me</Link>
        </div>
            </div>
          </Slider>
        </div>
      );
    }
  }